# Modern Portfolio Website

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-2025-blue?style=for-the-badge&logo=nextdotjs)
![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React-18+-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4?style=for-the-badge&logo=tailwindcss)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-47A248?style=for-the-badge&logo=mongodb)

**A modern, responsive portfolio website built with cutting-edge technologies**

[🌟 Live Demo](https://anasalamportfolio.netlify.app)

</div>

## Overview

This is a **modern, full-stack portfolio website** designed to showcase professional work, skills, and experience. Built with **Next.js 14+**, it features stunning 3D animations, smooth scrolling, responsive design, and a complete contact management system.

### 🌟 Highlights

- **🎨 Modern Design** - Clean, professional interface with dark theme
- **📱 Fully Responsive** - Perfect on all devices and screen sizes
- **🚀 Performance Optimized** - Fast loading with Next.js optimizations
- **🎭 3D Animations** - Stunning visual effects and interactions
- **📧 Contact System** - Full-featured contact form with MongoDB backend
- **♿ Accessible** - WCAG compliant and keyboard navigable

## ✨ Features

### 🎪 Interactive Elements
- **3D Animated Social Links** with floating effects
- **Smooth Parallax Scrolling** throughout the site
- **Custom Cursor Follower** with interactive elements
- **Scroll Reveal Animations** for content sections
- **Responsive Navigation** with mobile-optimized menu

### 📧 Contact Management
- **Advanced Contact Form** with validation
- **MongoDB Integration** for data persistence
- **Rate Limiting** to prevent spam
- **Duplicate Detection** system
- **Email Validation** and sanitization
- **Responsive Error Handling**

### 🎨 Visual Features
- **Tech Stack Visualization** with animated icons
- **Project Showcase** with detailed descriptions
- **Experience Timeline** with interactive elements
- **Badges & Certifications** display
- **Smooth Page Transitions**

### 📱 Mobile Experience
- **Touch-Optimized** interactions
- **Mobile-First Design** approach
- **Adaptive Animations** for performance
- **Gesture Support** for navigation

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14+ | React framework with SSR/SSG |
| **React** | 18+ | UI library for component-based architecture |
| **Tailwind CSS** | 3.4+ | Utility-first CSS framework |
| **Framer Motion** | Latest | Advanced animations and gestures |
| **React Hook Form** | Latest | Form handling and validation |
| **Zod** | Latest | TypeScript-first schema validation |

### Backend & Database
| Technology | Version | Purpose |
|------------|---------|---------|
| **MongoDB** | 6.0+ | NoSQL database for contact storage |
| **Mongoose** | Latest | MongoDB object modeling |
| **Next.js API Routes** | 14+ | Serverless API endpoints |

### Development Tools
| Tool | Purpose |
|------|---------|
| **ESLint** | Code linting and quality |
| **Prettier** | Code formatting |
| **PostCSS** | CSS processing |
| **Axios** | HTTP client for API calls |


## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** or **pnpm**
- **MongoDB** (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohdanas86/Moderportfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure your environment**
   ```env
   # .env.local
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database Configuration
MONGODB_URI=your_mongodb_connection_string

# Optional: Fallback for client-side (not recommended for production)
NEXT_PUBLIC_MONGODB_URI=your_mongodb_connection_string
```

### Social Media Links

Update your social media URLs in `app/_components/SocialLinks.jsx`:

```javascript
const socialPlatforms = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    // ...
  },
  // Update other platforms...
];
```

### Personal Information

Customize your portfolio content in the respective component files:
- **Hero section**: `app/_components/Hero.jsx`
- **Projects**: `app/_components/Project.jsx`
- **Experience**: `app/_components/Experience.jsx`
- **Skills**: `app/_components/Techstack.jsx`

## 📱 Components

### Core Components

#### 🏠 Hero Component
- Animated text with parallax effects
- Statistics display (experience, projects, clients)
- 3D animated social links
- Responsive design with mobile optimizations

#### 🔗 SocialLinks Component
- 3D hover animations with CSS transforms
- Platform-specific color schemes
- Floating animations with staggered timing
- Mobile-optimized touch interactions

#### 🎨 Animation Components
- **SmoothScroll**: Lenis-based smooth scrolling
- **ScrollReveal**: Intersection Observer animations
- **ParallaxElement**: Parallax scrolling effects
- **CursorFollower**: Custom cursor interactions

## 🎨 Styling & Animations

### CSS Architecture
- **Tailwind CSS** for utility-first styling
- **Custom CSS modules** for complex animations
- **CSS-in-JS** for component-specific styles
- **Global styles** for typography and base elements

### Animation Libraries
- **Lenis** for smooth scrolling
- **CSS Transforms** for 3D effects
- **Intersection Observer** for scroll reveals
- **Custom keyframes** for floating animations

### Design System
- **Dark theme** with gradient accents
- **Consistent spacing** using Tailwind scale
- **Typography hierarchy** with custom fonts
- **Color palette** with brand-specific hues

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors

# Database
npm run db:seed      # Seed database with sample data
npm run db:reset     # Reset database
```

### Development Workflow

1. **Feature Development**
   - Create feature branch from `main`
   - Implement changes with proper testing
   - Ensure responsive design works
   - Test API endpoints

2. **Code Quality**
   - Run ESLint for code consistency
   - Test on multiple devices
   - Optimize for performance
   - Check accessibility compliance

3. **Testing**
   - Test contact form functionality
   - Verify animations on different devices
   - Check database connectivity
   - Validate responsive design

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository**
   ```bash
   npx vercel
   ```

2. **Environment variables**
   Add `MONGODB_URI` in Vercel dashboard

3. **Deploy**
   ```bash
   npx vercel --prod
   ```

### Other Platforms

#### Netlify
- Build command: `npm run build`
- Publish directory: `.next`
- Add environment variables in dashboard

#### Railway/Heroku
- Add `package.json` scripts
- Configure environment variables
- Deploy via Git integration

### Environment Setup

For production deployment:
```env
MONGODB_URI=your_production_mongodb_uri
NODE_ENV=production
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style and patterns
- Add comments for complex logic
- Test on multiple devices/browsers
- Ensure accessibility compliance
- Update documentation as needed

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ by [Anas Alam](https://github.com/mohdanas86)**

[![GitHub](https://img.shields.io/badge/GitHub-mohdanas86-black?style=for-the-badge&logo=github)](https://github.com/mohdanas86)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/anas86)

**⭐ Star this repo if you found it helpful!**

</div>
