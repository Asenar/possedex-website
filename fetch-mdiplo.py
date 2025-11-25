#!/usr/bin/python3
import collections
import csv
import json
import re
import requests
import unicodedata

show_error_old_data = False
show_no_id_found = False

file_medias = 'medias.tsv'
file_organisations = 'organisations.tsv'
file_personnes = 'personnes.tsv'
file_relations_org_media = 'organisation-media.tsv'
file_relations_org_org = 'organisation-organisation.tsv'
file_relations_personne_media = 'personne-media.tsv'
file_relations_personne_org = 'personne-organisation.tsv'
file_base = 'urls.tsv'
file_owners = 'owners.tsv'
file_decodex = 'decodex.json'

# {{{ quelques definitions
class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def downloadData(url, filename):
    response = requests.get(url)
    response.encoding = 'UTF-8'
    assert response.status_code == 200, f"Échec du téléchargement de {url}"
    with open(filename, 'w', newline='\n', encoding="utf-8") as text_file:
        text_file.write(response.text)
        text_file.close()

def strip_accents(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s)
            if unicodedata.category(c) != 'Mn')

def slugify(value):
    """
    Normalizes string, converts to lowercase, removes non-alpha characters,
    and converts spaces to hyphens.
    """
    return re.sub('[^a-zA-Z0-9.]+', '-', strip_accents(value).lower())

def idFromNom(db, nom):
    for id in db:
        row = db[id]
        if row['nom'] == nom:
            return int(id)

        if re.search(f'^{row["nom"]}$', nom, flags=re.IGNORECASE|re.UNICODE):
            return int(id)

        if slugify(row['nom']) == slugify(nom):
            return int(id)
    if show_no_id_found:
        print("RIEN TROUVÉ pour ", nom)

    return -2
# }}}

downloadData('https://raw.githubusercontent.com/mdiplo/Medias_francais/master/medias.tsv', file_medias)
downloadData('https://raw.githubusercontent.com/mdiplo/Medias_francais/master/organisations.tsv', file_organisations)
downloadData('https://raw.githubusercontent.com/mdiplo/Medias_francais/master/personnes.tsv', file_personnes)
downloadData('https://raw.githubusercontent.com/mdiplo/Medias_francais/master/organisation-media.tsv', file_relations_org_media)
downloadData('https://raw.githubusercontent.com/mdiplo/Medias_francais/master/organisation-organisation.tsv', file_relations_org_org)
downloadData('https://raw.githubusercontent.com/mdiplo/Medias_francais/master/personne-media.tsv', file_relations_personne_media)
downloadData('https://raw.githubusercontent.com/mdiplo/Medias_francais/master/personne-organisation.tsv', file_relations_personne_org)
#### anciens formats:
#### base des relations medias / proprietaires ####
# {{{
# relations_medias: contient les relations entre les entites :
#  0 - origine
#  1 - valeur ([origine] possede [cible] a [valeur] %)
#  2 - cible
#  3 - source
#  4 - datePublication
#  5 - dateConsultation
# }}}
# relations medias / proprietaires: contient les informations sur les proprietaires
# {{{
# ce fichier contient les informations sur les proprietaires
# 0 - nom
# 1 - typeLibelle
# 2 - typeCode
# 3 - rangChallenges
# 4 - mediaType
# 5 - mediaPeriodicite
# 6 - mediaEchelle
# 7 - commentaire
# }}}

#### base des urls des medias ####
# {{{
file_base = 'base.tsv'
# ce fichier contient les informations sur les proprietaires
#  1 - Média
#  2 - description
#  3 - Possedex
#  4 - dernière modif (automatique)
###### +
#  5 - Propriétaire 1
#  6 - Fortune 1
#  7 - Marque 1
#  8 - secteur1
#  9 - Propriétaire 2
# 10 - Fortune 2
# 11 - Marque 2
# 12 - secteur 2
# 13 - Propriétaire 3
# 14 - Fortune 3
# 15 - Marque 3
# 16 - secteur 3
# 17 - Subventions
# 18 - Pub
# 19 - Sources
# 20 - Adresse 1
# 21 - Adresse 2
# 22 - Adresse 3
# 23 - Adresse 4
# 24 - Adresse 5
downloadData(url_base, file_base)
# }}}

