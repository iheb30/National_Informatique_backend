<?php
/**
 * Variables et constantes globales pour gérer les différents 
 * environnements (TEST et PROD)
 */
if ($_SERVER['HTTP_HOST'] === 'localhost' || $_SERVER['HTTP_HOST'] === '127.0.0.1') {
    // Connexion à la BDD
    define('HOST', 'localhost');
    define('PORT', 3306);
    define('DATA', 'national_Informatique');
    define('USER', 'root');
    define('PASS', '');
    // Gestion des options PDO
    define('OPTIONS', array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        // Renvoie le message d'erreur sous forme de tableau associatif
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ));
    // Gestion des erreurs Apache (local uniquement)
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

}