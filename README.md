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

This is a **client-only static site** (no backend) deployed to GitHub Pages
behind a custom domain. The contact form opens the visitor's email client via
a `mailto:` link.

### Automatic Deployment

1. Push to the `main` branch
2. `.github/workflows/static.yml` type-checks, builds the client, and deploys it
3. The site is served at **https://kizuna.postiusgroup.com/**

### Custom domain setup

The domain is configured via the committed `client/public/CNAME` file
(`kizuna.postiusgroup.com`). To point it at GitHub Pages:

1. In your DNS provider (Cloudflare), add a `CNAME` record:
   `kizuna` → `nilpost.github.io`
2. In repository **Settings → Pages**, set the source to **"GitHub Actions"**
   and the custom domain to `kizuna.postiusgroup.com` (enable "Enforce HTTPS")

To serve from a plain `github.io` project path instead, set `base` in
`vite.config.ts` to `"/<repository-name>/"` and remove the `CNAME` file.

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
# Build the static site (outputs dist/public/index.html)
npm run build
```

## 📁 Project Structure

```
├── client/                 # Frontend React application (SPA)
│   ├── public/            # Static assets copied verbatim (incl. CNAME)
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities
│   └── index.html         # HTML entry point
├── .github/workflows/     # GitHub Actions (build + deploy to Pages)
└── vite.config.ts         # Vite config
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