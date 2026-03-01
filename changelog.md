# Changelog

All notable changes to this portfolio project will be documented in this file.

## [1.2.4] - 2026-01-06

### Featured Works & Resume Fix

#### Desktop Featured Works
- Removed bottom "View all projects" button
- Only the header "View all" link remains for navigation

#### Mobile Resume Download
- Added explicit `download="resume.pdf"` filename
- Added `target="_blank"` as fallback for browsers that don't support download
- Added `rel="noopener noreferrer"` for security

---

## [1.2.3] - 2026-01-06

### Layout & Mobile Fixes

#### Footer Desktop Spacing
- Reverted `md:flex-1` on brand section to restore original `justify-between` spacing

#### Resume Download Mobile Fix
- Changed resume block from nested `<a>` inside `motion.div` to `motion.a` directly
- Touch events now propagate correctly on mobile devices

#### Featured Works Desktop Layout
- Desktop now shows 2-card grid instead of horizontal scroll
- Removed drag-to-scroll logic (only used on mobile now)
- Added centered "View all projects" button below grid
- Mobile retains horizontal scroll with 4 cards + view all card

---

## [1.2.2] - 2026-01-06

### Footer & Scroll Improvements

#### Footer Desktop Alignment
- Added `items-start` to align all columns to the top
- Brand section now uses `flex-1` for consistent spacing
- Removed redundant wrapper `div` around nav links

#### Responsive Social Icons
- Mobile: `h-4 w-4` with `p-1.5`
- Desktop: `md:h-5 md:w-5` with `md:p-2`
- Gap increases from `gap-1` to `md:gap-2` on desktop

#### Smoother Project Scrolling
- Reduced scroll multiplier from `1.5` to `1.2` for more controlled movement
- Added `scroll-behavior: smooth` when not actively dragging

---

## [1.2.1] - 2026-01-06

### UI Polish Fixes

Minor improvements to interaction patterns and mobile experience.

#### Mobile Sidebar
- Improved spacing and alignment in mobile navigation sheet
- Added "Navigation" section header for visual hierarchy
- Navigation links now have proper padding with hover background states
- Tighter gap between nav items

#### Featured Works Drag-to-Scroll
- Added desktop drag-to-scroll functionality for the horizontal project carousel
- Cursor changes to `grab` / `grabbing` states during interaction
- Smooth drag scrolling with 1.5x scroll multiplier

#### Footer Social Icons
- Reduced icon size from `h-5 w-5` to `h-4 w-4`
- Tightened padding from `p-2` to `p-1.5`
- Changed from `rounded-lg` to `rounded-md`
- Reduced gap between icons from `gap-3` to `gap-1`
- Hover background now fits the icon tightly

---

## [1.2.0] - 2026-01-06

### Layout Redesign - Breaking AI Patterns

Complete layout overhaul to create a more editorial, distinctive feel that avoids typical AI-generated patterns.

#### Hero Section
- Replaced centered stack with **Bento grid layout**
- Multiple content blocks: name, status, stats, social links, tech stack
- Removed typing animation (too common)
- Left-aligned content in main block

#### Featured Works
- Changed from 3-card grid to **horizontal scroll**
- Larger cards with more visual impact
- Smooth snap-scrolling on mobile
- "View all" card at end

#### Works Page
- Replaced grid with **list-view project rows**
- Full-width horizontal layout per project
- Minimal tab-based filtering (underline style)
- Project count indicator

#### About Page
- **Asymmetric two-column layout** (60/40 split)
- Skills shown as **tag clouds** instead of progress bars
- Timeline with left-aligned border (not centered alternating)
- Sticky sidebar for quick facts

#### Contact Page
- Simplified form (removed subject field)
- Cleaner social links list
- Tighter layout

#### Navigation & Footer
- Simplified navbar with minimal logo
- Underline active state instead of background
- Cleaner footer with less visual noise

#### Anti-AI Patterns Applied
- Mixed alignment (left for content, centered only for sections)
- Removed emojis and overly friendly language
- Less symmetric grids
- Removed unnecessary animations
- Larger whitespace between sections
- Simplified wave background (single wave, slower)

---

## [1.1.0] - 2026-01-06

### Theme Update - Nordic Minimal

Updated the color scheme to a modern, minimalist Nordic aesthetic with dark mode as the primary experience.

#### Color Palette Changes

##### Dark Mode (Primary)
| Role | Color | Hex |
|------|-------|-----|
| Background | Deep Charcoal | `#0a0a0a` |
| Card/Surface | Warm Charcoal | `#171717` |
| Muted | Stone Gray | `#262626` |
| Border | Subtle Gray | `#2e2e2e` |
| Text Primary | Off-White | `#fafafa` |
| Text Muted | Stone | `#a3a3a3` |
| Accent Primary | Forest Green | `#22c55e` |
| Accent Secondary | Sage | `#4ade80` |

##### Light Mode (Secondary)
| Role | Color | Hex |
|------|-------|-----|
| Background | Warm Off-White | `#fafafa` |
| Card/Surface | Pure White | `#ffffff` |
| Muted | Cool Gray | `#f5f5f5` |
| Border | Light Gray | `#e5e5e5` |
| Text Primary | Near Black | `#0a0a0a` |
| Text Muted | Stone | `#525252` |
| Accent Primary | Forest Green | `#16a34a` |
| Accent Secondary | Deep Forest | `#15803d` |

#### Design Principles
- **No pure black/white** - Using `#0a0a0a` and `#fafafa` for softer contrast
- **Forest green accent** - Natural, calming, distinctive
- **Warm undertones** - Charcoal with slight warmth vs cold blue-grays
- **Minimal color usage** - Accent only for interactive elements and highlights

