import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Bot, 
  Phone, 
  MessageSquare, 
  Zap, 
  Brain, 
  Mic, 
  Play, 
  Pause,
  Volume2,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  Globe,
  ChevronRight,
  Terminal,
  Cpu,
  Network,
  Activity,
  Linkedin,
  MapPin,
  Mail,
  Calendar,
  Ticket,
  HelpCircle,
  UserPlus,
  Star,
  Share2,
  Search,
  Newspaper,
  DollarSign,
  FileText,
  Receipt,
  FileCheck,
  Wifi,
  Database,
  AlertTriangle,
  GitBranch
} from "lucide-react";
import { Button } from "./components/ui/button";

// Automation data with icons
const automations = [
  { title: "Lead Enrichment from LinkedIn", icon: Linkedin, category: "Sales" },
  { title: "Google Maps Lead Scraper", icon: MapPin, category: "Sales" },
  { title: "Cold Outreach Personalization", icon: Mail, category: "Sales" },
  { title: "Meeting Assistant", icon: Calendar, category: "Productivity" },
  { title: "AI Support Ticket Triage", icon: Ticket, category: "Support" },
  { title: "Auto-Reply for Common FAQs", icon: HelpCircle, category: "Support" },
  { title: "Customer Onboarding Sequence", icon: UserPlus, category: "Support" },
  { title: "Automated Review Request", icon: Star, category: "Marketing" },
  { title: "Social Media Repurposing", icon: Share2, category: "Marketing" },
  { title: "SEO Keyword Monitor", icon: Search, category: "Marketing" },
  { title: "Newsletter Aggregator", icon: Newspaper, category: "Marketing" },
  { title: "Ad Spend Alert System", icon: DollarSign, category: "Finance" },
  { title: "AI Resume Screener", icon: FileText, category: "HR" },
  { title: "Expense Management via Telegram", icon: Receipt, category: "Finance" },
  { title: "Automatic Invoice Reminder", icon: Receipt, category: "Finance" },
  { title: "Contract Expiry Tracker", icon: FileCheck, category: "Operations" },
  { title: "Website Uptime & SSL Monitor", icon: Wifi, category: "DevOps" },
  { title: "Automated Database Backups", icon: Database, category: "DevOps" },
  { title: "Slack Phishing Link Scanner", icon: AlertTriangle, category: "Security" },
  { title: "GitHub Issue to Project Management", icon: GitBranch, category: "DevOps" }
];

// Get category color
const getCategoryColor = (category) => {
  const colors = {
    Sales: 'emerald',
    Productivity: 'cyan',
    Support: 'violet',
    Marketing: 'amber',
    Finance: 'rose',
    HR: 'blue',
    Operations: 'orange',
    DevOps: 'teal',
    Security: 'red'
  };
  return colors[category] || 'emerald';
};

// Innovative Navigation with glitch effect
const AgentsNavigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-emerald-500/20' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" data-testid="agents-logo">
            <div className="relative">
              <img 
                src="https://customer-assets.emergentagent.com/job_ai-solutions-hub-49/artifacts/khguvbti_logo.png" 
                alt="Sledopyt AI Logo" 
                className="h-10 w-10 group-hover:opacity-0 transition-opacity duration-300"
              />
              <div className="absolute inset-0 h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Terminal className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white group-hover:text-emerald-400 transition-colors">Sledopyt</span>
              <span className="text-emerald-500"> AI</span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="hidden sm:flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors duration-200 group" 
              data-testid="back-home"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
            <Button 
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 relative overflow-hidden group"
              data-testid="agents-cta"
            >
              <span className="relative z-10">Deploy Agent</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// Cyberpunk Hero with Matrix-style effect
