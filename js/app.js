/**
 * BUILDEX.PL - B2B Architectural Supplies Main JavaScript Logic
 */

// Central Product Database for Dynamic Product Detail Loading (20 Products)
const PRODUCTS_DATA = {
  "1": {
    id: "1",
    title: "VitraPro Ceramic Rain-screen Panel",
    category: "Facade Cladding",
    sku: "BUILDEX-VP-CER-1200",
    manufacturer: "VitraPro Architectural Solutions",
    origin: "Germany",
    price: "€48.50",
    badge: "Fire-Class A1",
    stock: "In Stock (12,000 m²)",
    description: "High-density ceramic rainscreen facade panels with invisible hidden clip attachment system. Engineered for high-rise commercial structures requiring non-combustible exterior cladding with zero color fading over 50 years.",
    mainImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    thumbs: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: {
      "Panel Dimensions": "1200mm (H) x 600mm (W) x 14mm (D)",
      "Weight": "18 kg / m²",
      "Fire Classification": "EN 13501-1 Class A1 (Non-Combustible)",
      "Water Absorption": "< 0.5% (ISO 10545-3)",
      "Warranty": "50 Years Commercial Warranty"
    }
  },
  "2": {
    id: "2",
    title: "NordicWood Natural Oak Slat Acoustic Panel",
    category: "Acoustic Ceilings",
    sku: "BUILDEX-NW-OAK-2400",
    manufacturer: "Nordic Acoustic Ltd",
    origin: "Sweden",
    price: "€62.00",
    badge: "NRC 0.95",
    stock: "In Stock (4,500 m²)",
    description: "The NordicWood acoustic slat wall and ceiling panel offers superior acoustic damping paired with timeless Scandinavian natural oak aesthetic. Engineered for high-traffic office foyers, conference rooms, auditoriums, and luxury hospitality interiors.",
    mainImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    thumbs: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: {
      "Panel Dimensions": "2400mm (H) x 600mm (W) x 22mm (D)",
      "Slat Width & Gap": "27mm Slat Width | 13mm Acoustic Gap",
      "Acoustic Absorption": "NRC 0.95 | Alpha-w 0.90 (Class A Acoustic)",
      "Fire Classification": "EN 13501-1 Class B-s1, d0 (Flame Retardant)",
      "Warranty": "15 Years Commercial Warranty"
    }
  },
  "3": {
    id: "3",
    title: "PyroShield Triple Fire-Glass Unit",
    category: "Structural Glazing",
    sku: "BUILDEX-PS-FG-090",
    manufacturer: "PyroShield Safety Glass Group",
    origin: "Poland",
    price: "€185.00",
    badge: "EI-90 Rated",
    stock: "In Stock (2,800 m²)",
    description: "Clear multi-laminated intumescent glass unit providing 90 minutes of fire insulation and integrity. Ideal for fire door assemblies, atrium enclosures, and critical partition walls.",
    mainImg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    thumbs: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: {
      "Thickness": "32 mm Multilayer Intumescent",
      "Fire Rating": "EI-90 (90 Mins Integrity & Insulation)",
      "Sound Reduction": "Rw 44 dB Acoustic Index",
      "Warranty": "20 Years Commercial Warranty"
    }
  },
  "4": {
    id: "4",
    title: "Anodized AnodoMesh Facade Screen",
    category: "Metal Mesh & Grilles",
    sku: "BUILDEX-AM-MESH-300",
    manufacturer: "AnodoMesh Metals GMBH",
    origin: "Austria",
    price: "€39.00",
    badge: "Custom RAL",
    stock: "In Stock (8,500 m²)",
    description: "Lightweight architectural expanded mesh screens offering solar shading, natural airflow ventilation, and modern industrial facade aesthetic.",
    mainImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    thumbs: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: {
      "Material": "Alloy AlMg3 Anodized Aluminum",
      "Sheet Thickness": "3.0 mm",
      "Open Air Ratio": "62% Free Airflow Area",
      "Warranty": "25 Years Corrosion Warranty"
    }
  },
  "5": {
    id: "5",
    title: "ThermaShield High-Density PIR Board",
    category: "Thermal Insulation",
    sku: "BUILDEX-TS-PIR-120",
    manufacturer: "ThermaShield Systems",
    origin: "Netherlands",
    price: "€24.80",
    badge: "Lambda 0.021",
    stock: "In Stock (15,000 m²)",
    description: "Ultra-low thermal conductivity PIR rigid insulation board composite with gas-tight aluminum foil facings.",
    mainImg: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    thumbs: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: {
      "Board Size": "1200mm x 600mm x 120mm",
      "Thermal Conductivity": "λ = 0.021 W/m·K",
      "Warranty": "25 Years Performance Guarantee"
    }
  },
  "6": {
    id: "6",
    title: "ConcreTex Fiber Reinforced Panel",
    category: "Facade Cladding",
    sku: "BUILDEX-CT-CON-012",
    manufacturer: "ConcreTex Elements",
    origin: "Denmark",
    price: "€54.00",
    badge: "A2-s1,d0",
    stock: "In Stock (6,200 m²)",
    description: "Architectural raw concrete appearance panels reinforced with alkali-resistant glass fibers.",
    mainImg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    thumbs: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
    ],
    specs: {
      "Panel Size": "3000mm x 1200mm x 12mm",
      "Fire Rating": "EN 13501-1 Class A2-s1, d0",
      "Warranty": "30 Years Durability Guarantee"
    }
  },
  "7": {
    id: "7",
    title: "AlumaClad Aluminum Composite Panel",
    category: "Facade Cladding",
    sku: "BUILDEX-AC-ACM-4MM",
    manufacturer: "AlumaClad Global",
    origin: "Germany",
    price: "€42.00",
    badge: "Fire Core FR",
    stock: "In Stock (10,000 m²)",
    description: "Premium architectural aluminum composite material with mineral-filled fire resistant core.",
    mainImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    thumbs: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"],
    specs: { "Panel Size": "3200mm x 1500mm x 4mm", "Fire Rating": "Class B-s1, d0", "Warranty": "20 Years Coating" }
  },
  "8": {
    id: "8",
    title: "SoundBlock Acoustic Felt Baffle",
    category: "Acoustic Ceilings",
    sku: "BUILDEX-SB-FELT-200",
    manufacturer: "SoundBlock Solutions",
    origin: "Finland",
    price: "€58.00",
    badge: "PET Recycled",
    stock: "In Stock (5,000 m²)",
    description: "Suspended linear acoustic ceiling baffles made from 100% recycled PET felt fiber.",
    mainImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    thumbs: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"],
    specs: { "Baffle Height": "200mm", "Sound Absorption": "NRC 0.90", "Warranty": "10 Years Warranty" }
  },
  "9": {
    id: "9",
    title: "GlassWall Structural Glass Curtain",
    category: "Structural Glazing",
    sku: "BUILDEX-GW-GC-032",
    manufacturer: "GlassWall International",
    origin: "Belgium",
    price: "€210.00",
    badge: "Triple Glazed",
    stock: "In Stock (3,000 m²)",
    description: "High-performance low-emissivity double solar control structural glazing curtain wall unit.",
    mainImg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    thumbs: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"],
    specs: { "U-Value": "0.6 W/m²K", "Acoustic Rating": "Rw 46 dB", "Warranty": "25 Years Warranty" }
  },
  "10": {
    id: "10",
    title: "PerfoSteel Decorative Metal Screen",
    category: "Metal Mesh & Grilles",
    sku: "BUILDEX-PS-MET-003",
    manufacturer: "PerfoSteel Metal Tech",
    origin: "Italy",
    price: "€46.00",
    badge: "CNC Perforated",
    stock: "In Stock (4,200 m²)",
    description: "Custom laser-cut perforated steel facade panels available in geometric patterns.",
    mainImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    thumbs: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"],
    specs: { "Thickness": "2.5mm Steel", "Open Area": "45%", "Warranty": "20 Years Warranty" }
  },
  "11": {
    id: "11",
    title: "EcoRock High-Density Mineral Wool",
    category: "Thermal Insulation",
    sku: "BUILDEX-ER-MW-100",
    manufacturer: "EcoRock Insulation",
    origin: "Poland",
    price: "€19.50",
    badge: "Class A1 Fire",
    stock: "In Stock (20,000 m²)",
    description: "Non-combustible stone wool thermal and acoustic insulation slabs for curtain walls.",
    mainImg: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    thumbs: ["https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80"],
    specs: { "Density": "110 kg/m³", "Melting Point": "> 1000°C", "Warranty": "30 Years Guarantee" }
  },
  "12": {
    id: "12",
    title: "TerraCotta Sunshade Louver Slat",
    category: "Facade Cladding",
    sku: "BUILDEX-TC-LOUV-50",
    manufacturer: "TerraCotta Craft",
    origin: "Spain",
    price: "€78.00",
    badge: "Natural Clay",
    stock: "In Stock (3,800 m²)",
    description: "Extruded natural terracotta sunshade louver tubes for passive solar shading.",
    mainImg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    thumbs: ["https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"],
    specs: { "Dimensions": "50x50x1500mm", "Material": "100% Clay", "Warranty": "40 Years Warranty" }
  },
  "13": {
    id: "13",
    title: "TitaniumZinc Standing Seam Roofing",
    category: "Facade Cladding",
    sku: "BUILDEX-TZ-ROOF-07",
    manufacturer: "TitaniumZinc Metals",
    origin: "France",
    price: "€89.00",
    badge: "Self-Healing",
    stock: "In Stock (5,400 m²)",
    description: "Architectural titanium-zinc standing seam panels with natural protective patina.",
    mainImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    thumbs: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"],
    specs: { "Thickness": "0.7mm Zinc", "Patina": "Quartz-Zinc", "Warranty": "50 Years Warranty" }
  },
  "14": {
    id: "14",
    title: "AcousticFabric Tensioned Wall Covering",
    category: "Acoustic Ceilings",
    sku: "BUILDEX-AF-TEN-100",
    manufacturer: "TexAcoustic EU",
    origin: "Switzerland",
    price: "€52.50",
    badge: "Seamless 5m",
    stock: "In Stock (7,100 m²)",
    description: "Seamless micro-perforated acoustic stretch fabric wall and ceiling systems up to 5m wide.",
    mainImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    thumbs: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"],
    specs: { "Max Width": "5000mm", "NRC Rating": "0.85", "Warranty": "15 Years Warranty" }
  },
  "15": {
    id: "15",
    title: "FireCurtain EI-120 Automated Glass Wall",
    category: "Structural Glazing",
    sku: "BUILDEX-FC-EI120",
    manufacturer: "PyroShield Glass Group",
    origin: "Poland",
    price: "€240.00",
    badge: "EI-120 Rated",
    stock: "In Stock (1,900 m²)",
    description: "Maximum safety 120-minute fire insulated glass curtain wall system.",
    mainImg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    thumbs: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"],
    specs: { "Thickness": "48mm Intumescent", "Fire Class": "EI-120", "Warranty": "25 Years Warranty" }
  },
  "16": {
    id: "16",
    title: "BrassMesh Decorative Interior Screen",
    category: "Metal Mesh & Grilles",
    sku: "BUILDEX-BM-INT-200",
    manufacturer: "AnodoMesh Metals",
    origin: "Italy",
    price: "€95.00",
    badge: "Luxury Brass",
    stock: "In Stock (2,100 m²)",
    description: "Woven solid brass architectural wire mesh screen for luxury interiors.",
    mainImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    thumbs: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"],
    specs: { "Material": "Solid Brass CZ108", "Open Area": "38%", "Warranty": "20 Years Warranty" }
  },
  "17": {
    id: "17",
    title: "AerogelFlex Ultra-Thin Thermal Blanket",
    category: "Thermal Insulation",
    sku: "BUILDEX-AG-FLEX-10",
    manufacturer: "Aerogel Systems",
    origin: "Germany",
    price: "€115.00",
    badge: "Space-Grade",
    stock: "In Stock (3,300 m²)",
    description: "Space-grade silica aerogel insulation blanket delivering unmatched thermal performance.",
    mainImg: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    thumbs: ["https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80"],
    specs: { "Thickness": "10mm Blanket", "Lambda": "0.015 W/m·K", "Warranty": "30 Years Guarantee" }
  },
  "18": {
    id: "18",
    title: "FiberStone Ultra-Light Stone Veneer",
    category: "Facade Cladding",
    sku: "BUILDEX-FS-STN-002",
    manufacturer: "FiberStone Elements",
    origin: "Portugal",
    price: "€68.00",
    badge: "Natural Slate",
    stock: "In Stock (4,800 m²)",
    description: "Flexible ultra-thin real slate stone veneer backed with fiber glass resin.",
    mainImg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    thumbs: ["https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"],
    specs: { "Sheet Size": "2440x1220mm", "Weight": "1.8 kg/m²", "Warranty": "25 Years Warranty" }
  },
  "19": {
    id: "19",
    title: "CopperPatina Architectural Façade Panel",
    category: "Facade Cladding",
    sku: "BUILDEX-CP-PAT-008",
    manufacturer: "CopperTech Systems",
    origin: "Finland",
    price: "€135.00",
    badge: "Pre-Patinated",
    stock: "In Stock (1,600 m²)",
    description: "Pre-patinated emerald green copper facade panels designed for iconic cultural buildings.",
    mainImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    thumbs: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"],
    specs: { "Thickness": "0.8mm Pure Copper", "Finish": "Pre-oxidized Green Patina", "Warranty": "50 Years Warranty" }
  },
  "20": {
    id: "20",
    title: "PolyCarbonate Multiwall Daylight Sheet",
    category: "Structural Glazing",
    sku: "BUILDEX-PC-MW-025",
    manufacturer: "PolyLight Global",
    origin: "Germany",
    price: "€34.50",
    badge: "UV-Protected",
    stock: "In Stock (8,200 m²)",
    description: "25mm 7-wall lightweight polycarbonate skylight panel offering high thermal insulation.",
    mainImg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    thumbs: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"],
    specs: { "Thickness": "25mm 7-Wall Structure", "U-Value": "1.2 W/m²K", "Warranty": "15 Years Warranty" }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNavToggle();
  initHeroCarousel();
  initGridListToggle();
  initModalLogic();
  initGallerySwitcher();
  initAccordion();
  loadDynamicProductDetail();
  initViewMoreAndPagination();
  initScrollRevealAnimations();
  initHeroStatsCounter();
  initCategoryAccordionShowcase();
  initLiveNavbarSearch();
});

