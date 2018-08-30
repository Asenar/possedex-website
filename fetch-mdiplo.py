import requests
import csv
import json
import re

url_base = 'https://docs.google.com/spreadsheets/export?id=1po3WjKX15T766GYOYV8fHtve4RdlyLF6XEXBlUICib0&exportFormat=tsv&gid=0'

url_relations_medias = 'https://raw.githubusercontent.com/mdiplo/Medias_francais/master/relations_medias_francais.tsv'
url_liste_medias     = 'https://raw.githubusercontent.com/mdiplo/Medias_francais/master/medias_francais.tsv'

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

def slugify(value):
    """
    Normalizes string, converts to lowercase, removes non-alpha characters,
    and converts spaces to hyphens.
    """
    import unicodedata
    import re
    value = unicode(value.decode("utf-8"))
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore')
    value = unicode(re.sub('[^\w\s-]', '', value).strip().lower())
    value = unicode(re.sub('[-\s]+', '-', value))
    return str(value)

def idFromNom(db, nom):
    id = 0
    #print db[45]
    for i in db:
        row = db[i]
        if row['nom'] == nom:
            return id

        if re.search(nom, row['nom'], flags=re.IGNORECASE|re.UNICODE):
            return id
        id = id + 1


    print "RIEN TROUVE pour ", nom

    return -2
    raise nom, "NOT FOUND IN DB"

# }}}

# {{{ recuperations des donnees

#### base des relations medias / proprietaires ####
# {{{
file_relations = 'relations.tsv'
# ce fichier contient les relations entre les entites :
#  0 - origine
#  1 - valeur ([origine] possede [cible] a [valeur] %)
#  2 - cible
#  3 - source
#  4 - datePublication
#  5 - dateConsultation

response = requests.get(url_relations_medias)
response.encoding = 'UTF-8'
assert response.status_code == 200, 'failed to download base tsv file'
text_file = open(file_relations, 'w')
text_file.write(response.content)
text_file.close()
# }}}

#### base des medias / proprietaires ####
# {{{
file_liste_medias = 'liste_medias.tsv'
# ce fichier contient les informations sur les proprietaires
# 0 - nom
# 1 - typeLibelle
# 2 - typeCode
# 3 - rangChallenges
# 4 - mediaType
# 5 - mediaPeriodicite
# 6 - mediaEchelle
# 7 - commentaire

response = requests.get(url_liste_medias)
response.encoding = 'UTF-8'
assert response.status_code == 200, 'failed to download owner tsv file'
text_file = open(file_liste_medias, 'w')
text_file.write(response.content)
text_file.close()
# }}}

#### base des urls des medias ####
# {{{
file_urls = 'urls.tsv'
# ce fichier contient les informations sur les proprietaires
# 0 - nom
# 1 - typeLibelle
# 2 - typeCode
# 3 - rangChallenges
# 4 - mediaType
# 5 - mediaPeriodicite
# 6 - mediaEchelle
# 7 - commentaire

response = requests.get(url_base)
response.encoding = 'UTF-8'
assert response.status_code == 200, 'failed to download owner tsv file'
text_file = open(file_urls, 'w')
text_file.write(response.content)
text_file.close()
# }}}

# }}} recuperations des donnees

database = {'sites': {}, 'urls': {}, 'objets' : {}}


# {{{ objets
with open(file_liste_medias, 'rb') as tsvfile:
    reader = csv.reader(tsvfile, delimiter="\t")

    col_updated       = 99  # info manquante
    col_nom           = 0
    col_fortune       = 3  # rang Challenge
    col_marque        = 99 # info manquante
    col_secteur       = 99 # info manquante
    col_description   = 1  # indication basique (personne morale/media/personne physique)
    col_type          = 2  # typeCode, 1/2/3 ?

    # nouvelle colonnes
    col_type_media    = 4  # GPE, Television, Regional, Radio, ...
    col_periodicite   = 5  # Hebdomadaire, Bimestriel, Mensuel, ...
    col_echelle       = 6  # International, National
    col_commentaire   = 7  # Gratuit, Pure player, ...

    id = 0
    for row in reader:
        if len(row) < 4:
            continue
        id = id + 1

        if row[col_nom] == '':
            continue

        #id = row[col_nom]

        entry = {
            'nom'         : row[col_nom],
            'description' : row[col_description],
            'fortune'     : row[col_fortune],
            # a remplir dans google sheet ?
            'marque'      : '',
            'secteur'     : '',
            'updated'     : '',

            # nouvelle colonnes
            'type_media'  : row[col_type_media],
            'periodicite' : row[col_periodicite],
            'echelle'     : row[col_echelle],
            'commentaire' : row[col_commentaire],
            'possession'  : [],
            'est_possede' : [],
            'ajouts_possedex' : {}
        }

        database['objets'][id] = entry
