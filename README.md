# Bhaskar V Portfolio

A simple and elegant portfolio website built with Astro and deployed to GitHub Pages.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 GitHub Pages Deployment

This portfolio is configured to deploy to GitHub Pages automatically. Follow these steps:

### 1. Update Configuration
Edit `astro.config.mjs` and replace `<username>` with your GitHub username:

```javascript
site: 'https://<username>.github.io',
base: '/BhaskarVPortfolio',
```

### 2. Push to GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 3. GitHub Actions
The workflow in `.github/workflows/deploy.yml` will:
- Build the site automatically on every push to `main`
- Deploy the built files to GitHub Pages
- Make your site available at `https://<username>.github.io/BhaskarVPortfolio`

### 4. Enable GitHub Pages (if not already enabled)
Go to your repository settings → Pages → Source: Deploy from branch → Branch: `gh-pages` (created by the workflow)

## 📝 Customize Your Portfolio

Edit the content in `src/` to customize:
- **Homepage**: `src/pages/index.astro`
- **About Page**: `src/pages/about.astro`
- **Work/Projects**: `src/pages/work.astro` and `src/content/work/`

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord Community](https://astro.build/chat)
