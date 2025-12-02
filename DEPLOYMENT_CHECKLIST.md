# Deployment Checklist: PCN AI Mindset Toolbox to GitHub Pages

This checklist outlines the steps required to deploy your static HTML/CSS/TypeScript application to GitHub Pages.

-----                                                                                                                           

## 1. Prerequisites

*   **Node.js & npm:** Ensure you have Node.js and npm (or Yarn/pnpm) installed on your development machine.
*   **Git:** Have Git installed and configured.
*   **GitHub Account:** You'll need a GitHub account and a new repository for your project.

---

## 2. Project Build Process

The project uses Tailwind CSS for styling and builds to static HTML, CSS, and JavaScript files.

### **2.1. Build Scripts**

The project includes npm scripts for building:
- `npm run build:tailwind`: Compiles Tailwind CSS from `src/app/globals.css` to `styles/main.css` using npx
- `npm run build`: Runs the Tailwind build process
- `npm run deploy`: Alias for the build command

### **2.2. File Structure**

- **Source files:** HTML files in root, TypeScript in `scripts/`, CSS in `src/app/`
- **Build output:** `styles/main.css` (compiled CSS)
- **Static assets:** All files are served directly without compilation

---

## 3. Local Build & Verification

Before pushing to GitHub, ensure your project is built locally with all assets compiled.

### **3.1. Install Dependencies**

```bash
npm install
```

### **3.2. Run the Build Command**

This command will compile your Tailwind CSS.

```bash
npm run build
```

### **3.3. Verify the Build Output**

After a successful build, check that `styles/main.css` has been generated. The entire site consists of static HTML, CSS, and JavaScript files that can be served directly. You can test it locally by opening `index.html` in your browser or serving the root directory with a static server (e.g., `npx http-server .`).

**Important:** The GitHub Actions workflow deploys the repository as-is, so ensure all build artifacts (like compiled CSS) are committed to the repository.

---

## 4. GitHub Repository Setup

### **4.1. Create a GitHub Repository**

If you haven't already, create a new public repository on GitHub (e.g., `gemini-newcomer-site`).

### **4.2. Push Your Code to GitHub**

Initialize Git in your project, commit your changes, and push them to your new GitHub repository.

```bash
git init
git add .
git commit -m "Initial commit for PCN AI Mindset Toolbox"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPOSITORY_NAME>.git
git push -u origin main
```

---

## 5. GitHub Pages Deployment (via GitHub Actions - Recommended)

Automating deployment with GitHub Actions is the most reliable way to host static sites on GitHub Pages.

### **5.1. Create GitHub Actions Workflow File**

Create a file named `.github/workflows/deploy.yml` in your project with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main # Set a branch to deploy from (e.g., main, master, or gh-pages)

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./ # Deploy the entire repository (static HTML/CSS site)
          # The cname parameter is optional. If you have a custom domain, specify it here.
          # cname: example.com
```

### **5.2. Configure GitHub Pages in Repository Settings**

1.  Go to your GitHub repository on `github.com`.
2.  Navigate to **Settings** > **Pages**.
3.  Under "Build and deployment," choose **GitHub Actions** as the "Source."
4.  This will typically use the workflow you just created. Ensure the workflow runs successfully on your `main` branch pushes.

---

## 6. Verification

1.  **Check GitHub Actions:** Monitor the "Actions" tab in your GitHub repository to ensure the deployment workflow completes successfully.
2.  **Access Deployed Site:**
    *   For project sites (e.g., `https://<username>.github.io/<repo-name>/`), it might take a few minutes for the site to become live.
    *   For user/organization sites (e.g., `https://<username>.github.io/`), the site will be at the root.
3.  **Test Functionality:** Navigate through all pages, check all links, and ensure the UI looks as expected. Pay special attention to:
    *   CSS loading (ensure `styles/main.css` is properly linked).
    *   Navigation links and anchor scrolling.
    *   Any client-side JavaScript functionality (e.g., the simulated AI prompt on the `first-conversation` page).

---

Once these steps are completed, your PCN AI Mindset Toolbox should be live on GitHub Pages!
