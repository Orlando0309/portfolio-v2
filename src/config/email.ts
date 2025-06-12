// EmailJS Configuration
// Sign up at https://www.emailjs.com/ and replace these values with your own

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
}

// Instructions for setting up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new email service (Gmail, Outlook, etc.)
// 3. Create an email template with the following variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{subject}} - email subject
//    - {{message}} - email message
//    - {{to_email}} - your email (where you want to receive messages)
// 4. Get your Service ID, Template ID, and Public Key
// 5. Create a .env file in the root directory with:
//    VITE_EMAILJS_SERVICE_ID=your_service_id
//    VITE_EMAILJS_TEMPLATE_ID=your_template_id
//    VITE_EMAILJS_PUBLIC_KEY=your_public_key

export default emailConfig 