<?php

$fields = ['email', 'password'];

// aucune erreur de base
$error = false;
foreach ($fields as $field) {
    if (isset($_POST[$field]) && !empty($_POST[$field])) {
        // on nettoie la valeur
        $$field = htmlspecialchars($_POST[$field]);
    } else {
        // si une des valeurs n'est pas défini ou vide, on passe l'erreur a true
        $error = true;
    }
}

if ($error) {
    exit;
}

// var_dump($password);
// var_dump($email);
// var_dump(hash('sha256', $password));
// var_dump('e6332d03f932da30fcd0f2e583fc11168fc8ae4a36437');

// Si aucune erreur

include_once('database.php');
$Database = new Database();
$conn = $Database->getConnection();

$query = "SELECT * FROM manager WHERE email = :email AND password = :password";
$select = $conn->prepare($query);
$select->execute([
    ':email' => $email,
    ':password' => hash('sha256', $password)
    // ':password' => 'e6332d03f932da30fcd0f2e583fc11168fc8ae4a36437'
]);
// var_dump($select->fetch());

if($select->rowCount() == 1){
    $user = $select->fetch();
    var_dump($user);
    session_start();
    $_SESSION['connected'] = true;
    $_SESSION['email'] = $user['email'];
    $_SESSION['nom'] = $user['name'];
    header('Location: index-admin.php');
}else {
    header('location: ../index.html');
}