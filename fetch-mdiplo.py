#!/usr/bin/python3
import collections
import csv
import json
import re
import requests
import unicodedata

show_error_old_data = False
show_no_id_found = False

url_base = 'https://docs.google.com/spreadsheets/export?id=1po3WjKX15T766GYOYV8fHtve4RdlyLF6XEXBlUICib0&exportFormat=tsv&gid=0'
file_base = 'urls.tsv'

url_owners = 'https://docs.google.com/spreadsheets/export?id=1po3WjKX15T766GYOYV8fHtve4RdlyLF6XEXBlUICib0&exportFormat=tsv&gid=1970270275'
file_owners = 'owners.tsv'

url_relations_medias = 'https://raw.githubusercontent.com/mdiplo/Medias_francais/master/relations_medias_francais.tsv'
file_relations = 'relations.tsv'

url_liste_medias     = 'https://raw.githubusercontent.com/mdiplo/Medias_francais/master/medias_francais.tsv'
file_liste_medias = 'liste_medias.tsv'

url_decodex = 'https://www.lemonde.fr/webservice/decodex/updates'
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
    assert response.status_code == 200, 'failed to download '+url
    text_file = open(filename, 'w', newline='\n', encoding="utf-8")
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
    # id = 0

    for id in db:
        row = db[id]
        if row['nom'] == nom:
            return int(id)

        if re.search('^'+row['nom']+'$', nom, flags=re.IGNORECASE|re.UNICODE):
            return int(id)

        if slugify(row['nom']) == slugify(nom):
            return int(id)

    if show_no_id_found:
        print("RIEN TROUVE pour ", nom)

    return -2

# }}}

# {{{ recuperations des donnees
database = collections.OrderedDict()

#### base des relations medias / proprietaires ####
# {{{
# ce fichier contient les relations entre les entites :
#  0 - origine
#  1 - valeur ([origine] possede [cible] a [valeur] %)
#  2 - cible
#  3 - source
#  4 - datePublication
#  5 - dateConsultation
downloadData(url_relations_medias, file_relations)

# }}}

#### base des medias / proprietaires ####
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
downloadData(url_liste_medias, file_liste_medias)
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


database['objets']    = collections.OrderedDict()
database['sites']     = collections.OrderedDict()
database['urls']      = collections.OrderedDict()

# {{{ decodex official database (for decodex score and description)
decodex_db   = collections.OrderedDict()
downloadData(url_decodex, file_decodex)
with open(file_decodex, 'r', encoding="utf-8") as jsonfile:
    decodex_data = json.load(jsonfile)
    for decodex_url in decodex_data['urls']:
        decodex_id = decodex_data['urls'][decodex_url]
        decodex_db[decodex_url] = collections.OrderedDict({
            'note' : decodex_data['sites'][str(decodex_id)][0],
            'desc' : decodex_data['sites'][str(decodex_id)][1],
        })
# }}}


