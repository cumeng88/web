import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Cpu, 
  Zap, 
  Globe, 
  Github, 
  Twitter, 
  Wallet, 
  Search, 
  Menu, 
  X,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

// --- Data Blog Mock ---
const BLOG_POSTS = [
  {
    id: 1,
    title: "Masa Depan Ethereum Layer 2",
    category: "PROTOCOL",
    excerpt: "Bagaimana solusi skalabilitas akan merubah cara kita bertransaksi di tahun 2026 dengan efisiensi maksimal...",
    author: "0xCumeng",
    date: "27 Feb 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Strategi Airdrop Alpha 2026",
    category: "AIRDROP",
    excerpt: "Langkah taktis memaksimalkan reward di ekosistem modular terbaru yang belum rilis token di pasar global.",
    author: "AlphaSeeker",
    date: "25 Feb 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Keamanan Dompet di Era Web3",
    category: "SECURITY",
    excerpt: "Mengenal social recovery dan cara melindungi aset digital dari serangan phishing modern yang kian canggih.",
    author: "SecureNode",
    date: "20 Feb 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800"
  }
];

// --- Komponen Glassmorphism ---
const GlassCard = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={`bg-slate-900/40 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl ${className}`}
  >
    {children}
  </motion.div>
);

const Navbar = ({ walletConnected, setWalletConnected }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <Cpu className="text-white" size={20} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            CUMENG<span className="text-cyan-400">88</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
          {['Explore', 'Nodes', 'Protocol', 'Stats'].map(item => (
            <a key={item} href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">{item}</a>
          ))}
        </div>

        <button 
          onClick={() => setWalletConnected(!walletConnected)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs transition-all border ${
            walletConnected 
              ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]' 
              : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
          }`}
        >
          <Wallet size={14} />
          {walletConnected ? '0x88...CUM3' : 'CONNECT_WALLET'}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-40 pb-20 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-600/10 blur-[120px] rounded-full -z-10" />
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-mono tracking-[0.3em] uppercase mb-8">
          <Zap size={12} className="fill-current" /> Decentrally Optimized v2.0
        </span>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
          PULSE OF THE <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">METAVERSE.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-10">
          Wadah intelijen terdesentralisasi. Kami membedah kode, menganalisis pasar, dan mengamankan masa depan Web3 Anda melalui blog cumeng88.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-colors flex items-center gap-2">
            START_READING <ChevronRight size={18} />
          </button>
          <button className="px-8 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-xl hover:bg-white/10 transition-colors">
            WHITEPAPER
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const BlogGrid = () => (
  <section className="container mx-auto px-6 py-20">
    <div className="flex items-center gap-4 mb-12">
      <Terminal className="text-cyan-500" size={24} />
      <h2 className="text-2xl font-black text-white tracking-tight uppercase">Latest_Transactions</h2>
      <div className="flex-grow h-[1px] bg-gradient-to-r from-cyan-500/30 to-transparent" />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {BLOG_POSTS.map(post => (
        <GlassCard key={post.id} className="group flex flex-col h-full">
          <div className="h-48 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-mono text-cyan-400 py-1 px-2 border border-cyan-500/30 rounded bg-cyan-500/5">
                {post.category}
              </span>
              <span className="text-slate-500 text-[10px] font-mono">{post.readTime} READ</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-slate-400 text-sm mb-6 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
              <span className="text-slate-500 text-xs">{post.date}</span>
              <button className="text-white group-hover:text-cyan-400 flex items-center gap-1 text-xs font-bold transition-all">
                READ_MORE <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/5 py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col items-center md:items-start">
        <div className="text-white font-black text-xl mb-2">CUMENG88_LABS</div>
        <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">&copy; 2026 ALL RIGHTS ENCRYPTED</p>
      </div>
      <div className="flex gap-6">
        <Twitter className="text-slate-400 hover:text-cyan-400 cursor-pointer" size={20} />
        <Github className="text-slate-400 hover:text-cyan-400 cursor-pointer" size={20} />
        <Globe className="text-slate-400 hover:text-cyan-400 cursor-pointer" size={20} />
      </div>
    </div>
  </footer>
);

export default function App() {
  const [walletConnected, setWalletConnected] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30">
      {/* Efek Latar Belakang */}
      <div className="fixed inset-0 pointer-events-none opacity-20 -z-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1e293b 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <Navbar walletConnected={walletConnected} setWalletConnected={setWalletConnected} />
      
      <main>
        <Hero />
        <BlogGrid />
        
        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-gradient-to-br from-indigo-900/40 to-cyan-900/40 border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Siap Memasuki Masa Depan?</h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-8">Bergabunglah dengan komunitas cumeng88 untuk mendapatkan berita Web3 terhangat.</p>
            <button className="px-10 py-4 bg-cyan-500 text-black font-black rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all uppercase">
              Join Discord
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}