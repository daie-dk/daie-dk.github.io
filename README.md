## npm workflow

Requires Node.js 18 or newer. Run commands from this folder (the one containing package.json):

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`dev` serves the source at http://localhost:5173. `build` copies publishable files into dist/. `preview` serves dist/ at the same address; stop dev first. Deploy the contents of dist/. No external packages are needed. This remains the static HTML adaptation described below, not the original React/Vite project.

# Dansk AI-Etikforening — website package

Complete static website, adapted from the Norwegian site's visual language: gradient hero, white navigation, three pillars, question cards, project panel and shared footer. This is a buildless static adaptation, not a translation of every React component in the original archive. No npm install or build is needed. Both languages contain complete pages; switching language keeps the corresponding page. All text is in the HTML and works without JavaScript; JavaScript only controls the mobile menu. The root opens Dansk.

## Preview
Open index.html in a browser, or run `python3 -m http.server 8000` from this folder and open http://localhost:8000. The separate palette-preview.html lets you compare three palettes in the actual homepage. Its iframe needs the local HTTP server in browsers that restrict local-file iframe access. It does not change or save the public theme. Delete palette-preview.html before launch if you do not need it.

## Publish on GitHub Pages
1. Put the CONTENTS of this folder at the root of the new site's repository.
2. In Settings → Pages, select Deploy from a branch and the repository root.
3. CNAME contains daie.dk. Configure and verify this domain in your hosting provider. Domain/DNS changes have not been made for you. For a different domain, update CNAME, canonical and alternate links, sitemap.xml, robots.txt and 404.html.
4. Enable HTTPS once the domain is verified.
These flat static pages work on ordinary static hosting too. No SPA fallback, API, server or external asset service is required.

## Content before launch
- Confirm all organisation descriptions and project status. DkBBQ is described as planned/in preparation; no Norwegian results, blog posts, dates, metrics, events or partner endorsements are copied.
- Add approved local contact details to both contact pages. They currently contain an honest 'details soon' notice, with no invented address or non-working form.
- Add confirmed board and registration information if desired. Norwegian board photos, registration numbers, LDO claims, accounts, endpoints and membership terms are not included.
- Review both native and English text. The Dutch site offers participation, not foundation membership. Danish membership terms are deliberately not invented.
- Confirm the privacy text after choosing the hosting provider and adding any forms or analytics. It is a factual description of this package, not a complete organisation privacy policy.
- Confirm sister-site links once the domains are live.
- The Danish D symbol is a provisional wordmark, not an approved association logo. The Dutch abstract N symbol is reused from the supplied Norwegian assets. Confirm permission and final branding before publishing.

## Colours
The default palette is burgundy. Edit assets/style.css: base variables define orange; body[data-theme=burgundy] defines Danish; body[data-theme=purple] offers the Norwegian family. Change data-theme on every HTML body to switch palettes permanently. The orange and coral tones are darker than the Norwegian bright orange to support white text contrast. White is the calm base across all palettes.

## Extend later
Add local blog content and navigation when ready. No blog routes or Norwegian articles are included. Replace the project status and results copy when DkBBQ has real publications, then add actual dataset/repository links. No external benchmark URLs are guessed.

## Files
- da/ — native-language pages
- en/ — English equivalents
- assets/ — shared CSS, menu script and favicon
- index.html — native-language entry
- palette-preview.html — optional local colour comparison
- CNAME, .nojekyll, robots.txt, sitemap.xml, 404.html — static hosting files

The original Norwegian website is not modified. This package is not yet deployed.
