# 🚀 Deployment Guide - Maana Pure Oil

This guide will help you deploy your application to production.

## 📋 Pre-Deployment Checklist

### Backend
- [ ] MongoDB Atlas account created
- [ ] Database connection string obtained
- [ ] JWT secret generated (min 32 characters)
- [ ] Admin credentials set
- [ ] Environment variables prepared

### Frontend
- [ ] Backend URL configured
- [ ] Build tested locally
- [ ] Environment variables prepared

## 🗄️ Database Setup (MongoDB Atlas)

### 1. Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up for free tier
3. Verify your email

### 2. Create a Cluster
1. Click "Build a Database"
2. Choose "FREE" tier (M0 Sandbox)
3. Select a cloud provider (AWS recommended)
4. Choose a region closest to your users
5. Name your cluster (e.g., "maana-cluster")
6. Click "Create Cluster"

### 3. Configure Database Access
1. Go to "Database Access" in left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Set username and strong password
5. Set "Database User Privileges" to "Read and write to any database"
6. Click "Add User"

### 4. Configure Network Access
1. Go to "Network Access" in left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Confirm (this is OK for production with strong credentials)

### 5. Get Connection String
1. Go to "Database" in left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Replace `<dbname>` with `maana-pure-oil`

Example: `mongodb+srv://username:password@cluster.mongodb.net/maana-pure-oil?retryWrites=true&w=majority`

## 🖥️ Backend Deployment

### Option 1: Render (Recommended - Free Tier Available)

#### Steps:
1. **Create Render Account**
   - Go to https://render.com
   - Sign up with GitHub

2. **Push Code to GitHub** (if not already)
   ```bash
   cd backend
   git init
   git add .
   git commit -m "Initial backend commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Create Web Service on Render**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: maana-backend
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Instance Type**: Free

4. **Add Environment Variables**
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=your-mongodb-atlas-connection-string
   JWT_SECRET=your-super-secret-key-minimum-32-characters-long
   FRONTEND_URL=https://your-frontend-url.vercel.app
   ADMIN_EMAIL=admin@maanapureoil.com
   ADMIN_PASSWORD=Admin@123
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (5-10 minutes)
   - Note your backend URL: https://maana-backend.onrender.com

6. **Seed Database** (One-time)
   - Go to "Shell" tab in Render dashboard
   - Run:
     ```bash
     node seed.js
     node seedAdmin.js
     ```

### Option 2: Railway

1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your backend repository
5. Add environment variables (same as Render)
6. Deploy
7. Get your backend URL from Railway

### Option 3: Heroku

1. Create Heroku account at https://heroku.com
2. Install Heroku CLI
3. Deploy:
   ```bash
   cd backend
   heroku login
   heroku create maana-backend
   heroku config:set NODE_ENV=production
   heroku config:set MONGODB_URI=your-connection-string
   heroku config:set JWT_SECRET=your-secret
   heroku config:set FRONTEND_URL=your-frontend-url
   git push heroku main
   ```

## 🌐 Frontend Deployment

### Option 1: Vercel (Recommended)

#### Steps:
1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Push Code to GitHub** (if not already)
   ```bash
   cd frontend
   git init
   git add .
   git commit -m "Initial frontend commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Import Project to Vercel**
   - Click "New Project"
   - Import from GitHub
   - Select your frontend repository

4. **Configure Build Settings**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. **Add Environment Variables**
   ```
   VITE_API_URL=https://your-backend-url.onrender.com/api
   ```

6. **Deploy**
   - Click "Deploy"
   - Wait for deployment (2-3 minutes)
   - Get your frontend URL: https://maana-pure-oil.vercel.app

7. **Update Backend CORS**
   - Go back to Render/Railway
   - Update `FRONTEND_URL` environment variable with your Vercel URL
   - Redeploy backend

### Option 2: Netlify

1. **Create Netlify Account**
   - Go to https://netlify.com
   - Sign up with GitHub

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your frontend repository

