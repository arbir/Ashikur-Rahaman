# Research + Engineering Portfolio

A responsive personal portfolio for Ashikur Rahaman, built with Next.js and deployed on GitHub Pages.

## Local development
Install Node.js 22+ and run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Publish to GitHub Pages
1. Create a **public** repository named `portfolio` (or another name).
2. In this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Launch research and engineering portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
3. In GitHub repository **Settings → Pages → Build and deployment**, set **Source: GitHub Actions**.
4. In the **Actions** tab, confirm the workflow finishes successfully.
5. Your site should appear at `https://YOUR_USERNAME.github.io/portfolio/`. If the repo is named `YOUR_USERNAME.github.io`, it will be at the root domain instead.

The workflow automatically builds and deploys whenever you push to `main`. Next.js uses `output: 'export'` and automatically sets the repository base path in GitHub Actions.

## Customize
- `app/page.tsx`: text, projects, experience, links and contact info.
- `app/globals.css`: colors, fonts, spacing and responsive layout.
- `app/layout.tsx`: page title and SEO description.

## Before publishing
- Confirm all descriptions are accurate and suitable for public display.
- Add verified publication titles, DOIs, and public project links when available.
- Add a CV file under `public/` and link it if you want a download button.
- This site uses Google Fonts, which require a network connection.

## Note
This portfolio uses GitHub Pages static hosting. It does not require a server or database.
