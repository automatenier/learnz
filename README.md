# 🚀 LEARNZ — AI Native Community & Sales Funnel

Sales funnel & web application modern untuk **Learnz** — Komunitas & Akselerasi AI Native (Linux, Open-Source Apps, Local AI/Ollama, & Agentz Automation).

---

## 🛠️ Tech Stack & Features
- **Core Framework**: React 19 + Vite 8
- **Styling**: Vanilla CSS Design System with Glassmorphism & Custom Gradients (`src/index.css`)
- **Icons**: Lucide React
- **Features**:
  - 🚀 **Interactive Savings Calculator**: Live annual cloud AI spending vs Local AI savings calculation.
  - 🗺️ **Interactive 4-Pillar Curriculum Tabs**: Interactive roadmap covering Linux, Local AI, Agentz Telegram & Dashboard, and Docker Stack.
  - 🖥️ **Live Code/Docker Terminal Toggle**: Showcase of `docker-compose.yml` and `deploy.sh`.
  - 🎬 **Simulated Interactive VSL Video Modal**: High-converting video sales letter container.
  - 💎 **3-Tier Membership Pricing Cards**: Starter (Free E-Book), VIP Community (Monthly), and Founder Pass (Lifetime).
  - 🌐 **GitHub Pages Ready**: Automatic workflow included in `.github/workflows/deploy.yml`.

---

## 💻 Local Development

1. Install dependencies:
```bash
npm install
```

2. Run local dev server:
```bash
npm run dev
```

3. Build production bundle (outputted to `./dist`):
```bash
npm run build
```

---

## 🚀 Deploy to GitHub Pages

1. Push repository ke GitHub:
```bash
git init
git add .
git commit -m "Initial commit for Learnz Sales Funnel"
git branch -M main
git remote add origin https://github.com/USERNAME/learnz.git
git push -u origin main
```

2. Aktifkan GitHub Pages di Repository Settings:
   - Ke **Settings** > **Pages**
   - Di bawah **Source**, pilih **GitHub Actions**
   - Workflow `.github/workflows/deploy.yml` akan otomatis mendeploy web funnel ke `https://USERNAME.github.io/learnz/`!
