<?php
$host="localhost";
$userDb="root";
$userDbPassword="";
$db="DB_CAT_DWM";

try{
$conDb = new PDO('mysql:host='.$host.';dbname='.$db.';charset=utf8',$userDb,$userDbPassword);
//var_dump($db);

}
catch (Exception $e ){
   
    echo "<h1>Erreur de connexion à la BD </h1>" ;
    echo "<script>alert('Erreur de connexion à la base de donnée') ;</script>";
    echo "<script>console.log('Erreur de connexion à la base de donnée'".$e->getMessage().") ;</script>";
    
    echo $e->getMessage();
    header('Location: php/auth.php');
    exit;
    
}
?>