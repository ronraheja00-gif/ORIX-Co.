/* ==========================================================================
   CONTENT CONFIG — edit everything here.
   Tokens available inside any string:
     {name}       → COMPANY_NAME
     {institute}  → INSTITUTE_NAME
     {tagline}    → TAGLINE
     {placement}  → PLACEMENT_CLAIM
     {email}      → EMAIL
     {year}       → current year
   Wrap a word in *asterisks* inside a "statement" to mark it as the red accent.
   ========================================================================== */
const CONFIG = {
  COMPANY_NAME: "ORIX & Co.",
  INSTITUTE_NAME: "Adore Institute of Technology",
  TAGLINE: "Built by the team behind SuperOrix",
  EMAIL: "hello@example.com", // TODO: replace with the real address

  // Do NOT change to a "guaranteed placement" claim without legal advice.
  PLACEMENT_CLAIM: "Dedicated placement support",
  PLACEMENT_NOTE: "Placement outcomes published transparently.",

  meta: {
    home: {
      title: "{name} — Quiet, considered technology",
      description: "{name} builds considered software products and trains engineers through the {institute}.",
    },
    products: {
      title: "Products — {name}",
      description: "Elements, Netherite and Phantom: three flagship products from {name}",
    },
    institute: {
      title: "{institute} — {name}",
      description: "Training, mentorship and careers at the {institute}, by {name}",
    },
    notfound: {
      title: "Page not found — {name}",
      description: "This page does not exist.",
    },
  },

  nav: {
    home: "Home",
    products: "Products",
    institute: "{institute}",
    menu: "Menu",
  },

  home: {
    hero: {
      title: "{name}",
      sub: "{tagline}",
      cta: "Explore our products",
      ctaHref: "products.html",
      scroll: "Scroll",
      // Bottom bar of the hero: product names on the left (from products.items), this link on the right.
      sideLink: { label: "{institute}", href: "institute.html" },
    },
    about: {
      label: "About",
      statement: "We build *quiet* technology with uncommon care.",
      body: "A small team of engineers and designers. We compete, we ship, and we hold the work to a standard few will ever see.",
      // Placeholders — replace with verified figures.
      stats: [
        { value: "3×", label: "Hackathon winners" },
        { value: "Multiple", label: "Podium finishes" },
        { value: "3", label: "Flagship products" },
      ],
    },
    showcase: {
      label: "Products",
      title: "Three products. Meet the mascot.",
      cta: "View all products",
      href: "products.html",
    },
    partners: {
      label: "Participated under",
      // Only list real clients, partners, hackathons or platforms you have
      // actually worked with. Each item is either plain text ("Name") or a logo:
      //   { name, logo: "assets/partners/file.png", width, height }
      // Logos are full-colour PNGs on a transparent background.
      // `layers`: how many rows. Items are dealt across rows in order; alternate rows scroll the other way.
      layers: 2,
      items: [
        { name: "MIT India — Maharashtra Institute of Technology", logo: "assets/partners/mit-india.png", width: 536, height: 160 },
        { name: "Jio Institute", logo: "assets/partners/jio-institute.png", width: 733, height: 160 },
        { name: "MIT Institute of Design", logo: "assets/partners/mit-institute-of-design.png", width: 500, height: 160 },
        { name: "AIMA Index 2025 — Investment Maha Kumbh", logo: "assets/partners/aima-index-2025.png", width: 463, height: 160 },
        { name: "Avantika University", logo: "assets/partners/avantika-university.png", width: 696, height: 160 },
        { name: "MIT University, Shillong", logo: "assets/partners/mit-university-shillong.png", width: 197, height: 160 },
        { name: "MIT Academy of Engineering", logo: "assets/partners/mit-academy-of-engineering.png", width: 699, height: 160 },
        { name: "Edugild", logo: "assets/partners/edugild.png", width: 545, height: 160 },
        { name: "MIT Arts, Commerce & Science College", logo: "assets/partners/mit-acs-college.png", width: 983, height: 160 },
        { name: "Vishwashanti Gurukul World School", logo: "assets/partners/vishwashanti-gurukul.png", width: 784, height: 160 },
        { name: "MIT School of Distance Education", logo: "assets/partners/mit-school-of-distance-education.png", width: 654, height: 160 },
      ],
      speed: 36, // pixels per second — lower is slower
    },
  },

  products: {
    intro: {
      label: "Products",
      title: "Three products. One standard.",
    },
    viewLabel: "View",
    statusLabel: "Status",
    focusLabel: "Focus",
    downloadLabel: "Download",
    // The three download cards shown under every product.
    // {product} is replaced with the product name. Per-product links go in each
    // product's `downloads` object below.
    platforms: [
      { id: "windows", label: "Windows", note: "Windows 10 / 11 · 64-bit", file: "{product}-Setup.exe" },
      { id: "linux", label: "Linux", note: "AppImage · x86_64", file: "{product}.AppImage" },
      { id: "mac", label: "macOS", note: "Apple silicon & Intel", file: "{product}.dmg" },
    ],
    // visual: "chevron" | "line" | "stem", or `image: { src, srcSmall, alt, width, height }`
    // status: "Open Source" | "Commercial" | "Both"
    items: [
      {
        name: "Elements",
        description: "Verifiable searchable encryption. Search your documents without exposing them.",
        tags: ["Searchable encryption", "AES-256-GCM", "Local keys"],
        status: "Open Source", // TODO: confirm
        href: "#", // TODO: product URL
        image: {
          src: "assets/products/elements-1600.webp",
          srcSmall: "assets/products/elements-800.webp",
          alt: "Elements sign-in screen: search your documents without exposing them",
          width: 1600,
          height: 900,
        },
        downloads: { windows: "#", linux: "#", mac: "#" }, // TODO: real download links
      },
      {
        name: "Netherite",
        description: "Hardened infrastructure for teams that cannot afford to stop.",
        tags: ["Infrastructure", "Security", "Scale"],
        status: "Commercial",
        href: "#",
        visual: "line",
        downloads: { windows: "#", linux: "#", mac: "#" },
      },
      {
        name: "Phantom",
        description: "Private tooling that works quietly, out of sight.",
        tags: ["Privacy", "Automation", "Tooling"],
        status: "Both",
        href: "#",
        visual: "stem",
        downloads: { windows: "#", linux: "#", mac: "#" },
      },
    ],
  },

  institute: {
    hero: {
      // The hero shows the institute logo; INSTITUTE_NAME is used as its alt text.
      logo: "assets/institute/adore-logo-1600.webp",
      sub: "Training · Mentorship · Careers",
    },
    intro: {
      label: "The Institute",
      statement: "Learn the craft from people who *practise* it.",
      body: "Small cohorts. Real projects. Mentors who have shipped.",
    },
    programs: {
      label: "Programs",
      title: "Four paths.",
      // Placeholders.
      items: [
        { name: "Software Engineering", duration: "16 weeks", line: "From fundamentals to production systems." },
        { name: "Applied AI", duration: "12 weeks", line: "Build, evaluate and deploy intelligent products." },
        { name: "Product Design", duration: "10 weeks", line: "Interfaces made with restraint and intent." },
        { name: "Mentorship", duration: "6 months", line: "One-to-one guidance for working engineers." },
      ],
    },
    steps: {
      label: "How it works",
      items: [
        { title: "Enquire", line: "Send a short note below." },
        { title: "Conversation", line: "We find the right program together." },
        { title: "Begin", line: "Join a small cohort and start building." },
      ],
    },
    placement: {
      label: "Careers",
      claim: "{placement}",
      note: "", // falls back to PLACEMENT_NOTE
    },
    apply: {
      label: "Apply / Enquire",
      title: "Begin a conversation.",
      body: "Tell us a little about yourself. Or write to",
      fields: { name: "Name", email: "Email", phone: "Phone", program: "Program", programPlaceholder: "Select a program" },
      submit: "Send enquiry",
      success: "Thank you, {first}. We will be in touch.",
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid email.",
        phone: "Please enter a valid phone number.",
        program: "Please select a program.",
      },
    },
  },

  notfound: {
    label: "404",
    title: "This page does not exist.",
    cta: "Return home",
  },

  footer: {
    rights: "All rights reserved.",
  },
};

