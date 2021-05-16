<?php
$from = "support@labirintum.by";
$to = "nich2ayb@gmail.com";
$subject = "Тема";
$message = "Письмо отправлено, функция отработала без проблем";
$headers = "From:" . $from;
mail($to,$subject,$message, $headers);
echo "Письмо отправлено, функция отработала без проблем";
?>