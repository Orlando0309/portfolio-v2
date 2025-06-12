# Email Setup Instructions

The contact form uses EmailJS to send emails. Follow these steps to set it up:

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Choose one of these template options:

### Option A: HTML Template (Recommended)
Copy the content from `email-template-example.html` into the HTML editor. This provides:
- Professional neo-brutalist styling
- All contact form variables
- Timestamp information
- Quick reply button
- System information footer

### Option B: Simple Text Template
Copy the content from `email-template-simple.txt` for a basic text version.

### Option C: Basic Template
```html
Subject: {{subject}}

From: {{from_name}} <{{from_email}}>

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key

1. Go to "Account" > "General"
2. Find your **Public Key** (also called User ID)

## 5. Configure Environment Variables

Create a `.env` file in the root directory of your project:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## 6. Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email to confirm it's working

## Template Variables

The email template uses these variables:

### Required Variables (sent by the form):
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Email subject
- `{{message}}` - Email message content
- `{{to_email}}` - Your email (where messages are sent)

### Automatic Variables (added by the system):
- `{{sent_date}}` - Date when the message was sent
- `{{sent_time}}` - Time when the message was sent

### Usage Examples:
```html
<!-- Basic contact info -->
From: {{from_name}} <{{from_email}}>
Subject: {{subject}}

<!-- Message with timestamp -->
Received on {{sent_date}} at {{sent_time}}
Message: {{message}}

<!-- Quick reply link -->
<a href="mailto:{{from_email}}?subject=Re: {{subject}}">Reply</a>
```

## Troubleshooting

- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Verify your EmailJS service is active and properly configured
- Check your spam folder if emails aren't arriving

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic support
- All core features

For higher volume, consider upgrading to a paid plan. 