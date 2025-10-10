// import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
// import { portfolioData } from '../data/portfolio';

// export function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid md:grid-cols-3 gap-8 mb-8">
//           {/* Brand */}
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//               {'Kavindi Sathsarani'}
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400 mb-4">
//               Building digital experiences that make a difference.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
//             <div className="space-y-2">
//               {['About', 'Services', 'Projects', 'Contact'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Social Links */}
//           <div>
//             <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
//             <div className="flex space-x-4">
//               <a
//                 href={portfolioData.social.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300"
//                 aria-label="GitHub"
//               >
//                 <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
//               </a>
//               <a
//                 href={portfolioData.social.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
//               </a>
//               <a
//                 href={portfolioData.social.twitter}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300"
//                 aria-label="Twitter"
//               >
//                 <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
//               </a>
//               <a
//                 href={`mailto:${portfolioData.email}`}
//                 className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300"
//                 aria-label="Email"
//               >
//                 <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
//           <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center space-x-1">
//             <span>&copy; {currentYear} {portfolioData.name}. Made with</span>
//             <Heart className="w-4 h-4 text-red-500 fill-current" />
//             <span>and React</span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Github, Linkedin, Twitter, Mail, Heart, Sparkles, ArrowUp, Code, Coffee, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useState, useEffect } from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: portfolioData.social.github, label: 'GitHub', color: 'hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900' },
    { icon: Linkedin, href: portfolioData.social.linkedin, label: 'LinkedIn', color: 'hover:bg-blue-600 hover:text-white' },
    { icon: Twitter, href: portfolioData.social.twitter, label: 'Twitter', color: 'hover:bg-sky-500 hover:text-white' },
    { icon: Mail, href: `mailto:${portfolioData.email}`, label: 'Email', color: 'hover:bg-red-500 hover:text-white' },
  ];

  const quickLinks = ['about', 'services', 'skills', 'educations', 'projects', 'contact'];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/20 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10 relative overflow-hidden border-t border-gray-200/50 dark:border-gray-800/50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-5 left-5 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-pulse-slow md:top-10 md:left-10 md:w-20 md:h-20"></div>
      <div className="absolute bottom-5 right-5 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse-slow md:bottom-10 md:right-10 md:w-32 md:h-32" style={{animationDelay: '2s'}}></div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 w-12 h-12 md:bottom-8 md:right-8 md:w-14 md:h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 relative z-10">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Mobile Menu Button - Only show on small screens */}
          <div className="lg:hidden flex justify-between items-center mb-6 p-4 bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/20 dark:border-gray-700/50">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Navigation
            </h3>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 bg-white/10 rounded-lg text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mb-6 animate-slide-up">
              <div className="grid grid-cols-2 gap-3 p-4 bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/20 dark:border-gray-700/50">
                {quickLinks.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left text-gray-400 dark:text-gray-400 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:scale-105 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-medium"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Brand Section - Full width on mobile, spans 2 columns on desktop */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                  {portfolioData.name}
                </h3>
              </div>
              <p className="text-gray-300 dark:text-gray-400 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Crafting digital experiences that inspire and transform ideas into reality through innovative solutions.
              </p>
              
              {/* Status Indicator */}
              <div className="flex items-center space-x-3 p-3 md:p-4 bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/20 dark:border-gray-700/50">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300 dark:text-gray-400 font-medium text-sm md:text-base">
                  Available for new opportunities
                </span>
              </div>
            </div>

            {/* Quick Links - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block">
              <h4 className="font-bold text-white dark:text-white text-lg mb-4 md:mb-6 flex items-center">
                <Code className="w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-400" />
                Navigation
              </h4>
              <div className="space-y-2 md:space-y-3">
                {quickLinks.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left text-gray-400 dark:text-gray-400 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:translate-x-2 py-1 md:py-2 group"
                  >
                    <span className="flex items-center text-sm md:text-base">
                      <div className="w-1 h-1 bg-blue-500 rounded-full mr-2 md:mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div>
              <h4 className="font-bold text-white dark:text-white text-lg mb-4 md:mb-6 flex items-center">
                <Coffee className="w-4 h-4 md:w-5 md:h-5 mr-2 text-purple-400" />
                Let's Connect
              </h4>
              <p className="text-gray-400 dark:text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
                Ready to start your next project? Let's create something amazing together.
              </p>
              
              <div className="flex space-x-2 md:space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 md:p-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/20 dark:border-gray-700/50 text-gray-300 dark:text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color} shadow-lg hover:shadow-xl`}
                    aria-label={social.label}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-6 md:pt-8 border-t border-gray-200/20 dark:border-gray-700/50">
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-between">
              {/* Copyright */}
              <p className="text-gray-400 dark:text-gray-500 flex items-center space-x-2 text-sm md:text-base text-center md:text-left flex-wrap justify-center md:justify-start">
                <span>&copy; {currentYear} {portfolioData.name}</span>
                <span className="hidden md:inline text-gray-600">•</span>
                <span className="hidden md:inline">All rights reserved</span>
              </p>

              {/* Made with love */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-500 text-sm md:text-base">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 md:w-5 md:h-5 text-red-500 fill-current animate-pulse" />
                  <span>and</span>
                  <div className="flex items-center space-x-1 px-2 py-1 md:px-3 md:py-1 bg-blue-500/10 rounded-full">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-blue-400 font-medium text-xs md:text-sm">React</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Copyright - Show on small screens only */}
            <div className="md:hidden text-center mt-4">
              <p className="text-gray-500 text-sm">All rights reserved</p>
            </div>

            {/* Inspirational Quote */}
            <div className="text-center mt-6 md:mt-8">
              <p className="text-gray-500 dark:text-gray-600 text-xs md:text-sm italic">
                "The only way to do great work is to love what you do." - Steve Jobs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"></div>
    </footer>
  );
}