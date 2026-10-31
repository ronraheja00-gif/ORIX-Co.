/* ==========================================================================
   CONTENT CONFIG — edit everything here.
   Tokens available inside any string:
     {name}       → COMPANY_NAME
     {tagline}    → TAGLINE
     {placement}  → PLACEMENT_CLAIM
     {email}      → EMAIL
     {year}       → current year
   Wrap a word in *asterisks* inside a "statement" to mark it as the red accent.
   ========================================================================== */
const CONFIG = {
  COMPANY_NAME: "ORIX & CO",
  TAGLINE: "Built by the team behind SuperOrix",
  EMAIL: "hello@example.com", // TODO: replace with the real address

  // Do NOT change to a "guaranteed placement" claim without legal advice.
  PLACEMENT_CLAIM: "Dedicated placement support",
  PLACEMENT_NOTE: "Placement outcomes published transparently.",

  meta: {
    home: {
      title: "{name} — Quiet, considered technology",
      description: "{name} builds considered software products and trains engineers through the Institute of Adore.",
    },
    products: {
      title: "Products — {name}",
      description: "Elements, Netherite and Phantom: three flagship products from {name}.",
    },
    institute: {
      title: "Institute of Adore — {name}",
      description: "Training, mentorship and careers at the Institute of Adore, by {name}.",
    },
    notfound: {
      title: "Page not found — {name}",
      description: "This page does not exist.",
    },
  },

  nav: {
    home: "Home",
    products: "Products",
    institute: "Institute of Adore",
    menu: "Menu",
  },

  home: {
    hero: {
      title: "{name}.",
      sub: "{tagline}",
      cta: "Explore our products",
      ctaHref: "products.html",
      scroll: "Scroll",
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
    partners: {
      label: "In good company",
      // Only list real clients, partners, hackathons or platforms you have
      // actually worked with. These are placeholders.
      items: ["Partner One", "Hackathon One", "Platform One", "Partner Two", "Hackathon Two", "Platform Two"],
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
    // visual: "chevron" | "line" | "stem"   status: "Open Source" | "Commercial" | "Both"
    items: [
      {
        name: "Elements",
        description: "A foundational component system for interfaces built with precision.",
        tags: ["Design system", "Interface", "Toolkit"],
        status: "Open Source",
        href: "#", // TODO: product URL
        visual: "chevron",
      },
      {
        name: "Netherite",
        description: "Hardened infrastructure for teams that cannot afford to stop.",
        tags: ["Infrastructure", "Security", "Scale"],
        status: "Commercial",
        href: "#",
        visual: "line",
      },
      {
        name: "Phantom",
        description: "Private tooling that works quietly, out of sight.",
        tags: ["Privacy", "Automation", "Tooling"],
        status: "Both",
        href: "#",
        visual: "stem",
      },
    ],
  },

  institute: {
    hero: {
      title: "Institute of Adore",
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
          const kind = p.visual || "chevron";
          const visual = h(
            "div",
            { class: `product__visual visual visual--${kind}`, "aria-hidden": "true", "data-reveal": "" },
            VISUALS[kind]
              ? [VISUALS[kind]()]
              : [h("span", { class: "visual__a" }), h("span", { class: "visual__b" }), h("span", { class: "visual__c" })]
          );
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
          return h("article", { class: "product" + (i % 2 ? " product--reverse" : ""), id, "aria-labelledby": `${id}-title` }, [
            h("div", { class: "container grid product__grid" }, [visual, body]),
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

  /* ---------- partners marquee ---------- */
  function initMarquee() {
    const marquee = doc.querySelector("[data-marquee]");
    if (!marquee) return;
    const track = marquee.querySelector(".marquee__track");
    const items = C.home.partners.items.map(tpl);
    if (!items.length) {
      marquee.closest("section").hidden = true;
      return;
    }

    const makeGroup = (repeat, hidden) => {
      const ul = h("ul", { class: "marquee__group" });
      if (hidden) ul.setAttribute("aria-hidden", "true");
      for (let r = 0; r < repeat; r++) {
        items.forEach((name, i) => {
          const li = h("li", { class: "marquee__item" }, [h("span", { class: "marquee__name", text: name })]);
          // Only the first copy is exposed to assistive tech.
          if (r > 0 && !hidden) li.setAttribute("aria-hidden", "true");
          ul.append(li);
        });
      }
      return ul;
    };

    const build = () => {
      track.replaceChildren(makeGroup(1, false));
      if (reduceMotion.matches) {
        marquee.classList.add("is-static");
        return;
      }
      marquee.classList.remove("is-static");
      const single = track.firstChild.getBoundingClientRect().width || 1;
      const repeat = Math.max(1, Math.ceil((marquee.clientWidth * 1.1) / single));
      const group = makeGroup(repeat, false);
      track.replaceChildren(group, makeGroup(repeat, true));
      const width = group.getBoundingClientRect().width;
      track.style.setProperty("--marquee-duration", `${(width / (C.home.partners.speed || 36)).toFixed(1)}s`);
      marquee.classList.add("is-running");
    };

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
  initForm();
})();
