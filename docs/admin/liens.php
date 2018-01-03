<?php
// https://docs.google.com/spreadsheets/d/1Bt0nGF5ZlT0_2Ru_HuDTGUi-41s_rdNBxD3WUulgIp8/edit#gid=1184439601
//
// construction de la base de données à la main depuis le fichier xlsx «Base médias»
// 2) copier/coller les 2eme étages
//
//

$entites = [

    [
        'nom' => 'Sophia Publications',
        'liens' => [
            '50%' => ['Claude Perdriel', ],
        ]
    ],

    [
        'nom' => 'L\'histoire',
        'liens' => [
            '100%' => ['Sophia Publications', ],
        ]
    ],

    [
        'nom' => 'Historia',
        'liens' => [
            '100%' => ['Sophia Publications', ],
        ]
    ],

    [
        'nom' => 'Groupe Perdriel',
        'liens' => [
            '93%' => ['Claude Perdriel', ],
        ]
    ],

    [
        'nom' => 'Challenges',
        'liens' => [
            '100%' => ['Groupe Perdriel', ],
        ]
    ],

    [
        'nom' => 'Le Monde libre',
        'liens' => [
            '20%' => ['Prisa'],
            '80%' => ['Pierre Bergé', 'Xavier Niel', 'Matthieu Pigasse', ]
        ],
    ],

    [
        'nom' => 'Huffington Post',
        'liens' => [
            '100%' => ['AOL'],
        ],
    ],

    [
        'nom' => 'Les Nouvelles Editions indépendantes',
        'liens' => [
            '78%' => ['Matthieu Pigasse', ],
        ]
    ],
    [
        'nom' => 'Groupe Dassault',
        'liens' => [
            '100%' => ['Serge Dassault', ],
        ]
    ],
    [
        'nom' => 'LVMH',
        'liens' => [
            '46%' => ['Bernard Arnault', ],
        ]
    ],
    [
        'nom' => 'L\'Opinion',
        'liens' => [
            'participe' => ['LVMH', 'Famille Bettencourt', 'Nicolas Beytout', 'Claude Perdriel'],
        ]
    ],

    [
        'nom' => 'Altice',
        'liens' => [
            '61%' => ['Patrick Drahi', ],
        ]
    ],
    [
        'nom' => 'SFR Groupe',
        'liens' => [
            '78%' => ['Altice', ],
        ]
    ],
    [
        'nom' => 'News Participations',
        'liens' => [
            '49%' => ['SFR Groupe', ],
            '51%' => ['Alain Weill', ]
        ],
    ],

    [
        'nom' => 'NextRadioTV',
        'liens' => [
            '95%' => ['News Participations', ],
        ],
    ],

    [
        'nom' => 'NextRadioTV',
        'liens' => [
            '95%' => ['News Participations', ],
        ],
    ],

    [
        'nom' => 'BFM TV',
        'liens' => [
            '100%' => ['NextRadioTV', ],
        ],
    ],

    [
        'nom' => 'RMC Découverte',
        'liens' => [
            '100%' => ['NextRadioTV', ],
        ],
    ],

    [
        'nom' => 'RMC',
        'liens' => [
            '100%' => ['NextRadioTV', ],
        ],
    ],

    [
        'nom' => 'BFM Business',
        'liens' => [
            '100%' => ['NextRadioTV', ],
        ],
    ],

    [
        'nom' => 'Numéro 23',
        'liens' => [
            '39%' => ['NextRadioTV', ],
            '61%' => ['Pascal Houzelot', ],
        ],
    ],

    [
        'nom' => 'Lagardère SCA',
        'liens' => [
            '7.96%' => ['Arnaud Lagardère', ],
            '12.83%' => ['Qatar Investment Authority', ],
        ]
    ],

    [
        'nom' => 'Lagardère Active',
        'liens' => [
            '100%' => ['Lagardère SCA', ],
        ]
    ],

    [
        'nom' => 'Le Journal du dimanche',
        'liens' => [
            '100%' => ['Lagardère Active', ],
        ]
    ],

    [
        'nom' => 'Paris Match',
        'liens' => [
            '100%' => ['Lagardère Active', ],
        ]
    ],

    [
        'nom' => 'Gulli',
        'liens' => [
            '100%' => ['Lagardère Active', ],
        ]
    ],

    [
        'nom' => 'Europe 1',
        'liens' => [
            '100%' => ['Lagardère Active', ],
        ]
    ],

    [
        'nom' => 'RFM',
        'liens' => [
            '100%' => ['Lagardère Active', ],
        ]
    ],

    [
        'nom' => 'Virgin Radio',
        'liens' => [
            '100%' => ['Lagardère Active', ],
        ]
    ],

    [
        'nom' => 'Financière de l\'Odet',
        'liens' => [
            '49.97%' => ['Vincent Bolloré', ],
        ]
    ],

    [
        'nom' => 'Bolloré',
        'liens' => [
            '64.40%' => ['Financière de l\'Odet', ],
        ]
    ],

    [
        'nom' => 'CNews matin',
        'liens' => [
            '20.40%' => ['Bolloré', ],
        ]
    ],

    [
        'nom' => 'Vivendi',
        'liens' => [
            '20.40%' => ['Bolloré', ],
        ]
    ],

    [
        'nom' => 'Canal +',
        'liens' => [
            '100%' => ['Vivendi', ],
        ]
    ],

    [
        'nom' => 'C8',
        'liens' => [
            '100%' => ['Vivendi', ],
        ]
    ],

    [
        'nom' => 'CNews',
        'liens' => [
            '100%' => ['Vivendi', ],
        ]
    ],

    [
        'nom' => 'CStar',
        'liens' => [
            '100%' => ['Vivendi', ],
        ]
    ],

    [
        'nom' => 'Privinvest',
        'liens' => [
            '100%' => ['Iskandar Safa', ],
        ]
    ],

    [
        'nom' => 'Groupe Valmonde',
        'liens' => [
            '>50%' => ['Privinvest', ],
        ]
    ],

    [
        'nom' => 'Valeurs Actuelles',
        'liens' => [
            '100%' => ['Groupe Valmonde', ],
        ]
    ],

    [
        'nom' => 'Marianne',
        'liens' => [
            '86%' => ['Yves de Chaisemartin', ],
        ]
    ],

    [
        'nom' => 'Artémis',
        'liens' => [
            '100%' => ['François Pinault', ],
        ]
    ],

    [
        'nom' => 'Groupe Sebdo-Le Point',
        'liens' => [
            '100%' => ['Artémis', ],
        ]
    ],

    [
        'nom' => 'Le Point',
        'liens' => [
            '100%' => ['Groupe Sebdo-Le Point', ],
        ]
    ],

    [
        'nom' => 'Groupe l\'Agefi',
        'liens' => [
            '100%' => ['Artémis', ],
        ]
    ],

    [
        'nom' => 'L\'Agefi Hebdo',
        'liens' => [
            '100%' => ['Groupe l\'Agefi', ],
        ]
    ],

    [
        'nom' => 'Gruner + Jahr',
        'liens' => [
            '100%' => ['Bertelsmann', ],
        ]
    ],

    [
        'nom' => 'Prisma Media',
        'liens' => [
            '100%' => ['Gruner + Jahr', ],
        ]
    ],

    [
        'nom' => 'VSD',
        'liens' => [
            '100%' => ['Prisma Media', ],
        ]
    ],

    [
        'nom' => 'Capital',
        'liens' => [
            '100%' => ['Prisma Media', ],
        ]
    ],

    [
        'nom' => 'Management',
        'liens' => [
            '100%' => ['Prisma Media', ],
        ]
    ],

    [
        'nom' => 'Harvard Business Review',
        'liens' => [
            '100%' => ['Prisma Media', ],
        ]
    ],

    [
        'nom' => 'Bertelsmann',
        'liens' => [
            'Contrôle' => ['Famille Mohn', ],
        ]
    ],

    [
        'nom' => 'RTL Group',
        'liens' => [
            '75%' => ['Bertelsmann', ],
        ]
    ],

    [
        'nom' => 'Groupe M6',
        'liens' => [
            '48%' => ['RTL Group', ],
        ]
    ],

    [
        'nom' => 'M6',
        'liens' => [
            '100%' => ['Groupe M6', ],
        ]
    ],

    [
        'nom' => 'W9',
        'liens' => [
            '100%' => ['Groupe M6', ],
        ]
    ],

    [
        'nom' => '6ter',
        'liens' => [
            '100%' => ['Groupe M6', ],
        ]
    ],

    [
        'nom' => 'RTL',
        'liens' => [
            '100%' => ['RTL Group', ],
        ]
    ],

    [
        'nom' => 'RTL2',
        'liens' => [
            '100%' => ['RTL Group', ],
        ]
    ],

    [
        'nom' => 'Fun Radio',
        'liens' => [
            '100%' => ['RTL Group', ],
        ]
    ],

    [
        'nom' => 'Bouygues',
        'liens' => [
            '20%' => ['Martin & Olivier Bouygues', ],
        ]
    ],

    [
        'nom' => 'Groupe TF1',
        'liens' => [
            '44%' => ['Bouygues', ],
        ]
    ],

    [
        'nom' => 'TF1',
        'liens' => [
            '100%' => ['Groupe TF1', ],
        ]
    ],

    [
        'nom' => 'NT1',
        'liens' => [
            '100%' => ['Groupe TF1', ],
        ]
    ],

    [
        'nom' => 'LCI',
        'liens' => [
            '100%' => ['Groupe TF1', ],
        ]
    ],

    [
        'nom' => 'HD1',
        'liens' => [
            '100%' => ['Groupe TF1', ],
        ]
    ],

    [
        'nom' => 'TMC',
        'liens' => [
            '100%' => ['Groupe TF1', ],
        ]
    ],

    [
        'nom' => 'La Chaîne parlementaire',
        'liens' => [
            '100%' => ['République française', ],
        ]
    ],

    [
        'nom' => 'Public Sénat',
        'liens' => [
            '100%' => ['République française', ],
        ]
    ],

    [
        'nom' => 'France Médias Monde',
        'liens' => [
            '100%' => ['République française', ],
        ]
    ],

    [
        'nom' => 'Monte Carlo Doualiya',
        'liens' => [
            '100%' => ['France Médias Monde', ],
        ]
    ],

    [
        'nom' => 'Radio France International',
        'liens' => [
            '100%' => ['France Médias Monde', ],
        ]
    ],

    [
        'nom' => 'France 24',
        'liens' => [
            '100%' => ['France Médias Monde', ],
        ]
    ],

    [
        'nom' => 'TV5 Monde',
        'liens' => [
            '13%' => ['France Médias Monde', ],
            '49%' => ['France Télévision', ],
        ]
    ],

    [
        'nom' => 'France Télévision',
        'liens' => [
            '100%' => ['République française', ],
        ]
    ],

    [
        'nom' => 'France 2',
        'liens' => [
            '100%' => ['France Télévision', ],
        ]
    ],

    [
        'nom' => 'France 3',
        'liens' => [
            '100%' => ['France Télévision', ],
        ]
    ],

    [
        'nom' => 'France 5',
        'liens' => [
            '100%' => ['France Télévision', ],
        ]
    ],

    [
        'nom' => 'France 4',
        'liens' => [
            '100%' => ['France Télévision', ],
        ]
    ],

    [
        'nom' => 'France Ô',
        'liens' => [
            '100%' => ['France Télévision', ],
        ]
    ],

    [
        'nom' => 'Radio France',
        'liens' => [
            '100%' => ['République française', ],
        ]
    ],

    [
        'nom' => 'France Inter',
        'liens' => [
            'Contrôle' => ['France Télévision', 'Radio France' ],
        ]
    ],

    [
        'nom' => 'France Musique',
        'liens' => [
            '100%' => ['Radio France' ],
        ]
    ],

    [
        'nom' => 'France Culture',
        'liens' => [
            '100%' => ['Radio France' ],
        ]
    ],

    [
        'nom' => 'FIP',
        'liens' => [
            '100%' => ['Radio France' ],
        ]
    ],

    [
        'nom' => 'France Bleu',
        'liens' => [
            '100%' => ['Radio France' ],
        ]
    ],

    [
        'nom' => 'France Info',
        'liens' => [
            '100%' => ['Radio France' ],
        ]
    ],

    [
        'nom' => 'France Mouv\'',
        'liens' => [
            '100%' => ['Radio France' ],
        ]
    ],

    [
        'nom' => 'Arte France',
        'liens' => [
            '100%' => ['République Française'],
        ]
    ],

    [
        'nom' => 'ARD / ZDF',
        'liens' => [
            'Contrôle' => ['République fédérale d\'Allemagne', ],
        ]
    ],

    [
        'nom' => 'Arte Deutshland TV GmbH',
        'liens' => [
            '50%' => ['ARD / ZDF'],
        ]
    ],

    [
        'nom' => 'Arte',
        'liens' => [
            '50%' => ['Arte France'],
            '50%' => ['Arte Deutshland TV GmbH'],
        ]
    ],
////////////////////////
/*      PAUSE         *

Apparemment il manque Les augustins de l'Assomption, et 2-3 autres après
*/
////////////////////////

    [
        'nom' => 'Groupe SIPA - Ouest France',
        'liens' => [
            '100%' => ['Association pour le soutien des principes de la démocratie humaniste', ],
        ]
    ],
    [
        'nom' => 'Association pour le soutien des principes de la démocratie humaniste',
        'liens' => [
            'Contrôle' => ['Famille Hutin'],
        ]
    ],
    [
        'nom' => 'Groupe Rossel La Voix',
        'liens' => [
            '73%' => ['Groupe Rossel', ],
            '25%' => ['Crédit Agricole Nord de France', ]
        ],
    ],
    [
        'nom' => 'Groupe Rossel',
        'liens' => [
            'Contrôle' => ['Famille Hurbain'],
        ]
    ],
    [
        'nom' => 'Groupe La Montagne - Centre France',
        'liens' => [
            '>50%' => ['Fondation Varenne', ],
            //'15%' => ['Famille Saint-Cricq', ]
        ],
    ],
    [
        'nom' => 'Groupe La Dépêche',
        'liens' => [
            '82.50%' => ['Famille Baylet', ],
        ]
    ],
    [
        'nom' => 'Groupe Sud Ouest',
        'liens' => [
            '80%' => ['Famille Lemoine', ],
        ]
    ],

];

