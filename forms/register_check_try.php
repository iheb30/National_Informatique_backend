<?php

// 1. Récupère et assainit les variables du formulaire
foreach ($_POST as $key => $val) {
    if (isset($_POST[$key]) && !empty($_POST[$key])) {
        $$key = htmlspecialchars(trim($val)); // Variable dynamique
    } else {
        $$key = ''; // Variable dynamique
    }
}

// 2. transformation email en minuscule
$email = strtolower($email);

try {
    // 3. On se connecte à la BDD
    include_once 'config.php';
    $conn = new PDO(
        sprintf('mysql:host=%s;port=%d;dbname=%s;charset=utf8', HOST, PORT, DATA),
        USER,
        PASS,
        OPTIONS
    );

    // 4. Teste si l'email existe déjà
    $sql = 'SELECT * FROM clients WHERE email=?';
    $params = array($email);
    $res = $conn->prepare($sql);
    $res->execute($params);
    $data = $res->fetch();

    if ($res->rowCount() === 0) {
 
            // 5. Crée le nouveau customer
            $sql = 'INSERT INTO clients(nom, email, telephone, adresse, cp, ville, message, date) VALUES(:nom, :email, :telephone, :adresse, :cp, :ville, :message, :date)';
            $params = array(
            ':nom' => $nom,
            ':email' => $email,
            ':telephone' => $telephone,
            ':adresse' => $adresse,
            ':cp' => $cp,
            ':ville' => $ville,
            ':message' => $message,
            ':date' => $date
            );
            
            // 5.1 J'envoie à la base de données:
            $insert = $conn->prepare($sql);
            $insert->execute($params);


            // Je déclare une variable qui prendra en compte la dernière insertion de l'id de la table "clients".
            $newcus = $conn->lastInsertId();


            // 5.2 Renvoie positif si requête a bien été envoyé
            echo 'Client et utilisateur créé avec succès.' . $newcus;

    } else {
        echo 'Ce mail existe déjà !'; 
        // Dans le cas où le mail existe déjà on associe ce dernier via l'id à la problématique donner.
        $newcus = $data['id_clients'];
    }
} catch (PDOException $err) {
    echo $err->getMessage();
}



 // 6. Insérer l'appareil
    try {       

        // 6.1 Mettre une condition dans le formulaire
        if(isset($_POST['appareil']) && !empty($_POST['appareil'])){

            // 6.2 Filtrer avec un htmlspecialchars
            $appareil = htmlspecialchars($_POST['appareil']);
            
            
            // 6.3 Réaliser une requête "INSERT" à la table appareil

            $sql2 = 'INSERT INTO appareil(appareil, clients_id_clients) VALUES (:appareil, :clients_id_clients)';
            $params2 = array(
                ':appareil' => $appareil,
                // Insérer dans la FK de la table "appareil" le numéro d'id "clients"
                ':clients_id_clients' => $newcus
            );

            // Éxecuter la requête.
            $insert = $conn->prepare($sql2);
            $insert->execute($params2);
            
            
        } else {
            echo 'Donner le type d\'appareil';
        }
    } catch (PDOException $err) {
    echo $err->getMessage();
}
        
// $sql2 = 'SELECT * 
//     FROM clients
//     INNER JOIN appareil
//     ON clients.clients_id = appareil.clients_id';
