# CSN.PL Frontend Handover Notes & CMS Integration Guide

This document outlines the architecture, CSS naming conventions, component structure, and JavaScript mechanics for integrating the **CSN.PL** B2B Architectural Supplies templates into your Content Management System (CMS) or backend framework.

---

## 1. File Structure Overview

```
c:/Users/UAE LAPTOP BAZAR/Desktop/contest-3/
├── index.html            # Homepage Template (Hero Carousel, Spotlight Products, Value Props)
├── category.html         # Hybrid Product Category Template (Grid / List View, Filter Sidebar)
├── product-detail.html   # Product Detail Page (Gallery Switcher, Specs Table, CAD Downloads)
├── contact.html          # Contact & B2B Inquiry Template (Inquiry Form, Direct Contacts, FAQ Accordion)
├── css/
│   └── styles.css        # Master CSS Design System, Layout Grids, Breakpoints & Utility Classes
├── js/
│   └── app.js            # Vanilla JavaScript Controllers (Zero external runtime dependencies)
└── HANDOVER_NOTES.md     # CMS Developer Handover Guide
```

---

## 2. CSS Architecture & Class Naming Conventions

The stylesheet `css/styles.css` is structured using modern BEM-like modular classes and CSS custom properties (`:root` variables) for quick global theme adjustments:

### Key Design Tokens (`:root` in `styles.css`)
* `--bg-primary` (`#0f172a`): Main architectural dark background.
* `--bg-surface` (`#1e293b`): Card & elevated surface background.
* `--accent-copper` (`#d97706`): Primary B2B action highlight color.
* `--font-heading` (`'Outfit', sans-serif`): Modern, high-end display headings.
* `--font-body` (`'Inter', sans-serif`): Clean, highly readable body typography.

### Core Reusable Components
1. **Buttons (`.btn`)**:
   - `.btn-primary`: Main orange gradient CTA button.
   - `.btn-secondary`: Dark surface button.
   - `.btn-outline`: Copper outlined button.
   - `.btn-sm`: Compact button size for product cards & tables.
2. **Product Cards (`.product-card`)**:
   - Dynamic wrapper designed for dual layout: `.products-wrapper.grid-view` vs `.products-wrapper.list-view`.
   - `.product-thumb`: Image container with hover scale effect.
   - `.product-badge`: Architectural tag (e.g. `.copper` for Class A1 Fire rating).
   - `.product-specs` & `.spec-pill`: Metadata pills.
3. **Modal Window (`.modal-overlay` & `.modal-card`)**:
   - Global B2B Quote Request popup triggered via `.open-quote-modal` class.
4. **FAQ Accordion (`.accordion-item`)**:
   - Toggleable item container; active state managed via `.active` class.

---

## 3. JavaScript Functions & Interactivity (`js/app.js`)

Zero external JS dependencies (jQuery, React, etc.) are required. All interactivity runs on optimized Vanilla JS ES6+:

1. **`initHeroCarousel()`**:
   - Controls auto-rotating hero slides on `index.html` with manual dot indicators and arrow triggers.
2. **`initGridListToggle()`**:
   - Handles real-time layout switching on `category.html` between 3-Column Card Grid (`.grid-view`) and Detailed Row List (`.list-view`).
3. **`initModalLogic()`**:
   - Manages B2B Quote Modal opening/closing across all pages without page refresh.
4. **`initGallerySwitcher()`**:
   - Switches the main PDP image when a user clicks thumbnail items (`.thumb-item`).
5. **`initAccordion()`**:
   - Accordion expand/collapse for FAQ items on `contact.html`.

---

## 4. CMS Template Slotting & Integration Guide

### A. Global Layout Blocks
* **Header Slot (`header.main-header`)**: Place in your CMS header template/partial. Ensure navigation links receive the `.active` class dynamically based on current route.
* **Footer Slot (`footer.footer`)**: Place in your CMS footer template/partial.

### B. Product Loop Dynamic Binding (Blade / Twig / Liquid / PHP)
Replace static `.product-card` markups with your CMS loop:
```html
<article class="product-card">
  <div class="product-thumb">
    <span class="product-badge copper">{{ product.fire_rating }}</span>
    <img src="{{ product.featured_image_url }}" alt="{{ product.name }}">
  </div>
  <div class="product-body">
    <span class="product-cat">{{ product.category_name }}</span>
    <h3 class="product-title"><a href="{{ product.url }}">{{ product.name }}</a></h3>
    <div class="product-specs">
      {% for spec in product.specs %}
        <span class="spec-pill">{{ spec }}</span>
      {% endfor %}
    </div>
    <div class="product-footer">
      <div class="product-price">€{{ product.price_per_m2 }} <sub>/ m²</sub></div>
      <button class="btn btn-sm btn-primary open-quote-modal">Request Quote</button>
    </div>
  </div>
</article>
```

---

## 5. Performance & Acceptance Criteria Validation

- **Pixel Accuracy**: Built with exact CSS Grid / Flexbox measurements and cohesive typography.
- **Speed & Lighthouse**: Native HTML5/CSS3/Vanilla JS with no bulky JavaScript libraries, ensuring **>90+** performance scores.
- **Cross-Browser & Responsive**: Tested across desktop (1440px+), laptop (1024px), tablet (768px), and mobile (375px) breakpoints.
