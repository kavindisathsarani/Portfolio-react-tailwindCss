// import { Moon, Sun, Menu, X } from 'lucide-react';
// import { useState } from 'react';
// import { useScrollSpy } from '../hooks/useScrollSpy';

// interface HeaderProps {
//   theme: 'light' | 'dark';
//   toggleTheme: () => void;
// }

// const navItems = [
//   { id: 'home', label: 'Home' },
//   { id: 'about', label: 'About' },
//   { id: 'services', label: 'Services' },
//   { id: 'skills', label: 'Skills' },
//   { id: 'experience', label: 'Education' },
//   { id: 'projects', label: 'Projects' },
//   { id: 'contact', label: 'Contact' },
// ];

// export function Header({ theme, toggleTheme }: HeaderProps) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const activeSection = useScrollSpy(navItems.map(item => item.id));

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
//       <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <button
//             onClick={() => scrollToSection('home')}
//             className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//             aria-label="Go to home"
//           >
//             {'Kavindi Sathsarani'}
//           </button>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                   activeSection === item.id
//                     ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
//                     : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
//                 }`}
//                 aria-label={`Navigate to ${item.label}`}
//               >
//                 {item.label}
//               </button>
//             ))}
//             <button
//               onClick={toggleTheme}
//               className="ml-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//               aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
//             >
//               {theme === 'light' ? (
//                 <Moon className="w-5 h-5 text-gray-700" />
//               ) : (
//                 <Sun className="w-5 h-5 text-yellow-400" />
//               )}
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex items-center md:hidden">
//             <button
//               onClick={toggleTheme}
//               className="mr-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//               aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
//             >
//               {theme === 'light' ? (
//                 <Moon className="w-5 h-5 text-gray-700" />
//               ) : (
//                 <Sun className="w-5 h-5 text-yellow-400" />
//               )}
//             </button>
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? (
//                 <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//               ) : (
//                 <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 animate-fade-in">
//             <div className="flex flex-col space-y-2">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`px-4 py-3 rounded-lg text-left font-medium transition-colors ${
//                     activeSection === item.id
//                       ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
//                       : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
//                   }`}
//                   aria-label={`Navigate to ${item.label}`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }


import { Moon, Sun, Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export function Header({ theme, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(navItems.map(item => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-gray-200/50 dark:border-gray-700/50' 
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-800/30'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Brand */}
          <button
            onClick={() => scrollToSection('home')}
            className="group relative flex items-center space-x-2"
            aria-label="Go to home"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative px-3 py-2 bg-white dark:bg-gray-900 rounded-lg ring-1 ring-gray-900/5 dark:ring-white/10">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-lg">
                  KS
                </span>
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Kavindi
            </span>
            <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
                aria-label={`Navigate to ${item.label}`}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-200/50 dark:border-blue-500/30" />
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 scale-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 group-hover:scale-100 transition-transform duration-300" />
                
                {/* Bottom line for active state */}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Theme Toggle & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="relative p-3 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl group"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 relative z-10 group-hover:text-blue-600 transition-colors" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400 relative z-10 group-hover:text-yellow-300 transition-colors" />
              )}
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 relative overflow-hidden group"
              aria-label="Get in touch"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative">Get In Touch</span>
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center lg:hidden space-x-2">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 animate-slide-up border-t border-gray-200/50 dark:border-gray-700/50 mt-2">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative px-6 py-4 rounded-2xl text-left font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-500/30'
                      : 'text-gray-700 dark:text-gray-300 bg-gray-50/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 border border-transparent'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-label={`Navigate to ${item.label}`}
                >
                  <span className="relative z-10 flex items-center">
                    {item.label}
                    {activeSection === item.id && (
                      <Sparkles className="w-4 h-4 ml-2 text-blue-500 animate-pulse" />
                    )}
                  </span>
                  
                  {/* Hover gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
              
              {/* Mobile CTA */}
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-4 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-center relative overflow-hidden group"
                aria-label="Get in touch"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative">Get In Touch</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}