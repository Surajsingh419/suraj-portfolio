# Deploying Your Portfolio to Vercel

## Quick Setup

1. **Push your code to GitHub:**
   - Create a new repository on GitHub
   - Push this portfolio code to the repository

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Select your portfolio repository
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"

3. **Set up contact form (required):**
   - Go to [formspree.io](https://formspree.io)
   - Sign up for a free account
   - Create a new form
   - Copy your form ID (looks like: xpznqlry)
   - In your deployed Vercel dashboard, go to Settings > Environment Variables
   - Add: `VITE_FORMSPREE_ID` with your form ID as the value
   - Or manually update the contact form URL in the code

4. **Update contact form:**
   - Replace `YOUR_FORM_ID` in `client/src/components/contact-section.tsx` 
   - With your actual Formspree form ID
   - Line 43: Change `https://formspree.io/f/YOUR_FORM_ID` to `https://formspree.io/f/YOUR_ACTUAL_ID`

## Your Portfolio Features After Deployment

✅ **Fully responsive design**
✅ **Smooth animations**
✅ **Professional sections (About, Skills, Experience, Projects, Reviews)**
✅ **Working contact form** (with Formspree)
✅ **Your personal photo displayed**
✅ **Mobile-friendly navigation**

## Vercel Benefits

- **Fast deployment:** Your site will be live in minutes
- **Custom domain:** You can add your own domain later
- **Automatic updates:** Push to GitHub = automatic deployment
- **Global CDN:** Fast loading worldwide
- **HTTPS:** Secure connection included

## Sharing Your Portfolio

After deployment, you'll get a URL like: `https://your-portfolio-name.vercel.app`

You can share this link with:
- Potential employers
- Clients
- Professional networks
- Social media

## Next Steps After Deployment

1. Test the contact form
2. Add your custom domain (optional)
3. Set up Google Analytics (optional)
4. Share your live portfolio link!