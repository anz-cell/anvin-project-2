<?php
// install-phpmailer.php
// One-time script to download and install PHPMailer

echo "<h2>PHPMailer Installation Script</h2>";

// Check if PHPMailer already exists
if (file_exists('PHPMailer/src/PHPMailer.php')) {
    echo "<p style='color: green;'>✅ PHPMailer is already installed!</p>";
    echo "<p><a href='test-newsletter.php'>Test Newsletter System</a></p>";
    exit;
}

// Download PHPMailer
echo "<p>📦 Downloading PHPMailer...</p>";

$zipUrl = 'https://github.com/PHPMailer/PHPMailer/archive/refs/heads/master.zip';
$zipFile = 'phpmailer.zip';

// Download the ZIP file
$zipContent = file_get_contents($zipUrl);
if ($zipContent === false) {
    die("<p style='color: red;'>❌ Failed to download PHPMailer. Please upload manually.</p>");
}

file_put_contents($zipFile, $zipContent);
echo "<p>✅ Downloaded PHPMailer ZIP file</p>";

// Extract ZIP
if (class_exists('ZipArchive')) {
    $zip = new ZipArchive;
    if ($zip->open($zipFile) === TRUE) {
        echo "<p>📂 Extracting files...</p>";
        
        // Extract only the src folder
        for ($i = 0; $i < $zip->numFiles; $i++) {
            $filename = $zip->getNameIndex($i);
            
            // Only extract files from the src directory
            if (strpos($filename, 'PHPMailer-master/src/') === 0) {
                $newFilename = str_replace('PHPMailer-master/src/', 'PHPMailer/src/', $filename);
                
                // Create directory if it doesn't exist
                $dir = dirname($newFilename);
                if (!is_dir($dir)) {
                    mkdir($dir, 0755, true);
                }
                
                // Extract file
                if (!is_dir($filename)) {
                    copy("zip://$zipFile#$filename", $newFilename);
                }
            }
        }
        $zip->close();
        echo "<p>✅ Extracted PHPMailer files</p>";
    } else {
        echo "<p style='color: red;'>❌ Failed to extract ZIP file</p>";
    }
} else {
    echo "<p style='color: red;'>❌ ZipArchive not available. Please upload manually.</p>";
}

// Clean up
unlink($zipFile);
echo "<p>🧹 Cleaned up temporary files</p>";

// Verify installation
if (file_exists('PHPMailer/src/PHPMailer.php')) {
    echo "<h3 style='color: green;'>🎉 PHPMailer Successfully Installed!</h3>";
    echo "<p><strong>Next Steps:</strong></p>";
    echo "<ul>";
    echo "<li>✅ PHPMailer is ready to use</li>";
    echo "<li>🧪 <a href='test-newsletter.php'>Test your newsletter system</a></li>";
    echo "<li>🗑️ Delete this file (install-phpmailer.php) for security</li>";
    echo "</ul>";
} else {
    echo "<h3 style='color: red;'>❌ Installation Failed</h3>";
    echo "<p>Please upload PHPMailer manually:</p>";
    echo "<ol>";
    echo "<li>Download from: <a href='https://github.com/PHPMailer/PHPMailer/releases'>PHPMailer Releases</a></li>";
    echo "<li>Extract and upload the 'src' folder to PHPMailer/src/</li>";
    echo "</ol>";
}
?>

<style>
body { 
    font-family: Arial, sans-serif; 
    max-width: 800px; 
    margin: 50px auto; 
    padding: 20px; 
    background: #f5f5f5;
}
h2, h3 { 
    color: #333; 
    border-bottom: 2px solid #ff0000; 
    padding-bottom: 10px;
}
p { 
    background: white; 
    padding: 10px; 
    border-radius: 5px; 
    margin: 10px 0;
}
a { 
    color: #ff0000; 
    text-decoration: none; 
    font-weight: bold;
}
a:hover { 
    text-decoration: underline; 
}
ul, ol { 
    background: white; 
    padding: 20px; 
    border-radius: 5px;
}
</style> 