<?php
$recipient = "facundocantarutti@gmail.com";

$name = $_POST['nombre'];
$email = $_POST['email'];
$message = $_POST['mensaje'];

$subject = "Contact Form Message from the Website";
$body = "Name: $name\nEmail: $email\nMessage: $message";

$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

mail($recipient, $subject, $body, $headers);
?>
