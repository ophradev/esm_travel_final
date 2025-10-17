# ESM Travel Design Guidelines

## Design Approach: Immersive Travel Experience

**Reference-Based Approach:** Drawing inspiration from Airbnb's visual storytelling and National Geographic's immersive photography layouts, combined with West African cultural aesthetics.

**Core Principle:** Create an emotionally engaging, landscape-focused experience that transports visitors to West Africa before they book.

---

## Color Palette

### Light Mode
- **Primary Brand:** 15 75% 45% (Deep Teal - evokes tropical waters and West African textiles)
- **Secondary:** 35 60% 50% (Warm Terracotta - West African earth and architecture)
- **Accent:** 45 85% 55% (Golden Amber - sunsets and cultural warmth)
- **Backgrounds:** 0 0% 98% (Soft White), 0 0% 95% (Light Gray)
- **Text:** 0 0% 15% (Charcoal), 0 0% 40% (Medium Gray)

### Dark Mode
- **Primary:** 15 65% 55% (Lighter Teal for contrast)
- **Secondary:** 35 50% 60% (Softer Terracotta)
- **Accent:** 45 75% 65% (Brighter Amber)
- **Backgrounds:** 0 0% 10% (Rich Black), 0 0% 15% (Dark Gray)
- **Text:** 0 0% 95% (Off White), 0 0% 70% (Light Gray)

---

## Typography

**Font Families:**
- **Headings:** Montserrat (bold, modern, impactful) - weights 600, 700, 800
- **Body:** Inter (clean, readable) - weights 400, 500, 600
- **Accent/Logo:** Playfair Display (elegant, sophisticated) - weight 700

**Type Scale:**
- Hero Title: text-5xl md:text-6xl lg:text-7xl (bold)
- Section Headings: text-3xl md:text-4xl lg:text-5xl
- Subsections: text-xl md:text-2xl
- Body: text-base md:text-lg
- Small/Captions: text-sm

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 20, 24 (p-4, m-8, gap-12, py-16, space-y-20, px-24)

**Container Strategy:**
- Full-width hero: w-full with max-w-7xl inner container
- Content sections: max-w-6xl mx-auto
- Text-heavy sections: max-w-4xl for optimal readability

**Section Padding:**
- Desktop: py-20 to py-24
- Tablet: py-16
- Mobile: py-12

---

## Component Library

### Navigation
- **Fixed navbar:** backdrop-blur-md bg-white/90 dark:bg-gray-900/90, shadow-sm
- **Logo:** Playfair Display font, primary color, text-2xl
- **Nav links:** Hover underline effect, smooth color transition
- **Mobile:** Hamburger menu with slide-in drawer

### Hero Section (Accueil)
- **Layout:** Full viewport height (min-h-screen), centered content overlay
- **Background:** High-quality West African landscape image with subtle parallax
- **Overlay:** Linear gradient from transparent to black/40 for text readability
- **Title:** Large, bold, white text with subtle text-shadow
- **CTA Button:** Primary teal, rounded-full, px-8 py-4, white text, hover scale-105

### About Section
- **Layout:** Two-column on desktop (text + supporting image), single column mobile
- **Background:** Subtle pattern or texture suggesting West African textiles (very low opacity)
- **Text containers:** bg-white/80 dark:bg-gray-800/80 backdrop-blur, rounded-2xl, p-8

### Services Cards
- **Grid:** 3 columns desktop, 2 tablet, 1 mobile
- **Card design:** White/dark cards with hover lift effect (hover:-translate-y-2)
- **Icons:** Font Awesome 6, size 3xl, primary teal color
- **Structure:** Icon top, title, description, subtle border-l-4 accent

### Gallery Section
- **Grid:** Masonry-style or 4 columns desktop, 3 tablet, 2 mobile
- **Filter tabs:** Horizontal scrollable on mobile, rounded-full pills, active state with primary bg
- **Images:** aspect-ratio-square or 4:3, rounded-lg, hover scale-105 with overlay
- **Lightbox:** Full-screen modal with navigation arrows, close button, country caption

### Contact Section
- **Layout:** Two columns - form left, info right (stack on mobile)
- **Form:** Rounded inputs with focus:ring-2 primary color, large touch targets
- **Social icons:** 3xl size, circular backgrounds, hover color change to primary
- **Icon arrangement:** Horizontal row with gap-6, centered

### Virtual Assistant Bubble
- **Position:** fixed bottom-20 right-20 (bottom-6 right-6 on mobile)
- **Design:** Circular 64px button, primary teal bg, white icon (chat/robot)
- **Animation:** Subtle pulse animation, bounce on hover
- **Chat window:** Slide-up from button, rounded-2xl card, 320px wide, shadow-2xl

### Footer
- **Background:** Dark gray (light mode) or darker black (dark mode)
- **Content:** Centered text, small links, copyright
- **Padding:** py-12

---

## Images

### Required Images with Placement:

1. **Hero Background:** Expansive West African landscape - dramatic sunset over savanna, coastal scene, or iconic landmark (full-width, parallax-enabled)

2. **About Section:** Authentic cultural image - market scene, traditional architecture, or people in cultural attire (right-aligned, 40% width on desktop)

3. **Gallery Images (12-20 minimum):**
   - **Ghana:** Cape Coast Castle, Kakum National Park canopy, Accra beaches
   - **Sénégal:** Dakar street scenes, Lac Rose, Gorée Island
   - **Bénin:** Ganvié stilt village, Porto-Novo architecture
   - **Côte d'Ivoire:** Grand-Bassam colonial buildings, Abidjan skyline
   - **Togo:** Koutammakou traditional compounds, Lomé Grand Marché
   - **Burkina Faso:** Banfora cascades, traditional dance scenes
   - **Mali:** Djenné mosque, Dogon Country landscapes

4. **Service Cards (optional background accents):** Subtle, low-opacity pattern images related to each service

**Image Treatment:** All images with subtle overlay on hover, smooth transitions, optimized with lazy loading

---

## Responsive Breakpoints
- Mobile: base (default)
- Tablet: md: (768px)
- Desktop: lg: (1024px)
- Large: xl: (1280px)

## Animations
**Minimal & Purposeful:**
- Smooth scroll: scroll-behavior: smooth
- Hero parallax: subtle background-attachment or transform on scroll
- Card hovers: transform scale-105 transition-transform duration-300
- Button hovers: scale-105 transition-all
- Gallery lightbox: fade-in/slide-up entrance
- Virtual assistant: subtle pulse animation
- NO distracting scroll-triggered animations

---

## Accessibility
- Consistent dark mode across all components including form inputs
- High contrast ratios (WCAG AA minimum)
- Focus states with visible ring-2 outlines
- Alt text for all images
- Semantic HTML structure
- Keyboard navigation support