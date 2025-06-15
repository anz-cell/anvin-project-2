<?php
// newsletter-handler.php
// Dual system: Formspree + Gmail App Password auto-responder

// Enable CORS
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

// Configuration - UPDATE THESE WITH YOUR DETAILS
$gmail_username = 'anztri2022@gmail.com'; // UPDATE: Your Gmail address
$gmail_app_password = 'ufuongqhfvwvttxe'; // Your Gmail app password
$from_name = 'Business Bay Consultancy';
$formspree_url = 'https://formspree.io/f/xkgbbzgq'; // Your newsletter form

// Get form data
$email = trim($_POST['email'] ?? '');

// Validate email
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Valid email is required']);
    exit;
}

// Step 1: Submit to Formspree
try {
    $formspree_data = ['email' => $email];
    $formspree_options = [
        'http' => [
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($formspree_data)
        ]
    ];
    
    $formspree_context = stream_context_create($formspree_options);
    $formspree_result = file_get_contents($formspree_url, false, $formspree_context);
    
    if ($formspree_result === FALSE) {
        throw new Exception('Formspree submission failed');
    }
    
} catch (Exception $e) {
    // Continue even if Formspree fails
    error_log('Formspree error: ' . $e->getMessage());
}

// Step 2: Send welcome email via Gmail SMTP
try {
    // Require PHPMailer (you'll need to install this)
    // Download from: https://github.com/PHPMailer/PHPMailer
    require_once 'PHPMailer/src/PHPMailer.php';
    require_once 'PHPMailer/src/SMTP.php';
    require_once 'PHPMailer/src/Exception.php';
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    $mail = new PHPMailer(true);
    
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $gmail_username;
    $mail->Password = $gmail_app_password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    
    // Recipients
    $mail->setFrom($gmail_username, $from_name);
    $mail->addAddress($email);
    $mail->addReplyTo($gmail_username, $from_name);
    
    // Content
    $mail->isHTML(true);
    $mail->Subject = '🎉 Welcome to Business Bay Consultancy Newsletter!';
    $mail->Body = getWelcomeEmailHTML();
    $mail->AltBody = getWelcomeEmailText();
    
    $mail->send();
    
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for subscribing! Please check your email for confirmation.'
    ]);
    
} catch (Exception $e) {
    // Even if email fails, subscription was recorded in Formspree
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for subscribing! (Email confirmation may be delayed)'
    ]);
    error_log('Email error: ' . $e->getMessage());
}

function getWelcomeEmailHTML() {
    return '
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ff0000, #1a237e); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .feature { display: flex; align-items: center; margin: 15px 0; }
            .feature-icon { color: #4CAF50; margin-right: 10px; font-size: 18px; }
            .footer { text-align: center; margin-top: 20px; color: #666; }
            .cta-button { background: #ff0000; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; display: inline-block; margin: 20px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎉 Welcome to Our Newsletter!</h1>
                <p>Thank you for joining Business Bay Consultancy</p>
            </div>
            <div class="content">
                <h2>What you\'ll receive:</h2>
                <div class="feature">
                    <span class="feature-icon">✅</span>
                    <span>Latest UAE business setup insights</span>
                </div>
                <div class="feature">
                    <span class="feature-icon">✅</span>
                    <span>Regulatory updates and changes</span>
                </div>
                <div class="feature">
                    <span class="feature-icon">✅</span>
                    <span>Exclusive offers and promotions</span>
                </div>
                <div class="feature">
                    <span class="feature-icon">✅</span>
                    <span>Expert tips for business growth</span>
                </div>
                <div class="feature">
                    <span class="feature-icon">✅</span>
                    <span>Success stories from entrepreneurs</span>
                </div>
                
                <p>Need immediate assistance? Contact us:</p>
                <a href="tel:+971552621001" class="cta-button">📞 Call: +971 55 262 1001</a>
                <a href="https://wa.me/971552621001" class="cta-button">💬 WhatsApp Chat</a>
                
                <div class="footer">
                    <p>Business Bay Consultancy<br>
                    📧 Info@bbcfze.com | 📱 +971 55 262 1001<br>
                    Ras Al Khaimah, UAE</p>
                </div>
            </div>
        </div>
    </body>
    </html>';
}

function getWelcomeEmailText() {
    return "
🎉 Welcome to Business Bay Consultancy Newsletter!

Thank you for subscribing! You'll receive:
✅ Latest UAE business setup insights
✅ Regulatory updates and changes  
✅ Exclusive offers and promotions
✅ Expert tips for business growth
✅ Success stories from entrepreneurs

Need immediate assistance?
📞 Call: +971 55 262 1001
💬 WhatsApp: https://wa.me/971552621001
📧 Email: Info@bbcfze.com

Best regards,
Business Bay Consultancy Team
Ras Al Khaimah, UAE
";
}
?> 