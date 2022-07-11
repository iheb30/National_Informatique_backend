<?php
// Création d'un classe utilisateur(administrateur)
class User{
  // connection à la base de données via la fonction privé.
    private $conn;

    // Assigné la fonction privé au nom de la table "manager"
    private $table_name = "manager";

     // Déclarer une fonction publique qui sera utilisé pour récupéré les coordonnées de l'administrateur
    public $name;
    public $email;
    public $password;
    

      // Mise en place du constructeur
    public function __construct($db, $newName, $newEmail, $newPassword){
        $this->conn = $db;
        $this->name = $newName;
        $this->email = $newEmail;
        $this->password = $newPassword;
    }
        // déclarer une fonction pour la creaton de l'utilisateur
     public function create(){

        // Déclarer une variable qui prendra en valeur une requête sql (Insertion des coordonnée)
        $query = 'INSERT INTO ' . $this->table_name . '(name, email, password) VALUES ( :name,  :email,  :password)';
        
        // preparation de la requête
        $stmt = $this->conn->prepare($query);

        // assainir les informations donnée par l'utilisateur et supprimer les balise html et php.
        $this->name=htmlspecialchars($this->name);
        $this->email=htmlspecialchars($this->email);
        $this->password=htmlspecialchars($this->password);
        $this->password = hash('sha256', $this->password);
        //  $this->password =  password_hash("$password", $this->password);
        // strip_tags

        // $stmt->bindParam(':name', $this->name);
        // $stmt->bindParam(':email', $this->email);
        // $stmt->bindParam(':password', $this->password);
        
        // Pour apporter une sécurité et éviter toute injection sql on utilise la méthode "bindValue"
        $stmt->bindValue(':name', $this->name, PDO::PARAM_STR);
        $stmt->bindValue(':email', $this->email, PDO::PARAM_STR);
        $stmt->bindValue(':password', $this->password, PDO::PARAM_STR);

       
        // $params = array(':name'=>$this->name, ':email'=>$this->email, ':password'=>$this->password);
        

        // Executer la requête "$stmt" et vérifier si elle a bien été envoyé.
            if($stmt->execute()){
  
                return true;
            }else{
                // $this->showError($stmt);
                return false;
            }
        }

}