3. **Configure Build**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

4. **Add Environment Variables**
   - Go to Site settings → Environment variables
   - Add:
     ```
     VITE_API_URL=https://your-backend-url.onrender.com/api
     ```

5. **Deploy**
   - Click "Deploy site"
   - Get your URL

## 🔒 Security Best Practices

### 1. JWT Secret
Generate a strong JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 2. Database Credentials
- Use strong, unique passwords
- Never commit credentials to Git
- Use environment variables

### 3. CORS Configuration
- Update FRONTEND_URL in backend to match your actual frontend domain
- Don't use wildcards (*) in production

### 4. HTTPS
- Both Render and Vercel provide free SSL/HTTPS
- Ensure your app only loads HTTPS resources

## ✅ Post-Deployment Testing

### 1. Test Backend
```bash
# Health check
curl https://your-backend-url.com/api/health

# Should return: {"status":"OK","message":"Server is running"}
```

### 2. Test Frontend
1. Visit your frontend URL
2. Check if products load
3. Try registration
4. Test login
5. Add items to cart
6. Test admin login

### 3. Test Full Flow
1. Register new user
2. Login
3. Browse products
4. Add to cart (should work after login)
5. View cart
6. Admin login
7. Create product
8. Verify product appears on frontend

## 🐛 Common Deployment Issues

### Issue: "Cannot connect to MongoDB"
**Solution**: 
- Verify MongoDB connection string
- Check database user password
- Ensure IP whitelist includes 0.0.0.0/0
- Verify network access settings

### Issue: "CORS error"
**Solution**:
- Update FRONTEND_URL in backend env vars
- Ensure CORS is properly configured in server.js
- Clear browser cache

### Issue: "JWT token invalid"
**Solution**:
- Ensure JWT_SECRET is same as development
- Clear localStorage in browser
- Re-login

### Issue: "Cart not persisting"
**Solution**:
- Check if user is authenticated
- Verify cart API endpoints are accessible
- Check browser console for errors

### Issue: "Images not loading"
**Solution**:
- Ensure upload directory is writable
- Consider using cloud storage (AWS S3, Cloudinary)
- Check image paths in database

## 📊 Monitoring

### Backend Logs
- **Render**: Go to "Logs" tab in dashboard
- **Railway**: Click on service → "View Logs"
- **Heroku**: `heroku logs --tail`

### Frontend Logs
- **Vercel**: Go to "Deployments" → Click deployment → "Function Logs"
- **Netlify**: Go to "Functions" → "Function logs"

## 🔄 Continuous Deployment

Both Vercel and Render support automatic deployments:

1. **GitHub Integration**:
   - Any push to main branch triggers auto-deploy
   - Pull requests get preview deployments

2. **Manual Deploy**:
   - Render: Click "Manual Deploy" → "Clear build cache & deploy"
   - Vercel: Go to Deployments → "Redeploy"

## 📧 Environment Variables Summary

### Backend (Render/Railway/Heroku)
```
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/maana-pure-oil
JWT_SECRET=64-character-random-string-here
FRONTEND_URL=https://maana-pure-oil.vercel.app
ADMIN_EMAIL=admin@maanapureoil.com
ADMIN_PASSWORD=Admin@123
```

### Frontend (Vercel/Netlify)
```
VITE_API_URL=https://maana-backend.onrender.com/api
```

## 🎉 Success!

Your application should now be live at:
- **Frontend**: https://your-app.vercel.app
- **Backend**: https://your-backend.onrender.com
- **Admin Panel**: https://your-app.vercel.app/admin/login

## 📞 Support

If you encounter issues:
1. Check deployment logs
2. Verify all environment variables
3. Test API endpoints individually
4. Check MongoDB connection
5. Clear browser cache and localStorage

---

**Congratulations! Your Maana Pure Oil e-commerce platform is now live! 🎊**