/* ==========================================================================
   Site behaviour — no need to edit below this line for content changes.
   ========================================================================== */
(function () {
  "use strict";

  const C = CONFIG;
  const doc = document;
  const root = doc.documentElement;
  const page = doc.body.dataset.page || "home";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  root.classList.add("js");

  /* ---------- helpers ---------- */
  const get = (path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), C);

  const tpl = (s, extra) =>
    String(s == null ? "" : s)
      .replace(/\{name\}/g, C.COMPANY_NAME)
      .replace(/\{institute\}/g, C.INSTITUTE_NAME)
      .replace(/\{tagline\}/g, C.TAGLINE)
      .replace(/\{placement\}/g, C.PLACEMENT_CLAIM)
      .replace(/\{email\}/g, C.EMAIL)
      .replace(/\{year\}/g, String(new Date().getFullYear()))
      .replace(/\{(\w+)\}/g, (m, k) => (extra && k in extra ? extra[k] : m));

  function h(tag, attrs, children) {
    const el = doc.createElement(tag);
    if (attrs) {
      for (const k in attrs) {
        if (k === "class") el.className = attrs[k];
        else if (k === "text") el.textContent = attrs[k];
        else el.setAttribute(k, attrs[k]);
      }
    }
    (children || []).forEach((c) => c && el.append(c));
    return el;
  }

  // "*word*" → red accent span. Text only, no HTML injection.
  function setRich(el, str) {
    el.textContent = "";
    String(str).split(/(\*[^*]+\*)/).forEach((part) => {
      if (/^\*[^*]+\*$/.test(part)) el.append(h("span", { class: "accent", text: part.slice(1, -1) }));
      else if (part) el.append(part);
    });
  }

  // Wraps "&" in a span so it can carry the accent.
  function setBrand(el, str) {
    el.textContent = "";
    String(str).split("&").forEach((part, i) => {
      if (i > 0) el.append(h("span", { class: "amp", text: "&" }));
      if (part) el.append(part);
    });
  }

  const SVG_NS = "http://www.w3.org/2000/svg";
  function svgEl(tag, attrs) {
    const el = doc.createElementNS(SVG_NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    return el;
  }

  // Abstract product panels drawn with the logo's geometry (38° diagonals, pointed stem).
  const VISUALS = {
    chevron() {
      const svg = svgEl("svg", { viewBox: "0 0 400 300", preserveAspectRatio: "xMidYMid meet", "aria-hidden": "true", focusable: "false" });
      [[0, "v-faint"], [34, "v-hair"], [68, "v-hair"], [102, "v-red"]].forEach(([dy, cls]) => {
        svg.append(svgEl("path", { class: cls, d: `M90 ${40 + dy} 200 ${127 + dy} 310 ${40 + dy}` }));
      });
      return svg;
    },
    stem() {
      const svg = svgEl("svg", { viewBox: "0 0 400 300", preserveAspectRatio: "xMidYMid meet", "aria-hidden": "true", focusable: "false" });
      svg.append(
        svgEl("path", { class: "v-face", d: "M172 54 200 40V262L172 236Z" }),
        svgEl("path", { class: "v-hair", d: "M172 54 200 40 228 54V236L200 262 172 236Z" }),
        svgEl("path", { class: "v-faint", d: "M200 40V262" }),
        svgEl("path", { class: "v-red", d: "M172 236 200 262 228 236" })
      );
      return svg;
    },
  };

  const arrow = () => {
    const ns = "http://www.w3.org/2000/svg";
    const svg = doc.createElementNS(ns, "svg");
    svg.setAttribute("class", "arrow");
    svg.setAttribute("viewBox", "0 0 32 10");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    const p = doc.createElementNS(ns, "path");
    p.setAttribute("d", "M0 5h31M26.5 1 31 5l-4.5 4");
    svg.append(p);
    return svg;
  };

  /* ---------- meta ---------- */
  function applyMeta() {
    const m = C.meta[page];
    if (!m) return;
    const title = tpl(m.title);
    const desc = tpl(m.description);
    doc.title = title;
    const set = (sel, val) => {
      const el = doc.querySelector(sel);
      if (el) el.setAttribute("content", val);
    };
    set('meta[name="description"]', desc);
    set('meta[property="og:title"]', title);
    set('meta[property="og:description"]', desc);
    set('meta[property="og:site_name"]', C.COMPANY_NAME);
    set('meta[name="twitter:title"]', title);
    set('meta[name="twitter:description"]', desc);
  }

  /* ---------- simple bindings ---------- */
  function bindText() {
    doc.querySelectorAll("[data-c]").forEach((el) => {
      const val = get(el.dataset.c);
      if (val == null) return;
      if (el.hasAttribute("data-amp")) setBrand(el, tpl(val));
      else if (el.hasAttribute("data-rich")) setRich(el, tpl(val));
      else el.textContent = tpl(val);
    });
    doc.querySelectorAll("[data-brand]").forEach((el) => {
      if (el.dataset.brand === "accent") setBrand(el, C.COMPANY_NAME);
      else el.textContent = C.COMPANY_NAME;
    });
    doc.querySelectorAll("[data-brand-label]").forEach((el) => {
      el.setAttribute("aria-label", tpl(el.dataset.brandLabel));
    });
    doc.querySelectorAll("[data-alt]").forEach((el) => {
      el.setAttribute("alt", tpl(get(el.dataset.alt) || el.getAttribute("alt")));
    });
    doc.querySelectorAll("[data-aria]").forEach((el) => {
      el.setAttribute("aria-label", tpl(el.dataset.aria));
    });
    doc.querySelectorAll("[data-href]").forEach((el) => {
      const val = get(el.dataset.href);
      if (val) el.setAttribute("href", val);
    });
    doc.querySelectorAll("[data-email]").forEach((el) => {
      el.setAttribute("href", "mailto:" + C.EMAIL);
      el.textContent = C.EMAIL;
    });
    doc.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = String(new Date().getFullYear());
    });
    doc.querySelectorAll("[data-placement-note]").forEach((el) => {
      el.textContent = tpl(C.institute.placement.note || C.PLACEMENT_NOTE);
    });
  }

  /* ---------- list renderers ---------- */
  /* Download cards: one rounded panel per platform with a small window mock. */
  function windowMock(os, name, file) {
    const bar = (title, controls) => h("div", { class: `win__bar win__bar--${os}` }, [...controls, h("span", { class: "win__title", text: title })]);
    if (os === "windows") {
      return h("div", { class: "win win--light" }, [
        h("div", { class: "win__bar win__bar--windows" }, [
          h("span", { class: "win__title", text: `${name} Setup` }),
          h("span", { class: "win__ctrls" }, [h("i", { class: "c-min" }), h("i", { class: "c-max" }), h("i", { class: "c-close" })]),
        ]),
        h("div", { class: "win__body win__body--setup" }, [
          h("span", { class: "setup__name", text: name }),
          h("span", { class: "setup__status", text: "Installing…" }),
          h("span", { class: "setup__bar" }, [h("i")]),
          h("span", { class: "setup__file", text: file }),
        ]),
      ]);
    }
    if (os === "linux") {
      return h("div", { class: "win win--dark" }, [
        bar("bash", [h("span", { class: "win__dots win__dots--mono" }, [h("i"), h("i"), h("i")])]),
        h("div", { class: "win__body win__body--term" }, [
          h("span", { class: "term__line" }, [h("b", { text: "$ " }), `chmod +x ${file}`]),
          h("span", { class: "term__line" }, [h("b", { text: "$ " }), `./${file}`]),
          h("span", { class: "term__line term__line--mute", text: `Starting ${name}…` }),
          h("span", { class: "term__line" }, [h("b", { text: "$ " }), h("span", { class: "term__cursor" })]),
        ]),
      ]);
    }
    return h("div", { class: "win win--light" }, [
      bar(file, [h("span", { class: "win__dots" }, [h("i"), h("i"), h("i")])]),
      h("div", { class: "win__body win__body--dmg" }, [
        h("span", { class: "dmg__item" }, [h("span", { class: "dmg__app", text: name.charAt(0) }), h("span", { class: "dmg__label", text: name })]),
        h("span", { class: "dmg__arrow" }, [arrow()]),
        h("span", { class: "dmg__item" }, [h("span", { class: "dmg__folder" }), h("span", { class: "dmg__label", text: "Applications" })]),
      ]),
    ]);
  }

  function osCards(p) {
    const P = C.products;
    const name = tpl(p.name);
    return h("div", { class: "container" }, [
      h(
        "ul",
        { class: "os-grid", "aria-label": `${P.downloadLabel} ${name}` },
        P.platforms.map((os, i) => {
          const file = tpl(os.file).replace(/\{product\}/g, name.replace(/\s+/g, ""));
          return h("li", { "data-reveal": "", style: `--d:${i * 120}ms` }, [
            h("a", { class: `os-card os-card--${os.id}`, href: (p.downloads && p.downloads[os.id]) || "#", "aria-label": `${P.downloadLabel} ${name} for ${os.label}` }, [
              h("span", { class: "os-card__panel", "aria-hidden": "true" }, [windowMock(os.id, name, file)]),
              h("span", { class: "os-card__label", text: os.label }),
              h("span", { class: "os-card__note", text: tpl(os.note) }),
              h("span", { class: "cta os-card__cta" }, [h("span", { class: "cta__text", text: P.downloadLabel }), arrow()]),
            ]),
          ]);
        })
      ),
    ]);
  }

  const renderers = {
    stats(el) {
      el.replaceChildren(
        ...C.home.about.stats.map((s, i) =>
          h("li", { class: "stat", "data-reveal": "", style: `--d:${i * 120}ms` }, [
            h("span", { class: "stat__value", text: tpl(s.value) }),
            h("span", { class: "stat__label eyebrow", text: tpl(s.label) }),
          ])
        )
      );
    },

    products(el) {
      const P = C.products;
      el.replaceChildren(
        ...P.items.map((p, i) => {
          const num = String(i + 1).padStart(2, "0");
          const id = p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          const kind = p.image ? "image" : p.visual || "chevron";
          let visual;
          if (p.image) {
            const im = p.image;
            visual = h("figure", { class: "product__visual visual visual--image", "data-reveal": "" }, [
              h("img", {
                src: im.src,
                srcset: im.srcSmall ? `${im.srcSmall} 800w, ${im.src} ${im.width}w` : im.src,
                sizes: "(max-width: 860px) 92vw, 58vw",
                alt: tpl(im.alt || p.name),
                width: im.width,
                height: im.height,
                loading: "lazy",
                decoding: "async",
              }),
            ]);
          } else {
            visual = h(
              "div",
              { class: `product__visual visual visual--${kind}`, "aria-hidden": "true", "data-reveal": "" },
              VISUALS[kind]
                ? [VISUALS[kind]()]
                : [h("span", { class: "visual__a" }), h("span", { class: "visual__b" }), h("span", { class: "visual__c" })]
            );
          }
          const tags = h("ul", { class: "tags" }, p.tags.map((t) => h("li", { text: tpl(t) })));
          const body = h("div", { class: "product__body" }, [
            h("p", { class: "eyebrow eyebrow--rule product__index", "data-reveal": "", text: num }),
            h("h2", { class: "product__name", id: `${id}-title`, "data-reveal": "", style: "--d:80ms", text: tpl(p.name) }),
            h("p", { class: "product__desc", "data-reveal": "", style: "--d:160ms", text: tpl(p.description) }),
            h("dl", { class: "product__meta", "data-reveal": "", style: "--d:240ms" }, [
              h("div", null, [
                h("dt", { class: "eyebrow", text: P.statusLabel }),
                h("dd", null, [h("span", { class: "dot", "aria-hidden": "true" }), tpl(p.status)]),
              ]),
              h("div", null, [h("dt", { class: "eyebrow", text: P.focusLabel }), h("dd", null, [tags])]),
            ]),
            h("a", { class: "cta", href: p.href || "#", "aria-label": `${P.viewLabel} ${tpl(p.name)}`, "data-reveal": "", style: "--d:320ms" }, [
              h("span", { class: "cta__text", text: P.viewLabel }),
              arrow(),
            ]),
          ]);
          const children = [h("div", { class: "container grid product__grid" }, [visual, body])];
          if (p.downloads) children.push(osCards(p));
          return h("article", { class: "product" + (i % 2 ? " product--reverse" : ""), id, "aria-labelledby": `${id}-title` }, children);
        })
      );
    },

    "hero-products"(el) {
      el.replaceChildren(
        ...C.products.items.map((p) => {
          const id = p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          return h("li", null, [h("a", { class: "link", href: `products.html#${id}`, text: tpl(p.name) })]);
        })
      );
    },

    showcase(el) {
      const P = C.products;
      const S = C.home.showcase;
      el.replaceChildren(
        ...P.items.map((p, i) => {
          const id = p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          const name = tpl(p.name);
          return h("li", { "data-reveal": "", style: `--d:${i * 110}ms` }, [
            h("a", { class: "showcase__row", href: `${S.href}#${id}` }, [
              h("span", { class: "showcase__num eyebrow", text: String(i + 1).padStart(2, "0") }),
              h("span", { class: "showcase__name", text: name }),
              h("span", { class: "showcase__meta" }, [
                h("span", { class: "eyebrow", text: tpl(p.status) }),
                h("span", { class: "showcase__go" }, [arrow()]),
              ]),
            ]),
          ]);
        })
      );
    },

    programs(el) {
      el.replaceChildren(
        ...C.institute.programs.items.map((p, i) =>
          h("li", { class: "program", "data-reveal": "", style: `--d:${i * 90}ms` }, [
            h("span", { class: "program__index eyebrow", text: String(i + 1).padStart(2, "0") }),
            h("h3", { class: "program__name", text: tpl(p.name) }),
            h("span", { class: "program__duration eyebrow", text: tpl(p.duration) }),
            h("p", { class: "program__line", text: tpl(p.line) }),
          ])
        )
      );
    },

    steps(el) {
      el.replaceChildren(
        ...C.institute.steps.items.map((s, i) =>
          h("li", { class: "step", "data-reveal": "", style: `--d:${i * 140}ms` }, [
            h("span", { class: "step__num", text: String(i + 1).padStart(2, "0") }),
            h("h3", { class: "step__title", text: tpl(s.title) }),
            h("p", { class: "step__line", text: tpl(s.line) }),
          ])
        )
      );
    },

    "program-options"(el) {
      const f = C.institute.apply.fields;
      el.replaceChildren(
        h("option", { value: "", text: f.programPlaceholder }),
        ...C.institute.programs.items.map((p) => h("option", { value: p.name, text: tpl(p.name) }))
      );
    },
  };

  function renderLists() {
    doc.querySelectorAll("[data-render]").forEach((el) => {
      const fn = renderers[el.dataset.render];
      if (fn) fn(el);
    });
  }

  /* ---------- header ---------- */
  function initHeader() {
    const header = doc.querySelector("[data-header]");
    if (!header) return;
    let ticking = false;
    const update = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
    update();
  }

  /* ---------- mobile menu ---------- */
  function initMenu() {
    const toggle = doc.querySelector("[data-menu-toggle]");
    const menu = doc.getElementById("mobile-menu");
    if (!toggle || !menu) return;
    const main = doc.getElementById("main");
    const footer = doc.querySelector(".site-footer");

    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menu.classList.toggle("is-open", open);
      menu.toggleAttribute("inert", !open);
      menu.setAttribute("aria-hidden", String(!open));
      doc.body.classList.toggle("menu-open", open);
      [main, footer].forEach((el) => el && el.toggleAttribute("inert", open));
      if (open) {
        const first = menu.querySelector("a");
        if (first) setTimeout(() => first.focus({ preventScroll: true }), 50);
      }
    };

    setOpen(false);
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) setOpen(false);
    });
    doc.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 861px)").addEventListener("change", (e) => {
      if (e.matches) setOpen(false);
    });
  }

  /* ---------- reveal on scroll ---------- */
  function initReveal() {
    const items = doc.querySelectorAll("[data-reveal]");
    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---------- hero light parallax ---------- */
  function initParallax() {
    const els = doc.querySelectorAll("[data-parallax]");
    if (!els.length || reduceMotion.matches) return;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      if (y < window.innerHeight * 1.5) {
        els.forEach((el) => {
          const speed = parseFloat(el.dataset.parallax) || 0.15;
          el.style.transform = `translate3d(0, ${(y * speed).toFixed(1)}px, 0)`;
        });
      }
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
  }

  /* ---------- partners marquee (one or more rows) ---------- */
  function initMarquee() {
    const host = doc.querySelector("[data-marquees]");
    if (!host) return;
    const P = C.home.partners;
    const all = P.items.map((it) => (typeof it === "string" ? { name: tpl(it) } : { ...it, name: tpl(it.name) }));
    if (!all.length) {
      host.closest("section").hidden = true;
      return;
    }
    const layers = Math.max(1, Math.min(P.layers || 1, all.length));
    const rows = Array.from({ length: layers }, () => []);
    all.forEach((it, i) => rows[i % layers].push(it));

    const makeGroup = (items, repeat, hidden) => {
      const ul = h("ul", { class: "marquee__group" });
      if (hidden) ul.setAttribute("aria-hidden", "true");
      for (let r = 0; r < repeat; r++) {
        items.forEach((it) => {
          const quiet = hidden || r > 0;
          const content = it.logo
            ? h("img", { class: "marquee__logo", src: it.logo, alt: quiet ? "" : it.name, width: it.width || 300, height: it.height || 100, decoding: "async" })
            : h("span", { class: "marquee__name", text: it.name });
          const li = h("li", { class: "marquee__item" + (it.logo ? " marquee__item--logo" : "") }, [content]);
          // Only the first copy is exposed to assistive tech.
          if (r > 0 && !hidden) li.setAttribute("aria-hidden", "true");
          ul.append(li);
        });
      }
      return ul;
    };

    const marquees = rows.map((items, i) => {
      const track = h("div", { class: "marquee__track" });
      const m = h("div", { class: "marquee" + (i % 2 ? " marquee--reverse" : "") }, [track]);
      host.append(m);
      return { m, track, items, speed: (P.speed || 36) * (i % 2 ? 0.85 : 1) };
    });

    const buildOne = ({ m, track, items, speed }) => {
      track.replaceChildren(makeGroup(items, 1, false));
      if (reduceMotion.matches) {
        m.classList.add("is-static");
        m.classList.remove("is-running");
        return;
      }
      m.classList.remove("is-static");
      const single = track.firstChild.getBoundingClientRect().width || 1;
      const repeat = Math.max(1, Math.ceil((m.clientWidth * 1.1) / single));
      const group = makeGroup(items, repeat, false);
      track.replaceChildren(group, makeGroup(items, repeat, true));
      const width = group.getBoundingClientRect().width;
      track.style.setProperty("--marquee-duration", `${(width / speed).toFixed(1)}s`);
      m.classList.add("is-running");
    };
    const build = () => marquees.forEach(buildOne);

    const ready = doc.fonts && doc.fonts.ready ? doc.fonts.ready : Promise.resolve();
    ready.then(build);
    let lastW = window.innerWidth;
    let t;
    window.addEventListener("resize", () => {
      if (window.innerWidth === lastW) return;
      lastW = window.innerWidth;
      clearTimeout(t);
      t = setTimeout(build, 200);
    });
    reduceMotion.addEventListener("change", build);
  }

  /* ---------- home: product showcase — the mascot becomes the cursor ---------- */
  function initShowcase() {
    const section = doc.querySelector(".showcase");
    const mascot = doc.querySelector("[data-mascot]");
    if (!section || !mascot) return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let x = -200, y = -200, tx = -200, ty = -200, rot = 0, scale = 1, ts = 1, inside = false, raf = 0;

    const loop = () => {
      const still = reduceMotion.matches;
      const dx = tx - x;
      x += dx * (still ? 1 : 0.45);
      y += (ty - y) * (still ? 1 : 0.45);
      scale += (ts - scale) * (still ? 1 : 0.16);
      rot += ((still ? 0 : Math.max(-8, Math.min(8, dx * 0.6))) - rot) * 0.15;
      mascot.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      const busy = inside || Math.abs(dx) > 0.3 || Math.abs(ts - scale) > 0.002 || Math.abs(rot) > 0.05;
      raf = busy ? requestAnimationFrame(loop) : 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };

    section.addEventListener("pointerenter", (e) => {
      if (!finePointer.matches || e.pointerType !== "mouse") return;
      inside = true;
      x = tx = e.clientX;
      y = ty = e.clientY;
      section.classList.add("has-mascot");
      mascot.classList.add("is-on");
      kick();
    });
    section.addEventListener("pointermove", (e) => {
      if (!inside) return;
      tx = e.clientX;
      ty = e.clientY;
      kick();
    });
    section.addEventListener("pointerleave", () => {
      inside = false;
      section.classList.remove("has-mascot");
      mascot.classList.remove("is-on", "is-hot");
      ts = 1;
    });
    window.addEventListener(
      "scroll",
      () => {
        if (!inside) return;
        const el = doc.elementFromPoint(tx, ty);
        if (!el || !section.contains(el)) section.dispatchEvent(new PointerEvent("pointerleave"));
      },
      { passive: true }
    );
    section.querySelectorAll(".showcase__row").forEach((row) => {
      row.addEventListener("pointerenter", () => {
        ts = 1.15;
        mascot.classList.add("is-hot");
        section.querySelector(".showcase__list").classList.add("is-hovering");
        kick();
      });
      row.addEventListener("pointerleave", () => {
        ts = 1;
        mascot.classList.remove("is-hot");
        section.querySelector(".showcase__list").classList.remove("is-hovering");
        kick();
      });
    });
  }

  /* ---------- hero: title letters rise in, soft light follows the pointer ---------- */
  function initHero() {
    const title = doc.querySelector("[data-split]");
    if (title && !reduceMotion.matches) {
      let i = 0;
      const wrap = (node) => {
        [...node.childNodes].forEach((n) => {
          if (n.nodeType === 3) {
            const frag = doc.createDocumentFragment();
            [...n.textContent].forEach((ch) => {
              if (ch === " ") frag.append(" ");
              else frag.append(h("span", { class: "char", style: `--i:${i++}`, text: ch }));
            });
            n.replaceWith(frag);
          } else if (n.nodeType === 1) {
            n.classList.add("char");
            n.style.setProperty("--i", i++);
          }
        });
      };
      title.setAttribute("aria-label", title.textContent);
      wrap(title);
      [...title.children].forEach((c) => c.setAttribute("aria-hidden", "true"));
      title.classList.add("is-split");
    }

    const hero = doc.querySelector("[data-spot]");
    if (!hero || reduceMotion.matches) return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let raf = 0, mx = 50, my = 40;
    hero.addEventListener("pointermove", (e) => {
      if (!finePointer.matches) return;
      const r = hero.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width) * 100;
      my = ((e.clientY - r.top) / r.height) * 100;
      if (!raf)
        raf = requestAnimationFrame(() => {
          hero.style.setProperty("--mx", mx.toFixed(1) + "%");
          hero.style.setProperty("--my", my.toFixed(1) + "%");
          raf = 0;
        });
    });
  }

  // Products are rendered by script, so jump to #product links after rendering.
  function scrollToHash() {
    if (!location.hash) return;
    const target = doc.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
  }

  /* ---------- enquiry form (front-end only) ---------- */
  function initForm() {
    const form = doc.querySelector("[data-enquiry]");
    if (!form) return;
    const A = C.institute.apply;
    const status = form.querySelector("[data-form-status]");

    const rules = {
      name: (v) => v.trim().length >= 2,
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
      phone: (v) => /^\+?[0-9\s\-()]{7,20}$/.test(v.trim()) && v.replace(/\D/g, "").length >= 7,
      program: (v) => v !== "",
    };

    const check = (field) => {
      const valid = rules[field.name](field.value);
      const err = form.querySelector(`#${field.id}-error`);
      field.setAttribute("aria-invalid", String(!valid));
      field.closest(".field").classList.toggle("is-invalid", !valid);
      if (err) err.textContent = valid ? "" : A.errors[field.name];
      return valid;
    };

    form.querySelectorAll("input, select").forEach((field) => {
      if (!rules[field.name]) return;
      field.addEventListener("blur", () => {
        if (field.value) check(field);
      });
      field.addEventListener("input", () => {
        if (field.getAttribute("aria-invalid") === "true") check(field);
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fields = [...form.querySelectorAll("input, select")].filter((f) => rules[f.name]);
      const invalid = fields.filter((f) => !check(f));
      if (invalid.length) {
        invalid[0].focus();
        status.textContent = "";
        return;
      }

      const data = Object.fromEntries(new FormData(form));

      // TODO: connect a backend. Options: Netlify Forms (add data-netlify="true"
      // to the <form>), Formspree, or your own API endpoint, e.g.
      //   await fetch("/api/enquiry", { method: "POST", body: JSON.stringify(data) });
      // Until then, submissions are validated and acknowledged in the browser only.

      const first = (data.name || "").trim().split(/\s+/)[0];
      status.textContent = tpl(A.success, { first });
      const hi = form.querySelector(".mascot-hi");
      if (hi) {
        hi.hidden = false;
        hi.classList.remove("is-waving");
        void hi.offsetWidth;
        hi.classList.add("is-waving");
      }
      form.classList.add("is-sent");
      form.reset();
      fields.forEach((f) => f.removeAttribute("aria-invalid"));
    });
  }

  /* ---------- boot ---------- */
  applyMeta();
  bindText();
  renderLists();
  initHeader();
  initMenu();
  initReveal();
  initParallax();
  initMarquee();
  initShowcase();
  initHero();
  initForm();
  scrollToHash();
})();
