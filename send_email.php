<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $company = $_POST['company'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    $to = "seoserviceusa90@gmail.com"; // Change to your email address
    $subject = "New Message from Contact Form";
    $body = "Name: $name\nEmail: $email\nCompany: $company\nPhone: $phone\nMessage:\n$message";
    
    // Send email
    if (mail($to, $subject, $body)) {
        echo "Message sent successfully.";
    } else {
        echo "Failed to send message. Please try again later.";
    }
}
?>
