# keejac.com

A professional website for my learning product portfolio and CV.

## Where things are

| File | Page or purpose |
| --- | --- |
| `index.html` | About |
| `portfolio/index.html` | Portfolio menu (one `<li>` card per case study) |
| `portfolio/<name>/index.html` | One case study per folder |
| `CV/index.html` | Expanded CV; `CV/Keenan-Jackson-CV.pdf` is the two-page version |
| `404.html` | Page not found |
| `css/site.css` | All styles, in 10 numbered sections listed at the top |
| `js/site.js` | Mobile menu button only |
| `Assets/`, `fonts/` | Images and the Metropolis heading font |
| `robots.txt`, `sitemap.xml`, `favicon.ico`, `apple-touch-icon.png` | Search and browser support |

## How every page is laid out

Each page has the same five blocks, marked with `<!-- ===== ... ===== -->` comments so you can jump to them:

1. `<head>`: title, description (what Google and LinkedIn show), and links to the CSS and JS
2. HEADER: logo and nav; the current page's link has `aria-current="page"`
3. BIO CARD: headshot, name, contact links
4. PAGE CONTENT: everything inside `<main>`
5. FOOTER: contact links and "Last updated"

HEADER, BIO CARD, and FOOTER are identical on every page, so change all copies together (search the folder for the comment text).

## Common edits

- **Text:** find it inside `<main>` and edit in place.
- **New case study:** copy a folder in `portfolio/`, rename it, edit its `<main>`; add a card to `portfolio/index.html`; update the Back/Next links on its neighbors; add its URL to `sitemap.xml`.
- **New CV job:** copy one `<article class="job">` block in `CV/index.html` and edit it.
- **Images:** max 1600 px wide for large images, 800 px for small ones; every `<img>` needs `alt`, `width`, and `height`.
- **LinkedIn:** search for `LINKEDIN:` and replace each placeholder comment with the real link.
- **After changing CSS, JS, or an image:** bump the `?v=` date at the end of its link on every page (for example `/css/site.css?v=20261104`) so browsers load the new file instead of a cached copy.
- **Dates:** update "Last updated" in every footer and `lastmod` in `sitemap.xml`.

## Before publishing

Preview from the site folder with `python3 -m http.server 8000`, then open http://localhost:8000 (double-clicking a file won't load the styles). Tab through each page to check the focus outline, and run WAVE or axe on each page.