# {{{ objets
with open(file_liste_medias, 'r', encoding="utf-8") as tsvfile:
    reader = csv.reader(tsvfile, delimiter="\t")

    col_id            = 0
    col_nom           = 1
    col_typeLibelle   = 2  # indication basique (personne morale/media/personne physique/etat)
    col_type          = 3  # typeCode, 1/2/3/4 ?
    col_fortune       = 4  # rang Challenge
    col_challenges    = 4  # rang Challenge
    col_forbes        = 5  # rang Forbes

    # nouvelle colonnes
    col_type_media    = 6  # GPE, Television, Regional, Radio, ...
    col_periodicite   = 7  # Hebdomadaire, Bimestriel, Mensuel, ...
    col_echelle       = 8  # International, National
    col_commentaire   = 9  # Gratuit, Pure player, ...

    id = 0
    for row in reader:
        if len(row) < 4:
            continue
        # id = row[col_id]
        id = id + 1

        if row[col_nom] == '':
            continue

        if row[col_id] == 'Patrick Drahi':
            print("PATRIIIIICK")
            show_all = True
        #else:
        #    show_all = False

        if row[col_id] == 'id':
            continue

        mdiplo_id = int(row[col_id])

        entry = collections.OrderedDict({
            'id'     :  int(row[col_id]),
            'nom'    :  row[col_nom],
            'slug'   :  slugify(row[col_nom]),   # 2  - Nom normalise
            
            #if row[col_type] == '1':
            #    entry['type' ] = "Personne physique"
            #elif row[col_type] == '2':
            #    entry['type' ] = "Groupe (personne morale)"
            #elif row[col_type] == '3':
            #    entry['type' ] = "Média"
            #elif row[col_type] == '4':
            #    entry['type' ] = "État"
            #else:
            #    entry['type' ] = "Autre type: "+row[col_type]

            'type' : int(row[col_type]),
            'typeLibelle' : row[col_typeLibelle],
            #entry['description'] = row[col_description]
            'fortune'     : row[col_fortune],
            'challenges'  : row[col_challenges],
            'forbes'      : row[col_forbes],
            # nouvelle colonnes
            'type_media'  : row[col_type_media],
            'periodicite' : row[col_periodicite],
            'echelle'     : row[col_echelle],
            'commentaire' : row[col_commentaire],
            'possedex'    : {},

            'possessions' : [],
            'urls'        : [],
            'est_possede' : [],
        })

        #if show_all:
        #    print(entry)

        database['objets'][mdiplo_id] = entry
# }}} objets
print(bcolors.OKGREEN+"Nombre d'objets trouves : "+bcolors.ENDC+" ", id)

