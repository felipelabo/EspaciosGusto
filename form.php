<?php
    $destino="ventas@espaciosatugusto.cl";
    $nombre=$_POST["user_name"];
    $email=$_POST["user_email"];
    $telefono=$_POST["user_number"];
    $mensaje=$_POST["user_message"];

    $asunto="Contacto web de " . $nombre;
    $correo= "El cliente " . $nombre . " se comunicó con nosotros a través de nuestra pagina web.\n Este fue su mensaje:\n" . $mensaje . "\n\n Su datos de contacto son los siguientes:\nCorreo: " . $email . "\nTeléfono: " . $telefono . "\n\nComunicarse con el cliente a la brevedad.";
    mail($destino,$asunto,$correo);
    header("Location:contact.html");
    exit;
?>