// import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
// import { portfolioData } from '../data/portfolio';

// export function Hero() {
//   const scrollToContact = () => {
//     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="animate-fade-in">
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
//               Hi, I'm{' '}
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 {portfolioData.name}
//               </span>
//             </h1>
//             <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-4 font-semibold">
//               {portfolioData.title}
//             </p>
//             <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
//               {portfolioData.tagline}
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up">
//             <button
//               onClick={scrollToContact}
//               className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//               aria-label="Get in touch"
//             >
//               Get In Touch
//             </button>
//             <a
//               href="#projects"
//               className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
//               aria-label="View my work"
//             >
//               View My Work
//             </a>
//           </div>

//           <div className="flex items-center justify-center space-x-6 mb-16 animate-slide-up">
//             <a
//               href={portfolioData.social.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-110"
//               aria-label="GitHub profile"
//             >
//               <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//             </a>
//             <a
//               href={portfolioData.social.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-110"
//               aria-label="LinkedIn profile"
//             >
//               <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//             </a>
//             <a
//               href={portfolioData.social.twitter}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-110"
//               aria-label="Twitter profile"
//             >
//               <Twitter className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//             </a>
//             <a
//               href={`mailto:${portfolioData.email}`}
//               className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-110"
//               aria-label="Send email"
//             >
//               <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//             </a>
//           </div>

//           <div className="animate-bounce">
//             <ArrowDown className="w-8 h-8 mx-auto text-gray-400 dark:text-gray-600" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { ArrowDown, Github, Linkedin, Twitter, Mail, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const gradientStyle = {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.15), transparent 80%)`,
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0" style={gradientStyle} />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content with Staggered Animation */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            
            {/* Badge */}
            <div className="animate-fade-in mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Available for new opportunities
              </span>
            </div>

            {/* Main Heading with Gradient Text Effect */}
            <div className="relative">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Hi, I'm
                </span>
                <br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                    {portfolioData.name}
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
                </span>
              </h1>
            </div>

            {/* Title with Typing Effect */}
            <div className="animate-slide-up">
              <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-4 font-light">
                {portfolioData.title.split('').map((char, index) => (
                  <span
                    key={index}
                    className="animate-typewriter"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {char}
                  </span>
                ))}
              </p>
            </div>

            {/* Tagline */}
            <div className="animate-slide-up delay-300">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                {portfolioData.tagline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-16 animate-slide-up delay-500">
              <button
                onClick={scrollToContact}
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
                aria-label="Get in touch"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative flex items-center">
                  Get In Touch
                  <Mail className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <a
                href="#projects"
                className="group px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 hover:bg-white/10 hover:border-white/20 shadow-2xl"
                aria-label="View my work"
              >
                <span className="relative flex items-center">
                  View My Work
                  <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-3 mb-20 animate-slide-up delay-700">
              {[
                { icon: Github, href: portfolioData.social.github, color: 'hover:text-gray-300' },
                { icon: Linkedin, href: portfolioData.social.linkedin, color: 'hover:text-blue-400' },
                { icon: Twitter, href: portfolioData.social.twitter, color: 'hover:text-sky-400' },
                { icon: Mail, href: `mailto:${portfolioData.email}`, color: 'hover:text-red-400' },
              ].map(({ icon: Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:bg-white/10 hover:border-white/20 ${color}`}
                  aria-label={`${Icon.name} profile`}
                >
                  <Icon className="w-7 h-7 text-gray-400 group-hover:text-current transition-colors" />
                </a>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce-slow">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm text-gray-500 font-medium tracking-wider">SCROLL TO EXPLORE</span>
                <div className="w-px h-12 bg-gradient-to-b from-blue-400 to-transparent rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
}
