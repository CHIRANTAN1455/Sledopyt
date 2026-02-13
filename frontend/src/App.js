import { useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Bot, Database, Server, Ticket, MapPin, Mail, Phone, Send, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Toaster, toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Team members data
const teamMembers = [
  {
    name: "Alexei Volkov",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "David Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Sarah Al-Fayed",
    role: "Head of AI",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Marcus Thorne",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Elena Rostova",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
];

// Services data
const services = [
  {
    title: "AI Agents & Bots",
    description: "Autonomous digital workers that never sleep. Build intelligent agents that handle complex tasks, automate workflows, and interact naturally with your customers.",
    icon: Bot,
    span: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Smart CRM",
    description: "Predictive customer relationship management powered by AI.",
    icon: Database,
    span: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Server Control",
    description: "Messaging-based infrastructure command and control.",
    icon: Server,
    span: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Ticket Management",
    description: "Auto-triage, intelligent routing, and AI-powered resolution systems for seamless support.",
    icon: Ticket,
    span: "md:col-span-2 md:row-span-1"
  }
];

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

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur bg-slate-950/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a 
            href="/" 
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            data-testid="logo"
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_ai-solutions-hub-49/artifacts/khguvbti_logo.png" 
              alt="Sledopyt AI Logo" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">Sledopyt</span>
              <span className="text-violet-500"> AI</span>
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-white transition-colors duration-200" data-testid="nav-services">
              Services
            </button>
            <button onClick={() => scrollToSection('team')} className="text-slate-400 hover:text-white transition-colors duration-200" data-testid="nav-team">
              Team
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-white transition-colors duration-200" data-testid="nav-contact">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-violet-600 hover:bg-violet-700 text-white px-6 btn-primary"
              data-testid="nav-cta"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden pt-4 pb-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-white text-left py-2" data-testid="mobile-nav-services">
                Services
              </button>
              <button onClick={() => scrollToSection('team')} className="text-slate-400 hover:text-white text-left py-2" data-testid="mobile-nav-team">
                Team
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-white text-left py-2" data-testid="mobile-nav-contact">
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-violet-600 hover:bg-violet-700 text-white w-full"
                data-testid="mobile-nav-cta"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80')`
      }}
      data-testid="hero-section"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
            <span className="text-sm text-violet-300">The Architects of Intelligence</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Intelligence,</span>
            <br />
            <span className="text-white">Architected.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Sledopyt AI builds the autonomous systems that power the next generation of enterprise. From intelligent agents to server control, we navigate the chaos of data.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg btn-primary glow-purple"
              data-testid="hero-cta-primary"
            >
              Initialize Protocol
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg"
              data-testid="hero-cta-secondary"
            >
              Explore Services
              <ChevronDown className="ml-2" size={20} />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-slate-500" size={32} />
      </motion.div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-slate-950 relative" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-violet-500">Solutions</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Enterprise-grade AI solutions designed for the modern business landscape
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`bento-card rounded-2xl p-6 md:p-8 ${service.span}`}
              variants={fadeInUp}
              data-testid={`service-card-${index}`}
            >
              <div className="h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6">
                  <service.icon className="text-violet-500 service-icon" size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Terminal Deployment Section
const DeploymentSection = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-900/30 relative overflow-hidden" data-testid="deployment-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm text-green-400">Deploy with Confidence</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              One Command.<br />
              <span className="text-violet-500">Infinite Scale.</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Our AI models deploy seamlessly to your infrastructure. Whether it's cloud, on-premise, or hybrid - watch your intelligent systems come alive with a single command.
            </p>

            {/* Fake terminal commands */}
            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-slate-500 ml-2 text-xs">terminal</span>
              </div>
              <div className="space-y-2 text-slate-300">
                <p><span className="text-green-400">$</span> sledopyt deploy --model gpt-agent-v3</p>
                <p className="text-slate-500">→ Initializing neural pathways...</p>
                <p className="text-slate-500">→ Connecting to inference cluster...</p>
                <p className="text-green-400">✓ Model deployed successfully</p>
                <p className="text-violet-400">⚡ Endpoint: api.sledopyt.ai/v3/agent</p>
              </div>
            </div>
          </motion.div>

          {/* Terminal Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <video 
                src="https://customer-assets.emergentagent.com/job_ai-solutions-hub-49/artifacts/n9qwmbrj_sledo.mp4" 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-violet-600 text-white px-4 py-2 rounded-lg shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-sm font-medium">99.9% Uptime</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Team Section
const TeamSection = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-slate-900/50 relative" data-testid="team-section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Meet the <span className="text-violet-500">Team</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            The minds behind the intelligence
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-8 md:gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center group"
              variants={fadeInUp}
              data-testid={`team-member-${index}`}
            >
              <div className="relative mb-4">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-slate-700 team-avatar group-hover:border-violet-500">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-sm text-violet-400">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-950 relative" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Let's <span className="text-violet-500">Connect</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Ready to transform your business with AI? Get in touch and let's discuss how we can help architect your intelligent future.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-violet-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Our Location</h4>
                  <p className="text-slate-400">
                    WeWork Hub71, Al Khatem Tower,<br />
                    ADGM Square, Al Maryah Island,<br />
                    Abu Dhabi, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-violet-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Us</h4>
                  <p className="text-slate-400">hello@sledopyt.ai</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-violet-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Call Us</h4>
                  <p className="text-slate-400">+971 2 XXX XXXX</p>
                </div>
              </div>
            </div>

            {/* Abu Dhabi Image */}
            <div className="mt-10 rounded-2xl overflow-hidden border border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80" 
                alt="Abu Dhabi Skyline"
                className="w-full h-48 object-cover"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 input-field"
                    data-testid="contact-name-input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 input-field"
                    data-testid="contact-email-input"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 input-field resize-none"
                    data-testid="contact-message-input"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white py-6 text-lg btn-primary"
                  data-testid="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send size={20} />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Section
const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900/50 border-t border-slate-800" data-testid="footer">
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
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200" data-testid="footer-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200" data-testid="footer-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Home Page Component
const Home = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="section-divider"></div>
      <ServicesSection />
      <DeploymentSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="dark">
      <BrowserRouter>
        <Toaster 
          position="top-right" 
          toastOptions={{
            style: {
              background: '#1e293b',
              color: '#f8fafc',
              border: '1px solid #334155'
            }
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