# {{{ ancienne base
# 1 - Utilisé pour les urls
# 2 - utilisé pour les conflits d'intérêts des propriétaires
with open(file_base, 'r', encoding="utf-8") as csvfile:
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
                continue
            if re.search('^$', row[col_nom]):
                continue

            id = idFromNom(database['objets'], row[col_nom])
            #except ValueError:
            #print(ValueError+"ERREUR FATALE idFromNom")
            #continue

            if id == -1:
                if show_error_old_data :
                    print(bcolors.WARNING
                            +"(-1) <"+row[col_nom]+"> est introuvable dans la db[objets] sans exception"
                            +bcolors.ENDC, id)
            elif id == -2:
                if show_no_id_found :
                    print(bcolors.WARNING
                            +"(-2) <"+row[col_nom]+"> est introuvable dans la db[objets] sans exception"
                            +bcolors.ENDC, id)
                continue

            # {{{ anciennes donnees
            entry = collections.OrderedDict()
            entry['nom'] = row[col_nom]                     # 0  - Nom
            entry['desc'] = row[col_desc]                   # 1  - Description
            entry['classement'] = row[col_possedex]         # 3  - Classement
            entry['slug'] = slugify(row[col_nom])           # 2  - Nom normalise
            entry['updated'] = row[col_updated]             # 4  - updated

            entry['pub'] = row[col_pub]                     # 5  - Pub ?
            entry['subventions'] = row[col_subventions]     # 6  - subventions

            entry['sources'] = row[col_sources]             # 7 - Sources
            #except ValueError:
            #    if show_error_old_data:
            #        print(bcolors.FAIL
            #                +ValueError
            #                +"ERRREUR fatale dans le traitement des anciennes donnees"
            #                +bcolors.ENDC, id)

            # données pas à jour pour les entités de type média (type = 3),
            # + les types 1 et 2 sont les clefs
            #entry['proprietaires'] = [
            #        row[col_proprietaire1],
            #        row[col_proprietaire2],
            #        row[col_proprietaire3]
            #        ]


            if database['objets'][id]['type'] == 1 or database['objets'][id]['type'] == 2:
                entry['fortunes'] = [
                        row[col_fortune1],
                        row[col_fortune2],
                        row[col_fortune3]
                        ]

            # @TODO : ajouter les marques dans toute la chaine proprietaire / groupe / media
            if database['objets'][id]['type'] == 1 or database['objets'][id]['type'] == 2:
                entry['marques'] = [
                        row[col_marque1],
                        row[col_marque2],
                        row[col_marque3]
                        ]

            # @TODO : ajouter les influences (intérets) dans toute la chaine proprietaire / groupe / media
            if database['objets'][id]['type'] == 1 or database['objets'][id]['type'] == 2:
                entry['influences'] = [
                    row[col_influence1],
                    row[col_influence2],
                    row[col_influence3]
                    ]

            print(bcolors.OKBLUE+"AJOUT DONNEES POSSEDEX"+bcolors.ENDC+" ", id)
            database['objets'][id]['possedex'] = entry
            #database['objets'][id]['possedex']['zzz'] = "GRRR"
            #print bcolors.OKGREEN +"le nom <"+row[col_nom]+"> de googlesheet est bien dans la db[objets]" +bcolors.ENDC, id


            # }}} anciennes donnees
        except ValueError:
            print(bcolors.FAIL
                    + ValueError
                +"Fail pour idFromNom<"+row[col_nom]+">, on saute"
                +bcolors.ENDC, id)
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
            #            and media not in database['proprietaires'][row[col_proprietaire1]]['possessions']):
            #            database['proprietaires'][row[col_proprietaire1]]['possessions'].append(media)
            #        if (row[col_proprietaire2]
            #            and database['proprietaires'][row[col_proprietaire2]]
            #            and media not in database['proprietaires'][row[col_proprietaire2]]['possessions']):
            #            database['proprietaires'][row[col_proprietaire2]]['possessions'].append(media)
            #        if (row[col_proprietaire3]
            #            and database['proprietaires'][row[col_proprietaire3]]
            #            and media not in database['proprietaires'][row[col_proprietaire3]]['possessions']):
            #            database['proprietaires'][row[col_proprietaire3]]['possessions'].append(media)

            url = re.sub(r'^https?:\/\/(www)?', '', url)

            if url:
                # medias_urls[url] = row[col_nom]
                #database['urls'][url] = idFromNom(database['objets'], row[col_nom])
                if id != -1 and id != -2:
                    database['urls'][url] = id
                    if url not in database['objets'][id]['urls']:
                        database['objets'][id]['urls'].append(url)
                if url in decodex_db:
                    database['objets'][id]['possedex']['desc'] = decodex_db[url]['desc']
                    database['objets'][id]['possedex']['decodex'] = int(decodex_db[url]['note'])
                else:
                    database['objets'][id]['possedex']['desc'] = ""
                    database['objets'][id]['possedex']['decodex'] = 0
        # }}} on recupere les urls

# }}} ancienne base
print(bcolors.OKGREEN+"Nombre d'url trouvees : "+bcolors.ENDC+" ", url_count)

# {{{ ancienne base (propriétaires)
with open(file_owners, 'r', encoding="utf-8") as csvfile:
    #  1 - Nom
    #  2 - Fortune
    #  3 - Marque
    #  4 - Secteur d'activite
    #  5 - Description
    col_nom = 1
    col_fortune = 2
    col_marque = 3
    col_activite = 4
    col_desc = 5
    reader = csv.reader(csvfile, delimiter="\t")
    #reader = csv.reader(csvfile, delimiter="\t", quotechar='"')

    for row in reader:
        if len(row) ==  0:
            continue

        id = idFromNom(database['objets'], row[col_nom])
        if (id != -2):
            database['objets'][id]['possedex']['desc'] = row[col_desc]
            database['objets'][id]['possedex']['activite'] = row[col_activite]
            database['objets'][id]['possedex']['marque'] = row[col_marque]
            database['objets'][id]['possedex']['fortune'] = row[col_fortune]
