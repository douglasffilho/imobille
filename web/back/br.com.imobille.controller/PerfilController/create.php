<?php
    require('../../classloader.php');
    header('Content-type: application/json; charset=UTF-8');

    ClassLoader::load();
    
    $service = new PerfilService();

    $perfil = new Perfil();

    $perfil->setNome($_POST['nome']);
    $perfil->setSenha($_POST['senha']);
    $perfil->setEmail($_POST['email']);
    $perfil->setTelefone($_POST['telefone']);
    $foto = base64_encode(file_get_contents($_POST['foto']));
    $perfil->setFoto($foto);
    $perfil->setPermissao($_POST['permissao']);

    $logado = unserialize($_SESSION['logado']);
    if($logado != null && $logado != '') {
        echo $service->createPerfil($perfil);
    }
    else {
        $mensagem = new ResponseMessage();
        $mensagem->setMessage('Login ou senha incorretos.');
        $_SESSION['logado'] = '';
    }
    
?>