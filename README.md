# Vikram Aditya — Personal website

A responsive portfolio based on Vikram's resume, built with plain HTML, CSS, and a small JavaScript enhancement. No packages, build tools, API keys, or external font services are required. All content and navigation work without JavaScript.

## Preview

Open `index.html` in a web browser. The page, styles, links, and resume download work directly from the folder.

## Publish to GitHub Pages

This website uses the repository `https://github.com/VikramAditya10/me`, on branch `main`.

1. Commit and push the website files from this folder:

   ```powershell
   git add index.html styles.css script.js favicon.svg .nojekyll .gitignore README.md Vikram_Aditya_AI_Fintech_Resume.pdf
   git commit -m "Add personal portfolio website"
   git push -u origin main
   ```

2. Open [the repository's Pages settings](https://github.com/VikramAditya10/me/settings/pages).
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose **main** and **/(root)**, then click **Save**.
5. Wait for GitHub's Pages deployment to finish. The website address is **https://vikramaditya10.github.io/me/**. The Pages settings screen shows deployment status.

GitHub Pages availability depends on repository visibility and your GitHub plan. See [GitHub's publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

The site uses relative asset paths, so it supports both a repository URL and a custom domain. The `.nojekyll` file tells GitHub to serve the static files without a Jekyll build. No GitHub Actions workflow needs to be added.

## Update the site

- **Content and links:** edit `index.html`.
- **Colors, typography, and layouts:** edit `styles.css`. Colors are defined at the top of the file.
- **Resume:** replace `Vikram_Aditya_AI_Fintech_Resume.pdf`, retaining the filename, or update the three resume links in `index.html`.
- **Browser icon:** edit `favicon.svg`.
- **Footer year:** updated automatically by `script.js`.

The downloadable PDF is the supplied resume, including its contact information. The Word source is not required for hosting.

## Features and verification

- Responsive layouts for mobile, tablet, and desktop.
- Semantic page sections, keyboard focus indicators, and a skip-to-content link.
- Reduced-motion preference support and print styles.
- Email, LinkedIn, GitHub, and PDF download links.
- Page description and Open Graph metadata.
- No third-party scripts, tracking, or runtime dependencies.

Local asset paths, section anchors, unique HTML IDs, and JavaScript syntax were checked during creation. A connected browser was unavailable, so a visual browser review remains to be done.