# }}} objets
print bcolors.OKGREEN+"Nombre d'objets trouves : "+bcolors.ENDC+" ", id

# {{{ ancienne base
# 1) Reconstruire le tableau indexe sur le nom
# 2) en deduire l'id
with open(file_urls, 'rb') as csvfile:
    # {{{ colonnes
    col_nom           = 0
    col_desc          = 1
    col_possedex      = 2

    col_updated       = 3

    col_proprietaire1 = 4
    col_fortune1      = 5
    col_marque1       = 6
    col_influence1    = 7

    col_proprietaire2 = 8
    col_fortune2      = 9
    col_marque2       =10
    col_influence2    =11

    col_proprietaire3 =12
    col_fortune3      =13
    col_marque3       =14
    col_influence3    =15

    col_subventions  = 16
    col_pub          = 17
    col_sources      = 18

    col_urls         = 19 # colonne de la 1ere url
    # }}} colonnes
    url_count = 0;
    reader = csv.reader(csvfile, delimiter="\t")
    #reader = csv.reader(csvfile, delimiter="\t", quotechar='"')
    num_row = 0
    for row in reader:
        try:
            id = -1
            if len(row) < 4:
                continue
            num_row = num_row + 1
            if num_row == 1:
                continue
            if re.search('^exemple ', row[col_nom]) or re.search('^0$', row[col_nom]):
                print bcolors.OKBLUE+"On ignore le nom <"+row[col_nom]+">"+bcolors.ENDC
                continue
            if re.search('^$', row[col_nom]):
                print bcolors.OKBLUE+"On ignore le nom vide"+bcolors.ENDC
                continue
            # {{{ anciennes donnees
            entry = {}
            classement = 'zzz'
            entry['nom'] = row[col_nom]                     # 0  - Nom
            entry['desc'] = row[col_desc]                   # 1  - Description
            entry['slug'] = slugify(row[col_nom])           # 2  - Nom normalise
            entry['classement'] = classement                # 3  - Notre note
            entry['udpated'] = row[col_updated]             # 4  - updated

            entry['pub'] = row[col_pub]                    # 5  - Pub ?
            entry['subventions'] = (row[col_subventions])            # 6  - subventions

            entry['sources'] = (row[col_sources])                # 7 - Sources

            entry['proprietaire1'] = row[col_proprietaire1];          # 8
            entry['fortune1']      = row[col_fortune1];               # 9
            entry['marque1']       = row[col_marque1];                # 10
            entry['influence1']    = row[col_influence1];             # 11

            entry['proprietaire2'] = row[col_proprietaire2];          # 12
            entry['fortune2']      = row[col_fortune2];               # 13
            entry['marque2']       = row[col_marque2];                # 14
            entry['influence2']    = row[col_influence2];             # 15

            entry['proprietaire3'] = row[col_proprietaire3];          # 17
            entry['fortune3']      = row[col_fortune3];               # 18
            entry['marque3']       = row[col_marque3];                # 19
            entry['influence3']    = row[col_influence3];             # 20

            #print "On commence a chercher "+row[col_nom]
            id = idFromNom(database['objets'], row[col_nom])
            #print "On a fini la recherche"

            database['objets'][id]['ajouts_possedex'] = entry
            #print bcolors.OKGREEN +"le nom <"+row[col_nom]+"> de googlesheet est bien dans la db[objets]" +bcolors.ENDC, id

            # }}} anciennes donnees
        except:
            #print bcolors.WARNING +"le nom <"+row[col_nom]+"> est introuvable dans la db[objets]" +bcolors.ENDC, id
            #    raise row[col_nom], "STOOOP"

            continue
            #continue

        # {{{ on recupere les urls
        # medias_urls[row[col_nom]] = []

        for i in range(col_urls, len(row)-1):
            url_count = url_count+1;
            url = row[i]
            url = url.rstrip('/')
            url = url.rstrip('\n')
            url = url.rstrip(' ')

            #if url:
            #    if (i == col_urls):
            #        media = {'url' : url, 'nom' : row[col_nom]}
            #        if (row[col_proprietaire1]
            #            and database['proprietaires'][row[col_proprietaire1]]
            #            and media not in database['proprietaires'][row[col_proprietaire1]]['possession']):
            #            database['proprietaires'][row[col_proprietaire1]]['possession'].append(media)
            #        if (row[col_proprietaire2]
            #            and database['proprietaires'][row[col_proprietaire2]]
            #            and media not in database['proprietaires'][row[col_proprietaire2]]['possession']):
            #            database['proprietaires'][row[col_proprietaire2]]['possession'].append(media)
            #        if (row[col_proprietaire3]
            #            and database['proprietaires'][row[col_proprietaire3]]
            #            and media not in database['proprietaires'][row[col_proprietaire3]]['possession']):
            #            database['proprietaires'][row[col_proprietaire3]]['possession'].append(media)

            url = re.sub(r'^https?:\/\/(www)?', '', url)

            if url:
                # medias_urls[url] = row[col_nom]
                #database['urls'][url] = idFromNom(database['objets'], row[col_nom])
                database['urls'][url] = id
        # }}} on recupere les urls
