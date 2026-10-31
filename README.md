# ORIX & CO — marketing site

A static three-page site built with plain HTML, CSS and vanilla JS. There is no build step and there are no dependencies.

```
index.html          Home
products.html       Products
institute.html      Institute of Adore
404.html            Not-found page (picked up automatically by Netlify, Vercel and GitHub Pages)
style.css           All styles. Colours, fonts and spacing are CSS variables in :root
script.js           CONFIG (all copy) at the top, site behaviour below
favicon.svg, apple-touch-icon.png, og-image.png, robots.txt
```

## Editing content

All copy lives in the `CONFIG` object at the top of `script.js`.

| What | Where in `CONFIG` |
| --- | --- |
| Company name | `COMPANY_NAME` (used everywhere through the `{name}` token) |
| Tagline | `TAGLINE` |
| Contact email | `EMAIL` |
| Placement wording | `PLACEMENT_CLAIM`, `PLACEMENT_NOTE` |
| Page titles and descriptions | `meta.home`, `meta.products`, `meta.institute` |
| Home stats and partners strip | `home.about.stats`, `home.partners.items` |
| Products | `products.items` (name, description, tags, status, href, visual) |
| Programs and steps | `institute.programs.items`, `institute.steps.items` |

- Inside any string, `{name}`, `{tagline}`, `{placement}`, `{email}` and `{year}` are replaced automatically.
- In a "statement", wrap one word in `*asterisks*` to make it the red italic accent.
- An `&` in the company name is always rendered as the red italic ampersand in the hero and footer.
- `home.partners.items` currently holds **placeholders**. Replace them with real clients, partners, hackathons or platforms you have actually worked with. If you leave the list empty, the strip is hidden.
- `PLACEMENT_CLAIM` defaults to "Dedicated placement support". Do not change it to a guarantee without legal advice.

### Renaming the company: one extra step

The HTML holds the default copy as a fallback for visitors without JS and for search engines. `script.js` overwrites it on load. Social-media crawlers (WhatsApp, LinkedIn, X) do not run JavaScript, though, so after renaming you also need to:

1. Find and replace `ORIX &amp; CO` in the `<head>` of the four `.html` files.
2. Regenerate `og-image.png` (1200×630), the social preview image.

### Colours and type

Edit the `:root` variables in `style.css`. If the logo's red differs, change `--red`.

### Swapping in real product visuals

Each product row has an abstract CSS panel (`.visual--arch`, `.visual--line`, `.visual--rings`). To use a real image instead, replace the panel's content with `<img src="..." alt="..." loading="lazy" width="..." height="...">` inside the renderer in `script.js` (look for `renderers.products`), or select a different variant per product with `visual`.

### Enquiry form

The form validates in the browser and shows a thank-you message, but nothing is sent yet. See the `TODO` in `initForm()` in `script.js`. The simplest options are:
- **Netlify Forms:** add `name="enquiry" data-netlify="true"` to the `<form>` and post the data with `fetch`.
- **Formspree** or your own API: `fetch(endpoint, { method: "POST", body: ... })`.

## Run locally

Any static server will do:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080. Opening the files directly with `file://` also works.

## Deploy

**Netlify:** drag the folder into app.netlify.com/drop, or connect the repo with no build command and `.` as the publish directory.

**Vercel:** import the repo and choose Framework preset "Other", with no build command and the root as the output directory. Or run:

```bash
npx vercel
```

**GitHub Pages:** in the repo settings, under Pages, choose "Deploy from a branch", select the branch and `/ (root)`.

Once you know the domain, make `og:image` / `twitter:image` absolute URLs (for example `https://yourdomain.com/og-image.png`) and add `og:url` in each page's `<head>`. Most social crawlers require absolute image URLs.

## Accessibility and motion

- Semantic landmarks, a skip link, visible red focus outlines, labelled form fields with live error messages, and `aria-current` on the current nav link.
- The mobile menu closes on Escape and makes the page behind it inert.
- `prefers-reduced-motion` turns off the reveal animations, the parallax and the marquee scrolling (the partners are shown as a static centred list instead).
