# Kizuna 絆 - Real Estate Services in Japan

A modern, responsive website for a real estate business specializing in serving international business students, expats, foreign professionals, and property investors in Japan.

## 🏯 About Kizuna 絆

Kizuna 絆 signifies not just 'bond' or 'connection,' but the deep, enduring relationships built over a lifetime in Japan—growing stronger through every chapter of life, from first arrivals to lifelong belonging.

## ✨ Features

- **Modern Design**: Professional, minimalist interface with responsive layout
- **Comprehensive Services**: Property management, relocation support, investment opportunities
- **Integral Reforms**: Zero-energy homes, senior housing renovation, traditional Akia modernization
- **Technology Integration**: AI-powered visualization, 360° virtual tours, 3D scanning
- **Strategic Partnerships**: Terrace Co, Fast Approval Banking, Integral Reform
- **University Partnerships**: Specialized programs for international business students

## 🚀 Deployment

### Deployment targets

This repository contains two independent deploy targets:

- **GitHub Pages (the live marketing site):** the static client only, built
  with `npm run build:static`. There is **no backend** in this deploy — the
  contact form opens the visitor's email client via a `mailto:` link. This is
  what the `.github/workflows/static.yml` workflow publishes.
- **Full-stack (optional, e.g. Node/Replit):** the Express API in `server/`
  backed by Postgres via Drizzle (`shared/schema.ts`, `drizzle.config.ts`).
  This is **not used by GitHub Pages** and is only relevant if you host the
  full application yourself.

### Automatic Deployment (GitHub Pages)

1. Push to the `main` branch
2. `static.yml` type-checks, builds the static client, and deploys it
3. The site is served at `https://nilpost.github.io/Kizuna/`

### Setup for a fork

1. Fork or clone this repository
2. Update the `base` path in `vite.config.static.ts` to match your repo name:
   ```ts
   base: "/your-repository-name/"
   ```
3. In repository **Settings → Pages**, set the source to **"GitHub Actions"**

## 🛠️ Development

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the static version for GitHub Pages (outputs dist/public/index.html)
npm run build:static
```

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities and configurations
│   ├── index-static.html  # HTML template for static deployment
│   └── App-static.tsx     # Static app version (no backend)
├── server/                # Express backend — NOT deployed to Pages (see Deployment)
├── shared/                # Shared types and schemas (used by the backend)
├── .github/workflows/     # GitHub Actions deployment
└── vite.config.static.ts  # Vite config for static build
```

## 🎨 Technologies

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/ui
- **Forms**: React Hook Form, Zod validation
- **Icons**: Lucide React
- **Deployment**: GitHub Pages, GitHub Actions

## 📧 Contact

For inquiries, the contact form will open your default email client with pre-filled details to send to:
- Email: info@kizuna-realty.com
- Phone: +81-3-1234-5678
- Location: Tokyo, Japan

## 📄 License

MIT License - see LICENSE file for details

---

Built with ❤️ for connecting international clients with exceptional real estate opportunities in Japan.