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
  Activity
} from "lucide-react";
import { Button } from "./components/ui/button";

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
  const fullText = 'AUTONOMOUS_AGENTS_v3.0';
  
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
              <span className="text-white">Your AI</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-gradient">
                Workforce
              </span>
              <br />
              <span className="text-slate-500 text-4xl lg:text-5xl">Awaits.</span>
            </h1>

            <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed font-mono">
              <span className="text-emerald-400">{'>'}</span> Deploy intelligent agents that think, act, and scale. No sleep. No errors. Just results.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-6 text-lg group"
                data-testid="hero-deploy-btn"
              >
                <Cpu className="mr-2 w-5 h-5 group-hover:animate-spin" />
                Initialize Agent
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-6 text-lg"
                data-testid="hero-demo-btn"
              >
                Watch Demo
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
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
                { label: 'VOICE', icon: Phone, pos: 'top-0 left-1/2 -translate-x-1/2' },
                { label: 'CHAT', icon: MessageSquare, pos: 'bottom-0 left-1/2 -translate-x-1/2' },
                { label: 'TASK', icon: Zap, pos: 'left-0 top-1/2 -translate-y-1/2' },
                { label: 'RESEARCH', icon: Brain, pos: 'right-0 top-1/2 -translate-y-1/2' }
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

