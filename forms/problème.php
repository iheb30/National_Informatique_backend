<?php


require_once "config.php";

$required = array('problème');
    $error = false;
    foreach($required as $field){
        if(!isset($_POST[$field]) || empty($_POST[$field])){
            $error = true;
        }else{
            ${$field} = htmlspecialchars($_POST[$field]);

        }
    }
    if($error){
        exit;
    }
    
    // On met la liaison d'une table à une autre:

    $join = $bdd->prepare(
        'SELECT * 
        FROM problème
        INNER JOIN appareil
        ON problème.appareil_id = appareil.appareil_id'
    );
    $join->execute();

    // J'insère le type d'appareil dans la base de données
    $insert = $bdd->prepare(
        'INSERT INTO problème(type)
        VALUES (:type)
    ');

    $res = $insert->execute(array(
        ':type' => $type, 
    ));
    
    if(!$res){
        // erreur lors de l'execution de la requête -> renvoyer msg
        exit;
    }
?>