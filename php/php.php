<?php

require_once 'config' . DIRECTORY_SEPARATOR . 'bdd.php';

if($_GET){

    if($_GET['action'] === 'setScore'){
        $req = $pdo->prepare('SELECT * FROM minijeu WHERE id = 1');
        $req->execute();
        $data = $req->fetch();

        $scoreUpdate = $data['score'] + 1;

        $req = $pdo->prepare('UPDATE minijeu SET score = :score WHERE id = 1');
        $req->execute(['score' => $scoreUpdate]);
        
        echo json_encode($scoreUpdate);
    }

    elseif($_GET['action'] === 'getScore'){
        $req = $pdo->prepare('SELECT * FROM minijeu WHERE id = 1');
        $req->execute();
        $data = $req->fetch();
        
        echo json_encode($data);
    }

    elseif($_GET['action'] === 'resetScore'){
        $_POST = json_decode(file_get_contents('php://input'), true);
    
        $req = $pdo->prepare('UPDATE minijeu SET score = :score WHERE id = 1');
        $req->execute(['score' => $_POST['score']]);
    
        echo json_encode($_POST['score']);
    }

    elseif($_GET['action'] === 'genererNb'){
        //$_POST = json_decode(file_get_contents('php://input'), true);
        $req = $pdo->prepare('SELECT * FROM minijeu ');
        $req->execute();
        $data = $req->fetch();

        $NbAleatoire = rand(1,100);
        $nbUpdate = $data['nbAleatoire'] ;
        $req = $pdo->prepare('UPDATE minijeu SET nbAleatoire = :nbAleatoire WHERE id = 1');
        $req->execute(['nbAleatoire' => $nbAleatoire]);
    
        echo json_encode($nbAleatoire);
    }


}