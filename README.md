# Vikram Aditya — Builder’s Field Notes

A React + TypeScript portfolio built with Vite and deployed as static files on GitHub Pages.

Website: https://vikramaditya10.github.io/me/
Repository: https://github.com/VikramAditya10/me

## Run locally

Use Node.js 24 LTS (Node 22.12 or newer is required).

```powershell
npm ci
npm run dev
```

Open **http://127.0.0.1:5173/me/**. Keep the terminal running; press Ctrl+C to stop. The React source now needs the development server, rather than opening index.html directly.

To inspect the exact production build:

```powershell
npm run build
npm run preview
```

Open **http://127.0.0.1:4173/me/**.

## Edit the portfolio

- `src/content/portfolio.ts`: biography, interests, the five project stories and reflections, career events, education, future direction, availability, contact links, and fictional demo data.
- `src/App.tsx`: reusable sections, inline case studies, navigation, and conceptual interactions.
- `src/styles.css`: paper, ink, terracotta and green palette; responsive layouts; typography; focus, motion and print styles.
- `public/social-preview.svg`: original editable social-preview artwork. The build also generates a 1200 × 630 PNG for social sharing.
- `index.html`: page title, description, canonical URL and social metadata.

Project URLs use stable hashes such as `/me/#project-mycards`, `/me/#project-financing`, `/me/#project-smartbuy`, `/me/#project-crew`, and `/me/#project-tea-board`. Browser back/forward restores the selected case study. The four sticky navigation tabs follow the current section.

The build pre-renders the React content to HTML before adding client-side interactions. With JavaScript disabled, the production HTML shows the project stories expanded. No backend, tracking, geolocation, or external API is needed.

## Content review

The portfolio prompt is the source of truth for this version, superseding the earlier resume where they differ.

- The five project selections are suggested, not confirmed favourites. The public heading is “Five projects I’ve built”. Each project's `editorial` metadata records its suggested selection and draft reflection status without adding that editorial wording to the page.
- Review and personalise each project's `reflection` field before treating it as final personal copy.
- The timeline uses Sumato Globaltech in 2017–2019 and Surdtech in 2019–2022. The crew project is SpiceJet; Tea Board India is attributed to Sumato Globaltech.
- MyCards figures are supplied experience figures, not a live feed. Audit completion is described without implying RBI certification, particular controls, findings, or UAE regulatory expertise.
- `availability.noticePeriod`, `availability.earliestStartDate`, and `availability.relocationTiming` are initially `null`. The website hides empty fields. Add only confirmed details.
- The supplied PDF is retained unchanged. Its older airline attribution and career chronology differ from the new prompt; update that document separately when ready. No new resume was fabricated. If the root PDF is absent at build time, the download action is hidden. Replacing it under the same filename updates the next deployment.
- All locations, suggestions, flight assignments and conversations in interactive examples are fictional and labelled illustrative.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` runs on every push to `main` or by manual dispatch. It installs locked dependencies, runs interaction tests, builds the portfolio, and deploys **only `dist/`** to Pages. Source notes and Word files are not included in the deployed artifact.

The repository's **Settings → Pages → Source** must be **GitHub Actions**. Vite's `base` is `/me/`, matching the repository's Pages address. The workflow uses Node 24; no secrets or paid services are required.

After editing:

```powershell
npm test
npm run build
git add src public scripts index.html README.md package.json package-lock.json tsconfig.json vite.config.ts vitest.config.ts .github .gitignore
git commit -m "Update portfolio"
git push origin main
```

If you replace the PDF, stage that filename as well. Deployment status appears in the repository's Actions tab. Do not publish the raw source folder as a branch-based Pages site: the browser needs the built assets in `dist/`.

For a different repository or custom domain, update `base` in `vite.config.ts`, the canonical/social URLs in `index.html`, and the URLs in this README. See [Vite deployment guidance](https://vite.dev/guide/static-deploy.html#github-pages) and [GitHub custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Validation

`npm test` checks project deep links, keyboard operation, browser back navigation, active navigation, interactive fictional examples, timeline expansion, contact links, and empty availability behaviour. `npm run build` checks TypeScript and creates the pre-rendered static site, resume asset (when present), and social image.

A connected browser was unavailable during implementation. Interaction tests run in a DOM simulator; they do not verify pixel layout, mobile overflow, or browser-specific rendering. Review the live preview at desktop and mobile widths for final visual sign-off.