const AgentsHero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'AGENTIC_AUTOMATIONS_v3.0';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-black" data-testid="agents-hero">
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Terminal-style badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-emerald-500/10 border border-emerald-500/30 mb-8 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-400 text-sm">{displayText}<span className="animate-pulse">_</span></span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Automate</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400">
                Everything
              </span>
              <br />
              <span className="text-slate-500 text-4xl lg:text-5xl">with AI Agents.</span>
            </h1>

            <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed font-mono">
              <span className="text-emerald-400">{'>'}</span> 20+ ready-to-deploy automations. From lead gen to DevOps. No code required.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-6 text-lg group"
                data-testid="hero-deploy-btn"
              >
                <Cpu className="mr-2 w-5 h-5 group-hover:animate-spin" />
                Explore Automations
              </Button>
              <Link to="/#contact">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-6 text-lg"
                  data-testid="hero-contact-btn"
                >
                  Contact Us
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right - 3D Agent visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer ring */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-emerald-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Middle ring */}
              <motion.div 
                className="absolute inset-8 rounded-full border border-cyan-500/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                {/* Orbiting dots */}
                {[0, 90, 180, 270].map((deg) => (
                  <div
                    key={deg}
                    className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${deg}deg) translateX(120px) translateY(-50%)`
                    }}
                  />
                ))}
              </motion.div>

              {/* Inner ring */}
              <motion.div 
                className="absolute inset-16 rounded-full border border-emerald-500/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Center core */}
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm border border-emerald-500/50 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Bot className="w-20 h-20 text-emerald-400" />
                </motion.div>
              </div>

              {/* Floating labels */}
              {[
                { label: 'SALES', icon: Linkedin, pos: 'top-0 left-1/2 -translate-x-1/2' },
                { label: 'SUPPORT', icon: Ticket, pos: 'bottom-0 left-1/2 -translate-x-1/2' },
                { label: 'DEVOPS', icon: GitBranch, pos: 'left-0 top-1/2 -translate-y-1/2' },
                { label: 'MARKETING', icon: Share2, pos: 'right-0 top-1/2 -translate-y-1/2' }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className={`absolute ${item.pos} flex items-center gap-2 px-3 py-1.5 rounded bg-black/80 border border-emerald-500/30`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + i * 0.2 }}
                >
                  <item.icon className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-emerald-400 font-mono">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Moving Tiles Automation Showcase
const AutomationShowcase = () => {
  // Split automations into two rows for opposite directions
  const row1 = automations.slice(0, 10);
  const row2 = automations.slice(10, 20);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" data-testid="automation-showcase">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-emerald-500/10 border border-emerald-500/30 mb-6 font-mono">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm">20+ READY-TO-DEPLOY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Agentic <span className="text-emerald-400">Automations</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Pre-built AI agents for every business need. Deploy in minutes, not months.
          </p>
        </motion.div>
      </div>

      {/* Moving tiles - Row 1 (Left to Right) */}
      <div className="relative mb-6 overflow-hidden">
        <motion.div 
          className="flex gap-4"
          animate={{ x: [0, -2000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...row1, ...row1, ...row1].map((item, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 group"
            >
              <div className="w-72 h-24 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 p-4 flex items-center gap-4 transition-all duration-300 hover:bg-slate-900">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm leading-tight truncate">{item.title}</p>
                  <span className="text-xs text-emerald-400/70 font-mono">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Moving tiles - Row 2 (Right to Left) */}
      <div className="relative overflow-hidden">
        <motion.div 
          className="flex gap-4"
          animate={{ x: [-2000, 0] }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...row2, ...row2, ...row2].map((item, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 group"
            >
              <div className="w-72 h-24 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 p-4 flex items-center gap-4 transition-all duration-300 hover:bg-slate-900">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm leading-tight truncate">{item.title}</p>
                  <span className="text-xs text-cyan-400/70 font-mono">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Automations', value: '20+', icon: Bot },
            { label: 'Businesses Served', value: '500+', icon: Globe },
            { label: 'Tasks Automated/Day', value: '1M+', icon: Zap },
            { label: 'Avg. Time Saved', value: '40hrs/wk', icon: Clock }
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="p-4 rounded-xl bg-black/50 border border-slate-800 text-center"
              whileHover={{ borderColor: 'rgba(16,185,129,0.5)' }}
            >
              <stat.icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white font-mono">{stat.value}</p>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Compact Voice Demo Section
const VoiceAgentDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden" data-testid="voice-agent-section">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Brief */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-violet-500/10 border border-violet-500/30 mb-6 font-mono">
              <Phone className="w-4 h-4 text-violet-400" />
              <span className="text-violet-400 text-sm">VOICE_AGENT_DEMO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Voice Agents <span className="text-violet-400">in Action</span>
            </h2>

            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Our Voice Agents handle calls naturally, schedule appointments, and qualify leads—all autonomously. Here's a real estate inquiry demo.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {['Natural Speech', 'Multi-language', 'CRM Sync', '24/7 Available'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <Button
              onClick={togglePlay}
              className="bg-violet-500 hover:bg-violet-400 text-white"
              data-testid="play-demo-btn"
            >
              {isPlaying ? <Pause className="mr-2 w-4 h-4" /> : <Play className="mr-2 w-4 h-4" />}
              {isPlaying ? 'Pause Demo' : 'Play Demo'}
            </Button>
          </motion.div>

          {/* Video Player - Compact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden border border-violet-500/30 bg-slate-950">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-black border-b border-violet-500/20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-slate-500 text-xs ml-2 font-mono">voice_demo.mp4</span>
                </div>
                <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-slate-600'}`}></div>
              </div>

              <video 
                ref={videoRef}
                src="https://customer-assets.emergentagent.com/job_ai-solutions-hub-49/artifacts/sxl4bngd_EstateAgent.mp4"
                className="w-full h-auto"
                onEnded={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls
                preload="metadata"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Use Cases Grid
const UseCasesGrid = () => {
  const categories = [
    { name: 'Sales & Lead Gen', count: 3, color: 'emerald', items: automations.filter(a => a.category === 'Sales') },
    { name: 'Customer Support', count: 3, color: 'violet', items: automations.filter(a => a.category === 'Support') },
    { name: 'Marketing', count: 4, color: 'amber', items: automations.filter(a => a.category === 'Marketing') },
    { name: 'Finance & Ops', count: 4, color: 'cyan', items: automations.filter(a => ['Finance', 'Operations'].includes(a.category)) },
    { name: 'DevOps & Security', count: 4, color: 'rose', items: automations.filter(a => ['DevOps', 'Security'].includes(a.category)) },
  ];

  return (
    <section className="py-24 bg-slate-950 relative" data-testid="use-cases-section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            By <span className="text-emerald-400">Category</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Find the perfect automation for your department
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="rounded-xl bg-slate-900/50 border border-slate-800 p-6 hover:border-emerald-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                <span className="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded">
                  {category.items.length} agents
                </span>
              </div>
              <div className="space-y-2">
                {category.items.map((item) => (
                  <div key={item.title} className="flex items-center gap-2 text-slate-400 text-sm">
                    <item.icon className="w-4 h-4 text-emerald-400/70" />
                    <span className="truncate">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const AgentsCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-black relative" data-testid="agents-cta-section">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-mono">START_AUTOMATING</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Automate?
            </span>
          </h2>
          
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-mono">
            {'>'} Get started with any automation in under 24 hours
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button 
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-10 py-6 text-lg"
                data-testid="agents-contact-btn"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/">
              <Button 
                variant="outline"
                size="lg"
                className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-10 py-6 text-lg"
                data-testid="agents-home-btn"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const AgentsFooter = () => {
  return (
    <footer className="py-8 bg-black border-t border-emerald-500/10" data-testid="agents-footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_ai-solutions-hub-49/artifacts/khguvbti_logo.png" 
              alt="Sledopyt AI Logo" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-white">Sledopyt</span>
            <span className="text-xl font-bold text-emerald-500">AI</span>
          </div>

          <p className="text-slate-600 text-sm font-mono">
            &copy; {new Date().getFullYear()} SLEDOPYT_AI // ALL_RIGHTS_RESERVED
          </p>

          <div className="flex items-center gap-6">
            <Link to="/" className="text-slate-500 hover:text-emerald-400 transition-colors text-sm">
              Home
            </Link>
            <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Agents Page
export default function AgentsPage() {
  return (
    <div className="bg-black min-h-screen">
      <AgentsNavigation />
      <AgentsHero />
      <AutomationShowcase />
      <UseCasesGrid />
      <VoiceAgentDemo />
      <AgentsCTA />
      <AgentsFooter />
    </div>
  );
}
