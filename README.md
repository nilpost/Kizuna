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

This website is configured for deployment on GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at `https://yourusername.github.io/repository-name/`

### Manual Setup

1. Fork or clone this repository
2. Update the `base` path in `vite.config.static.ts` to match your repository name:
   ```ts
   base: "/your-repository-name/"
   ```
3. Enable GitHub Pages in your repository settings
4. Set the source to "GitHub Actions"

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
# Build static version for GitHub Pages
npx vite build --config vite.config.static.ts
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
├── server/                # Express backend (for development)
├── shared/                # Shared types and schemas
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