# }}} ancienne base
print bcolors.OKGREEN+"Nombre d'url trouvees : "+bcolors.ENDC+" ", url_count

# {{{ relations
with open(file_relations, 'rb') as tsvfile:
    id = 0

    col_origine           = 0
    col_valeur            = 1
    col_cible             = 2
    col_source            = 3 # source de l'information
    col_date_publication  = 4
    col_date_consultation = 5

    relations_count = 0;
    reader = csv.reader(tsvfile, delimiter="\t")
    for row in reader:
        if len(row) < 4:
            continue
        id = id + 1
        if id == 1:
            continue
        entry = []
        classement = 'zzz'

        entry.append(row[col_origine])                # 0  - Nom
        #entry.append(row[col_desc])                  # 1  - Description
        entry.append(slugify(row[col_origine]))       # 2  - Nom normalise
        entry.append(classement)                      # 3  - Notre note
        entry.append(row[col_date_consultation])      # 4  - updated

        # database['sites'][id] = entry
        database['sites'][row[col_nom]] = entry

        sources = row[col_source]
        if sources:
            #if re.search(' et ', sources):
            result = re.split(' et |,', sources)
            #print "length result = ", len(result)

            for source in result:
                #print "Pour <"+urls+">, traitement de ", source
                relations_count = relations_count+1;
                #source = result[i]
                #source = source.rstrip('/')
                #source = source.rstrip('\n')
                source = source.strip(' ')
                #print bcolors.OKBLUE+ " - Ajoutons une entree "+bcolors.ENDC+" "
                #print "origine:"+row[col_origine]
                #print "cible  :"+row[col_cible]
                #print "source:"+source
                relation = {
                        'nom'    : row[col_origine],
                        'valeur' : row[col_valeur],
                        'source' : source
                        }
                try:
                    # OUPS ici
                    idOrig = idFromNom(database['objets'], row[col_origine])
                    if row[col_cible] and database['objets'][idOrig]:
                        if relation not in database['objets'][idOrig]['possession']:
                            database['objets'][idOrig]['possession'].append(relation)

                    idCible = idFromNom(database['objets'], row[col_cible])
                    #print "PROBLEME?"
                    #print "row[col_origine]=", row[col_origine]

                    #print "idCible=", idCible
                    #print "database[objets][idCible]=", database['objets'][idCible]
                    #print "-----"
                    if row[col_origine] and database['objets'][idCible]:
                        if relation not in database['objets'][idCible]['est_possede']:
                            database['objets'][idCible]['est_possede'].append(relation)
                except:
                    print "[[[[EXCEPTION]]]]"
                    print "row col_cible = "+row[col_cible]
                    print "row col_origine = "+row[col_origine]
                    print row
                    raise

# }}} relations
print bcolors.OKGREEN+"Nombre de relations : "+bcolors.ENDC+" ", relations_count



with open('docs/mdiplo.json', 'wb') as outfile:
    json.dump(database, outfile, indent=4)

