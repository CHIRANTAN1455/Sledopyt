import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  Sparkles,
  Shield,
  Clock,
  Globe
} from "lucide-react";
import { Button } from "./components/ui/button";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Agent types data
const agentTypes = [
  {
    title: "Voice Agents",
    description: "Natural conversation AI that handles calls, appointments, and customer support with human-like speech.",
    icon: Phone,
    color: "violet",
    features: ["24/7 Availability", "Multi-language", "Emotion Detection"]
  },
  {
    title: "Chat Agents",
    description: "Intelligent chatbots that engage customers, answer queries, and drive conversions.",
    icon: MessageSquare,
    color: "sky",
    features: ["Instant Response", "Context Aware", "Lead Qualification"]
  },
  {
    title: "Task Agents",
    description: "Autonomous workers that execute complex workflows and business processes.",
    icon: Zap,
    color: "amber",
    features: ["Workflow Automation", "Data Processing", "API Integration"]
  },
  {
    title: "Research Agents",
    description: "AI that gathers, analyzes, and synthesizes information from multiple sources.",
    icon: Brain,
    color: "emerald",
    features: ["Web Scraping", "Report Generation", "Trend Analysis"]
  }
];

// Navigation Component
const AgentsNavigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur bg-slate-950/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" data-testid="agents-logo">
            <img 
              src="https://customer-assets.emergentagent.com/job_ai-solutions-hub-49/artifacts/khguvbti_logo.png" 
              alt="Sledopyt AI Logo" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">Sledopyt</span>
              <span className="text-violet-500"> AI</span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2" data-testid="back-home">
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
            <Button 
              className="bg-violet-600 hover:bg-violet-700 text-white px-6"
              data-testid="agents-cta"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Section for Agents Page
const AgentsHero = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden pt-20" data-testid="agents-hero">
      {/* Animated background grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Bot className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300">Autonomous AI Workforce</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Meet Your</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-violet-500 to-sky-400">AI Agents</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Deploy intelligent agents that work 24/7. From voice calls to complex workflows, our AI agents handle it all with superhuman efficiency.
          </p>

          {/* Floating stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {[
              { label: "Calls Handled", value: "1M+", icon: Phone },
              { label: "Response Time", value: "<1s", icon: Clock },
              { label: "Languages", value: "50+", icon: Globe },
              { label: "Uptime", value: "99.9%", icon: Shield }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900/50 border border-slate-800"
                whileHover={{ scale: 1.05, borderColor: 'rgba(124,58,237,0.5)' }}
              >
                <stat.icon className="w-5 h-5 text-violet-500" />
                <div className="text-left">
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Agent Types Grid
const AgentTypesSection = () => {
  return (
    <section className="py-24 bg-slate-950 relative" data-testid="agent-types-section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Agent <span className="text-violet-500">Arsenal</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Choose from our specialized AI agents, each designed for specific business needs
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {agentTypes.map((agent, index) => (
            <motion.div
              key={agent.title}
              className="group relative rounded-2xl p-8 bg-slate-900/50 border border-slate-800 hover:border-violet-500/50 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              data-testid={`agent-type-${index}`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-${agent.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <agent.icon className={`text-${agent.color}-500`} size={28} />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
                  {agent.title}
                  <Sparkles className="w-5 h-5 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6">
                  {agent.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {agent.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Voice Agent Demo Section
const VoiceAgentDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = document.getElementById('voice-demo-video');
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-24 bg-slate-900/30 relative overflow-hidden" data-testid="voice-agent-section">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Mic className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400">Voice Agent Demo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Real Estate<br />
              <span className="text-violet-500">Voice Agent</span>
            </h2>

            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Listen to our AI voice agent in action. This demo showcases a real estate inquiry call where our agent handles property questions, schedules viewings, and qualifies leads—all autonomously.
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {[
                "Natural conversation flow with context awareness",
                "Real-time property database integration",
                "Automated appointment scheduling",
                "Lead qualification and CRM sync"
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                  </div>
                  <span className="text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button 
              onClick={togglePlay}
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white px-8"
              data-testid="play-demo-btn"
            >
              {isPlaying ? (
                <>
                  <Pause className="mr-2" size={20} />
                  Pause Demo
                </>
              ) : (
                <>
                  <Play className="mr-2" size={20} />
                  Play Demo Call
                </>
              )}
            </Button>
          </motion.div>

          {/* Video/Audio Player */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
              {/* Phone call UI mockup */}
              <div className="bg-slate-950 p-4 border-b border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Sledopyt Voice Agent</p>
                      <p className="text-xs text-slate-500">Real Estate Assistant</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Volume2 className={`w-5 h-5 ${isPlaying ? 'text-emerald-400 animate-pulse' : 'text-slate-500'}`} />
                    <span className={`text-sm ${isPlaying ? 'text-emerald-400' : 'text-slate-500'}`}>
                      {isPlaying ? 'Playing...' : 'Ready'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Video element */}
              <video 
                id="voice-demo-video"
                src="https://customer-assets.emergentagent.com/job_ai-solutions-hub-49/artifacts/sxl4bngd_EstateAgent.mp4"
                className="w-full h-auto"
                onEnded={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls
                preload="metadata"
              />

              {/* Waveform animation overlay when playing */}
              {isPlaying && (
                <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-1 py-4">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-violet-500 rounded-full"
                      animate={{
                        height: [10, Math.random() * 30 + 10, 10],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.05,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const AgentsCTA = () => {
  return (
    <section className="py-24 bg-slate-950 relative" data-testid="agents-cta-section">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Deploy Your<br />
            <span className="text-violet-500">AI Workforce?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of businesses already using Sledopyt AI agents to automate operations and scale efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button 
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg"
                data-testid="agents-contact-btn"
              >
                Contact Sales
              </Button>
            </Link>
            <Link to="/">
              <Button 
                variant="outline"
                size="lg"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg"
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
    <footer className="py-12 bg-slate-900/50 border-t border-slate-800" data-testid="agents-footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_ai-solutions-hub-49/artifacts/khguvbti_logo.png" 
              alt="Sledopyt AI Logo" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-white">Sledopyt</span>
            <span className="text-xl font-bold text-violet-500">AI</span>
          </div>

          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Sledopyt AI. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
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
    <div className="bg-slate-950 min-h-screen">
      <AgentsNavigation />
      <AgentsHero />
      <AgentTypesSection />
      <VoiceAgentDemo />
      <AgentsCTA />
      <AgentsFooter />
    </div>
  );
}