// Interactive Agent Showcase with horizontal scroll
const AgentShowcase = () => {
  const agents = [
    {
      id: 'voice',
      title: 'Voice Agents',
      subtitle: 'Human-like conversations',
      description: 'AI that speaks naturally, handles calls 24/7, and never forgets a detail.',
      icon: Phone,
      color: 'emerald',
      stats: [
        { label: 'Avg Response', value: '0.3s' },
        { label: 'Languages', value: '50+' },
        { label: 'Accuracy', value: '99.2%' }
      ],
      features: ['Natural Speech', 'Emotion Detection', 'Multi-turn Memory']
    },
    {
      id: 'chat',
      title: 'Chat Agents',
      subtitle: 'Instant engagement',
      description: 'Smart chatbots that convert visitors, qualify leads, and support customers.',
      icon: MessageSquare,
      color: 'cyan',
      stats: [
        { label: 'Messages/day', value: '100K+' },
        { label: 'Resolution', value: '94%' },
        { label: 'CSAT', value: '4.8/5' }
      ],
      features: ['Context Aware', 'CRM Integration', 'Smart Routing']
    },
    {
      id: 'task',
      title: 'Task Agents',
      subtitle: 'Autonomous execution',
      description: 'Digital workers that automate complex workflows across your systems.',
      icon: Zap,
      color: 'amber',
      stats: [
        { label: 'Tasks/hour', value: '1000+' },
        { label: 'Error Rate', value: '0.01%' },
        { label: 'Uptime', value: '99.99%' }
      ],
      features: ['API Integration', 'Workflow Builder', 'Error Recovery']
    },
    {
      id: 'research',
      title: 'Research Agents',
      subtitle: 'Knowledge synthesis',
      description: 'AI researchers that gather, analyze, and summarize information at scale.',
      icon: Brain,
      color: 'violet',
      stats: [
        { label: 'Sources', value: '1M+' },
        { label: 'Reports/day', value: '500+' },
        { label: 'Accuracy', value: '97%' }
      ],
      features: ['Web Scraping', 'Data Analysis', 'Report Generation']
    }
  ];

  const [activeAgent, setActiveAgent] = useState(0);

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden" data-testid="agent-showcase">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-emerald-400">Agent</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-mono">
            {'>'} Select an agent type to explore capabilities
          </p>
        </motion.div>

        {/* Agent selector tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {agents.map((agent, index) => (
            <motion.button
              key={agent.id}
              onClick={() => setActiveAgent(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-lg border transition-all duration-300 ${
                activeAgent === index 
                  ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' 
                  : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-slate-600'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid={`agent-tab-${agent.id}`}
            >
              <agent.icon className="w-5 h-5" />
              <span className="font-medium">{agent.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Agent detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeAgent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Main card */}
            <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 relative overflow-hidden">
              {/* Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-${agents[activeAgent].color}-500/10 rounded-full blur-3xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className={`w-16 h-16 rounded-xl bg-${agents[activeAgent].color}-500/20 flex items-center justify-center mb-4`}>
                      {(() => {
                        const IconComponent = agents[activeAgent].icon;
                        return <IconComponent className="w-8 h-8 text-emerald-400" />;
                      })()}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{agents[activeAgent].title}</h3>
                    <p className="text-emerald-400 font-mono text-sm">{agents[activeAgent].subtitle}</p>
                  </div>
                  <div className="hidden sm:block px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30">
                    <span className="text-emerald-400 text-sm font-mono">ACTIVE</span>
                  </div>
                </div>

                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  {agents[activeAgent].description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3">
                  {agents[activeAgent].features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats card */}
            <div className="rounded-2xl bg-black border border-emerald-500/20 p-6">
              <h4 className="text-emerald-400 font-mono text-sm mb-6 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                PERFORMANCE_METRICS
              </h4>
              
              <div className="space-y-6">
                {agents[activeAgent].stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-500 text-sm">{stat.label}</span>
                      <span className="text-white font-mono text-xl">{stat.value}</span>
                    </div>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button 
                className="w-full mt-8 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold"
                data-testid="deploy-agent-btn"
              >
                Deploy This Agent
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// Voice Agent Demo with waveform
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
    <section className="py-32 bg-black relative overflow-hidden" data-testid="voice-agent-section">
      {/* Animated background lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent w-full"
            style={{ top: `${20 + i * 15}%` }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Video/Audio Player */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 bg-slate-950 shadow-2xl shadow-emerald-500/10">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 bg-black border-b border-emerald-500/20">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="text-slate-500 text-xs ml-2 font-mono">voice_agent_demo.exe</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-slate-600'}`}></div>
                  <span className={`text-xs font-mono ${isPlaying ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {isPlaying ? 'STREAMING' : 'READY'}
                  </span>
                </div>
              </div>

              {/* Call info bar */}
              <div className="px-4 py-3 bg-emerald-500/5 border-b border-emerald-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Real Estate Voice Agent</p>
                    <p className="text-slate-500 text-xs font-mono">DEMO_CALL_001</p>
                  </div>
                </div>
                <Button
                  onClick={togglePlay}
                  size="sm"
                  className={`${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-emerald-500 hover:bg-emerald-400'} text-white`}
                  data-testid="play-demo-btn"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
              </div>

              {/* Video */}
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

              {/* Waveform */}
              {isPlaying && (
                <div className="absolute bottom-20 left-4 right-4 flex justify-center items-end gap-0.5 h-8">
                  {[...Array(40)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-emerald-500 rounded-full"
                      animate={{
                        height: [4, Math.random() * 24 + 4, 4],
                      }}
                      transition={{
                        duration: 0.4,
                        repeat: Infinity,
                        delay: i * 0.02,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 mb-6 font-mono">
              <Mic className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm">LIVE_DEMO</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Hear It In<br />
              <span className="text-emerald-400">Action</span>
            </h2>

            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Listen to our Voice Agent handle a real estate inquiry. Notice how it understands context, answers questions naturally, and guides the conversation toward booking a viewing.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, label: 'Multi-language', value: '50+' },
                { icon: Clock, label: 'Latency', value: '<300ms' },
                { icon: Shield, label: 'Accuracy', value: '99.2%' },
                { icon: Network, label: 'Integrations', value: 'CRM, Cal' }
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <item.icon className="w-5 h-5 text-emerald-400 mb-2" />
                  <p className="text-white font-mono text-lg">{item.value}</p>
                  <p className="text-slate-500 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const AgentsCTA = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-950 to-black relative" data-testid="agents-cta-section">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-mono">READY_TO_DEPLOY</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Build Your AI<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Workforce Today
            </span>
          </h2>
          
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-mono">
            {'>'} Join 500+ companies already using Sledopyt agents
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button 
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-10 py-6 text-lg"
                data-testid="agents-contact-btn"
              >
                Start Building
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
      <AgentShowcase />
      <VoiceAgentDemo />
      <AgentsCTA />
      <AgentsFooter />
    </div>
  );
}
