<?php
// contact-handler.php
// Server-side contact form handler (Alternative to Formspree)

// Enable CORS for local development
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Configuration
$to_email = 'Info@bbcfze.com'; // Your email address
$from_email = 'noreply@bbcfze.com'; // From email (should be from your domain)
$subject_prefix = 'Business Bay Consultancy - Contact Form: ';

// Get form data
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$service = trim($_POST['service'] ?? '');
$message = trim($_POST['message'] ?? '');

// Basic validation
$errors = [];
if (empty($name)) {
    $errors[] = 'Name is required';
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Valid email is required';
}
if (empty($message)) {
    $errors[] = 'Message is required';
}

// Return validation errors
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// Sanitize data
$name = htmlspecialchars($name);
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($phone);
$service = htmlspecialchars($service);
$message = htmlspecialchars($message);

// Create email content
$email_subject = $subject_prefix . $service;
$email_body = "
New Contact Form Submission

Name: $name
Email: $email
Phone: $phone
Service: $service

Message:
$message

---
Submitted from: Business Bay Consultancy Website
Time: " . date('Y-m-d H:i:s') . "
IP Address: " . $_SERVER['REMOTE_ADDR'] . "
";

// Email headers
$headers = [
    'From' => $from_email,
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/plain; charset=UTF-8'
];

// Convert headers array to string
$header_string = '';
foreach ($headers as $key => $value) {
    $header_string .= $key . ': ' . $value . "\r\n";
}

// Send email
$mail_sent = mail($to_email, $email_subject, $email_body, $header_string);

// Return response
if ($mail_sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been sent successfully.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, there was an error sending your message. Please try again.'
    ]);
}
?> 