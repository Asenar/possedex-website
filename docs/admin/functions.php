<?php

function config($key = null) {
    static $config;
    if (!$config) {
        $config = require(DOCROOT.'config.php');
    }
    if ($key) {
        return $config[$key];
    }
    return $config;
}

function db($newDb = null) {
    static $db = null;
    if ($newDb) {
        $db = $newDb;
    }

    if (!$db) {
        //$db = rebuild_db(); // FOR DEBUG
        $filename = config('db');
        $json = file_get_contents($filename);
        $db = json_decode($json, true);
    }
    return $db;
}

function get_nom_proprietaires() {
    $db = db();
    return array_column($db['proprietaires'], 'nom');
}

function rebuild_db() {
    static $build_once = 0;
    if (!$build_once) {
        $build_once = 1;
    } else {
        die("WTF");
    }

    $filename = config('db');
    $db = [];
    //build_db_proprietaires($db);
    //build_db_challenges($db);
    build_db_liens($db);
//echo '<pre>';
//print_r($db);
//die();

    $json = json_encode($db);
    if (isset($_GET['write'])) {
        $written = file_put_contents($filename, $json);
        echo "<br>$written bytes written<br>";
    } else {
        echo '<br>'.strlen($json) . " bytes would have been ritten<br>";
    }
    db($db); // set the new db
    return $db;
}

function build_db_proprietaires(&$db) {
    $db['proprietaires'] = require(DOCROOT.'proprietaires.php');
    return $db['proprietaires'];
}

function build_db_challenges(&$db) {
    ob_start();
    require(DOCROOT.'challenges.json');
    $json = ob_get_contents();
    ob_end_clean();
    $classement = json_decode($json, true);
    $par_nom = [];
    $par_rang = [];

    $noms_proprios = array_column($db['proprietaires'], 'nom');
    foreach ($classement as $qui) {
        //$par_nom[$qui['Nom']] = $qui['Rang'];
        //$par_rang[$qui['Rang']] = $qui['Nom'];
        foreach($noms_proprios as $index_proprio => $nom) {
            if (false !== strpos($qui['Nom'], $nom)) {
                //$proprietaire[$nom]['Challegnes'] = $qui;
                $db['proprietaires'][$index_proprio]['Challenges'] = [
                    'Nom'     => $qui['Nom'],
                    'Rang'    => $qui['Rang'],
                    'Secteur' => $qui['Secteur'],
                    'Fortune' => preg_replace('`\n +`', ' ', $qui['Fortune']),
                ];
                //$db['proprietaires'][$index_proprio]['fortune_challenge']
                //    = preg_replace('`\n +`', ' ', $qui['Fortune']);
                //$par_nom[$nom]['Challenges'] = [
                //    'Rang'    => $qui['Rang'],
                //    'Secteur' => $qui['Secteur'],
                //    'Fortune' => $qui['Fortune'],
                //    ];
                //$par_nom[$nom]['fortune_challenge'] = $qui['Rang'];
                //$proprietaire[$nom]['fortune_challenge'] = $qui['Rang'];
//print_r($db['proprietaires']);
//die("stop pour «${index_proprio}»");
            }
        }
    }
    //foreach ($db['proprietaires'] as $id => &$proprietaire) {
    //    if (isset($par_nom[$proprietaire['nom']])) {
    //        $proprietaire['fortune_challenge'] = $par_nom[$proprietaire['nom']];
    //    } else {
    //    }
    //}
}

function build_db_liens(&$db) {
    $db['liens'] = require(DOCROOT.'liens.php');
    foreach($db['liens'] as $nom => $liens) {
        //echo "START recherche de $nom<br>";
        $index = find_proprio($liens['nom']);
        if (false === $index) {
            $db['proprietaires'][] = [
                'nom' => $liens['nom'],
            ];
            echo "<br><b>Rajout de ".$liens['nom'].'</b>';
            echo ' [total = '.count($db['proprietaires']).']';
            echo '<br>';
            //$db['proprietaires'][$index]['liens'] = [];
        }
        if (!isset($liens['liens'])) {
            trigger_error("erreur clef liens manquant pour $nom", E_USER_WARNING);
            echo '<pre>';
            if (isset($_GET['debug'])) {
                debug_print_backtrace();
                die("STOP");
            }
        }
        $db['proprietaires'][$index]['liens'] = $liens['liens'];
        //break;
        //echo '<pre>';
        //print_r($db['proprietaires'][$index]);
        //die("STOP recherche");
        // TODO: array search $db['proprietaires'][$nom]
    }
    return $db['liens'];
}

function by_name() {
    $db = db();
    return array_flip(array_column($db['proprietaires'], 'nom'));
}

function show_all() {
global $table;
echo '<pre>start show all</pre>';
    $db = db();
//echo '<pre>';
//print_r($db);
//die();
    $table .= '<table border=1 cellspacing=0>';
    //$by_name = by_name();

    $proprietaires = $db['proprietaires'];
    echo '<pre>start show all - loop</pre>';
    $count_loop=0;
    foreach ($proprietaires as $proprietaire) {
        $table .= '<tr>';
        echo "[step ". ++$count_loop ."]<br>";
        echo $proprietaire['nom'];
        echo '<hr>';
        //echo '<pre>';
        //print_r($proprietaire);
        //die();
        show_ligne($proprietaire, 0);
        $table .= '</tr>';
    }
    $table .= '</table>';
}

function show_ligne($proprietaire, $lvl = 0) {
    global $table;
    $table .= '<th>'.$proprietaire['nom'].'</th>';
    if (!is_array($proprietaire['liens'])) {
        echo '<pre>';
print_r($proprietaire);
        trigger_error("liens absent pour : «".$proprietaire['nom']."»<br>"
            ."(Il faut compléter la base)", E_USER_WARNING);
        //echo "ARRRG proprietaire[liens] erreur is not array ".__FILE__.':'.__LINE__.'<br>';
        //var_dump($proprietaire);
        //echo '</pre>';
        //echo '<hr>';
        //echo '<pre>';
        //debug_print_backtrace();
        //die("STOP");
    } else {
        foreach ($proprietaire['liens'] as $percent => $lien) {
            show_lien($percent, $lien, $lvl);
        }
    }
}

function show_lien($percent, $proprio, $lvl) {
    global $table;
$db = db();
    $table .= '<td>'.$percent.'</td>';
    $by_name = by_name();
echo '<pre>';
print_r($proprio);
echo '</pre>';

    if (isset($by_name[$proprio])) {
echo "$proprio TROUVE!";
        $index_proprietaire = $by_name[$proprio];
$proprietaire = $db['proprietaires'][$index_proprietaire];
//echo '<pre>';
//print_r($proprietaire);
//echo '</pre>';
////die("STOP - boucle infinie -_-");
//echo '<hr>';
        //show_lien($proprietaire, ++$lvl);
        foreach ($proprietaire['liens'] as $percent => $lien) {
            show_lien($percent, $lien, $lvl);
        }
    }
    else {
        echo 'rien dans «by name» pour '.$proprio;
        echo '<pre>';
        print_r($by_name);
        die();
        $table .= '<td>'.$proprio.'</td>';
    }
echo $table;
die("FIN DU LIEN pour $proprio");
}

function find_proprio($nom) {
    $db = db();
    foreach ($db['proprietaires'] as $index => $proprietaires) {
        if ($proprietaires['nom'] == $nom) {
            echo "found $nom as index $index<br>";
            return $index;
        }
    }
    return false;

}
