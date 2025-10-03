// import { CheckCircle2 } from 'lucide-react';
// import { portfolioData } from '../data/portfolio';
// import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
// import profilePic from '../images/edit-pic-profile.jpeg';


// export function About() {
//   const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

//   return (
//     <section id="about" className="py-20 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           ref={ref}
//           className={`max-w-4xl mx-auto transition-all duration-700 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
//             About Me
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
//                 {portfolioData.about.description}
//               </p>
//               <div className="space-y-3">
//                 {portfolioData.about.highlights.map((highlight, index) => (
//                   <div key={index} className="flex items-start space-x-3">
//                     <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative">
//               <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1">
//                 <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
//                   <img
//                     src={profilePic}
//                     alt="Profile"
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                   />
//                 </div>
//               </div>
//               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
//               <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600/10 dark:bg-purple-400/10 rounded-full blur-3xl"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { CheckCircle2, Sparkles, Zap, Code, Palette } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import profilePic from '../images/edit-pic-profile.jpeg';
import { useState, useEffect } from 'react';

export function About() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [animatedHighlights, setAnimatedHighlights] = useState<boolean[]>([]);

  useEffect(() => {
    if (isVisible) {
      const timeouts = portfolioData.about.highlights.map((_, index) => 
        setTimeout(() => {
          setAnimatedHighlights(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 200)
      );
      
      return () => timeouts.forEach(timeout => clearTimeout(timeout));
    }
  }, [isVisible]);

  const passions = [
    { icon: Code, label: 'Clean Code' },
    { icon: Zap, label: 'Innovation' },
    { icon: Palette, label: 'Beautiful Design' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float"
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
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Get to Know Me
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate developer crafting digital experiences that make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              {/* Main Description */}
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light pl-6">
                  {portfolioData.about.description}
                </p>
              </div>

              {/* Animated Highlights */}
              <div className="space-y-4">
                {portfolioData.about.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 transform ${
                      animatedHighlights[index] 
                        ? 'opacity-100 translate-x-0 scale-100' 
                        : 'opacity-0 translate-x-8 scale-95'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 500}ms` }}
                  >
                    <div className="relative">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <div className="absolute inset-0 w-6 h-6 bg-blue-600/20 rounded-full animate-ping"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 pt-0.5">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Passions Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {passions.map((passion, index) => (
                  <div
                    key={index}
                    className={`text-center p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 transition-all duration-700 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: `${index * 200 + 1000}ms` }}
                  >
                    <passion.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                      {passion.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side - Keeping original size and structure */}
            <div className="relative">
              <div className="relative group">
                {/* Outer Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                
                {/* Original Image Container - Same as your previous code */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                  <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                    <img
                      src={profilePic}
                      alt="Profile"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>

                {/* Decorative Corner Accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-blue-500 opacity-60"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-purple-500 opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-pink-500 opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-500 opacity-60"></div>
              </div>

              {/* Floating Info Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-105 transition duration-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900 dark:text-white">Open to</div>
                    <div className="text-blue-600 dark:text-blue-400 text-xs font-medium">New Opportunities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
