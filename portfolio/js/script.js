/**
 * E-commerce Portfolio — Vanilla JS
 * Mobile nav, scroll state, reveal, case study modal, contact form
 */

(function () {
  "use strict";

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".navbar__toggle");
  const menu = document.querySelector("#primary-menu");
  const yearEl = document.querySelector("#year");
  const form = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");

  /* Current year in footer */
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* Empty / missing image placeholders */
  document.querySelectorAll(".dev-card__media img, .project-card__media img").forEach((img) => {
    const markPlaceholder = () => img.classList.add("is-placeholder");

    if (img.complete && img.naturalWidth === 0) {
      markPlaceholder();
    }

    img.addEventListener("error", markPlaceholder);
  });

  /* Sticky header shadow on scroll */
  const updateHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  /* Mobile navigation */
  const setMenuOpen = (open) => {
    if (!toggle || !menu) return;
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      setMenuOpen(!isOpen);
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
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

  /* Scroll reveal — sections & key blocks only */
  const revealTargets = document.querySelectorAll(
    ".section__header, .service-card, .project-card, .other-project-card, .skills-list, .about__content, .why-list, .contact__details, .contact-form, .hero__content, .hero__visual"
  );

  revealTargets.forEach((el, index) => {
    el.classList.add("reveal");
    if (el.classList.contains("project-card") || el.classList.contains("service-card") || el.classList.contains("other-project-card")) {
      const delay = (index % 3) + 1;
      el.classList.add(`reveal-delay-${delay}`);
    }
  });

  document.querySelectorAll(".hero .reveal").forEach((el) => {
    el.classList.add("is-visible");
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
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    revealTargets.forEach((el) => {
      if (!el.classList.contains("is-visible")) observer.observe(el);
    });
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  /* Case study modal data (demo / concept projects only) */
  const caseStudies = {
    urbanwear: {
      title: "UrbanWear",
      category: "Fashion E-commerce",
      image: "assets/images/project-fashion.jpg",
      imageAlt: "UrbanWear fashion e-commerce demo store preview",
      demoUrl: "#",
      disclaimer:
        "This is a demo / concept project created to showcase e-commerce frontend skills. It is not presented as a real client engagement.",
      overview:
        "UrbanWear is a fashion storefront concept focused on helping shoppers browse apparel collections with clarity. The project explores category structure, product presentation, and a mobile-first shopping path typical of modern clothing brands.",
      objective:
        "Design a responsive fashion e-commerce experience where users can move from collection browsing to product detail without confusion, especially on smaller screens.",
      features: [
        "Category-led product browsing",
        "Responsive product grid layouts",
        "Clear product detail hierarchy",
        "Mobile-friendly navigation patterns",
        "Conversion-focused call-to-action placement"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      responsive:
        "Layouts adapt from single-column mobile browsing to multi-column desktop grids. Touch targets, spacing, and typography were tuned so apparel shopping remains comfortable across phone, tablet, and desktop viewports."
    },
    glowskin: {
      title: "GlowSkin",
      category: "Cosmetics E-commerce",
      image: "assets/images/project-cosmetics.jpg",
      imageAlt: "GlowSkin cosmetics e-commerce demo store preview",
      demoUrl: "#",
      disclaimer:
        "This is a demo / concept project created to showcase e-commerce frontend skills. It is not presented as a real client engagement.",
      overview:
        "GlowSkin is a cosmetics storefront concept centered on product storytelling and trust. The layout balances brand presentation with a practical path toward product selection and purchase.",
      objective:
        "Create a beauty e-commerce experience that feels polished and calm while keeping product information easy to scan and the shopping flow simple.",
      features: [
        "Product storytelling sections",
        "Ingredient-focused product layout",
        "Soft visual hierarchy for brand trust",
        "Streamlined add-to-cart oriented structure",
        "Consistent mobile and desktop product pages"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      responsive:
        "Content blocks reflow for narrower screens so storytelling sections remain readable. Product details stack cleanly on mobile while preserving a refined, desktop-ready presentation."
    },
    techzone: {
      title: "TechZone",
      category: "Electronics E-commerce",
      image: "assets/images/project-electronics.jpg",
      imageAlt: "TechZone electronics e-commerce demo store preview",
      demoUrl: "#",
      disclaimer:
        "This is a demo / concept project created to showcase e-commerce frontend skills. It is not presented as a real client engagement.",
      overview:
        "TechZone is an electronics catalog concept designed for structured browsing. It focuses on scannable product cards, clear CTAs, and an organized information hierarchy for tech shoppers.",
      objective:
        "Help users compare and explore electronics products quickly without a cluttered or overwhelming storefront experience.",
      features: [
        "Structured product catalog sections",
        "Comparison-friendly product cards",
        "Strong call-to-action hierarchy",
        "Responsive multi-column grids",
        "Clear product information grouping"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      responsive:
        "Catalog grids collapse from multi-column desktop layouts into readable mobile stacks. Key product actions remain visible and accessible at every breakpoint."
    },
    "shopify-store": {
      title: "Shopify Store",
      category: "Shopify E-commerce",
      image: "assets/images/project-shopify.jpg",
      imageAlt: "Shopify e-commerce demo project preview",
      demoUrl: "#",
      disclaimer:
        "This is a demo / concept project created to showcase Shopify and Liquid skills. It is not presented as a real client engagement.",
      overview:
        "This Shopify concept project demonstrates theme customization and product-page refinement using Liquid and frontend styling. The focus is clearer merchandising and a more conversion-friendly storefront structure.",
      objective:
        "Show how Shopify theme work can improve product presentation, section structure, and shopping clarity for an online store.",
      features: [
        "Shopify theme customization patterns",
        "Liquid-powered product sections",
        "Improved product page layout",
        "Conversion-oriented page structure",
        "Reusable section-based storefront organization"
      ],
      technologies: ["Shopify", "Liquid", "CSS3", "JavaScript"],
      responsive:
        "Theme sections were considered for Shopify’s responsive behavior across devices, with attention to product media, pricing blocks, and purchase actions on mobile and desktop."
    }
  };

  const modal = document.querySelector("#case-modal");
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

    modalCategory.textContent = study.category;
    modalTitle.textContent = study.title;
    modalDisclaimer.textContent = study.disclaimer;
    modalOverview.textContent = study.overview;
    modalObjective.textContent = study.objective;
    modalResponsive.textContent = study.responsive;
    fillList(modalFeatures, study.features);
    fillList(modalTech, study.technologies);

    modalImage.src = study.image;
    modalImage.alt = study.imageAlt;
    modalImage.classList.remove("is-placeholder");
    modalImage.onerror = () => modalImage.classList.add("is-placeholder");

    modalDemo.href = study.demoUrl || "#";
    if (!study.demoUrl || study.demoUrl === "#") {
      modalDemo.setAttribute("aria-disabled", "true");
      modalDemo.title = "Add your live demo URL";
    } else {
      modalDemo.removeAttribute("aria-disabled");
      modalDemo.removeAttribute("title");
    }

    modal.hidden = false;
    document.body.classList.add("case-modal-open");
    modal.querySelector(".case-modal__close")?.focus();
  };

  const closeCaseStudy = () => {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("case-modal-open");
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  };

  document.querySelectorAll("[data-case-open]").forEach((button) => {
    button.addEventListener("click", () => {
      openCaseStudy(button.getAttribute("data-case-open"));
    });
  });

  document.querySelectorAll("[data-case-close]").forEach((el) => {
    el.addEventListener("click", closeCaseStudy);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCaseStudy();
      setMenuOpen(false);
    }
  });

  /* Live demo placeholders — prevent dead jumps until URLs are added */
  document.querySelectorAll("[data-demo-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (!link.getAttribute("href") || link.getAttribute("href") === "#") {
        event.preventDefault();
        link.setAttribute("title", "Replace this href with your live demo URL");
      }
    });
  });

  modalDemo?.addEventListener("click", (event) => {
    if (!modalDemo.getAttribute("href") || modalDemo.getAttribute("href") === "#") {
      event.preventDefault();
    }
  });

  /* Contact form — client-side validation only (no backend) */
  if (form) {
    const nameInput = form.querySelector("#name");
    const emailInput = form.querySelector("#email");
    const messageInput = form.querySelector("#message");

    const setStatus = (message, type) => {
      if (!formStatus) return;
      formStatus.textContent = message;
      formStatus.classList.remove("is-success", "is-error");
      if (type) formStatus.classList.add(type);
    };

    const validateEmail = (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      [nameInput, emailInput, messageInput].forEach((field) => {
        if (field) {
          field.classList.remove("is-invalid");
          field.setAttribute("aria-invalid", "false");
        }
      });

      let valid = true;

      if (!nameInput || !nameInput.value.trim()) {
        nameInput?.classList.add("is-invalid");
        nameInput?.setAttribute("aria-invalid", "true");
        valid = false;
      }

      if (!emailInput || !validateEmail(emailInput.value)) {
        emailInput?.classList.add("is-invalid");
        emailInput?.setAttribute("aria-invalid", "true");
        valid = false;
      }

      if (!messageInput || !messageInput.value.trim()) {
        messageInput?.classList.add("is-invalid");
        messageInput?.setAttribute("aria-invalid", "true");
        valid = false;
      }

      if (!valid) {
        setStatus("Please fill in all fields with a valid email address.", "is-error");
        return;
      }

      setStatus(
        "Thanks — your message looks ready. Connect this form to your email service (or replace the button with mailto) to send it.",
        "is-success"
      );
      form.reset();
    });
  }
})();
