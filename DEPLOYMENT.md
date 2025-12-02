# Deployment Guide - Vercel

This guide explains how to deploy the pixel-forge website to Vercel.

## Prerequisites

- [Vercel account](https://vercel.com/signup)
- [Vercel CLI](https://vercel.com/docs/cli) (optional, for CLI deployment)
- Node.js 18+ installed locally

## Project Structure

This is a full-stack application with:
- **Frontend**: Vite + React SPA (built to `dist/spa`)
- **Backend**: Express API (wrapped as serverless functions in `api/`)

## Environment Variables

Before deploying, configure these environment variables in your Vercel project settings:

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PING_MESSAGE` | Custom message for the `/api/ping` endpoint | `"pong"` |

### Adding Environment Variables

1. Go to your project in the Vercel dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable for Production, Preview, and Development environments

## Deployment Methods

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click **Add New** → **Project**
   - Import your Git repository (GitHub, GitLab, or Bitbucket)

2. **Configure Project**
   - Vercel will auto-detect the configuration from `vercel.json`
   - Framework Preset: **Other**
   - Build Command: `npm run build` (auto-configured)
   - Output Directory: `dist/spa` (auto-configured)

3. **Deploy**
   - Click **Deploy**
   - Vercel will build and deploy your application
   - You'll get a production URL (e.g., `your-project.vercel.app`)

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # For preview deployment
   vercel
   
   # For production deployment
   vercel --prod
   ```

## Local Testing

Before deploying, test the production build locally:

```bash
# Build the application
npm run build

# Test the production server
npm start
```

The application will run on `http://localhost:3000` (or the port specified in your `.env` file).

## Vercel Configuration

The `vercel.json` file configures:

- **Build Settings**: Uses `npm run build` to build both client and server
- **Output Directory**: Serves static files from `dist/spa`
- **API Routes**: Routes `/api/*` requests to serverless functions
- **SPA Routing**: Rewrites all other routes to `index.html` for React Router
- **Security Headers**: Adds security headers to all responses

## API Endpoints

After deployment, your API will be available at:

- `https://your-project.vercel.app/api/ping` - Health check endpoint
- `https://your-project.vercel.app/api/demo` - Demo endpoint

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json` (not just `devDependencies`)
- Verify Node.js version compatibility in Vercel settings
- Review build logs in Vercel dashboard

### API Routes Not Working

- Ensure `serverless-http` is installed as a dependency
- Check that `api/index.ts` correctly imports the Express app
- Verify environment variables are set in Vercel dashboard

### 404 on Page Refresh

- This should be handled by the rewrite rules in `vercel.json`
- Verify the rewrite configuration is correct

### Cold Starts

- Serverless functions may have cold starts (1-2 second delay on first request)
- Consider upgrading to Vercel Pro for better performance
- Optimize your Express app initialization

## Continuous Deployment

Once connected to Git:
- **Push to main branch** → Automatic production deployment
- **Push to other branches** → Automatic preview deployment
- **Pull requests** → Automatic preview deployments with unique URLs

## Custom Domain

To add a custom domain:

1. Go to your project in Vercel dashboard
2. Navigate to **Settings** → **Domains**
3. Add your domain and follow DNS configuration instructions

## Monitoring

Vercel provides:
- **Analytics**: Track page views and performance
- **Logs**: View serverless function logs
- **Deployment History**: Roll back to previous deployments

Access these in your Vercel project dashboard.

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Serverless Functions](https://vercel.com/docs/functions/serverless-functions)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [Custom Domains](https://vercel.com/docs/custom-domains)
