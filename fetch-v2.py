#!/usr/bin/python3
import collections
import csv
import json
import re
import requests
import unicodedata

from collections import OrderedDict

base_file   = 'https://docs.google.com/spreadsheets/export?id=1po3WjKX15T766GYOYV8fHtve4RdlyLF6XEXBlUICib0&exportFormat=csv&gid=0'
owner_file  = 'https://docs.google.com/spreadsheets/export?id=1po3WjKX15T766GYOYV8fHtve4RdlyLF6XEXBlUICib0&exportFormat=csv&gid=1970270275'

# {{{ official mdiplo
url_relations_medias = 'https://raw.githubusercontent.com/mdiplo/Medias_francais/master/relations_medias_francais.tsv'
file_relations = 'relations.tsv'

url_liste_medias     = 'https://raw.githubusercontent.com/mdiplo/Medias_francais/master/medias_francais.tsv'
file_liste_medias = 'liste_medias.tsv'
# }}} official mdiplo
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
    text_file = open(filename, 'w')
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
    return strip_accents(value)

# @TODO: use original decodex to consolidate datas
# decodex = requests.get('http://www.lemonde.fr/webservice/decodex/updates');


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

base_output = 'base.csv'
downloadData(base_file, base_output)
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
downloadData(url_base, file_urls)
# }}}

owner_output = 'owner.csv'
# {{{
# ce fichier contient les informations sur les proprietaires
#  1 - Nom
#  2 - Fortune
#  3 - Marque
#  4 - Secteur d'activite
#  5 - Description
downloadData(owner_file, owner_output)
# }}}


database = OrderedDict()

database['proprietaires'] = OrderedDict()
database['sites'] = OrderedDict()
database['urls'] = OrderedDict()


with open(owner_output, 'r') as csvfile:
    reader = csv.reader(csvfile, delimiter=',', quotechar='"')

    col_updated       = 0
    col_nom           = 1
    col_fortune       = 2
    col_marque        = 3
    col_secteur       = 4
    col_description   = 5

    owner_count = 0
    for row in reader:
        if len(row) < 4:
            continue
        owner_count = owner_count + 1

        if row[col_nom] == '':
            continue

        entry = {
            'nom'         : row[col_nom],
            'description' : row[col_description],
            'fortune'     : row[col_fortune],
            'marque'      : row[col_marque],
            'secteur'     : row[col_secteur],
            'updated'     : row[col_updated],
            'possession'  : []
        }
        database['proprietaires'][row[col_nom]] = OrderedDict(entry)

print(bcolors.OKGREEN+"Nombre de proprietaires trouves : "+bcolors.ENDC+" ", owner_count)


with open(base_output, 'r') as csvfile:
    id = 0

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

    url_count = 0;
    reader = csv.reader(csvfile, delimiter=',', quotechar='"')
    for row in reader:
        if len(row) < 4:
            continue
        id = id + 1
        if id == 1:
            continue
        entry = []
        classement_possedex = 'zzz'

        try:

            if row[col_possedex] == 'inconnu':
                classement_possedex = ''
                print(bcolors.OKBLUE+"[  inconnu   ] "+bcolors.ENDC+" "+row[col_nom])
            elif row[col_possedex] == 'capital':
                classement_possedex = 'capital'
                print(bcolors.OKGREEN+"[  capital  ] "+bcolors.ENDC+" "+row[col_nom])
            elif row[col_possedex] == 'etat':
                classement_possedex = 'etat'
                print(bcolors.OKBLUE +"[    etat   ] "+bcolors.ENDC+" "+row[col_nom])
            elif row[col_possedex] == 'independant':
                classement_possedex = 'independant'
                print(bcolors.OKGREEN+"[   indep   ] "+bcolors.ENDC+" "+row[col_nom])
                # TODO: ajouter reseaux sociaux ?
            else:
                print(bcolors.FAIL+"[classement possedex manquant] "+bcolors.ENDC+" "+row[col_nom]+" (on met 0)")
                continue
        except:
            pass

        #try:
        #    note_decodex = int(row[col_decodex])
        #except:
        #    #print "               "+bcolors.WARNING+" [note decodex manquante] "+bcolors.ENDC+" "+row[col_nom]+" (on met 0)"
        #    note_decodex = 0
        #    pass
        #entry.append(note_decodex)                   #   - note originale decodex

        entry.append(row[col_nom])                    # 0  - Nom
        entry.append(row[col_desc])                   # 1  - Description
        entry.append(slugify(row[col_nom]))           # 2  - Nom normalise
        entry.append(classement_possedex)             # 3  - Notre note
        entry.append(row[col_updated])                # 4  - updated

        entry.append(row[col_pub])                    # 5  - Pub ?
        entry.append(row[col_subventions])            # 6  - subventions

        entry.append(row[col_sources])                # 7 - Sources

        entry.append(row[col_proprietaire1])          # 8
        entry.append(row[col_fortune1])               # 9
        entry.append(row[col_marque1])                # 10
        entry.append(row[col_influence1])             # 11

        entry.append(row[col_proprietaire2])          # 12
        entry.append(row[col_fortune2])               # 13
        entry.append(row[col_marque2])                # 14
        entry.append(row[col_influence2])             # 15

        entry.append(row[col_proprietaire3])          # 17
        entry.append(row[col_fortune3])               # 18
        entry.append(row[col_marque3])                # 19
        entry.append(row[col_influence3])             # 20


        database['sites'][id] = entry

        for i in range(col_urls, len(row)-1):
            url_count = url_count+1;
            url = row[i]
            url = url.rstrip('/')
            url = url.rstrip('\n')
            url = url.rstrip(' ')

            if url:
                if (i == col_urls):
                    media = {'url' : url, 'nom' : row[col_nom]}
                    if (row[col_proprietaire1]
                        and database['proprietaires'][row[col_proprietaire1]]
                        and media not in database['proprietaires'][row[col_proprietaire1]]['possession']):
                        database['proprietaires'][row[col_proprietaire1]]['possession'].append(media)
                    if (row[col_proprietaire2]
                        and database['proprietaires'][row[col_proprietaire2]]
                        and media not in database['proprietaires'][row[col_proprietaire2]]['possession']):
                        database['proprietaires'][row[col_proprietaire2]]['possession'].append(media)
                    if (row[col_proprietaire3]
                        and database['proprietaires'][row[col_proprietaire3]]
                        and media not in database['proprietaires'][row[col_proprietaire3]]['possession']):
                        database['proprietaires'][row[col_proprietaire3]]['possession'].append(media)

            url = re.sub(r'^https?:\/\/(www)?', '', url)

            if url:
                database['urls'][url] = id

print(bcolors.OKGREEN+"Nombre d'url trouvees : "+bcolors.ENDC+" ", url_count)

# final write
with open('docs/database.json', 'w') as outfile:
    json.dump(database, outfile, indent=4, sort_keys = True, ensure_ascii=False)
# final write

print(bcolors.OKGREEN+"Data written to docs/database.json"+bcolors.ENDC+" ")
