import { Link } from 'react-router-dom';
import {
  ArrowRight, TrendingUp, Cpu, Factory, Code2, Users, Shield,
  Zap, Globe, ChevronRight, ExternalLink, Sparkles, BarChart3,
  Layers, Lightbulb, Mail, MapPin, Phone
} from 'lucide-react';

/* ─── Product & Service Data ─── */

const products = [
  {
    name: 'FinAsor',
    tagline: 'AI-Powered Algo Trading',
    description: 'AI-assisted trading platform for Indian markets, built on walk-forward validated models. In private beta by invitation only; not offered to the public.',
    category: 'Fintech',
    icon: TrendingUp,
    color: 'from-violet-600 to-purple-600',
    bgLight: 'bg-violet-50',
    iconColor: 'text-violet-600',
    borderColor: 'border-violet-200',
    features: ['AI Ensemble Predictions'],
    url: 'https://finasor.niwav.in',
    status: 'Private beta, invite only',
  },
  {
    name: 'CyPhyS',
    tagline: 'Idea to Market. One Platform.',
    description: 'Full product lifecycle platform — from concept to manufacturing to market. AI-powered pipeline orchestration, self-service templates, and agentic automation.',
    category: 'Platform Engineering',
    icon: Cpu,
    color: 'from-blue-600 to-cyan-600',
    bgLight: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    features: ['Product Lifecycle', 'AI Pipeline Agent', 'Template Marketplace', 'Self-Service'],
    url: 'https://cyphys.niwav.in',
    status: 'Live',
  },
];

const partnerProducts = [
  {
    name: 'LeapKnowlogy MES',
    tagline: 'Manufacturing Execution System',
    description: 'Real-time production management for manufacturing floors. Work orders, quality control, machine monitoring, inventory tracking — built for Indian SME manufacturers.',
    partner: 'LeapLimited',
    icon: Factory,
    color: 'from-emerald-600 to-teal-600',
    bgLight: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    features: ['Production Tracking', 'Quality Control', 'Machine Monitoring', 'Inventory'],
    url: 'https://mes.niwav.in',
    status: 'Live',
  },
];

const services = [
  {
    title: 'Product Engineering',
    description: 'End-to-end product development — from architecture to deployment. We build scalable SaaS platforms, data pipelines, and AI-powered applications.',
    icon: Code2,
    highlights: ['Full-Stack Development', 'Cloud Architecture', 'AI/ML Integration', 'DevOps & CI/CD'],
  },
  {
    title: 'Technology Consulting',
    description: 'Strategic technology guidance for businesses looking to modernize, scale, or build new digital capabilities. Deep expertise in fintech, manufacturing, and IoT.',
    icon: Lightbulb,
    highlights: ['Architecture Review', 'Tech Stack Selection', 'AI Strategy', 'Performance Optimization'],
  },
  {
    title: 'Platform Partnerships',
    description: 'We build and maintain technology products for partners under long-term engagement. Your product, our engineering — deployed on our managed infrastructure.',
    icon: Users,
    highlights: ['Dedicated Engineering', 'Managed Hosting', 'Ongoing Support', 'Revenue Partnership'],
  },
];

const stats = [
  { label: 'Products Live', value: '3', icon: Layers },
  { label: 'AI Models in Production', value: '5+', icon: Sparkles },
  { label: 'Daily Automated Decisions', value: '500+', icon: BarChart3 },
  { label: 'Uptime', value: '99.9%', icon: Shield },
];

const capabilities = [
  'React / TypeScript / Tailwind',
  'Python / FastAPI / PostgreSQL',
  'Docker / CI-CD / VPS',
  'AI/ML (XGBoost, LSTM, TCN)',
  'Broker API Integration',
  'Real-time Data Pipelines',
  'IoT & Edge Computing',
  'Agentic AI Systems',
];