#### Files Modified
- `src/app/globals.css` - Updated all CSS variables for both themes
- `src/components/layout/wave-background.tsx` - Subtle forest green/gray waves
- `src/components/about/skills-section.tsx` - Unified green progress bars

---

## [1.0.0] - 2026-01-06

### Initial Release - Modern Developer Portfolio

A modern, responsive portfolio website built with Next.js 14, shadcn/ui, and Tailwind CSS.

### Features

#### Core Framework
- **Next.js 14** with App Router for modern React development
- **TypeScript** for type-safe code
- **Tailwind CSS v4** for utility-first styling
- **shadcn/ui** components for consistent UI design

#### Pages Implemented

##### Home Page (`/`)
- Hero section with animated typing effect cycling through developer roles
- Animated wave background using CSS keyframes with parallax effect
- Featured works preview showing 3 highlighted projects
- Tech stack showcase with hover effects and technology icons
- CTA buttons for contact and resume download

##### Works Page (`/works`)
- Filterable project grid with category buttons (All, Web, Mobile, Open Source)
- Project cards with:
  - Gradient placeholder images
  - Category badges
  - Technology tags
  - Hover overlay with Live Demo and GitHub links
- Animated filter transitions using Framer Motion

##### About Page (`/about`)
- Professional bio section with avatar and availability status
- Location, email, and role quick info
- Skills section with animated progress bars
- Categorized skills: Frontend, Backend, Tools & Technologies
- Work experience timeline with alternating layout
- Download resume button

##### Contact Page (`/contact`)
- Contact form with comprehensive validation:
  - Required field validation
  - Email format validation
  - Minimum message length validation
  - Real-time error clearing on input
  - Loading state with spinner
  - Success/error states with animations
- Social links panel (GitHub, LinkedIn, Twitter, Email)
- Availability status indicator
- Contact info with location and response time

#### Theme System
- **Dark/Light mode** with system preference detection
- Manual toggle with animated sun/moon icons
- Ocean-inspired color palette:
  - Dark theme: Deep slate with cyan/teal accents
  - Light theme: Soft grays with cyan accents
- CSS custom properties for consistent theming
- Smooth theme transitions

#### Design & Aesthetics
- **Typography**: Outfit (headings/body) + JetBrains Mono (code/accents)
- **Gradient text** effects for headings
- **Glass morphism** cards with backdrop blur
- **Wave animation** background with 3 layered SVG waves
- **Micro-interactions** on buttons, cards, and links
- Custom scrollbar styling
- Page transition animations

#### Layout Components
- **Navbar**: Fixed header with logo, navigation links, theme toggle, mobile menu
- **Footer**: Brand section, quick links, social media icons, copyright
- **Wave Background**: Animated SVG waves with theme-aware colors

#### Animations (Framer Motion)
- Page entry animations with staggered children
- Scroll-triggered reveal animations
- Card hover effects with lift and glow
- Button hover/tap feedback
- Navigation active state transitions
- Loading spinners
- Form success/error state transitions

### Technical Details

#### Dependencies
```json
{
  "next": "16.1.1",
  "react": "19.2.3",
  "tailwindcss": "4.x",
  "framer-motion": "12.x",
  "next-themes": "0.4.x",
  "lucide-react": "0.562.x",
  "react-icons": "5.x",
  "@playwright/test": "1.57.x"
}
```

#### shadcn/ui Components Used
- Button, Card, Input, Textarea, Label
- Navigation Menu, Sheet (mobile nav)
- Switch, Badge, Separator, Avatar

#### Project Structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Home page
│   ├── works/page.tsx  # Works page
│   ├── about/page.tsx  # About page
│   └── contact/page.tsx # Contact page
├── components/
│   ├── ui/             # shadcn components
│   ├── layout/         # Navbar, Footer, WaveBackground
│   ├── home/           # HeroSection, FeaturedWorks, TechStack
│   ├── works/          # ProjectCard, ProjectGrid
│   ├── about/          # BioSection, SkillsSection, ExperienceTimeline
│   └── contact/        # ContactForm, SocialLinks
├── lib/
│   ├── utils.ts        # Tailwind merge utility
│   └── data.ts         # Portfolio content data
└── tests/
    └── e2e/            # Playwright tests
```

### Testing

#### Playwright E2E Tests
Located in `tests/e2e/`:

- **navigation.spec.ts**: Navigation between pages, active states, footer links
- **contact-form.spec.ts**: Form validation, submission, error states
- **pages.spec.ts**: Content verification for all pages

#### Running Tests
```bash
npm test        # Run all tests
npm test:ui     # Run tests with UI
```

### Development

#### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Customization

#### Updating Content
Edit `src/lib/data.ts` to update:
- Personal information (name, role, bio, location)
- Social links
- Projects (title, description, tags, URLs)
- Skills and proficiency levels
- Work experience

#### Updating Theme Colors
Edit `src/app/globals.css` CSS variables in `:root` and `.dark` sections.

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance Considerations
- Client-side components for interactivity
- CSS-only wave animations (no JavaScript overhead)
- Optimized font loading via Google Fonts
- Lazy loading of Framer Motion animations

---

## Future Improvements

### Planned
- [ ] Add MDX blog support
- [ ] Add project detail pages with dynamic routes
- [ ] Integrate real contact form backend (Resend, SendGrid, etc.)
- [ ] Add SEO metadata and Open Graph images
- [ ] Add sitemap and robots.txt
- [ ] Add analytics integration
- [ ] Add resume PDF generation
- [ ] Add internationalization (i18n)

### Known Issues
- None currently reported

---

*This changelog follows the [Keep a Changelog](https://keepachangelog.com/) format.*

