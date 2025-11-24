#!/usr/bin/python3
import collections
import csv
import json
import re
import unicodedata

show_error_old_data = False
show_no_id_found = False

# Fichiers locaux (à placer dans le même dossier que le script)
file_medias = 'medias.tsv'
file_organisations = 'organisations.tsv'
file_personnes = 'personnes.tsv'
file_relations_org_media = 'organisation-media.tsv'
file_relations_org_org = 'organisation-organisation.tsv'
file_relations_personne_media = 'personne-media.tsv'
file_relations_personne_org = 'personne-organisation.tsv'
file_base = 'urls.tsv'  # À adapter si nécessaire
file_decodex = 'decodex.json'  # À adapter si nécessaire

# {{{ Fonctions utilitaires (inchangées)
class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def strip_accents(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s)
            if unicodedata.category(c) != 'Mn')

def slugify(value):
    return re.sub('[^a-zA-Z0-9.]+', '-', strip_accents(value).lower())

def idFromNom(db, nom):
    for id in db:
        row = db[id]
        if row['nom'] == nom:
            return int(id)
        if re.search('^'+row['nom']+'$', nom, flags=re.IGNORECASE|re.UNICODE):
            return int(id)
        if slugify(row['nom']) == slugify(nom):
            return int(id)
    if show_no_id_found:
        print("RIEN TROUVÉ pour ", nom)
    return -2
# }}}

# {{{ Initialisation de la base de données
database = collections.OrderedDict()
database['objets'] = collections.OrderedDict()
database['sites'] = collections.OrderedDict()
database['urls'] = collections.OrderedDict()
# }}}

# {{{ Lecture des entités (medias, organisations, personnes)
def read_entities(file_path, entity_type, type_code):
    with open(file_path, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f, delimiter='\t')
        for row in reader:
            nom = row['Nom'] if 'Nom' in row else row['nom']
            obj_id = len(database['objets']) + 1
            database['objets'][obj_id] = {
                "id": obj_id,
                "nom": nom,
                "type": type_code,
                "typeLibelle": "Média" if type_code == 3 else "Personne morale" if type_code == 2 else "Personne physique",
                "slug": slugify(nom),
                "urls": [],
                "possedex": {},
                "possessions": [],
                "est_possede": [],
                "periodicite": row.get('Periodicite', ''),
                "echelle": row.get('Echelle', ''),
                "commentaire": row.get('commentaire', ''),
            }

read_entities(file_medias, "Média", 3)
read_entities(file_organisations, "Organisation", 2)
read_entities(file_personnes, "Personne", 1)
# }}}

# {{{ Lecture des relations
def read_relations(file_path):
    with open(file_path, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f, delimiter='\t')
        for row in reader:
            origine = row['origine']
            cible = row['cible']
            valeur = row['valeur']

            origine_id = idFromNom(database['objets'], origine)
            cible_id = idFromNom(database['objets'], cible)

            if origine_id != -2 and cible_id != -2:
                database['objets'][origine_id]["possessions"].append({
                    "nom": cible,
                    "valeur": valeur,
                    "source": []
                })
                database['objets'][cible_id]["est_possede"].append({
                    "nom": origine,
                    "valeur": valeur,
                    "source": []
                })

read_relations(file_relations_org_media)
read_relations(file_relations_org_org)
read_relations(file_relations_personne_media)
read_relations(file_relations_personne_org)
# }}}

# {{{ Écriture du JSON final
with open('docs/db.json', 'w', newline='\n', encoding="utf-8") as outfile:
    json.dump({"objets": database['objets']}, outfile, indent=4, ensure_ascii=False)
# }}}

print(bcolors.OKGREEN + "Données écrites dans docs/db.json" + bcolors.ENDC)
s