/* 1. DARK / LIGHT MODE TOGGLE LOGIC */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleBtn.innerHTML = '☀️';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleBtn.innerHTML = '🌙';
  }

  toggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    if (activeTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      toggleBtn.innerHTML = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      toggleBtn.innerHTML = '☀️';
    }
  });
}

/* MOBILE NAV TOGGLE LOGIC */
function initMobileNavToggle() {
  const btn = document.getElementById('mobile-nav-btn');
  const menu = document.getElementById('nav-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

/* 2. HERO CAROUSEL LOGIC */
function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.querySelector('.carousel-arrow.prev');
  const nextBtn = document.querySelector('.carousel-arrow.next');

  if (!slides.length) return;

  let currentIndex = 0;
  let timer = null;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    indicators.forEach(i => i.classList.remove('active'));

    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
    if (indicators[currentIndex]) {
      indicators[currentIndex].classList.add('active');
    }
  }

  function startAutoPlay() {
    stopAutoPlay();
    timer = setInterval(() => showSlide(currentIndex + 1), 6000);
  }

  function stopAutoPlay() {
    if (timer) clearInterval(timer);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentIndex - 1);
      startAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentIndex + 1);
      startAutoPlay();
    });
  }

  indicators.forEach((ind, i) => {
    ind.addEventListener('click', () => {
      showSlide(i);
      startAutoPlay();
    });
  });

  startAutoPlay();
}

