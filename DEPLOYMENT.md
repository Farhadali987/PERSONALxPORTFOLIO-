# 📦 Deployment Guide

## Deploy to Production

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/portfolio-lms.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables
   - Click "Deploy"

3. **Environment Variables on Vercel**
   ```env
   DATABASE_URL="postgresql://user:password@host:5432/portfolio_lms"
   JWT_SECRET="your-production-jwt-secret"
   GITHUB_USERNAME="your-github-username"
   GITHUB_TOKEN="your-github-token"
   NEXT_PUBLIC_SITE_URL="https://your-domain.com"
   ```

4. **Set up Production Database**
   
   Vercel recommends using **Neon** or **Supabase** for PostgreSQL:
   
   **Neon (Serverless PostgreSQL)**:
   - Go to [neon.tech](https://neon.tech)
   - Create a free account
   - Create a new project
   - Copy the connection string
   - Add to Vercel environment variables as `DATABASE_URL`

   **Supabase**:
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Get the connection string from Settings → Database
   - Add to Vercel environment variables

5. **Run Database Migrations**
   ```bash
   # In Vercel Settings → Deployments
   # Add a post-install script:
   "postinstall": "prisma generate && prisma db push"
   ```

---

### Option 2: Railway

Railway offers easy PostgreSQL database hosting with automatic deployments.

#### Steps:

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Deploy from GitHub**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Add PostgreSQL Database**
   - Click "New" → "Database" → "PostgreSQL"
   - Railway will provision a database automatically

4. **Configure Environment Variables**
   ```env
   DATABASE_URL=${{Postgres.DATABASE_URL}}
   JWT_SECRET="your-jwt-secret"
   GITHUB_USERNAME="your-github-username"
   ```

5. **Deploy**
   - Railway will automatically deploy
   - Database will be pushed automatically

---

### Option 3: Self-Hosted (VPS)

Deploy on your own server using Docker or directly.

#### Using Docker:

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   
   WORKDIR /app
   
   COPY package*.json ./
   RUN npm ci
   
   COPY . .
   
   RUN npx prisma generate
   RUN npm run build
   
   EXPOSE 3000
   
   CMD ["npm", "start"]
   ```

2. **Create docker-compose.yml**
   ```yaml
   version: '3.8'
   
   services:
     app:
       build: .
       ports:
         - "3000:3000"
       environment:
         DATABASE_URL: postgresql://user:password@db:5432/portfolio_lms
         JWT_SECRET: ${JWT_SECRET}
       depends_on:
         - db
     
     db:
       image: postgres:15
       environment:
         POSTGRES_USER: user
         POSTGRES_PASSWORD: password
         POSTGRES_DB: portfolio_lms
       volumes:
         - postgres_data:/var/lib/postgresql/data
   
   volumes:
     postgres_data:
   ```

3. **Deploy**
   ```bash
   docker-compose up -d
   ```

#### Using PM2 (Process Manager):

1. **Install PM2**
   ```bash
   npm install -g pm2
   ```

2. **Build and Start**
   ```bash
   npm run build
   pm2 start npm --name "portfolio-lms" -- start
   pm2 save
   pm2 startup
   ```

3. **Setup Nginx Reverse Proxy**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

### Option 4: Render

Render offers free tier for web services.

#### Steps:

1. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create Web Service**
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`

3. **Add PostgreSQL**
   - Click "New" → "PostgreSQL"
   - Copy the internal database URL
   - Add to environment variables

4. **Environment Variables**
   ```env
   DATABASE_URL="postgresql://..."
   JWT_SECRET="your-secret"
   ```

---

## Database Setup for Production

### PostgreSQL Connection String Format

```
postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME?schema=public
```

### Recommended Database Providers

| Provider | Free Tier | Features |
|----------|-----------|----------|
| **Neon** | ✅ 0.5 GB | Serverless, branching |
| **Supabase** | ✅ 500 MB | Full backend suite |
| **Railway** | ✅ $5 credit | Easy deployment |
| **PlanetScale** | ❌ Free tier ended | MySQL-compatible |
| **CockroachDB** | ✅ 5 GB | Distributed SQL |

---

## Environment Variables

### Required Variables

```env
# Database (Production PostgreSQL)
DATABASE_URL="postgresql://user:pass@host:5432/dbname"

# Security
JWT_SECRET="generate-with-openssl-rand-base64-32"

# GitHub Integration (Optional)
GITHUB_USERNAME="your-username"
GITHUB_TOKEN="ghp_xxx"

# Site Configuration
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
NEXT_PUBLIC_SITE_NAME="Your Name Portfolio"
```

### Generate JWT Secret

```bash
# Using OpenSSL
openssl rand -base64 32

# Or use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

---

## Post-Deployment Checklist

- [ ] Database is connected and seeded
- [ ] Environment variables are set
- [ ] Custom domain is configured (optional)
- [ ] SSL certificate is active (automatic on Vercel)
- [ ] Test authentication (signup/login)
- [ ] Test course enrollment
- [ ] Test progress tracking
- [ ] Test GitHub integration
- [ ] Check error logs
- [ ] Set up monitoring (optional)

---

## Performance Optimization

### Enable Caching

Next.js automatically caches static content. For dynamic content:

```typescript
// In API routes
export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour
```

### Image Optimization

Use Next.js Image component:

```tsx
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority
/>
```

### Database Indexing

Add indexes in Prisma schema:

```prisma
model User {
  email String @unique @db.VarChar(255)
  
  @@index([email])
}
```

---

## Monitoring & Analytics

### Vercel Analytics
- Built-in analytics for Vercel deployments
- Go to Vercel Dashboard → Analytics

### Custom Analytics
```bash
npm install @vercel/analytics
```

```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## Backup & Recovery

### Database Backup

```bash
# PostgreSQL backup
pg_dump $DATABASE_URL > backup.sql

# Restore
psql $DATABASE_URL < backup.sql
```

### Automated Backups

Use your database provider's automated backup feature:
- **Neon**: Automatic daily backups
- **Supabase**: Daily backups on paid plans
- **Railway**: Automated snapshots

---

## Security Best Practices

1. **Use Environment Variables**
   - Never commit `.env` files
   - Use secrets management

2. **Enable HTTPS**
   - Automatic on Vercel, Railway, Render
   - Use Let's Encrypt for self-hosted

3. **Rate Limiting**
   ```typescript
   // Add rate limiting to API routes
   import { Ratelimit } from "@upstash/ratelimit"
   ```

4. **Input Validation**
   - Validate all user inputs
   - Use libraries like Zod

5. **Regular Updates**
   - Keep dependencies updated
   - Monitor for security advisories

---

## Support

For deployment issues:
- Check platform-specific documentation
- Review error logs
- Contact platform support

**Good luck with your deployment! 🚀**
