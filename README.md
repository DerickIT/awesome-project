# Modern Portfolio Website

A high-performance, modern portfolio website built with **Astro 5**, **Bun**, and **TailwindCSS 4**, featuring a stunning Bento Grid layout to showcase your projects.

## ✨ Features

- 🚀 **Blazing Fast**: Built with Astro 5 for optimal performance (zero JavaScript by default)
- 🎨 **Modern Design**: Professional 2026 color palette with glassmorphism effects
- 📱 **Mobile-First**: Fully responsive design that looks great on all devices
- 🎯 **Bento Grid Layout**: Flexible grid system with varying card sizes
- ♿ **Accessible**: Keyboard navigation and screen reader friendly
- 🎭 **Smooth Animations**: Subtle micro-animations for enhanced UX
- 🔧 **Easy to Customize**: Well-structured code with TypeScript support

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build)
- **Package Manager**: [Bun](https://bun.sh)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com)
- **Language**: TypeScript
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

### Prerequisites

- [Bun](https://bun.sh) installed on your system

### Setup

1. **Clone the repository** (or you're already here!)

2. **Install dependencies**:
   ```bash
   bun install
   ```

3. **Start the development server**:
   ```bash
   bun run dev
   ```

4. **Open your browser** and visit `http://localhost:4321`

## 🎨 Customization

### Adding Your Projects

Edit `src/data/projects.ts` to add your own projects:

```typescript
export const projects: Project[] = [
  {
    id: 'unique-id',
    title: 'Your Project Name',
    description: 'A brief description of your project',
    tags: ['React', 'TypeScript', 'Node.js'],
    github: 'https://github.com/yourusername/project',
    link: 'https://your-project-demo.com',
    size: '2x1', // Options: '1x1', '2x1', '1x2', '2x2'
    featured: true, // Optional: highlights the project
  },
  // Add more projects...
];
```

### Customizing Colors

Edit `src/styles/global.css` to change the color palette:

```css
:root {
  --color-slate-dark: #2c3e50;
  --color-teal-deep: #0d9488;
  /* ... customize other colors */
}
```

### Updating Personal Information

1. **Hero Section**: Edit `src/pages/index.astro`
   - Update your name in the hero title
   - Modify the description
   - Adjust the CTA buttons

2. **Header**: Edit `src/components/Header.astro`
   - Change the logo/brand name
   - Modify navigation links

3. **Footer**: Edit `src/components/Footer.astro`
   - Update social media links
   - Change copyright information

## 📱 Grid Sizes

The Bento Grid supports four card sizes:

- `1x1`: Standard square card
- `2x1`: Wide card (spans 2 columns)
- `1x2`: Tall card (spans 2 rows)
- `2x2`: Large card (spans 2 columns and 2 rows)

On mobile devices, all cards automatically collapse to single-column layout.

## 🚀 Deployment

### Build for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   bun add -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Build command: `bun run build`
2. Publish directory: `dist`

### Deploy to GitHub Pages

See [Astro's deployment guide](https://docs.astro.build/en/guides/deploy/github/) for detailed instructions.

## 📁 Project Structure

```
awesome-project/
├── src/
│   ├── components/
│   │   ├── BentoGrid.astro      # Main grid layout
│   │   ├── ProjectCard.astro    # Individual project card
│   │   ├── Header.astro         # Navigation header
│   │   └── Footer.astro         # Footer with social links
│   ├── layouts/
│   │   └── BaseLayout.astro     # Base HTML structure
│   ├── pages/
│   │   └── index.astro          # Homepage
│   ├── data/
│   │   └── projects.ts          # Project data
│   └── styles/
│       └── global.css           # Global styles & design system
├── public/                      # Static assets
├── astro.config.mjs            # Astro configuration
├── package.json
└── bun.lockb
```

## 🎯 Performance

This portfolio is optimized for maximum performance:

- ✅ Zero JavaScript by default (Astro's Islands Architecture)
- ✅ Optimized CSS (TailwindCSS 4)
- ✅ Fast font loading (Google Fonts with preconnect)
- ✅ Responsive images
- ✅ Target: 95+ Lighthouse score

## 📝 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run astro check` - Check for TypeScript errors

## 🤝 Contributing

Feel free to customize this portfolio to your needs! If you find any issues or have suggestions, please open an issue.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [TailwindCSS](https://tailwindcss.com)
- Powered by [Bun](https://bun.sh)
- Design inspired by 2026 professional trends

---

**Made with ❤️ using Astro + Bun**