/* 3. GRID / LIST VIEW TOGGLE LOGIC */
function initGridListToggle() {
  const wrapper = document.querySelector('.products-wrapper');
  const gridBtn = document.getElementById('grid-view-btn');
  const listBtn = document.getElementById('list-view-btn');

  if (!wrapper || !gridBtn || !listBtn) return;

  gridBtn.addEventListener('click', () => {
    wrapper.classList.remove('list-view');
    wrapper.classList.add('grid-view');
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
  });

  listBtn.addEventListener('click', () => {
    wrapper.classList.remove('grid-view');
    wrapper.classList.add('list-view');
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
  });
}

/* 4. B2B QUOTE & SAMPLE MODAL LOGIC */
function initModalLogic() {
  const overlay = document.getElementById('quote-modal');
  const openBtns = document.querySelectorAll('.open-quote-modal, .open-sample-modal');
  const closeBtn = document.querySelector('.modal-close');
  const quoteForm = document.getElementById('quote-form');

  if (!overlay) return;

  const modalTitle = overlay.querySelector('h2');
  const modalNotes = document.getElementById('project_notes');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isSampleReq = btn.textContent.toLowerCase().includes('sample') || btn.classList.contains('open-sample-modal');
      
      if (modalTitle) {
        modalTitle.textContent = isSampleReq 
          ? 'Request Free Physical Sample Box' 
          : 'Request B2B Technical Quote';
      }

      if (modalNotes && isSampleReq) {
        modalNotes.value = 'Please dispatch a physical material sample box & texture swatch kit to our office address.';
      } else if (modalNotes && !modalNotes.value.includes('sample')) {
        modalNotes.value = '';
      }

      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isSample = modalTitle && modalTitle.textContent.includes('Sample');
      if (isSample) {
        alert('Thank you! Your Physical Sample Swatch Box request has been placed. Courier dispatch tracking will be emailed to you shortly.');
      } else {
        alert('Thank you! Your B2B Commercial Quote Request has been submitted. Our architectural team will reach out within 2 hours.');
      }
      closeModal();
      quoteForm.reset();
    });
  }
}

