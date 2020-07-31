<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

$subsribeHeader = "Location: subscribe.html";
$thankyouHeader = "Location: thankyou.html";

$title="";
$body="";

if(empty($email)) {
   
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новое обращение </h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    ";
}
else {
    $title = "Подписка на новости Best Tour Plan";
    $body = "
    <h2>Запрос на подписку</h2>
    <b>Адрес электронной почты:</b>$email<br>
    ";
}
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'lsd_1994@mail.ru'; // Логин на почте
    $mail->Password   = '25081736'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('lsd_1994@mail.ru', 'Алиса Васяткина'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('alicemint@mail.ru');  


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
if(empty($email)){
    header($thankyouHeader);

}
else{
    header($subsribeHeader);
}
?>