/* ─── Components ─── */

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ──── Navigation ──── */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-700 to-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">Niwav</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Products</a>
              <a href="#partners" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Partners</a>
              <a href="#services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="#contact" className="text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ──── Hero ──── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-violet-50/30" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/40 to-violet-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-100/30 to-cyan-100/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600">Proprietorship based in India · incorporation in progress</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
              Technology that{' '}
              <span className="bg-gradient-to-r from-blue-700 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                builds products
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl text-balance">
              We build AI-powered products, engineer platforms for technology partners,
              and provide consulting to businesses ready to scale with intelligent automation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/10"
              >
                Explore Products <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-xl font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/70 backdrop-blur border border-gray-100 rounded-2xl p-5 shadow-sm">
                <stat.icon className="w-5 h-5 text-gray-400 mb-3" />
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Our Products ──── */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Our Products</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Built in-house. Powered by AI.</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Products we've conceived, designed, and built from scratch — each solving a real problem with intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className={`group relative bg-white border ${product.borderColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${product.bgLight} rounded-xl flex items-center justify-center`}>
                      <product.icon className={`w-6 h-6 ${product.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.tagline}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    {product.status}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((f) => (
                    <span key={f} className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{product.category}</span>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 group-hover:translate-x-1 transition-all"
                  >
                    Visit <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Technology Partner Products ──── */}
      <section id="partners" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-widest mb-3">Technology Partnerships</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Products built for partners</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We engineer and maintain full products for technology partners — their vision, our execution. Deployed on managed infrastructure with ongoing support.
            </p>
          </div>

          {partnerProducts.map((product) => (
            <div
              key={product.name}
              className={`bg-white border ${product.borderColor} rounded-2xl p-8 md:p-10 max-w-3xl mx-auto hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className={`w-14 h-14 ${product.bgLight} rounded-xl flex items-center justify-center shrink-0`}>
                  <product.icon className={`w-7 h-7 ${product.iconColor}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      {product.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">Built for {product.partner}</p>
                  <p className="text-gray-600 leading-relaxed mb-5">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((f) => (
                      <span key={f} className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    Visit Platform <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              Interested in building your product with us?{' '}
              <a href="#contact" className="text-blue-600 font-medium hover:underline">Let's talk</a>
            </p>
          </div>
        </div>
      </section>

      {/* ──── Services ──── */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-600 uppercase tracking-widest mb-3">Consulting & Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How we work with you</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Whether you need a full product built, strategic technology guidance, or a long-term engineering partner — we've done it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-violet-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-100 transition-colors">
                  <service.icon className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                      <ChevronRight className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Tech Stack ──── */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Engineering DNA</p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Modern stack.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Production proven.
                </span>
              </h2>
              <p className="mt-6 text-gray-400 leading-relaxed">
                Every product we build runs on battle-tested infrastructure. We don't chase trends —
                we pick tools that ship fast and scale predictably.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Globe className="w-4 h-4" />
                  <span>Hosted in India</span>
                </div>
                <span className="text-gray-700">|</span>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Zap className="w-4 h-4" />
                  <span>CI/CD Automated</span>
                </div>
                <span className="text-gray-700">|</span>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span>SOC-2 Practices</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {capabilities.map((cap) => (
                <div
                  key={cap}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  {cap}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──── CTA / Contact ──── */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to build something?
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Whether you have a product idea, need a technology partner, or want consulting
              on your existing stack — we'd love to hear from you.
            </p>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Email</p>
                  <a href="mailto:hello@niwav.in" className="text-sm text-blue-600 hover:underline">
                    hello@niwav.in
                  </a>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-5 h-5 text-violet-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Phone</p>
                  <p className="text-sm text-gray-600">Available on request</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Location</p>
                  <p className="text-sm text-gray-600">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Footer ──── */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-700 to-violet-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-lg font-bold text-white">Niwav</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Technology products, platform engineering, and consulting. Made in India.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="https://finasor.niwav.in" className="text-sm hover:text-white transition-colors">FinAsor</a></li>
                <li><a href="https://cyphys.niwav.in" className="text-sm hover:text-white transition-colors">CyPhyS</a></li>
                <li><a href="https://mes.niwav.in" className="text-sm hover:text-white transition-colors">LeapKnowlogy MES</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-sm hover:text-white transition-colors">Product Engineering</a></li>
                <li><a href="#services" className="text-sm hover:text-white transition-colors">Technology Consulting</a></li>
                <li><a href="#services" className="text-sm hover:text-white transition-colors">Platform Partnerships</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm hover:text-white transition-colors">Terms of Service</Link></li>
                <li><a href="mailto:hello@niwav.in" className="text-sm hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Niwav. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Proprietorship (incorporation as a private limited company in progress) &middot; India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