/* 5. PRODUCT DETAIL PAGE GALLERY SWITCHER */
function initGallerySwitcher() {
  const mainImg = document.getElementById('main-gallery-img');
  const thumbs = document.querySelectorAll('.thumb-item');

  if (!mainImg || !thumbs.length) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const targetSrc = thumb.getAttribute('data-src');
      if (targetSrc) {
        mainImg.src = targetSrc;
      }
    });
  });
}

/* 6. FAQ ACCORDION LOGIC */
function initAccordion() {
  const items = document.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    if (!header || !content) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all active items
      items.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherContent = otherItem.querySelector('.accordion-content');
        if (otherContent) otherContent.style.maxHeight = null;
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

/* 7. DYNAMIC PRODUCT DETAIL LOADER BASED ON URL ?id=X */
function loadDynamicProductDetail() {
  const pdpTitle = document.querySelector('.pdp-title');
  if (!pdpTitle) return; // Not on PDP

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || "2"; // Default to product 2 if not passed

  const product = PRODUCTS_DATA[productId] || PRODUCTS_DATA["2"];

  // Update Page Elements
  pdpTitle.textContent = product.title;
  document.title = `${product.title} - BUILDEX.pl B2B`;

  const breadcrumbSpan = document.getElementById('pdp-breadcrumb-title');
  if (breadcrumbSpan) breadcrumbSpan.textContent = product.title;

  const breadcrumbCat = document.getElementById('pdp-breadcrumb-cat');
  if (breadcrumbCat) breadcrumbCat.textContent = product.category;

  const skuElem = document.querySelector('.pdp-sku');
  if (skuElem) skuElem.textContent = `SKU: ${product.sku} | Manufacturer: ${product.manufacturer} | Origin: ${product.origin}`;

  const priceElem = document.querySelector('.pdp-price');
  if (priceElem) priceElem.innerHTML = `${product.price} <span style="font-size: 1rem; color: var(--text-muted); font-weight: 400;">/ m² ex. VAT</span>`;

  const descElem = document.getElementById('pdp-description');
  if (descElem) descElem.textContent = product.description;

  const mainImgElem = document.getElementById('main-gallery-img');
  if (mainImgElem) mainImgElem.src = product.mainImg;

  // Update Thumbnails
  const thumbsContainer = document.querySelector('.gallery-thumbs');
  if (thumbsContainer && product.thumbs) {
    thumbsContainer.innerHTML = product.thumbs.map((imgUrl, index) => `
      <div class="thumb-item ${index === 0 ? 'active' : ''}" data-src="${imgUrl}">
        <img src="${imgUrl}" alt="${product.title} view ${index + 1}">
      </div>
    `).join('');
    initGallerySwitcher();
  }

  // Update Specs Table
  const specsTbody = document.querySelector('.specs-table tbody');
  if (specsTbody && product.specs) {
    specsTbody.innerHTML = Object.entries(product.specs).map(([key, val]) => `
      <tr>
        <th>${key}</th>
        <td>${val}</td>
      </tr>
    `).join('');
  }
}

/* 8. VIEW ALL & PAGINATION LOGIC (8 CARDS PER PAGE - 20 PRODUCTS TOTAL) */
function initViewMoreAndPagination() {
  const viewMoreBtn = document.getElementById('view-more-btn');
  const resultsCount = document.getElementById('results-count-text');
  const allCards = document.querySelectorAll('.product-card');
  const pageBtns = document.querySelectorAll('.pagination-btn[data-page]');
  const prevBtn = document.getElementById('pag-prev');
  const nextBtn = document.getElementById('pag-next');

  if (!allCards.length || !viewMoreBtn) return;

  let currentPage = 1;
  let isViewingAll = false;
  const itemsPerPage = 8;
  const totalPages = Math.ceil(allCards.length / itemsPerPage);

  function renderPage(page) {
    if (isViewingAll) return;
    currentPage = page;

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    allCards.forEach((card, index) => {
      if (index >= start && index < end) {
        card.classList.remove('hidden-card');
      } else {
        card.classList.add('hidden-card');
      }
    });

    if (resultsCount) {
      resultsCount.innerHTML = `Showing <strong>${start + 1} - ${Math.min(end, allCards.length)}</strong> of <strong>${allCards.length}</strong> materials`;
    }

    // Update Pagination UI
    pageBtns.forEach(btn => {
      if (btn.getAttribute('data-page') === String(page)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (prevBtn) prevBtn.disabled = (page === 1);
    if (nextBtn) nextBtn.disabled = (page === totalPages);
  }

  // View All Button Click Event
  viewMoreBtn.addEventListener('click', () => {
    isViewingAll = !isViewingAll;

    if (isViewingAll) {
      allCards.forEach(card => card.classList.remove('hidden-card'));
      if (resultsCount) {
        resultsCount.innerHTML = `Showing <strong>1 - ${allCards.length}</strong> of <strong>${allCards.length}</strong> materials`;
      }
      viewMoreBtn.textContent = 'View Less Materials ↑';
    } else {
      viewMoreBtn.textContent = 'View All 20 Materials →';
      renderPage(1);
    }
  });

  // Page Button Clicks
  pageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pageNum = parseInt(btn.getAttribute('data-page'), 10);
      if (pageNum) {
        isViewingAll = false;
        viewMoreBtn.textContent = 'View All 20 Materials →';
        renderPage(pageNum);
      }
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        isViewingAll = false;
        viewMoreBtn.textContent = 'View All 20 Materials →';
        renderPage(currentPage - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        isViewingAll = false;
        viewMoreBtn.textContent = 'View All 20 Materials →';
        renderPage(currentPage + 1);
      }
    });
  }

  // Initial render on Page 1
  renderPage(1);
}

/* 9. SCROLL REVEAL & STUNNING ANIMATION EFFECTS */
function initScrollRevealAnimations() {
  const revealElements = document.querySelectorAll('.section, .product-card, .cta-sample-card, .top-bar, .hero-stats-row');
  
  revealElements.forEach(el => {
    el.classList.add('reveal-on-scroll');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* 10. HERO STATS DYNAMIC COUNTER ANIMATION */
function initHeroStatsCounter() {
  const statNums = document.querySelectorAll('.stat-item-num');
  if (!statNums.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent.trim();
        
        // Extract numeric part if any
        const match = text.match(/^(\d+)(.*)$/);
        if (match) {
          const targetNum = parseInt(match[1], 10);
          const suffix = match[2];
          let currentNum = 0;
          const step = Math.ceil(targetNum / 35);
          
          const interval = setInterval(() => {
            currentNum += step;
            if (currentNum >= targetNum) {
              currentNum = targetNum;
              clearInterval(interval);
            }
            el.textContent = currentNum + suffix;
          }, 35);
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => observer.observe(el));
}

/* 11. INTERACTIVE EXPANDING CATEGORY ACCORDION SHOWCASE */
function initCategoryAccordionShowcase() {
  const panels = document.querySelectorAll('.cat-acc-panel');
  if (!panels.length) return;

  panels.forEach(panel => {
    panel.addEventListener('mouseenter', () => {
      panels.forEach(p => p.classList.remove('active'));
      panel.classList.add('active');
    });

    panel.addEventListener('click', () => {
      panels.forEach(p => p.classList.remove('active'));
      panel.classList.add('active');
    });
  });
}

/* 12. REAL-TIME LIVE NAVBAR SEARCH ENGINE */
function initLiveNavbarSearch() {
  const searchBox = document.querySelector('.search-box');
  const searchInput = searchBox ? searchBox.querySelector('input') : null;
  if (!searchBox || !searchInput) return;

  // Create search results dropdown container
  let dropdown = searchBox.querySelector('.search-results-dropdown');
  if (!dropdown) {
    dropdown = document.createElement('div');
    dropdown.className = 'search-results-dropdown';
    searchBox.appendChild(dropdown);
  }

  // Handle Search Input Event
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (!query) {
      dropdown.classList.remove('active');
      dropdown.innerHTML = '';
      filterCategoryCardsOnPage('');
      return;
    }

    // Search matching products from PRODUCTS_DATA
    const matches = Object.values(PRODUCTS_DATA).filter(prod => {
      const titleMatch = prod.title.toLowerCase().includes(query);
      const catMatch = prod.category.toLowerCase().includes(query);
      const skuMatch = prod.sku.toLowerCase().includes(query);
      const badgeMatch = prod.badge ? prod.badge.toLowerCase().includes(query) : false;
      const descMatch = prod.description ? prod.description.toLowerCase().includes(query) : false;
      return titleMatch || catMatch || skuMatch || badgeMatch || descMatch;
    });

    if (matches.length > 0) {
      dropdown.innerHTML = matches.slice(0, 6).map(prod => `
        <a href="product-detail.html?id=${prod.id}" class="search-result-item">
          <img src="${prod.mainImg}" alt="${prod.title}" class="search-result-thumb">
          <div class="search-result-info">
            <div class="search-result-title">${prod.title}</div>
            <div class="search-result-cat">${prod.category} • SKU: ${prod.sku}</div>
          </div>
          <div class="search-result-price">${prod.price}</div>
        </a>
      `).join('');
    } else {
      dropdown.innerHTML = `<div class="search-no-results">No materials found matching "<strong>${escapeHtml(query)}</strong>"</div>`;
    }

    dropdown.classList.add('active');

    // Also filter cards in real-time if on category.html
    filterCategoryCardsOnPage(query);
  });

  // Hide dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchBox.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });

  // Re-open on focus if query exists
  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim().length > 0 && dropdown.children.length > 0) {
      dropdown.classList.add('active');
    }
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, function(m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
  });
}

function filterCategoryCardsOnPage(query) {
  const cards = document.querySelectorAll('.products-wrapper .product-card');
  const resultsCount = document.getElementById('results-count-text');
  if (!cards.length) return;

  if (!query) {
    cards.forEach((card, index) => {
      if (index < 8) card.classList.remove('hidden-card');
      else card.classList.add('hidden-card');
    });
    return;
  }

  let visibleCount = 0;
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(query)) {
      card.classList.remove('hidden-card');
      visibleCount++;
    } else {
      card.classList.add('hidden-card');
    }
  });

  if (resultsCount) {
    resultsCount.innerHTML = `Showing <strong>${visibleCount}</strong> materials matching "<strong>${escapeHtml(query)}</strong>"`;
  }
}
