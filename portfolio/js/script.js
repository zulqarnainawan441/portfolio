/**
 * Zulqarnain Awan — Software Developer Portfolio
 * Vanilla ES6+ JavaScript: Navigation, Scroll States, Reveal, Case Study Modal, Copy Actions
 */

(function () {
  "use strict";

  // DOM Elements
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".navbar__toggle");
  const menu = document.querySelector("#primary-menu");
  const backdrop = document.querySelector("[data-menu-backdrop]");
  const yearEl = document.querySelector("#year");
  const toast = document.querySelector("#toast");

  /* --------------------------------------------------------------------------
     1. Current Year in Footer
     -------------------------------------------------------------------------- */
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* --------------------------------------------------------------------------
     2. Sticky Header Elevation on Scroll
     -------------------------------------------------------------------------- */
  const updateHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  /* --------------------------------------------------------------------------
     3. Accessible Mobile Navigation
     -------------------------------------------------------------------------- */
  const setMenuOpen = (open) => {
    if (!toggle || !menu) return;
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    document.body.classList.toggle("mobile-menu-open", open);
    if (backdrop) backdrop.hidden = !open;
  };

  if (toggle && menu) {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      setMenuOpen(!isOpen);
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    if (backdrop) {
      backdrop.addEventListener("click", () => setMenuOpen(false));
    }

    document.addEventListener("click", (event) => {
      if (
        menu.classList.contains("is-open") &&
        !menu.contains(event.target) &&
        !toggle.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    });

    window.addEventListener(
      "resize",
      () => {
        if (window.matchMedia("(min-width: 960px)").matches) {
          setMenuOpen(false);
        }
      },
      { passive: true }
    );
  }

  /* --------------------------------------------------------------------------
     4. Scroll Reveal Animations (IntersectionObserver)
     -------------------------------------------------------------------------- */
  const revealTargets = document.querySelectorAll(
    ".section__header, .project-card, .skill-category-card, .service-card, .about-block, .education-card, .contact__details, .contact__cta-panel"
  );

  revealTargets.forEach((el, index) => {
    el.classList.add("reveal");
    const delay = (index % 3) + 1;
    el.classList.add(`reveal-delay-${delay}`);
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  /* --------------------------------------------------------------------------
     5. Case Study Modal Data & Interactive Dialog
     -------------------------------------------------------------------------- */
  const caseStudies = {
    mbacraftmart: {
      title: "MBAcraftmart – Shopify E-commerce Store",
      category: "Shopify Store · Client Project",
      badge: "Client Project",
      image: "assets/images/project-mbacraftmart.png",
      imageAlt: "MBAcraftmart Shopify store storefront and mobile layout mockup",
      demoUrl: "https://mbacraftmart.myshopify.com/",
      githubUrl: "",
      disclaimer:
        "Client project developed as a Shopify Store Developer and technical service provider for a retail brand in Pakistan. Configured the storefront using Shopify and the Dawn theme for localized e-commerce fulfillment.",
      overview:
        "MBAcraftmart is an e-commerce storefront dedicated to handcrafted floral bouquets, custom arts and crafts, and curated gift hampers. Built on Shopify using the Dawn theme to deliver a clean, trustworthy product showcase tailored for local fulfillment across Pakistan.",
      objective:
        "Build a polished and accessible Shopify storefront highlighting product craftsmanship and gift collections, with an emphasis on seamless mobile browsing and clear category navigation for customers throughout Pakistan.",
      features: [
        "Developed and customized a Shopify storefront using the Dawn theme",
        "Catalog categorization for floral bouquets, artisanal crafts, and curated gift hampers",
        "Mobile-first product grid, variant selectors, and premium image presentation",
        "Configured for Pakistan target market with localized fulfillment workflows",
        "Streamlined navigation structure for gifting occasions and repeat purchases"
      ],
      technologies: ["Shopify", "Dawn Theme", "Liquid", "HTML5", "CSS3", "JavaScript"],
      responsive:
        "Engineered with a mobile-first focus, recognizing mobile devices as the primary online shopping channel in Pakistan. The layout ensures swift image rendering, effortless touch interactions, and a clean path to checkout across phones, tablets, and desktops."
    },

    "lms-project": {
      title: "LMS-PROJECT — Learning Management Portal",
      category: "Academic · Software Engineering Project",
      badge: "Academic Project",
      image: "assets/images/project-lms.svg",
      imageAlt: "LMS Project — Learning Management System dashboard and portal preview",
      demoUrl: "https://zulqarnainawan441.github.io/LMS/LMS-PROJECT/",
      githubUrl: "https://github.com/zulqarnainawan441/LMS",
      disclaimer:
        "An academic and personal software engineering project demonstrating modern software design, complex state presentation, and responsive dashboard architecture.",
      overview:
        "LMS-PROJECT is a comprehensive learning management portal built to support academic institutions. It features integrated portals for both students and faculty administrators, covering course schedules, assignment tracking, quizzes, attendance ledgers, fee management, and lecture notes.",
      objective:
        "Develop an intuitive, performant web application that streamlines academic administration into a unified, accessible interface without heavy runtime dependencies.",
      features: [
        "Integrated student and administrator multi-role dashboard views",
        "Course module tracking with interactive progress meters and grade books",
        "Assignment timeline with status tracking and deadline alerts",
        "Detailed attendance ledger with percentage calculations and history",
        "Fee ledger status monitoring with zero-dues verification"
      ],
      technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "UI Architecture", "Responsive Design"],
      responsive:
        "Layout reflows smoothly from single-column mobile cards to multi-column desktop data grids, keeping academic schedules and grade information easily scannable on any screen."
    },

    urbanwear: {
      title: "UrbanWear — Apparel Storefront",
      category: "Fashion E-commerce · Concept Build",
      badge: "Concept Build",
      image: "assets/images/project-fashion.jpg",
      imageAlt: "UrbanWear fashion e-commerce storefront preview",
      demoUrl: "https://zulqarnainawan441.github.io/Urban-wear/UrbanWear/",
      githubUrl: "https://github.com/zulqarnainawan441/Urban-wear",
      disclaimer:
        "Demo and concept project created to showcase e-commerce frontend engineering, responsive grid layouts, and mobile-first shopping UX.",
      overview:
        "UrbanWear is a contemporary apparel storefront designed for intuitive collection browsing, product storytelling, and frictionless navigation across mobile and desktop devices.",
      objective:
        "Create an engaging fashion retail experience with fast page loads, scannable product cards, responsive category filters, and an accessible shopping flow.",
      features: [
        "Dynamic category navigation and collection filtering",
        "Responsive product grid with high-fidelity visual cards",
        "Clear product detail hierarchy and sizing selection",
        "Mobile-first checkout and shopping bag experience",
        "Smooth micro-interactions and transitions"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Grid & Flexbox", "Mobile-First"],
      responsive:
        "Built using CSS Grid and Flexbox to adapt effortlessly across narrow mobile displays, tablets, laptops, and ultra-wide desktops."
    },

    glowskin: {
      title: "GlowSkin — Beauty & Skincare Storefront",
      category: "Cosmetics E-commerce · Concept Build",
      badge: "Concept Build",
      image: "assets/images/project-cosmetics.jpg",
      imageAlt: "GlowSkin cosmetics e-commerce demo storefront preview",
      demoUrl: "",
      githubUrl: "",
      disclaimer:
        "Concept prototype demonstrating frontend product storytelling, calm visual hierarchy, and component-based e-commerce layout design.",
      overview:
        "GlowSkin balances brand elegance with practical shopping utility, presenting clean skincare product collections with dedicated ingredient spotlights and a calm visual rhythm.",
      objective:
        "Build an accessible, calm, and trustworthy beauty shopping experience that highlights ingredient safety and product benefits.",
      features: [
        "Editorial product storytelling sections",
        "Ingredient transparency cards and benefits breakdown",
        "Calm, high-contrast visual hierarchy",
        "Streamlined add-to-cart layout with variant indicators"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      responsive:
        "Fluid typography and flex-wrap layouts ensure storytelling blocks reflow gracefully across screen sizes without awkward line wrapping or horizontal overflow."
    },

    techzone: {
      title: "TechZone — Electronics & Hardware Catalog",
      category: "Electronics Catalog · Concept Build",
      badge: "Concept Build",
      image: "assets/images/project-electronics.jpg",
      imageAlt: "TechZone electronics catalog demo preview",
      demoUrl: "",
      githubUrl: "",
      disclaimer:
        "Concept project engineered to demonstrate catalog density, structured specification breakdowns, and multi-attribute filtering.",
      overview:
        "TechZone is designed for tech consumers requiring clear, scannable product comparisons and structured specifications without visual clutter.",
      objective:
        "Provide an organized catalog interface that makes technical comparison and discovery fast and dependable.",
      features: [
        "Scannable technical specification badges",
        "Comparison-friendly card structure",
        "Multi-column responsive hardware grids",
        "High-contrast CTA hierarchy"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Component Architecture"],
      responsive:
        "Multi-column grids that gracefully collapse into readable mobile stacks at narrower viewports, ensuring all product specs remain legible."
    },

    "shopify-store": {
      title: "Shopify Custom Theme Architecture",
      category: "Shopify Development · Theme Build",
      badge: "Theme Build",
      image: "assets/images/project-shopify.jpg",
      imageAlt: "Shopify custom theme architecture and product page preview",
      demoUrl: "",
      githubUrl: "",
      disclaimer:
        "Technical demonstration of Shopify Dawn theme customization, section architecture, and Liquid templating.",
      overview:
        "Demonstrates advanced Shopify theme customizations using Liquid, modular section blocks, and conversion-oriented product page design.",
      objective:
        "Illustrate modular section development and theme performance optimization for modern Shopify merchants.",
      features: [
        "Custom Liquid section schema and settings",
        "Dynamic collection and featured product blocks",
        "Optimized mobile navigation and variant selection",
        "Clean integration with Shopify Dawn theme conventions"
      ],
      technologies: ["Shopify", "Liquid", "Dawn Theme", "CSS3", "JavaScript"],
      responsive:
        "Engineered to adhere to Shopify's mobile-first responsive guidelines across handheld and desktop devices."
    }
  };

  // Modal DOM elements
  const modal = document.querySelector("#case-modal");
  const modalBadge = document.querySelector("#case-modal-badge");
  const modalImage = document.querySelector("#case-modal-image");
  const modalCategory = document.querySelector("#case-modal-category");
  const modalTitle = document.querySelector("#case-modal-title");
  const modalDisclaimer = document.querySelector("#case-modal-disclaimer");
  const modalOverview = document.querySelector("#case-modal-overview");
  const modalObjective = document.querySelector("#case-modal-objective");
  const modalFeatures = document.querySelector("#case-modal-features");
  const modalTech = document.querySelector("#case-modal-tech");
  const modalResponsive = document.querySelector("#case-modal-responsive");
  const modalDemo = document.querySelector("#case-modal-demo");
  const modalGithub = document.querySelector("#case-modal-github");

  let lastFocus = null;

  const fillList = (listEl, items) => {
    if (!listEl) return;
    listEl.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      listEl.appendChild(li);
    });
  };

  const openCaseStudy = (projectId) => {
    const study = caseStudies[projectId];
    if (!study || !modal) return;

    lastFocus = document.activeElement;

    if (modalBadge) {
      modalBadge.textContent = study.badge || "Project Case Study";
      modalBadge.classList.toggle("case-modal__badge--client", study.badge === "Client Project");
    }

    if (modalCategory) modalCategory.textContent = study.category;
    if (modalTitle) modalTitle.textContent = study.title;
    if (modalDisclaimer) modalDisclaimer.textContent = study.disclaimer;
    if (modalOverview) modalOverview.textContent = study.overview;
    if (modalObjective) modalObjective.textContent = study.objective;
    if (modalResponsive) modalResponsive.textContent = study.responsive;

    fillList(modalFeatures, study.features);
    fillList(modalTech, study.technologies);

    if (modalImage) {
      modalImage.src = study.image;
      modalImage.alt = study.imageAlt;
    }

    // Demo Link
    if (modalDemo) {
      if (study.demoUrl && study.demoUrl !== "#") {
        modalDemo.href = study.demoUrl;
        modalDemo.hidden = false;
      } else {
        modalDemo.hidden = true;
        modalDemo.removeAttribute("href");
      }
    }

    // GitHub Link
    if (modalGithub) {
      if (study.githubUrl && study.githubUrl !== "#") {
        modalGithub.href = study.githubUrl;
        modalGithub.hidden = false;
      } else {
        modalGithub.hidden = true;
        modalGithub.removeAttribute("href");
      }
    }

    modal.hidden = false;
    document.body.classList.add("case-modal-open");

    const closeBtn = modal.querySelector(".case-modal__close");
    closeBtn?.focus();
  };

  const closeCaseStudy = () => {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("case-modal-open");
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  };

  // Open modal triggers
  document.querySelectorAll("[data-case-open]").forEach((button) => {
    button.addEventListener("click", () => {
      openCaseStudy(button.getAttribute("data-case-open"));
    });
  });

  // Close modal triggers
  document.querySelectorAll("[data-case-close]").forEach((el) => {
    el.addEventListener("click", closeCaseStudy);
  });

  // Keyboard navigation inside modal (Escape + Tab trapping)
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (modal && !modal.hidden) {
        closeCaseStudy();
      }
      setMenuOpen(false);
      return;
    }

    // Focus trap inside modal
    if (modal && !modal.hidden && event.key === "Tab") {
      const focusable = modal.querySelectorAll(
        'button:not([hidden]), [href]:not([hidden]), input:not([hidden]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  /* --------------------------------------------------------------------------
     6. Copy to Clipboard Action
     -------------------------------------------------------------------------- */
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-active");
    setTimeout(() => {
      toast.classList.remove("is-active");
    }, 2400);
  };

  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          const textarea = document.createElement("textarea");
          textarea.value = textToCopy;
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
        }

        const tip = btn.querySelector(".btn-copy__tip");
        if (tip) tip.textContent = "Copied!";
        showToast(`Copied to clipboard: ${textToCopy}`);

        setTimeout(() => {
          if (tip) tip.textContent = "Copy";
        }, 2000);
      } catch (err) {
        showToast("Unable to copy to clipboard.");
      }
    });
  });
})();
