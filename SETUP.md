# Setup Guide - James Allsopp Personal Site

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- Sanity CMS
- shadcn/ui components
- Lucide icons

### 2. Set Up Environment Variables

Copy the example environment file:

```bash
copy .env.example .env.local
```

Edit `.env.local` and add your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_here
```

### 3. Set Up Sanity CMS

1. Go to [sanity.io](https://www.sanity.io/) and create a free account
2. Create a new project
3. Copy your Project ID from the project settings
4. Generate an API token with Editor permissions
5. Add both to your `.env.local` file

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site!

## Project Structure

```
James-Allsopp/
├── app/                      # Next.js 14 App Router
│   ├── page.tsx             # Homepage
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── writing/             # Blog/writing section
│   ├── projects/            # Projects showcase
│   ├── tools/               # Interactive tools
│   │   └── blood-sugar/     # Blood sugar tracker
│   └── about/               # About page
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── Hero.tsx             # Homepage hero
│   ├── Navigation.tsx       # Site navigation
│   └── CategoryCard.tsx     # Category cards
├── lib/                     # Utility functions
│   ├── utils.ts             # Helper functions
│   └── sanity.ts            # Sanity client
├── sanity/                  # Sanity CMS configuration
│   └── schemas/             # Content schemas
│       ├── post.ts          # Blog post schema
│       ├── category.ts      # Category schema
│       ├── author.ts        # Author schema
│       ├── project.ts       # Project schema
│       └── tool.ts          # Tool schema
├── public/                  # Static assets
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## Features

### 🎨 Design System

- **Glass-morphism effects**: Modern, translucent UI elements
- **Gradient text**: Eye-catching gradient text effects
- **Smooth animations**: Framer Motion powered transitions
- **Dark theme**: Sleek dark mode throughout
- **Responsive**: Works beautifully on all devices

### 📝 Content Types

1. **Posts**: Blog articles with categories, tags, and featured images
2. **Categories**: Organize content by topic
3. **Projects**: Showcase successful and failed projects
4. **Tools**: Interactive calculators and utilities
5. **Author**: Your profile information

### 🛠️ Interactive Tools

- **Blood Sugar Tracker**: Track glucose levels with insights
- **SEO ROI Calculator**: Calculate SEO campaign ROI
- **Domain Value Estimator**: Estimate domain worth
- **Productivity Timer**: Pomodoro-style timer
- **Content Idea Generator**: AI-powered content ideas
- **Freelance Rate Calculator**: Calculate ideal rates

### 🎯 Key Pages

- **Homepage**: Interactive category cards with animations
- **Writing**: Searchable blog posts with filtering
- **Projects**: Showcase of successful and failed projects
- **Tools**: Collection of interactive utilities
- **About**: Personal information and contact

## Customization

### Colors & Theme

Edit `tailwind.config.ts` to customize colors:

```typescript
colors: {
  primary: "hsl(var(--primary))",
  // Add your custom colors
}
```

Edit `app/globals.css` for theme variables:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  /* Customize theme colors */
}
```

### Content

Add content through Sanity Studio or directly in the code:

1. **Static content**: Edit page files in `app/`
2. **Dynamic content**: Use Sanity CMS
3. **Interactive tools**: Add new tools in `app/tools/`

### Components

All components are in `components/`:

- Modify existing components
- Add new components
- Customize UI elements in `components/ui/`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

Vercel will automatically:
- Build your Next.js app
- Set up continuous deployment
- Provide a production URL

### Environment Variables for Production

Make sure to add these in Vercel:

```
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_SANITY_API_VERSION
SANITY_API_TOKEN
```

## Adding New Tools

To add a new interactive tool:

1. Create a new folder in `app/tools/[tool-name]/`
2. Add a `page.tsx` file
3. Use the blood sugar tracker as a template
4. Add the tool to the tools page listing

Example structure:

```typescript
// app/tools/my-tool/page.tsx
"use client"

import { Navigation } from "@/components/Navigation"
import { Card } from "@/components/ui/card"

export default function MyTool() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      {/* Your tool content */}
    </main>
  )
}
```

## Content Management

### Using Sanity Studio

1. Run Sanity Studio locally (if configured)
2. Or use Sanity's hosted studio at `your-project.sanity.studio`
3. Create and manage content through the visual interface

### Content Types Available

- **Posts**: Full blog articles with rich text
- **Categories**: Organize posts by topic
- **Projects**: Document your work
- **Tools**: Describe your interactive tools
- **Author**: Your profile and bio

## Tips for Success

1. **Content First**: Focus on creating valuable content
2. **Consistency**: Post regularly to build an audience
3. **Authenticity**: Share real experiences, not just wins
4. **Interactivity**: Use the tools to provide value
5. **SEO**: Optimize titles, descriptions, and meta tags

## Troubleshooting

### Dependencies Not Installing

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Sanity Connection Issues

- Verify your Project ID is correct
- Check that your API token has proper permissions
- Ensure environment variables are set correctly

### Build Errors

- Check for TypeScript errors: `npm run build`
- Verify all imports are correct
- Ensure all required environment variables are set

## Support

For issues or questions:

1. Check the README.md
2. Review Next.js documentation
3. Check Sanity documentation
4. Review Tailwind CSS docs

## Next Steps

1. ✅ Install dependencies
2. ✅ Set up Sanity CMS
3. ✅ Run development server
4. 📝 Create your first blog post
5. 🎨 Customize colors and branding
6. 🚀 Deploy to Vercel
7. 📈 Add analytics (optional)
8. 🔍 Set up SEO optimization

---

**Happy building! 🚀**
