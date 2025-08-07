# Deploy to GitHub Repository: my-portfolio

## Method 1: Direct Upload (Recommended)

1. **Download all files from Replit:**
   - Click on the three dots (⋯) menu in Replit
   - Select "Download as zip"
   - Extract the zip file on your computer

2. **Upload to your GitHub repository:**
   - Go to https://github.com/Surajsingh419/my-portfolio
   - Click "uploading an existing file"
   - Drag and drop ALL the portfolio files
   - Make sure to include:
     - `client/` folder (entire React app)
     - `server/` folder 
     - `shared/` folder
     - `vercel.json`
     - `README.md`
     - `package.json`
     - `vite.config.ts`
     - `tailwind.config.ts`
     - `tsconfig.json`
     - All other config files

3. **Commit the files:**
   - Add commit message: "Initial portfolio upload - Ready for Vercel deployment"
   - Click "Commit changes"

## Method 2: Git Commands (If you have Git installed)

```bash
# Clone your empty repository
git clone https://github.com/Surajsingh419/my-portfolio.git
cd my-portfolio

# Copy all portfolio files to this directory
# (Copy from your downloaded Replit files)

# Add all files
git add .

# Commit with message
git commit -m "Initial portfolio upload - Ready for Vercel deployment"

# Push to GitHub
git push origin main
```

## Method 3: GitHub Desktop (User-friendly)

1. Download GitHub Desktop
2. Clone your repository: https://github.com/Surajsingh419/my-portfolio
3. Copy all portfolio files to the cloned folder
4. Commit and push using GitHub Desktop interface

## After uploading to GitHub:

1. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Select "my-portfolio" repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"

2. **Set up contact form:**
   - Go to [formspree.io](https://formspree.io)
   - Create account and new form
   - Replace `YOUR_FORM_ID` in `client/src/components/contact-section.tsx` line 43
   - With your actual Formspree form ID

3. **Your portfolio will be live at:**
   `https://my-portfolio-surajsingh.vercel.app` (or similar)

## Important Files to Include:

✅ **Essential for deployment:**
- `vercel.json` - Vercel configuration
- `package.json` - Dependencies
- `client/` folder - React frontend
- `vite.config.ts` - Build configuration
- `tailwind.config.ts` - Styling configuration

✅ **Optional but recommended:**
- `README.md` - Project documentation
- `DEPLOYMENT.md` - Deployment instructions
- `server/` folder - Backend code (not used in Vercel)
- `shared/` folder - Shared types

The portfolio is ready for deployment with working contact form, responsive design, and professional appearance!