<?php
// Newsletter Subscription Handler
// Business Bay Consultancy - Dual System (Formspree + Auto Email)

// Security headers
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// CORS headers for AJAX requests
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die(json_encode(['error' => 'Method not allowed']));
}

// Configuration
$config = [
    'gmail_email' => 'anztri2022@gmail.com',
    'gmail_password' => 'ufuongqhfvwvttxe', // App password
    'formspree_url' => 'https://formspree.io/f/xkgbbzgq',
    'company_name' => 'Business Bay Consultancy',
    'company_website' => 'https://businessbayconsultancy.com'
];

// Get and validate email
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);

if (!$email) {
    http_response_code(400);
    die(json_encode(['error' => 'Valid email address required']));
}

// Response array
$response = [
    'success' => false,
    'formspree_success' => false,
    'email_sent' => false,
    'message' => ''
];

// 1. Submit to Formspree (for backup/storage)
try {
    $formspree_data = http_build_query(['email' => $email]);
    $formspree_context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n" .
                       "Accept: application/json\r\n",
            'content' => $formspree_data,
            'timeout' => 10
        ]
    ]);
    
    $formspree_result = @file_get_contents($config['formspree_url'], false, $formspree_context);
    $response['formspree_success'] = ($formspree_result !== false);
} catch (Exception $e) {
    error_log("Formspree error: " . $e->getMessage());
}

