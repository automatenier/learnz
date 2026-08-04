import React, { useState } from 'react';
import {
  Terminal,
  Cpu,
  ShieldCheck,
  Zap,
  Server,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  DollarSign,
  Lock,
  HardDrive,
  Bot,
  MessageSquare,
  Sparkles,
  ChevronRight,
  Code,
  Layers,
  Star,
  Globe,
  X,
  Check
} from 'lucide-react';

export default function App() {
  // State management for interactivity
  const [activeTab, setActiveTab] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('community');
  
  // Interactive Calculator State
  const [monthlySpend, setMonthlySpend] = useState(60); // USD per month (ChatGPT+Claude)
  const [teamCount, setTeamCount] = useState(3);
  const [activeTerminalTab, setActiveTerminalTab] = useState('docker');

  // Form submission state
  const [leadEmail, setLeadEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Math calculation for savings
  const annualCloudCost = monthlySpend * 12 * teamCount;
  const annualLocalSavings = Math.round(annualCloudCost * 0.85); // 85% saved after power/setup

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (leadEmail) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setIsCheckoutModalOpen(false);
        setLeadEmail('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* 🟢 TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-indigo-950 border-b border-emerald-500/20 py-2.5 px-4 text-center text-xs md:text-sm font-medium flex items-center justify-center gap-2">
        <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase">
          Gelombang Baru
        </span>
        <span>Beralih ke Linux & Local AI. Hemat Biaya Token hingga 100%!</span>
        <a href="#pricing" className="text-emerald-400 underline hover:text-emerald-300 font-semibold ml-1">
          Gabung Komunitas &rarr;
        </a>
      </div>

      {/* 🟢 NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#060911]/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-cyan-500 to-indigo-600 p-[2px] shadow-lg shadow-emerald-500/20">
              <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                LEARNZ
              </span>
              <span className="text-[10px] block font-mono text-emerald-400 -mt-1 font-semibold tracking-wider">
                AI NATIVE COMMUNITY
              </span>
            </div>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#why" className="hover:text-emerald-400 transition-colors">Mengapa AI Native</a>
            <a href="#curriculum" className="hover:text-emerald-400 transition-colors">Kurikulum</a>
            <a href="#calculator" className="hover:text-emerald-400 transition-colors">Kalkulator Hemat</a>
            <a href="#stack" className="hover:text-emerald-400 transition-colors">Docker Stack</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">Keanggotaan</a>
          </nav>

          {/* ACTION BUTTON */}
          <button
            onClick={() => setIsCheckoutModalOpen(true)}
            className="btn-primary py-2.5 px-5 text-sm rounded-xl font-bold flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Gabung Sekarang</span>
          </button>
        </div>
      </header>

      {/* 🟢 HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        {/* Glow backdrop graphics */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-emerald-400 text-xs md:text-sm font-semibold mb-8 shadow-inner">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Transisi ke Linux, Open-Source & Sovereign AI</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>

          {/* HEADLINE */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.15] mb-6">
            Jangan Hanya Jadi Pengguna AI — Jadilah{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              AI Native
            </span>{' '}
            yang Berdaulat & Bebas Biaya.
          </h1>

          {/* SUBHEADLINE */}
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
            Beralih ke sistem <strong className="text-white">Linux & Open-Source</strong>, operasikan model AI secara{' '}
            <strong className="text-emerald-400">Lokal (Zero Token Cost)</strong>, dan bangun <strong className="text-white">AI Agentz</strong> otomatis yang terhubung ke Telegram & Dashboard Anda sendiri.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => setIsCheckoutModalOpen(true)}
              className="btn-primary w-full sm:w-auto text-base px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20"
            >
              <span>Akses Komunitas & Starter Stack</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="btn-secondary w-full sm:w-auto text-base px-7 py-4 rounded-xl font-semibold flex items-center justify-center gap-3"
            >
              <Play className="w-5 h-5 text-emerald-400 fill-emerald-400" />
              <span>Tonton Demo Funnel (3 Mins)</span>
            </button>
          </div>

          {/* KEY BENEFIT BADGES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80">
            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs md:text-sm font-medium">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>100% Data Privacy</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs md:text-sm font-medium">
              <DollarSign className="w-4 h-4 text-cyan-400" />
              <span>Zero API Token Cost</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs md:text-sm font-medium">
              <HardDrive className="w-4 h-4 text-indigo-400" />
              <span>Linux & Open-Source Stack</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs md:text-sm font-medium">
              <Bot className="w-4 h-4 text-emerald-400" />
              <span>Agentz Telegram & Dashboard</span>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 COMPARISON SECTION (BIASA vs AI NATIVE) */}
      <section id="why" className="py-20 bg-slate-950/60 border-y border-slate-800/60">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Perbedaan Pengguna AI Biasa vs <span className="text-emerald-400">AI Native</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Mengapa tren dunia saat ini beralih dari cloud SaaS mahal ke sistem AI Berdaulat (Sovereign AI) & Linux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* OLD WAY */}
            <div className="p-8 rounded-2xl bg-rose-950/20 border border-rose-900/40 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-900/40 border border-rose-700/50 text-rose-300 text-xs font-bold mb-6">
                ❌ Cara Lama (Ketergantungan SaaS Cloud)
              </div>
              <ul className="space-y-4 text-slate-300 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span><strong>Biaya Bulanan Membengkak:</strong> Bayar ChatGPT, Claude, Midjourney $20-$100+ per bulan tanpa batas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span><strong>Privasi Terancam:</strong> Dokumen sensitif, kodingan, dan data bisnis terkirim ke server cloud terbuka.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span><strong>Batas Rate-Limit:</strong> AI tiba-tiba mati atau lambat di tengah pengerjaan proyek penting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span><strong>Tersendat di OS Tertutup:</strong> Terjebak bloatware Windows/Mac tanpa integrasi otomatisasi sejati.</span>
                </li>
              </ul>
            </div>

            {/* AI NATIVE WAY */}
            <div className="p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 relative shadow-xl shadow-emerald-950/30">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-500/50 text-emerald-300 text-xs font-bold mb-6">
                ✅ Cara Baru: Learnz AI Native (Berdaulat)
              </div>
              <ul className="space-y-4 text-slate-200 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>100% Bebas Biaya Token:</strong> Jalankan model AI (Llama 3, DeepSeek, Qwen) di hardware lokal tanpa biaya API.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Privasi Mutlak:</strong> Data berada 100% di perangkat / server Anda sendiri. Tidak ada data leakage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Otomatisasi Agentz:</strong> Integrasi langsung ke Bot Telegram pribadi & Web Dashboard custom.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Ekosistem Linux & Open Source:</strong> Sistem operasi cepat, ringan, bebas iklan, & fully customized.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 ROADMAP / KURIKULUM (4 PILAR UTAMA) */}
      <section id="curriculum" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-400 font-mono text-xs md:text-sm font-semibold tracking-wider uppercase block mb-2">
              Peta Jalan Pembelajaran
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Kurikulum 4 Pilar <span className="text-emerald-400">Learnz</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Dirancang sistematis dari tingkat pemula hingga mampu mengoperasikan AI Agent lokal mandiri.
            </p>
          </div>

          {/* TAB BUTTONS */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-4xl mx-auto">
            {[
              { title: 'Pilar 1: Linux & Open-Source', icon: HardDrive },
              { title: 'Pilar 2: Local AI & Ollama', icon: Cpu },
              { title: 'Pilar 3: Building Agentz', icon: Bot },
              { title: 'Pilar 4: Sovereign Stack', icon: Server }
            ].map((tab, idx) => {
              const Icon = tab.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                    activeTab === idx
                      ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 border border-emerald-400 font-bold'
                      : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* TAB CONTENT DISPLAY */}
          <div className="max-w-4xl mx-auto glass-panel p-8 md:p-10 border-slate-800">
            {activeTab === 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <HardDrive className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Pilar 1: Transisi Mulus ke Linux & Aplikasi Open-Source</h3>
                    <p className="text-slate-400 text-sm">Menguasai sistem operasi paling aman & efisien di dunia.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="font-semibold text-emerald-300 mb-1">🐧 Dual-Boot & VM Setup</h4>
                    <p className="text-xs text-slate-400">Cara beralih ke Linux (Ubuntu/Pop!_OS/Fedora) tanpa menghapus file lama Anda.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="font-semibold text-emerald-300 mb-1">🛠️ Open-Source App Vault</h4>
                    <p className="text-xs text-slate-400">Pengganti lengkap Notion (Obsidian), Office (LibreOffice), & Database (Supabase).</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="font-semibold text-emerald-300 mb-1">⚡ CLI & Terminal Productivity</h4>
                    <p className="text-xs text-slate-400">Navigasi cepat dan otomatisasi perintah terminal ala pro developer.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="font-semibold text-emerald-300 mb-1">🔒 Hardening & Security</h4>
                    <p className="text-xs text-slate-400">Manajemen enkripsi data, firewall, dan otentikasi SSH kunci publik.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Pilar 2: Local AI Engine (Ollama, vLLM & Open-WebUI)</h3>
                    <p className="text-slate-400 text-sm">Menjalankan LLM canggih di hardware lokal tanpa biaya token.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="font-semibold text-cyan-300 mb-1">🧠 Model Selection & Quantization</h4>
                    <p className="text-xs text-slate-400">Memilih model terbaik (Llama 3, DeepSeek, Qwen) sesuai RAM/GPU Anda.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="font-semibold text-cyan-300 mb-1">🖥️ Open-WebUI Customization</h4>
                    <p className="text-xs text-slate-400">Tampilan antarmuka ala ChatGPT yang berjalan 100% offline di browser Anda.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="font-semibold text-cyan-300 mb-1">⚡ GPU Acceleration (NVIDIA/AMD)</h4>
                    <p className="text-xs text-slate-400">Optimasi CUDA & ROCm untuk generasi teks dan kodingan berkecepatan tinggi.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="font-semibold text-cyan-300 mb-1">📚 RAG & Local Document VectorDB</h4>
                    <p className="text-xs text-slate-400">Mengajar AI membaca dokumen PDF/Excel pribadi tanpa meng-upload ke internet.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Pilar 3: Membangun AI Agentz (Telegram & Dashboard)</h3>
                    <p className="text-slate-400 text-sm">Menghubungkan agent otomatisasi lokal ke aplikasi komunikasi harian Anda.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="font-semibold text-indigo-300 mb-1">📱 Telegram Agent Bot Integration</h4>
                    <p className="text-xs text-slate-400">Kirim instruksi suara/teks di Telegram & biarkan agent lokal Anda mengeksekusinya.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="font-semibold text-indigo-300 mb-1">📊 Custom Dashboard Monitor</h4>
                    <p className="text-xs text-slate-400">Pantau logs, aktivitas agent, dan status server melalui web dashboard visual.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="font-semibold text-indigo-300 mb-1">🔄 n8n Self-Hosted Automation</h4>
                    <p className="text-xs text-slate-400">Membuat workflow otomatisasi serbaguna tanpa perlu langganan Zapier/Make.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="font-semibold text-indigo-300 mb-1">🛡️ PII Scrubber & Privacy Bridge</h4>
                    <p className="text-xs text-slate-400">Teknik pembersihan otomatis data rahasia sebelum diteruskan ke workflow.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Pilar 4: Turnkey Sovereign AI Stack (Docker Compose)</h3>
                    <p className="text-slate-400 text-sm">Deploy seluruh ekosistem AI Native dalam 1 baris perintah terminal.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="font-semibold text-amber-300 mb-1">🐳 1-Click Docker Compose Vault</h4>
                    <p className="text-xs text-slate-400">File racikan siap pakai berisi Ollama, Open-WebUI, n8n, Supabase, & Qdrant.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="font-semibold text-amber-300 mb-1">☁️ VPS & Self-Host Cloud</h4>
                    <p className="text-xs text-slate-400">Panduan mendeploy stack ke VPS murah (Hetzner / Vast.ai) jika hardware lokal terbatas.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="font-semibold text-amber-300 mb-1">🔐 Reverse Proxy & SSL (Caddy)</h4>
                    <p className="text-xs text-slate-400">Menghubungkan domain pribadi dengan HTTPS enkripsi otomatis aman.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="font-semibold text-amber-300 mb-1">🚀 Agentz DFY Seamless Bridge</h4>
                    <p className="text-xs text-slate-400">Integrasi langsung ke ekosistem penawaran Agentz Done-For-You kami.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 🟢 INTERACTIVE SAVINGS CALCULATOR */}
      <section id="calculator" className="py-20 bg-slate-950/70 border-t border-slate-800/60">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 border-emerald-500/30">
            <div className="text-center mb-10">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                Simulasi Penghematan
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-2">
                Kalkulator Hemat AI Native
              </h2>
              <p className="text-slate-400 text-sm md:text-base">
                Hitung berapa banyak anggaran yang bisa Anda hemat setiap tahun dengan beralih ke Local AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* SLIDERS */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-slate-300">Biaya Langganan AI Cloud / User</span>
                    <span className="text-emerald-400 font-mono">${monthlySpend}/bulan</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="200"
                    step="10"
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <span className="text-[11px] text-slate-500 block mt-1">Asumsi: ChatGPT Plus ($20) + Claude Pro ($20) + API Usage</span>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-slate-300">Jumlah Anggota Tim / Perangkat</span>
                    <span className="text-cyan-400 font-mono">{teamCount} Perangkat</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={teamCount}
                    onChange={(e) => setTeamCount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>
              </div>

              {/* SAVINGS DISPLAY RESULT */}
              <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-800 text-center space-y-4">
                <div className="text-xs uppercase text-slate-400 tracking-wider font-semibold">
                  Estimasi Penghematan Tahunan
                </div>
                <div className="text-4xl md:text-5xl font-black text-emerald-400 font-mono tracking-tight">
                  ${annualLocalSavings.toLocaleString()} <span className="text-xs text-slate-400 font-sans font-normal">/tahun</span>
                </div>
                <div className="text-xs text-slate-400 pt-2 border-t border-slate-800 flex justify-around">
                  <div>
                    <span className="block font-bold text-white text-sm">100%</span>
                    <span>Data Sovereign</span>
                  </div>
                  <div className="border-r border-slate-800" />
                  <div>
                    <span className="block font-bold text-emerald-400 text-sm">Zero</span>
                    <span>API Rate Limits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 DOCKER / CODE PREVIEW SECTION */}
      <section id="stack" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Cukup 1 Baris Perintah untuk <span className="text-cyan-400">Deploy AI OS Anda</span>
            </h2>
            <p className="text-slate-400 text-base">
              Anggota Learnz mendapatkan repositori script & file Docker Compose racikan khusus yang telah diuji stabilitasnya.
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl bg-[#080c14] border border-slate-800 overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2">learnz-sovereign-stack ~ bash</span>
              </div>
              <div className="flex gap-2 text-xs font-mono">
                <button
                  onClick={() => setActiveTerminalTab('docker')}
                  className={`px-3 py-1 rounded ${activeTerminalTab === 'docker' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'text-slate-400'}`}
                >
                  docker-compose.yml
                </button>
                <button
                  onClick={() => setActiveTerminalTab('run')}
                  className={`px-3 py-1 rounded ${activeTerminalTab === 'run' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'text-slate-400'}`}
                >
                  deploy.sh
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs md:text-sm text-slate-300 overflow-x-auto leading-relaxed">
              {activeTerminalTab === 'docker' ? (
                <pre className="text-emerald-400">
{`version: '3.8'
services:
  ollama-engine:
    image: ollama/ollama:latest
    container_name: learnz_ollama
    ports: ["11434:11434"]
    volumes: ["./models:/root/.ollama"]

  open-webui:
    image: ghcr.io/open-webui/open-webui:main
    ports: ["3000:8080"]
    environment:
      - OLLAMA_BASE_URL=http://ollama-engine:11434

  agentz-telegram-bot:
    image: learnz/agentz-bridge:latest
    environment:
      - TELEGRAM_BOT_TOKEN=\${BOT_TOKEN}
      - LOCAL_LLM_HOST=http://ollama-engine:11434`}
                </pre>
              ) : (
                <pre className="text-cyan-300">
{`# 🚀 Executive Learnz Deploy Script
$ git clone https://github.com/learnz-community/sovereign-ai-stack.git
$ cd sovereign-ai-stack
$ ./setup-linux-environment.sh

[+] Installing Docker & Nvidia Container Toolkit... DONE
[+] Pulling Llama-3 8B & DeepSeek Coder Model... DONE
[+] Launching Telegram Agent Bridge & Web Dashboard... DONE

🎉 SUCCESS! Your Sovereign AI Stack is running locally on http://localhost:3000`}
                </pre>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 PRICING / MEMBERSHIP OFFER TIERS */}
      <section id="pricing" className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-400 font-mono text-xs md:text-sm font-semibold tracking-wider uppercase block mb-2">
              Investasi Berdaulat
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Pilih Opsi Keanggotaan <span className="text-emerald-400">Learnz</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Mulai transisi Anda hari ini dan amankan tempat di komunitas AI Native pertama di Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            
            {/* TIER 1: STARTER / FREE GUIDE */}
            <div className="p-8 rounded-2xl glass-panel border-slate-800 flex flex-col justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Starter Pass</div>
                <h3 className="text-2xl font-bold text-white mb-4">Free Guide & Blueprint</h3>
                <div className="text-3xl font-extrabold text-white mb-6">
                  Rp 0 <span className="text-xs font-normal text-slate-400">/ selamanya</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>E-Book: "7-Day Linux & Local AI Blueprint"</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Akses Komunitas Publik Telegram</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Template Docker Ollama Dasar</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setSelectedPlan('starter');
                  setIsCheckoutModalOpen(true);
                }}
                className="btn-secondary w-full py-3 text-sm"
              >
                Unduh Guide Gratis
              </button>
            </div>

            {/* TIER 2: COMMUNITY PASS (RECOMMENDED) */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-emerald-950/40 border-2 border-emerald-500 shadow-2xl shadow-emerald-950/50 flex flex-col justify-between relative transform md:-translate-y-3">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-wider">
                Paling Populer
              </div>
              <div>
                <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">VIP Membership</div>
                <h3 className="text-2xl font-bold text-white mb-4">Learnz Community VIP</h3>
                <div className="text-3xl font-extrabold text-white mb-1">
                  Rp 299.000 <span className="text-xs font-normal text-slate-400">/ bulan</span>
                </div>
                <p className="text-xs text-emerald-400 font-mono mb-6">Bisa dibatalkan kapan saja</p>

                <ul className="space-y-3.5 text-sm text-slate-200 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span><strong>Akses 4 Pilar Kurikulum AI Native</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span><strong>Repository Docker Stack Vault Siap Pakai</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Weekly Live Q&A & Build Session</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Telegram Agent Bot Setup Guide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span><strong>Diskon 20% untuk Service Agentz DFY</strong></span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setSelectedPlan('community');
                  setIsCheckoutModalOpen(true);
                }}
                className="btn-primary w-full py-3 text-sm font-bold shadow-lg shadow-emerald-500/30"
              >
                Gabung VIP Community
              </button>
            </div>

            {/* TIER 3: LIFETIME FOUNDER */}
            <div className="p-8 rounded-2xl glass-panel border-indigo-500/30 flex flex-col justify-between">
              <div>
                <div className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">Lifetime Access</div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Native Founder</h3>
                <div className="text-3xl font-extrabold text-white mb-1">
                  Rp 1.490.000 <span className="text-xs font-normal text-slate-400">/ sekali bayar</span>
                </div>
                <p className="text-xs text-indigo-300 font-mono mb-6">Akses Seumur Hidup (Terbatas 50 Member)</p>

                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-400" />
                    <span>Semua Benefit VIP Community Seumur Hidup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-400" />
                    <span>1-on-1 Consultation Setup Linux & Local AI (60 Mins)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-400" />
                    <span>Akses Semua Update Stack Masa Depan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-400" />
                    <span>Prioritas Bantuan Teknis Komunitas</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setSelectedPlan('lifetime');
                  setIsCheckoutModalOpen(true);
                }}
                className="btn-secondary w-full py-3 text-sm border-indigo-500/40 text-indigo-200 hover:bg-indigo-950/50"
              >
                Klaim Founder Pass
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 🟢 FOOTER */}
      <footer className="py-12 border-t border-slate-800 bg-[#04060b] text-slate-400 text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-bold text-white tracking-wide">LEARNZ & AGENTZ ECOSYSTEM</span>
          </div>
          <div className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Learnz Community. Sovereign AI & Open-Source Movement.
          </div>
          <div className="flex gap-6 text-xs text-slate-400 font-mono">
            <a href="#why" className="hover:text-emerald-400">Privacy</a>
            <a href="#curriculum" className="hover:text-emerald-400">Docs</a>
            <a href="#pricing" className="hover:text-emerald-400">GitHub Pages Ready</a>
          </div>
        </div>
      </footer>

      {/* 🟢 VSL / DEMO MODAL */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#090d16] border border-slate-800 rounded-2xl w-full max-w-4xl overflow-hidden relative shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 text-slate-400 hover:text-white flex items-center justify-center border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Play className="w-5 h-5 text-emerald-400 fill-emerald-400" />
                Demo Funnel: Transisi ke AI Native dalam 3 Menit
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Pelajari bagaimana racikan Linux + Ollama + Agentz mengubah cara kerja profesional modern.
              </p>

              <div className="aspect-video w-full rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 via-transparent to-indigo-950/40" />
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/50 cursor-pointer transform group-hover:scale-110 transition-transform relative z-10">
                  <Play className="w-8 h-8 fill-slate-950 ml-1" />
                </div>
                <span className="text-sm font-semibold text-slate-300 mt-4 relative z-10">
                  Klik untuk Memulai Video Presentasi Funnel
                </span>
                <span className="text-xs font-mono text-emerald-400/80 mt-1 relative z-10">
                  [ SIMULASI VSL INTERAKTIF ]
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🟢 CHECKOUT / WAITLIST MODAL */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#090d16] border border-emerald-500/40 rounded-2xl w-full max-w-lg overflow-hidden relative shadow-2xl p-6 md:p-8">
            <button
              onClick={() => setIsCheckoutModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-900 text-slate-400 hover:text-white flex items-center justify-center border border-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Terima Kasih!</h3>
                <p className="text-sm text-slate-300">
                  Instruksi dan link panduan gratis <strong className="text-emerald-400">Learnz AI Native</strong> telah dikirimkan ke email Anda.
                </p>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
                  🚀 Akses Terbatas Komunitas Learnz
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2">
                  Dapatkan Akses & Starter Kit
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Masukkan email Anda untuk mengklaim e-book gratis dan mengamankan harga promosi awal membership VIP.
                </p>

                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Alamat Email Anda
                    </label>
                    <input
                      type="email"
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="nama@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm font-mono"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Garansi 100% Bebas Spam. Data Anda tersimpan secara aman & privat.</span>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3.5 text-sm font-bold rounded-xl flex items-center justify-center gap-2"
                  >
                    <span>Lanjutkan ke Komunitas & Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
