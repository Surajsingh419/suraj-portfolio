# Contact Form Setup for Vercel Deployment

## Quick Setup Steps

1. **Create Formspree Account:**
   - Go to https://formspree.io
   - Sign up for free account
   - Create a new form
   - Copy your form ID (example: `xpznqlry`)

2. **Update the Contact Form:**
   - Open `client/src/components/contact-section.tsx`
   - Find line 43: `https://formspree.io/f/YOUR_FORM_ID`
   - Replace `YOUR_FORM_ID` with your actual form ID
   - Example: `https://formspree.io/f/xpznqlry`

3. **Alternative Method - Environment Variable:**
   - In Vercel dashboard > Settings > Environment Variables
   - Add: `VITE_FORMSPREE_ID` = your form ID
   - Update code to use: `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`

## File Location to Update:
```
client/src/components/contact-section.tsx
Line 43: const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

## Benefits:
- ✅ Contact form will work on Vercel
- ✅ Messages sent to your email (sursingh1996@gmail.com)
- ✅ No server required
- ✅ Free for up to 50 submissions/month