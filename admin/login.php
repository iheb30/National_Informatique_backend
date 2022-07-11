<?php
session_start();
if(isset($_SESSION['connected']) && $_SESSION['connected']){
    header('Location: index-admin.php');
    exit;
}
?>


<html>
    <head>
       <meta charset="utf-8">
        <!-- importer le fichier de style -->
        <link rel="stylesheet" href="css/style.css" media="screen" type="text/css" />
    </head>
    <body>
        <div id="container">
            <!-- zone de connexion -->
            
            <form action="login_check.php" method="POST">
                <h1>Connexion</h1>
                
                <label><b>email</b></label>
                <input type="text" placeholder="Entrer le nom d'utilisateur" name="email" required>

                <label><b>Mot de passe</b></label>
                <input type="password" placeholder="Entrer le mot de passe" name="password" required>

                <input type="submit" id='submit' value='LOGIN' >
                
            </form>
        </div>
    </body>
</html>