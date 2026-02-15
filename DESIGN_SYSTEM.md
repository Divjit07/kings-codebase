# Kings Installation - Design System & Figma Mapping

## Overview
This document explains how the "Kings Installation" design system translates from UI/UX concepts (Figma) to the codebase (React + Tailwind).

## 1. Design Tokens (Figma Variables)
We use CSS variables in `index.css` to match Figma styles.

| Concept | Figma Variable | Tailwind Class | CSS Variable |
|---------|---------------|----------------|--------------|
| **Gold** | `Primary Gold` | `text-gold` / `bg-gold` | `--color-gold` (#D4AF37) |
| **Dark BG** | `Matte Black` | `bg-black` | `--color-black` (#0A0A0A) |
| **Rich BG** | `Rich Black` | `bg-black-rich` | `--color-black-rich` (#050505) |
| **Font** | `Serif Display`| `font-serif` | `Playfair Display` |

## 2. Component Architecture
We follow an Atomic Design principle slightly modified for React.

### Atoms (UI Elements)
- **Buttons**: `src/components/ui/Button.tsx` (or standard `<a>` with classes).
  - *Style*: Uppercase, tracking-widest, hover effects.
- **Icons**: using `lucide-react` to replace custom SVG exports.

### Molecules (Blocks)
- **Cards**: Services Grid items.
  - *Interaction*: Hover reveals border (`group-hover:border-gold`).
- **Inputs**: Contact Form fields.
  - *Style*: Dark background (`bg-black`), gold focus ring.

### Organisms (Sections)
- **Hero**: `Hero.tsx`
  - *Features*: Parallax text, Video/Gradient background.
- **Navbar**: `Navbar.tsx`
  - *Features*: Fixed position, backdrop blur (`backdrop-blur-md`), transition on scroll.

## 3. Auto-Layout Translation
Figma's Auto-Layout maps directly to Flexbox/Grid in Tailwind.

- **Stack (Vertical)** → `flex flex-col gap-x`
- **Row (Horizontal)** → `flex flex-row gap-x items-center`
- **Grid** → `grid grid-cols-1 md:grid-cols-2`

## 4. Animations
We use **Framer Motion** for "Smart Animate" behavior.

- **Fade In**: `initial={{ opacity: 0 }}` → `animate={{ opacity: 1 }}`
- **Stagger**: `transition={{ staggerChildren: 0.1 }}`
- **Layout Transition**: `<motion.div layout />` for smooth reordering (like in Portfolio).

## 5. Admin Dashboard pattern
- **Sidebar Layout**: `AdminLayout.tsx` uses `flex` to split Sidebar (fixed width) and Content (flex-grow).
- **Data Tables**: `InvoiceTable.tsx` uses standard HTML `<table>` styled with border collapse and distinct headers.
