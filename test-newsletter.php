<?php
// test-newsletter.php
// Test script for newsletter system

echo "<h2>Newsletter System Test</h2>";

// Check if PHPMailer is installed
if (!file_exists('PHPMailer/src/PHPMailer.php')) {
    echo "<p style='color: red;'>❌ PHPMailer not found. Please run <a href='install-phpmailer.php'>install-phpmailer.php</a> first.</p>";
    exit;
}

// Check configuration
include 'newsletter-handler.php';

echo "<h3>Configuration Check</h3>";
echo "<div class='config-check'>";
echo "<p><strong>Gmail Username:</strong> " . (strpos($gmail_username, '@gmail.com') ? '✅ Valid' : '❌ Invalid') . "</p>";
echo "<p><strong>App Password:</strong> " . (strlen($gmail_app_password) === 16 ? '✅ Valid length' : '❌ Should be 16 characters') . "</p>";
echo "<p><strong>From Name:</strong> " . htmlspecialchars($from_name) . "</p>";
echo "<p><strong>Formspree URL:</strong> " . htmlspecialchars($formspree_url) . "</p>";
echo "</div>";

// Test form
echo "<h3>Test Newsletter Subscription</h3>";
echo "<div class='test-form'>";
echo "<form method='POST' action='newsletter-handler.php'>";
echo "<p><label>Test Email Address:</label><br>";
echo "<input type='email' name='email' placeholder='Enter test email' required style='width: 300px; padding: 10px; margin: 5px 0;'></p>";
echo "<p><button type='submit' style='background: #ff0000; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;'>🧪 Test Newsletter System</button></p>";
echo "</form>";
echo "</div>";

// Connection test
echo "<h3>SMTP Connection Test</h3>";
echo "<div class='smtp-test'>";

try {
    require_once 'PHPMailer/src/PHPMailer.php';
    require_once 'PHPMailer/src/SMTP.php';
    require_once 'PHPMailer/src/Exception.php';
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $gmail_username;
    $mail->Password = $gmail_app_password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    
    // Test connection without sending
    $mail->SMTPDebug = 0;
    if ($mail->smtpConnect()) {
        echo "<p style='color: green;'>✅ SMTP Connection Successful!</p>";
        $mail->smtpClose();
    } else {
        echo "<p style='color: red;'>❌ SMTP Connection Failed</p>";
    }
    
} catch (Exception $e) {
    echo "<p style='color: red;'>❌ SMTP Test Error: " . $e->getMessage() . "</p>";
}

echo "</div>";

// Instructions
echo "<h3>Testing Instructions</h3>";
echo "<div class='instructions'>";
echo "<ol>";
echo "<li><strong>Enter a test email</strong> (use your own email for testing)</li>";
echo "<li><strong>Click 'Test Newsletter System'</strong></li>";
echo "<li><strong>Check the test email inbox</strong> for welcome email</li>";
echo "<li><strong>Check your Formspree dashboard</strong> for submission</li>";
echo "<li><strong>Verify both systems work</strong></li>";
echo "</ol>";
echo "</div>";

// Security note
echo "<h3>🔒 Security Note</h3>";
echo "<div class='security'>";
echo "<p><strong>After testing:</strong></p>";
echo "<ul>";
echo "<li>Delete <code>install-phpmailer.php</code></li>";
echo "<li>Delete <code>test-newsletter.php</code></li>";
echo "<li>Keep only <code>newsletter-handler.php</code></li>";
echo "</ul>";
echo "</div>";
?>

<style>
body { 
    font-family: Arial, sans-serif; 
    max-width: 900px; 
    margin: 30px auto; 
    padding: 20px; 
    background: #f5f5f5;
    line-height: 1.6;
}

h2, h3 { 
    color: #333; 
    border-bottom: 2px solid #ff0000; 
    padding-bottom: 10px;
}

.config-check, .test-form, .smtp-test, .instructions, .security { 
    background: white; 
    padding: 20px; 
    border-radius: 10px; 
    margin: 20px 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.config-check p { 
    margin: 10px 0; 
    padding: 8px; 
    background: #f9f9f9; 
    border-radius: 5px;
}

input[type="email"] {
    width: 100%;
    max-width: 400px;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
}

button {
    background: #ff0000 !important;
    color: white !important;
    padding: 12px 25px !important;
    border: none !important;
    border-radius: 5px !important;
    cursor: pointer !important;
    font-size: 16px !important;
    transition: background 0.3s ease !important;
}

button:hover {
    background: #cc0000 !important;
}

code {
    background: #f0f0f0;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: monospace;
}

ol, ul {
    padding-left: 20px;
}

li {
    margin: 8px 0;
}

a { 
    color: #ff0000; 
    text-decoration: none; 
    font-weight: bold;
}

a:hover { 
    text-decoration: underline; 
}
</style> 