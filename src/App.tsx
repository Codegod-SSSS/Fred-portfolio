/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  ExternalLink, 
  Cpu, 
  Globe, 
  Zap, 
  FileText, 
  Menu, 
  X, 
  ChevronRight,
  Code2,
  Wrench,
  CircuitBoard,
  Sun,
  Moon
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { PROJECTS, SKILLS, SCHEMATICS } from './constants';
import { Project } from './types';

// --- Theme Management ---
type Theme = 'light' | 'dark' | 'golden' | 'blue' | 'green';
const ThemeContext = createContext<{ 
  theme: Theme, 
  setTheme: (t: Theme) => void,
  toggleTheme: () => void 
}>({ 
  theme: 'dark', 
  setTheme: () => {},
  toggleTheme: () => {} 
});

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext);
  const [showThemePicker, setShowThemePicker] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Skills', href: '#skills' },
    { name: 'Connect', href: '#contact' },
  ];

  const themes: { id: Theme; icon: any; label: string; color: string }[] = [
    { id: 'light', icon: Sun, label: 'Light', color: 'bg-white' },
    { id: 'dark', icon: Moon, label: 'Dark', color: 'bg-slate-900' },
    { id: 'golden', icon: Zap, label: 'Golden', color: 'bg-yellow-600' },
    { id: 'blue', icon: Globe, label: 'Blue', color: 'bg-blue-600' },
    { id: 'green', icon: Cpu, label: 'Green', color: 'bg-green-700' },
  ];

  return (
    <nav 
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-[var(--nav-bg)] backdrop-blur-lg border-b border-slate-200 dark:border-slate-800' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-2 group text-slate-900 dark:text-white">
          <CircuitBoard className="w-6 h-6 text-brand-primary group-hover:rotate-90 transition-transform duration-500" />
          <span>FREDERICK <span className="text-brand-primary">ABOAGYE</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-brand-primary dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="relative">
            <button 
              id="theme-toggle"
              onClick={() => setShowThemePicker(!showThemePicker)}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-brand-primary dark:hover:text-white bg-slate-100 dark:bg-slate-900 rounded-lg transition-colors border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            
            <AnimatePresence>
              {showThemePicker && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl min-w-[160px] z-50"
                >
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setShowThemePicker(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        theme === t.id 
                          ? 'bg-brand-primary/10 text-brand-primary font-bold' 
                          : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full ${t.color}`} />
                      {t.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a 
            href="#contact" 
            className="px-5 py-2 bg-brand-primary text-white text-sm font-semibold rounded-full hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle Group */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button 
            id="mobile-menu-toggle"
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium p-2 text-slate-700 dark:text-slate-300 hover:text-brand-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="mono-accent mb-6 flex items-center gap-3">
             <span className="w-2 h-2 bg-brand-accent rounded-full animate-ping" />
             Available for Projects
          </div>
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent font-serif leading-[1.1]">
            ENGINEERING <br />
            <span className="text-brand-primary">DIGITAL</span> & <br />
            PHYSICAL <span className="text-slate-400 font-light">SYSTEMS.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mb-10 leading-relaxed">
            I'm Frederick Aboagye, an Electrical Engineer and Coder specializing in 
            full-stack development and high-end hardware refurbishment. 
            Designing circuits and shipping code.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group shadow-xl">
              View Work <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-center p-4 lg:p-0"
        >
          <div className="relative w-full max-w-sm">
            <div 
              className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-2xl group transition-all duration-500"
              style={{ boxShadow: '0 25px 60px -15px var(--brand-shadow)' }}
            >
              <img 
                src="/input_file_0.png" 
                alt="Frederick Aboagye" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card bg-white/95 dark:bg-slate-950/90 border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md">
                <div className="text-[10px] font-mono text-brand-primary mb-1 uppercase tracking-widest font-bold">// Focus Area</div>
                <p className="text-sm font-bold leading-tight text-slate-800 dark:text-slate-100">Industrial IoT & Full-Stack Hardware Repair</p>
              </div>
            </div>
            
            {/* Artistic accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-brand-primary rounded-tl-xl opacity-40" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-brand-primary rounded-br-xl opacity-40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="glass-card w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <button 
            id="close-modal"
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-white/50 dark:bg-slate-950/50 backdrop-blur border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            <X className="w-6 h-6 text-slate-800 dark:text-white" />
          </button>
        </div>

        <div className="p-10 grid lg:grid-cols-[1fr_350px] gap-12">
          <div className="space-y-8">
            <div>
              <div className="mono-accent mb-2 text-brand-primary">{project.category}</div>
              <h2 id="modal-project-title" className="text-4xl font-bold mb-4 text-slate-800 dark:text-white">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-500 dark:text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-headings:text-slate-800 dark:prose-headings:text-white">
               <ReactMarkdown>{project.longDescription || project.description}</ReactMarkdown>
            </div>

            {project.codeSnippet && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800 dark:text-white">
                  <Code2 className="w-5 h-5 text-brand-primary" /> Logic Snippet
                </h3>
                  <pre className="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 font-mono text-sm overflow-x-auto text-brand-primary dark:text-brand-accent">
                    <code>{project.codeSnippet}</code>
                  </pre>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">Resources</h3>
              <div className="flex flex-col gap-3">
                {project.links?.live && (
                  <a href="#" className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-brand-primary/10 dark:hover:bg-brand-primary/20 transition-colors group">
                    <span className="flex items-center gap-3 text-slate-700 dark:text-slate-300"><Globe className="w-4 h-4" /> Live Site</span>
                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                  </a>
                )}
                {project.links?.github && (
                  <a href="#" className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-brand-primary/10 dark:hover:bg-brand-primary/20 transition-colors group">
                    <span className="flex items-center gap-3 text-slate-700 dark:text-slate-300"><Github className="w-4 h-4" /> Repository</span>
                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                  </a>
                )}
                {project.links?.schematic && (
                  <a href="#" className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-brand-primary/10 dark:hover:bg-brand-primary/20 transition-colors group">
                    <span className="flex items-center gap-3 text-slate-700 dark:text-slate-300"><FileText className="w-4 h-4" /> Datasheet/Schematic</span>
                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                  </a>
                )}
              </div>
            </div>

            {project.schematicImage && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">Circuit Overview</h3>
                <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden cursor-zoom-in">
                  <img 
                    src={project.schematicImage} 
                    alt="Schematic" 
                    className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectGallery = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'hardware'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(p => filter === 'all' || p.category === filter);

  return (
    <section id="projects" className="section-container border-y border-slate-200 dark:border-slate-900">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div>
          <div className="mono-accent mb-4 text-slate-500 dark:text-slate-400">Case Studies</div>
          <h2 className="text-5xl font-black tracking-tight text-slate-800 dark:text-white font-serif">FEATURED WORK</h2>
        </div>
        
        <div className="flex p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl h-fit">
          {(['all', 'web', 'hardware'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all capitalize ${
                filter === f 
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-lg shadow-black/5' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card group cursor-pointer flex flex-col bg-white/40 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-brand-primary transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors" />
                <div className="absolute top-4 left-4">
                  {project.category === 'web' ? (
                    <div className="p-2 bg-blue-500 rounded-lg shadow-lg"><Globe className="w-5 h-5 text-white" /></div>
                  ) : (
                    <div className="p-2 bg-emerald-500 rounded-lg shadow-lg"><Wrench className="w-5 h-5 text-white" /></div>
                  )}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mono-accent mb-2 text-brand-primary">{project.category}</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white group-hover:text-brand-primary transition-colors">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6">
                  {project.description}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ChevronRight className="w-5 h-5 text-brand-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const SchematicGallery = () => {
  return (
    <section id="gallery" className="section-container">
      <div className="mb-16 text-center">
        <div className="mono-accent mb-4">Visual Documentation</div>
        <h2 className="text-5xl font-black tracking-tight mb-4 font-serif">SCHEMATIC GALLERY</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto italic font-serif">
          Detailed technical blueprints from major refurbishment and design projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {SCHEMATICS.map((sch) => (
          <motion.div 
            key={sch.id}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="glass-card aspect-video p-2 border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl">
              <img 
                src={sch.image} 
                alt={sch.title} 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-serif">{sch.title}</h4>
                  <p className="text-slate-300 text-sm italic">{sch.description}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between px-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{sch.id} // ENGINEERING_SPEC</span>
              <div className="h-[1px] flex-grow mx-4 bg-slate-200 dark:bg-slate-800" />
              <div className="p-2 bg-brand-primary/10 rounded-full">
                <CircuitBoard className="w-4 h-4 text-brand-primary" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container">
      <div className="grid lg:grid-cols-2 gap-24">
        <div>
          <div className="mono-accent mb-4 text-slate-500 dark:text-slate-400">Core Competencies</div>
          <h2 className="text-5xl font-black tracking-tight mb-8 text-slate-800 dark:text-white font-serif">MY TOOLKIT.</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-12">
            Bridging the gap between software and hardware requires a diverse stack. 
            I specialize in full-stack web development and high-precision electronic repair.
          </p>

          <div className="space-y-6">
            {['Coding', 'Electrical', 'Tools'].map(cat => (
              <div key={cat} className="space-y-4">
                <h3 className="text-sm font-mono text-brand-primary uppercase tracking-widest">{cat}</h3>
                <div className="flex flex-wrap gap-3">
                  {SKILLS.filter(s => s.category === cat).map(skill => (
                    <div 
                      key={skill.name}
                      className="px-6 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-brand-primary dark:hover:border-brand-primary transition-colors cursor-default shadow-sm"
                    >
                      <span className="font-bold text-slate-700 dark:text-slate-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="glass-card p-10 flex flex-col justify-center items-center text-center group bg-white/40 dark:bg-slate-900/40">
            <Zap className="w-12 h-12 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
            <div className="text-4xl font-black mb-2 text-slate-800 dark:text-white">50+</div>
            <div className="text-slate-400 uppercase text-[10px] tracking-widest font-mono">Repairs Completed</div>
          </div>
          <div className="glass-card p-10 flex flex-col justify-center items-center text-center group bg-white/40 dark:bg-slate-900/40">
            <Cpu className="w-12 h-12 text-brand-primary mb-6 group-hover:scale-110 transition-transform" />
            <div className="text-4xl font-black mb-2 text-slate-800 dark:text-white">12</div>
            <div className="text-slate-400 uppercase text-[10px] tracking-widest font-mono">Custom PCBs</div>
          </div>
          <div className="glass-card p-10 flex flex-col justify-center items-center text-center group col-span-2 bg-white/40 dark:bg-slate-900/40">
            <Globe className="w-12 h-12 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
            <div className="text-4xl font-black mb-2 text-slate-800 dark:text-white">20+</div>
            <div className="text-slate-400 uppercase text-[10px] tracking-widest font-mono">Web Projects Launched</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="section-container border-t border-slate-200 dark:border-slate-900 pt-24 pb-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-6xl font-black tracking-tighter mb-8 italic text-slate-800 dark:text-white font-serif">LET'S BUILD <br /> SOMETHING <br /> <span className="text-brand-primary">GREAT.</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-8 text-xl">
            Whether you need a custom web app or a high-end hardware diagnostic, I'm ready to help.
          </p>
          <a href="mailto:aboagyefrederick535@gmail.com" className="group text-2xl font-bold flex items-center gap-4 text-slate-800 dark:text-white hover:text-brand-primary dark:hover:text-brand-primary transition-colors">
            aboagyefrederick535@gmail.com
            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
        
        <div className="glass-card p-12 bg-blue-600/5 dark:bg-blue-600/5 border-slate-200 dark:border-blue-500/20">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-slate-500">Name</label>
                <input id="name-input" type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors dark:text-white" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-slate-500">Email</label>
                <input id="email-input" type="email" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors dark:text-white" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-slate-500">Message</label>
              <textarea id="message-input" rows={4} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors dark:text-white" placeholder="Tell me about your project..." />
            </div>
            <button id="submit-button" type="submit" className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-slate-200 dark:border-slate-900 text-slate-500 text-sm font-mono uppercase tracking-widest">
        <div>© 2026 FREDERICK ABOAGYE PORTFOLIO. BUILT WITH PRECISION.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">GITHUB</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">TWITTER</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved as Theme;
      return 'dark'; // Default
    }
    return 'dark';
  });

  useEffect(() => {
    // Reset classes
    document.documentElement.classList.remove('light', 'dark', 'golden', 'blue', 'green');
    // Add new theme class
    document.documentElement.classList.add(theme);
    // Dark mode class (for tailwind dark: modifiers)
    if (theme === 'dark' || theme === 'golden' || theme === 'green' || theme === 'blue') {
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const sequence: Theme[] = ['light', 'dark', 'golden', 'blue', 'green'];
    const nextIndex = (sequence.indexOf(theme) + 1) % sequence.length;
    setTheme(sequence[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        <Navbar />
        <Hero />
        <ProjectGallery />
        <SchematicGallery />
        <SkillsSection />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
