<?php 

// Get form data
$name = $_POST['fname'];
$email = $_POST['email'];
$subject = $_POST['sub'];
$message = $_POST['message'];

// Proper formatting of the mail headers
$mailheader = "From: " . $name . " <" . $email . ">\r\n";

// Email recipient
$to = "adamhadir2008@gmail.com";

// Send the email
if(mail($to, $subject, $message, $mailheader)) {
    echo 'Message sent!';
} else {
    die('Error sending message!');
}

?>