// 2. Send Welcome Email via Gmail SMTP
try {
    // Email content
    $subject = "Welcome to Business Bay Consultancy Newsletter!";
    $html_message = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Business Bay Consultancy</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                Welcome to Business Bay Consultancy!
            </h1>
            <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">
                Your trusted partner for UAE business setup
            </p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
            <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 24px;">
                Thank you for subscribing! 🎉
            </h2>
            
            <p style="color: #666666; line-height: 1.6; margin: 0 0 20px 0; font-size: 16px;">
                We\'re excited to have you join our community of successful entrepreneurs and business owners in the UAE.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin: 30px 0;">
                <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 18px;">
                    🚀 What you can expect:
                </h3>
                <ul style="color: #666666; margin: 0; padding-left: 20px; line-height: 1.8;">
                    <li>Latest UAE business setup updates</li>
                    <li>Exclusive insights on free zones and mainland setup</li>
                    <li>PRO services tips and regulatory changes</li>
                    <li>Special offers and consultation opportunities</li>
                </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
                <a href="tel:+971552621001" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 25px; font-weight: bold; font-size: 16px;">
                    📞 Call Us: +971 55 262 1001
                </a>
            </div>
            
            <div style="background-color: #e8f4fd; padding: 20px; border-radius: 8px; border-left: 4px solid #2196F3;">
                <p style="color: #1976D2; margin: 0; font-weight: bold; font-size: 16px;">
                    💡 Need immediate assistance?
                </p>
                <p style="color: #666666; margin: 10px 0 0 0; line-height: 1.6;">
                    Our expert team is ready to help you start your UAE business journey. Contact us for a free consultation!
                </p>
            </div>
        </div>
        
        <!-- Services -->
        <div style="background-color: #f8f9fa; padding: 30px;">
            <h3 style="color: #333333; text-align: center; margin: 0 0 25px 0; font-size: 20px;">
                Our Services
            </h3>
            <div style="display: table; width: 100%;">
                <div style="display: table-cell; width: 50%; padding: 10px; vertical-align: top;">
                    <div style="text-align: center;">
                        <div style="color: #667eea; font-size: 24px; margin-bottom: 10px;">🏢</div>
                        <h4 style="color: #333333; margin: 0 0 5px 0; font-size: 14px;">UAE Mainland Setup</h4>
                    </div>
                </div>
                <div style="display: table-cell; width: 50%; padding: 10px; vertical-align: top;">
                    <div style="text-align: center;">
                        <div style="color: #667eea; font-size: 24px; margin-bottom: 10px;">🌐</div>
                        <h4 style="color: #333333; margin: 0 0 5px 0; font-size: 14px;">Free Zone Setup</h4>
                    </div>
                </div>
            </div>
            <div style="display: table; width: 100%;">
                <div style="display: table-cell; width: 50%; padding: 10px; vertical-align: top;">
                    <div style="text-align: center;">
                        <div style="color: #667eea; font-size: 24px; margin-bottom: 10px;">📋</div>
                        <h4 style="color: #333333; margin: 0 0 5px 0; font-size: 14px;">PRO Services</h4>
                    </div>
                </div>
                <div style="display: table-cell; width: 50%; padding: 10px; vertical-align: top;">
                    <div style="text-align: center;">
                        <div style="color: #667eea; font-size: 24px; margin-bottom: 10px;">💼</div>
                        <h4 style="color: #333333; margin: 0 0 5px 0; font-size: 14px;">Offshore License</h4>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #333333; padding: 30px; text-align: center;">
            <p style="color: #ffffff; margin: 0 0 15px 0; font-size: 18px; font-weight: bold;">
                Business Bay Consultancy
            </p>
            <p style="color: #cccccc; margin: 0 0 20px 0; font-size: 14px; line-height: 1.6;">
                Ras Al Khaimah, United Arab Emirates<br>
                📧 Info@bbcfze.com | Bbcfze@gmail.com<br>
                📱 +971 55 262 1001
            </p>
            
            <div style="margin: 20px 0;">
                <a href="https://www.instagram.com/businessbayzone/" style="color: #ffffff; text-decoration: none; margin: 0 10px; font-size: 20px;">📷</a>
                <a href="https://wa.me/971552621001" style="color: #ffffff; text-decoration: none; margin: 0 10px; font-size: 20px;">💬</a>
            </div>
            
            <p style="color: #999999; margin: 20px 0 0 0; font-size: 12px;">
                You received this email because you subscribed to our newsletter.<br>
                © 2024 Business Bay Consultancy. All rights reserved.
            </p>
        </div>
    </div>
</body>
</html>';

    // Plain text version
    $text_message = "Welcome to Business Bay Consultancy Newsletter!\n\n";
    $text_message .= "Thank you for subscribing! We're excited to have you join our community.\n\n";
    $text_message .= "What you can expect:\n";
    $text_message .= "• Latest UAE business setup updates\n";
    $text_message .= "• Exclusive insights on free zones and mainland setup\n";
    $text_message .= "• PRO services tips and regulatory changes\n";
    $text_message .= "• Special offers and consultation opportunities\n\n";
    $text_message .= "Need immediate assistance? Call us: +971 55 262 1001\n\n";
    $text_message .= "Best regards,\n";
    $text_message .= "Business Bay Consultancy Team\n";
    $text_message .= "Info@bbcfze.com | Bbcfze@gmail.com";

    // Email headers
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="boundary123"',
        'From: Business Bay Consultancy <' . $config['gmail_email'] . '>',
        'Reply-To: ' . $config['gmail_email'],
        'X-Mailer: PHP/' . phpversion(),
        'X-Priority: 3',
        'Return-Path: ' . $config['gmail_email']
    ];

    // Multipart message
    $message = "--boundary123\r\n";
    $message .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $message .= $text_message . "\r\n\r\n";
    $message .= "--boundary123\r\n";
    $message .= "Content-Type: text/html; charset=UTF-8\r\n";
    $message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $message .= $html_message . "\r\n\r\n";
    $message .= "--boundary123--";

    // Configure SMTP settings for Gmail
    ini_set('SMTP', 'smtp.gmail.com');
    ini_set('smtp_port', '587');
    ini_set('sendmail_from', $config['gmail_email']);

    // Send email
    $email_sent = mail($email, $subject, $message, implode("\r\n", $headers));
    $response['email_sent'] = $email_sent;
    
    if (!$email_sent) {
        error_log("Failed to send welcome email to: " . $email);
    }
    
} catch (Exception $e) {
    error_log("Email sending error: " . $e->getMessage());
    $response['email_sent'] = false;
}

// Determine overall success
$response['success'] = $response['formspree_success'] || $response['email_sent'];

if ($response['success']) {
    $response['message'] = 'Thank you for subscribing! Check your email for a welcome message.';
    
    // Log successful subscription
    $log_entry = date('Y-m-d H:i:s') . " - Newsletter subscription: " . $email . 
                 " (Formspree: " . ($response['formspree_success'] ? 'OK' : 'FAIL') . 
                 ", Email: " . ($response['email_sent'] ? 'OK' : 'FAIL') . ")\n";
    @file_put_contents('newsletter_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
    
} else {
    $response['message'] = 'Subscription processed, but there may have been an issue with confirmation email.';
}

// Return JSON response
header('Content-Type: application/json');
echo json_encode($response);
?> 