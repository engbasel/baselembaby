# 🚀 Deployment Guide - Basel Embaby Portfolio

## ✅ Project Ready for Deployment!

Your portfolio is now a **React + Vite** application in the main directory and ready for deployment.

## 📁 Project Structure
```
baselembaby/
├── src/                    # React source code
│   ├── components/         # All React components
│   ├── assets/            # Images and static files
│   ├── styles/            # Global CSS
│   ├── firebase.js        # Firebase configuration
│   ├── App.jsx            # Main app
│   └── main.jsx           # Entry point
├── dist/                  # Production build (generated)
├── public/                # Public assets
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
└── README.md             # Documentation
```

## 🎯 Quick Start

### Run Development Server
```bash
npm run dev
```
Opens: http://localhost:5173

### Build for Production
```bash
npm run build
```
Output: `dist/` folder

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deployment Options

### 1️⃣ Deploy to GitHub Pages (Easiest)

**Step 1: Update vite.config.js**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/baselembaby/', // Replace with your repo name
})
```

**Step 2: Add deploy script to package.json**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

**Step 3: Install gh-pages**
```bash
npm install -D gh-pages
```

**Step 4: Deploy**
```bash
npm run deploy
```

**Step 5: Enable GitHub Pages**
- Go to: https://github.com/YOUR_USERNAME/baselembaby/settings/pages
- Source: Deploy from branch
- Branch: `gh-pages`
- Folder: `/ (root)`
- Save

Your site will be live at: `https://YOUR_USERNAME.github.io/baselembaby/`

---

### 2️⃣ Deploy to Vercel (Recommended - Custom Domain)

**Option A: Via Vercel Dashboard**
1. Go to: https://vercel.com/new
2. Import your GitHub repository
3. Framework Preset: **Vite**
4. Root Directory: `./`
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**

**Option B: Via Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Add Custom Domain (Optional)**
1. Go to Project Settings → Domains
2. Add your domain (e.g., `baselembaby.com`)
3. Update DNS records as instructed

---

### 3️⃣ Deploy to Netlify

**Option A: Drag & Drop**
1. Build the project:
```bash
npm run build
```
2. Go to: https://app.netlify.com/drop
3. Drag the `dist/` folder
4. Done!

**Option B: Connect GitHub (Auto Deploy)**
1. Go to: https://app.netlify.com/
2. New site from Git → GitHub
3. Select repository: `baselembaby`
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy site

**Option C: Netlify CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
npm run build
netlify deploy --prod --dir=dist
```

---

### 4️⃣ Deploy to Firebase Hosting

**Step 1: Install Firebase Tools**
```bash
npm install -g firebase-tools
```

**Step 2: Login to Firebase**
```bash
firebase login
```

**Step 3: Initialize Firebase**
```bash
firebase init hosting
```
- Select your Firebase project
- Public directory: `dist`
- Single-page app: `Yes`
- Overwrite index.html: `No`

**Step 4: Build and Deploy**
```bash
npm run build
firebase deploy --only hosting
```

Your site will be at: `https://YOUR-PROJECT.web.app`

---

### 5️⃣ Traditional Hosting (cPanel/FTP)

**Step 1: Build the project**
```bash
npm run build
```

**Step 2: Upload `dist/` contents**
- Using **FileZilla** or **cPanel File Manager**
- Upload all files from `dist/` to `public_html/` or `www/`

**Step 3: Configure .htaccess (Important for SPA)**
Create `.htaccess` in the root:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔧 Environment Variables (Optional)

For security, move Firebase credentials to environment variables:

**Step 1: Create `.env` file**
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

**Step 2: Update `src/firebase.js`**
```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};
```

**Step 3: Add to deployment platform**
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables
- **GitHub Pages**: Repository Settings → Secrets

---

## 📊 Performance Tips

### Optimize Build Size
The warning about chunk size is normal for React apps. To optimize:

**Update vite.config.js:**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          firebase: ['firebase/app', 'firebase/firestore']
        }
      }
    }
  }
})
```

---

## 🔒 Security Checklist

Before deploying:

- [ ] Firebase security rules configured
- [ ] Environment variables set (if using)
- [ ] `.env` added to `.gitignore`
- [ ] Contact form tested
- [ ] All personal info updated
- [ ] HTTPS enabled (automatic on Vercel/Netlify/GitHub Pages)

---

## 📱 Testing After Deployment

1. **Functionality Test**
   - Navigation works
   - All sections visible
   - Contact form submits to Firebase
   - CV download works
   - External links work

2. **Performance Test**
   - Run Lighthouse in Chrome DevTools
   - Target: 90+ score

3. **Responsive Test**
   - Test on mobile devices
   - Test on tablets
   - Test on desktop

---

## 🎉 Recommended: Vercel Deployment

I recommend **Vercel** because:
- ✅ Free custom domain
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Zero configuration
- ✅ Auto-deploy on Git push
- ✅ Best for React apps

**Deploy in 2 minutes:**
```bash
npm i -g vercel
vercel
```

---

## 🆘 Troubleshooting

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Assets Not Loading
- Check `base` in `vite.config.js`
- For subdomain: `base: '/'`
- For subfolder: `base: '/folder-name/'`

### Firebase Not Working
- Check Firebase config
- Verify Firestore rules
- Check browser console

### 404 on Refresh (SPA Issue)
- **Vercel/Netlify**: Add `vercel.json` or `_redirects`
- **Apache**: Use `.htaccess` (provided above)
- **GitHub Pages**: Set in deploy settings

---

## 📞 Support

Need help? Check:
- [Vite Deployment Docs](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)

---

**Your portfolio is ready! 🚀**

Choose your preferred deployment method and go live in minutes!
