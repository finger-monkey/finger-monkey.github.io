# Homepage

A lightweight, bilingual academic homepage built from the supplied CV. It uses only local HTML/CSS/JS and local images, so it does not depend on Google Fonts, external CDNs, or third-party JavaScript.

## Preview locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub repository named `<your-github-username>.github.io`.
2. Upload everything in this folder to the repository root.
3. Commit and push to the `main` branch.
4. In GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → main / (root)**.
5. Your site will be available at `https://<your-github-username>.github.io/` after deployment.

## Custom domain

If you later buy a domain, add it in **Settings → Pages → Custom domain**, then configure DNS according to GitHub Pages instructions. You can also add a `CNAME` file to this folder once the domain is known.

## China-accessibility considerations

- All CSS, JavaScript, fonts, and images are local. No Google Fonts or overseas third-party CDN is used.
- GitHub Pages itself may still be slow or unstable from some networks in mainland China. If stable mainland access is essential, the same folder can be deployed unchanged to a mainland China server after ICP filing, or to a Hong Kong server without changing the site code.
- Images have been resized/compressed for faster loading.

## Privacy choices in this version

The public homepage intentionally omits date of birth, birthplace, political affiliation, phone number, and the detailed education timeline from the CV. It does identify Yunpeng Gong as a Ph.D. Candidate at Xiamen University. Academic contact uses fmonkey625@gmail.com, and the homepage links to the public Google Scholar profile. If you want a public CV download, add a sanitized PDF first rather than publishing the original CV directly.

## Files

- `index.html` — page content
- `assets/style.css` — responsive design
- `assets/script.js` — Chinese/English language toggle
- `assets/avatar.jpg` — portrait from the supplied CV
- `assets/vision-robustness.webp` — research framework figure
- `assets/physics-ai.webp` — Physics AI research framework figure
- `assets/industry-collab.webp` — industry-collaboration screenshots
