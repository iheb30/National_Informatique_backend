<?php

session_start();
// var_dump($_SESSION);
if(!isset($_SESSION['connected']) || !$_SESSION['connected']){
    header('Location: ../index.html');
}

?>

<html>
    <head>
        <meta charset="utf-8" />
        <!-- importer le fichier de style -->
        <link
            rel="stylesheet"
            href="css/style2.css"
            media="screen"
            type="text/css"
        />
    </head>
    <body>

        <form action="register.php" id="reg_id" method="POST">
            <div class="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />

                <label for="name"><b>Nom</b></label>
                <input
                    type="text"
                    placeholder="Entrer nom"
                    name="name"
                    id="email"
                    required
                />

                <label for="email"><b>Email</b></label>
                <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    required
                />

                <label for="psw"><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    id="password1"
                    required
                />

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input
                    type="password"
                    placeholder="Repeat Password"
                    name="password_required"
                    id="password2"
                    required
                />
                <hr />

                <p>
                    By creating an account you agree to our
                    <a href="#">Terms & Privacy</a>.
                </p>
                <button type="submit" class="registerbtn">Register</button>
            </div>
            <div class="container signin">
                <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div>
        </form>
        <script src="javascript/password_check.js"></script>
    </body>
</html>