$liens = [];
foreach ($db['proprietaires'] as $id_proprio => &$proprietaire) {
    $proprio = $proprietaire['nom'];
    // INIT «tous les proprietaires»
    if (!isset($liens[$proprio])) {
        $liens[$proprio] = [
            'nom' => $proprio,
            //'liens' => [],
            'fortune_challenge' => '',
            //'desc' => $proprietaire['desc'],
        ];
    }

    //$noms_proprios = array_column($db['proprietaires'], 'nom');

    foreach ($entites as $id_entite => $entite) {
        foreach ($entite['liens'] as $percent => $lien) {
            if ($key = in_array($proprietaire['nom'], $lien)) {
                $liens[$proprietaire['nom']]['liens'][$percent] = $entite['nom'];
                //$liens[$proprietaire['nom']]['liens'][$percent] = $lien;
                //echo ("$proprio a $percent billes dans $entite[nom]").'<br>';
            } else {
                //die("$proprio n'est pas dans cette entite $entite[nom]");
            }
        }
        // [
        //     'nom' => 'Sophia Publications',
        //     'liens' => [
        //         '50%' => ['Claude Perdriel', ],
        //     ]
        // ]
        // INIT «toutes les entites»
        $nom_entite = $entite['nom'];


        //$liens[$entite['nom']] = $liens;
        //$liens[$id_entite] = [
        //    'nom' => $entite['nom'],
        //    //'desc' => $proprietaire['desc'],
        //];
        //$liens[$entite['nom']] = $entite;
        //$liens[$entite['nom']] = $entite;
            //'nom' => $entite['nom'],
            //'desc' => $proprietaire['desc'],
        //];
        if (!isset($entite['liens'])) {
            print_r($entite);
            die("FIN");
        }

    }

}
//echo '<pre>';
//print_r($liens);
//die();

return $liens;
