# FastEdu Ventures - Premium Educational Landing Page

A high-performance, premium landing page for **FastEdu Ventures** (Forum for After School Tuition), migrated from WordPress to a modern **Next.js** architecture. This project emphasizes a "Wow" user experience with glassmorphism, fluid animations, and 3D visual elements.

![FastEdu Hero Preview](/public/images/logo-banner.png)

## 🚀 Key Features

### 🎨 Premium UI/UX
- **Glassmorphism Design**: Frosted glass effects on cards, headers, and popups (`backdrop-filter: blur`).
- **Vibrant Aesthetics**: Custom "Trust Blue" and "Cyan" gradient palette.
- **Micro-Interactions**: Smooth hover states, pulse animations, and heartbeat effects.
- **Fluid Typography**: Responsive text scaling using `clamp()` for perfect readability on all devices.

### 🌟 Core Components
- **Hero Section**: Features a dynamic **Trust & Motivation Badge** (4.9/5 Rating, Animated Stars) instead of a static logo.
- **3D Program Carousel**: "Nano Banana" style 3D assets for program levels (Rocket, Atom, DNA, Trophy) with seamless mobile blending.
- **"Why FAST?" Rotation**: An auto-rotating circular infographic cycling through key selling points (Question, Graduation, Medal, Quality).
- **Premium Call Popup**: A floating "Expert Counsellor" support button with an online status indicator and gradient aesthetics.
- **Dynamic Navigation**: Hover-activated dropdowns with a custom **"Are You FAST?"** animated SVG logo.

### 📱 Fully Responsive
- **Mobile-First**: Optimized layouts for small screens (375px+).
- **Adaptive Interaction**: Carousels convert to stacked views with seamless gradient blending on mobile.
- **Touch-Friendly**: appropriately sized touch targets for all interactive elements.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS Modules (Scoped styles, no utility bloat)
- **Library**: [React 19](https://react.dev/)
- **Font**: [Outfit](https://fonts.google.com/specimen/Outfit) (Headings) & [Inter](https://fonts.google.com/specimen/Inter) (Body)

---

## 📂 Project Structure

```bash
src/
├── app/
│   ├── layout.tsx           # Root layout with fonts & metadata
│   ├── page.tsx             # Main landing page composition
│   └── globals.css          # Global variables & reset
├── components/
│   ├── Hero.tsx             # Hero section with Trust Badge
│   ├── ProgramHeroCards.tsx # 3D Banner Carousel
│   ├── WhyFast.tsx          # Rotating circular features
│   ├── CallButton.tsx       # Floating call popup
│   ├── Navigation.tsx       # Navbar with mega-menu
│   └── ...
├── data/
│   ├── teams.ts             # Faculty data configuration
│   └── courses.ts           # Course details configuration
└── public/
    └── images/              # Assets & 3D renders
```

---

## ⚡ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/fastedu-ventures.git
    cd fastedu-ventures
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open locally:**
    Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Customization

- **Content**: Update text data in `src/data/`.
- **Images**: Place new assets in `public/images/`.
- **Styles**: Edit `src/app/globals.css` for theme variables (colors, spacing).

---

© 2026 FastEdu Ventures. All rights reserved.