#### base des infos proprietaires ####
# {{{
# ce fichier contient les informations sur les proprietaires
#  1 - Nom
#  2 - Fortune
#  3 - Marque
#  4 - Secteur d'activite
#  5 - Description
downloadData(url_owners, file_owners)
# }}}

# }}} recuperations des donnees


# {{{ Initialisation de la base de données
database = collections.OrderedDict()
database['objets'] = collections.OrderedDict()
database['sites'] = collections.OrderedDict()
database['urls'] = collections.OrderedDict()
# }}}

# {{{ Lecture des médias
with open(file_medias, mode='r', encoding='utf-8') as f:
    reader = csv.DictReader(f, delimiter='\t')
    for row in reader:
        obj_id = int(row['id']) if 'id' in row else len(database['objets']) + 1
        database['objets'][obj_id] = {
            "id": obj_id,
            "nom": row['Nom'],
            "slug": slugify(row['Nom']),

            "type": 3,
            "typeLibelle": "Média", # à vérifier
            # "fortune"     : row[col_fortune],
            # "challenges"  : row[col_challenges],
            # "forbes"      : row[col_forbes],
            # "type_media" : 


            "periodicite": row.get('Periodicite', ''),
            "echelle": row.get('Echelle', ''),
            "commentaire": row.get('commentaire', ''),
            "possedex": {},

            "possessions": [],
            "urls": [],
            "est_possede": [],
        }
# }}}

# {{{ Lecture des organisations
with open(file_organisations, mode='r', encoding='utf-8') as f:
    reader = csv.DictReader(f, delimiter='\t')
    for row in reader:
        obj_id = int(row['id']) if 'id' in row else len(database['objets']) + 1
        database['objets'][obj_id] = {
            "id": obj_id,
            "nom": row['nom'],
            "type": 2,
            "typeLibelle": "Personne morale",
            "slug": slugify(row['nom']),
            "urls": [],
            "possedex": {},
            "possessions": [],
            "est_possede": [],
            "commentaire": row.get('commentaire', ''),
        }
# }}}

# {{{ Lecture des personnes
with open(file_personnes, mode='r', encoding='utf-8') as f:
    reader = csv.DictReader(f, delimiter='\t')
    for row in reader:
        obj_id = int(row['id']) if 'id' in row else len(database['objets']) + 1
        database['objets'][obj_id] = {
            "id": obj_id,
            "nom": row['Nom'],
            "type": 1,
            "typeLibelle": "Personne physique",
            "slug": slugify(row['Nom']),
            "urls": [],
            "possedex": {
                "fortune": row.get('milliardaireForbes2024', ''),
                "activite": row.get('Secteur', ''),
                "marque": row.get('Marque', ''),
                "desc": row.get('Description', ''),
            },
            "possessions": [],
            "est_possede": [],
            "challenges": row.get('rangChallenges2024', ''),
            "forbes": row.get('milliardaireForbes2024', ''),
        }
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

# {{{ Lecture des URLs (urls.tsv)
with open(file_base, mode='r', encoding='utf-8') as f:
    reader = csv.reader(f, delimiter='\t')
    for row in reader:
        if len(row) < 2 or row[0] in ['Média', 'exemple lien capital']:
            continue
        nom = row[0]
        id = idFromNom(database['objets'], nom)
        if id != -2:
            urls = []
            for i in range(20, len(row)):
                if row[i]:
                    urls.append(row[i])
            database['objets'][id]['urls'] = urls

            database['objets'][id]['possedex'] = {
                "classement": row[2],
                "decodex": 0,
                "desc": row[1],
                "nom": nom,
                "pub": row[16],
                "slug": slugify(nom),
                "sources": row[17],
                "subventions": row[15],
                "updated": row[3],
            }
# }}}

with open('docs/db.json', 'w', newline='\n', encoding="utf-8") as outfile:
    json.dump({"objets": database['objets']}, outfile, indent=4, ensure_ascii=False)

print(bcolors.OKGREEN + "Données écrites dans docs/db.json" + bcolors.ENDC)
