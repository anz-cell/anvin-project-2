# 📧 Email Setup Guide for Business Bay Consultancy

## Quick Activation Checklist

After completing the EmailJS setup, you need to replace 4 values in your `index.html` file:

### 🔍 **Find These Lines in index.html:**

1. **Line ~1015:** `emailjs.init("YOUR_PUBLIC_KEY");`
2. **Line ~1080:** `'YOUR_SERVICE_ID',` (first occurrence)
3. **Line ~1081:** `'YOUR_TEMPLATE_ID',` (contact form template)
4. **Line ~1120:** `'YOUR_AUTO_REPLY_TEMPLATE_ID',` (auto-reply template)

### 🔄 **Replace With Your Actual Values:**

```javascript
// 1. Replace YOUR_PUBLIC_KEY
emailjs.init("user_abc123def456ghi789"); // Your actual public key

// 2. Replace YOUR_SERVICE_ID (use same ID for both)
'service_abc123def', // Your actual service ID

// 3. Replace YOUR_TEMPLATE_ID 
'template_contact123', // Your contact form template ID

// 4. Replace YOUR_AUTO_REPLY_TEMPLATE_ID
'template_reply456', // Your auto-reply template ID
```

### ✅ **Final Activation Steps:**

1. **Uncomment the EmailJS code blocks:**
   - Remove `/*` and `*/` around the actual EmailJS calls
   - Comment out or remove the demo functions

2. **Test the contact form:**
   - Fill out the form on your website
   - Check if you receive the email
   - Check if the customer gets auto-reply

## 📋 **Your EmailJS Credentials Template**

Fill this out as you complete the setup:

```
✅ Public Key: user_________________
✅ Service ID: service_____________
✅ Contact Template ID: template_____________
✅ Auto-Reply Template ID: template_____________
```

## 🚨 **Important Notes:**

- **Free Plan:** 200 emails/month (perfect for contact forms)
- **Email Delivery:** Usually instant, max 5 minutes
- **Spam Prevention:** EmailJS has built-in spam protection
- **Backup:** WhatsApp fallback is already implemented

## 🔧 **Troubleshooting:**

**If emails don't send:**
1. Check browser console for errors
2. Verify all 4 credentials are correct
3. Test templates in EmailJS dashboard
4. Check spam folder
5. Ensure Gmail/email service is properly connected

**Common Issues:**
- Wrong template variable names
- Service not properly connected
- Public key not initialized
- Template IDs mixed up

## 📞 **Need Help?**

If you encounter issues:
1. Check the browser console (F12) for error messages
2. Test templates directly in EmailJS dashboard
3. Verify email service connection
4. Contact EmailJS support (they're very helpful!)

---

**Once activated, your contact form will:**
- ✅ Send professional emails to Info@bbcfze.com
- ✅ Send auto-replies to customers
- ✅ Show loading states and success messages
- ✅ Fall back to WhatsApp if needed
- ✅ Work perfectly on all devices 
