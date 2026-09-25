# E-commerce Web Developer Portfolio

## Project Overview
A professional, modern, and mobile-first portfolio website designed for a freelance E-commerce Web Developer specializing in Shopify, WooCommerce, and custom frontend development. The design focuses on showcasing clean e-commerce project demos and highlighting core frontend development skills to attract clients globally.

## Features
- **Responsive & Mobile-First**: Built from the ground up to adapt perfectly across mobile phones, tablets, and desktop displays.
- **Dynamic Case Studies Modal**: A lightweight JavaScript modal system to display project details, challenges, and solutions without leaving the page.
- **Scroll Reveal Animations**: Smooth entry animations for content using the modern `IntersectionObserver` API.
- **SEO & Accessibility Ready**: Configured with semantic HTML, descriptive ARIA labels, focus trapping, screen-reader friendly form validation, and Open Graph metadata for social sharing.
- **Zero Dependencies**: Entirely built with Vanilla JavaScript and pure CSS—no heavy frameworks or libraries to slow things down.

## Technologies
- **HTML5**: Semantic and accessible markup.
- **CSS3**: Custom properties (variables), CSS Grid, and Flexbox for modern layout management.
- **Vanilla JavaScript (ES6+)**: Handles the mobile menu, scroll states, scroll-reveal animations, modal logic, and basic client-side form validation.
- **Google Fonts**: Uses *Sora* (Headings) and *IBM Plex Sans* (Body).

## Project Structure
```text
ecommerce-portfolio/
├── index.html            # Main portfolio markup
├── README.md             # Project documentation
├── assets/
│   ├── icons/            # Favicons and touch icons (add yours here)
│   └── images/           # Project screenshots and profile photos
├── css/
│   └── style.css         # All styles (mobile-first, variables at the top)
└── js/
    └── script.js         # Interactivity (nav, modal, form validation, reveal)
```

## How to Run Locally
Because this is a static website with zero build steps or server dependencies, running it is incredibly simple:
1. Clone or download this repository to your local machine.
2. Open the `ecommerce-portfolio` folder.
3. Double-click `index.html` to open it directly in your web browser. 
*(Alternatively, use an extension like VS Code Live Server for hot-reloading while you edit).*

## How to Replace Images
1. **Profile Photo**: Place your professional headshot in the `assets/images/` folder and name it `profile.jpg` (or update the file extension in `index.html`).
2. **Project Screenshots**: Replace the demo concept images (`project-fashion.jpg`, `project-cosmetics.jpg`, etc.) in `assets/images/` with screenshots of your actual live work. 
3. **Open Graph Image**: Place an image named `og-image.jpg` in `assets/images/` to represent your site when shared on platforms like LinkedIn or WhatsApp.

## How to Update Contact Information
The portfolio has already been personalized with your name, email, WhatsApp, and social links.
**Contact Form**: The current form uses JavaScript to simulate a success message. To make it functional, change the `<form>` tag in `index.html` to post to a service like [Formspree](https://formspree.io/) or [Netlify Forms](https://docs.netlify.com/forms/setup/).

## How to Update Project Links
In `index.html`, locate the `<!-- Projects -->` section.
1. Look for the "View Live Demo" buttons inside the project cards.
2. Replace `href="#"` with the actual URL of your live project.
3. The "View Case Study" modal text is driven by JavaScript. To edit the text inside the case study popups, open `js/script.js` and modify the text inside the `caseStudies` object.

## Deployment Instructions
This static website is ready to be hosted freely on any static hosting provider. 

### Option 1: GitHub Pages (Recommended)
1. Push this code to a public repository on your GitHub account.
2. Go to the repository **Settings** > **Pages**.
3. Under "Build and deployment", set the source to **Deploy from a branch**.
4. Select the `main` (or `master`) branch and click **Save**. 
5. Your site will be live at `https://yourusername.github.io/repository-name/`.

### Option 2: Netlify / Vercel
1. Create a free account on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
2. Connect your GitHub account and select this repository.
3. No build command is required. Just click **Deploy** and your site will be live globally in seconds.

---
*Remember to uncomment the `<link rel="icon">` tags in the `<head>` of `index.html` once you have placed your favicon files in the `assets/icons/` folder!*
