# Social Ghera - Website

A plain HTML/CSS website, 6 pages, no build tools, no dependencies except two free Google Fonts loaded from a CDN link. Works by just opening `index.html`, and works on GitHub Pages with zero setup.

## Files
```
index.html          Home
services.html        What we provide
packages.html        Pricing packages
why-it-matters.html  Why digital marketing matters (education/marketing content)
about.html           About Social Ghera
contact.html         Contact
style.css            All the styling (shared by every page)
script.js            Mobile menu toggle (shared by every page)
```

## How to put this on GitHub Pages (free hosting)

1. Go to [github.com](https://github.com) and create a **New repository**.
   - Name it anything, e.g. `social-ghera-website`.
   - Keep it **Public** (required for free GitHub Pages).
2. On the new repo page, click **"uploading an existing file"**.
3. Drag and drop all the files above (index.html, services.html, style.css, script.js, etc.) into that upload box, then click **Commit changes**.
4. Go to the repo's **Settings** tab → **Pages** (left sidebar).
5. Under "Build and deployment", set **Source** to **Deploy from a branch**, branch **main**, folder **/ (root)** → **Save**.
6. Wait about a minute, then refresh the same page — GitHub will show your live link, something like:
   `https://your-username.github.io/social-ghera-website/`

That link is your live website. Any time you edit a file and re-upload it (or commit a change), the site updates automatically in a minute or two.

## Things to check / customise before sharing the link

- **Pricing** on `packages.html` is a starting point (₹20,000 / ₹35,000 / Custom) — update the real numbers once you've finalised them.
- **Phone/WhatsApp number** and **email** are pulled from your existing contact details — double-check they're correct on `contact.html` and in the footer of every page.
- If you want a **custom domain** (like `socialghera.in`) instead of the `github.io` link, GitHub Pages supports that too — happy to walk through that step whenever you're ready.
- Every page currently repeats the same nav and footer HTML (since this is plain HTML, not a framework) — if you ask me to change something in the footer or nav later, it needs to be updated across all 6 files. Just tell me and I'll do it in one pass.