# }}} ancienne base (propriétaires)

# {{{ relations
with open(file_relations, 'r', encoding="utf-8") as tsvfile:
    id = 0

    col_id                = 0
    col_origine           = 1
    col_valeur            = 2
    col_cible             = 3
    col_source            = 4 # source de l'information
    col_date_publication  = 5
    col_date_consultation = 6

    relations_count = 0;
    reader = csv.reader(tsvfile, delimiter="\t")
    num_row = 0
    for row in reader:
        num_row = num_row + 1
        if num_row == 0:
            continue
        if len(row) == 0:
            continue


        #if row[col_origine] == 'Patrick Drahi':
        #    show_all = True
        #    print(bcolors.OKBLUE+"Patrick Drahi origine"+bcolors.ENDC+" ", num_row)
        #    print(row)
        #    print("==== IL EST LA en origine ====")
        #elif row[col_cible] == 'Patrick Drahi':
        #    show_all = True
        #    print(bcolors.OKBLUE+"Patrick Drahi cible"+bcolors.ENDC+" ", num_row)
        #    print(row)
        #    print("==== IL EST LA en cible ====")
        #else:
        #    show_all = False

        est_possede_par = {
                 'nom'    : row[col_origine],
                 'valeur' : row[col_valeur],
                 'source' : []
                 }
        possession = {
                 'nom'    : row[col_cible],
                 'valeur' : row[col_valeur],
                 'source' : []
                 }

        sources = row[col_source]
        #if show_all:
        #    print(sources)

        if sources:
            result = re.split(',', sources)

            for source in result:
                #print "Pour <"+urls+">, traitement de ", source
                relations_count = relations_count+1
                source = source.strip(' ')
                est_possede_par['source'].append(source)
                possession['source'].append(source)

            #if show_all:
            #    print(row[col_origine] + " dans est_possede_par")
            #    print(est_possede_par)
            #    print("possessions")
            #    print(possession)

        try:
            # OUPS ici
            #print ("recherche <"+row[col_origine]+">")
            idOrig = idFromNom(database['objets'], row[col_origine])

            if idOrig != -2 and idOrig != -1:
                #print ("idOrig=", idOrig)
                if row[col_cible] and database['objets'][idOrig]:

                    #if not hasattr(database['objets'][idOrig], 'possessions'):
                    #    database['objets'][idOrig]['possessions'] = []
                    if possession not in database['objets'][idOrig]['possessions']:
                        database['objets'][idOrig]['possessions'].append(possession)

            idCible = idFromNom(database['objets'], row[col_cible])
            if idCible == 120:
                print("idCible = 120 !!!!!!!!!!!!!!!!!!!!!!!!!")
                print(est_possede_par)

            if idCible != -2 and idCible != -1:
                #print ("idCible=", idCible)
                if row[col_origine] and database['objets'][idCible]:
                    #if not hasattr(database['objets'][idCible], 'est_possede'):
                    #    database['objets'][idCible]['est_possede'] = []
                    if est_possede_par not in database['objets'][idCible]['est_possede']:
                        database['objets'][idCible]['est_possede'].append(est_possede_par)
        except:
            print ("[[[[EXCEPTION]]]]"                  )
            print ("row col_cible = "+row[col_cible]    )
            print ("row col_origine = "+row[col_origine])
            print (row                                  )
            raise

# }}} relations
print(bcolors.OKGREEN+"Nombre de relations : "+bcolors.ENDC+" ", relations_count)


print(bcolors.OKBLUE+"Going to write into db.json"+bcolors.ENDC+" ")

# final write
with open('docs/db.json', 'w', newline='\n',  encoding="utf-8") as outfile:
    json.dump(database, outfile, indent=4, sort_keys = True, ensure_ascii=False)
# final write

print(bcolors.OKGREEN+"Data written to docs/db.json"+bcolors.ENDC+" ")
