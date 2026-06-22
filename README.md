# James Allsopp - Personal Site

A futuristic, interactive personal website built with modern web technologies. Not just another blog - this is a dynamic exploration of entrepreneurship, technology, health, and life.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Headless CMS**: Sanity.io for flexible content management
- **Interactive Tools**: Blood sugar tracker, SEO calculator, domain analyzer, and more
- **Beautiful UI**: Glass-morphism effects, smooth animations, gradient text
- **Responsive Design**: Optimized for all devices
- **Dark Mode**: Sleek dark theme throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **CMS**: Sanity.io
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Sanity account (for CMS)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/james-allsopp.git
cd james-allsopp
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Sanity credentials:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Setting Up Sanity Studio

To manage your content, you'll need to set up Sanity Studio:

1. Create a Sanity project at [sanity.io](https://www.sanity.io/)
2. Get your project ID and add it to `.env.local`
3. The schemas are already configured in `/sanity/schemas/`

## 📝 Content Types

- **Posts**: Blog posts and articles
- **Categories**: Organize content by topic
- **Projects**: Showcase your work (successful and failed)
- **Tools**: Interactive calculators and utilities
- **Author**: Your profile information

## 🎨 Customization

### Colors & Theme

Edit `tailwind.config.ts` to customize colors and theme variables.

### Components

All reusable components are in `/components/`:
- `Navigation.tsx` - Site navigation
- `Hero.tsx` - Homepage hero section
- `CategoryCard.tsx` - Interactive category cards
- UI components in `/components/ui/`

### Interactive Tools

Add new tools in `/app/tools/[tool-name]/page.tsx`. See the blood sugar tracker as an example.

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy!

## 📚 Content Ideas

This site is designed to cover diverse topics:

- **Business**: SEO agency insights, client acquisition, entrepreneurship
- **AI & Technology**: Building with AI, Vercel projects, tech experiments
- **Health**: Type 2 Diabetes management, blood sugar tracking
- **Travel**: Malta, UK trips, photography
- **Local**: Staffordshire observations, local photography
- **Projects**: Failed and successful projects, domain collecting
- **Mental Health**: Founder stress, work-life balance
- **Gaming**: GamerBolt insights

## 🤝 Contributing

This is a personal site, but feel free to fork it and make it your own!

## 📄 License

MIT License - feel free to use this as a template for your own site.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- CMS powered by [Sanity](https://www.sanity.io/)

---

Built with curiosity and caffeine by James Allsopp
