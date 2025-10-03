// import { Code, Server, Cloud, Smartphone, Settings, Users } from 'lucide-react';
// import { portfolioData } from '../data/portfolio';
// import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// const iconMap = {
//   code: Code,
//   server: Server,
//   cloud: Cloud,
//   smartphone: Smartphone,
//   settings: Settings,
//   users: Users,
// };

// export function Services() {
//   const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

//   return (
//     <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800/50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           ref={ref}
//           className={`transition-all duration-700 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
//             Services
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {portfolioData.services.map((service, index) => {
//               const Icon = iconMap[service.icon as keyof typeof iconMap];
//               return (
//                 <div
//                   key={index}
//                   className="group bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                     <Icon className="w-7 h-7 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Code, Server, Cloud, Smartphone, Settings, Users, Layers, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useState } from 'react';

const iconMap = {
  code: Code,
  server: Server,
  cloud: Cloud,
  smartphone: Smartphone,
  settings: Settings,
  users: Users,
  layers: Layers,
  cpu: Cpu,
};

export function Services() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Add Full Stack Development to services if not already there
  const servicesWithFullStack = [
    ...portfolioData.services,
    {
      title: "Full Stack Development",
      description: "End-to-end web application development using modern technologies like React, Node.js, and cloud platforms",
      icon: "layers"
    }
  ];

  const gradients = [
    'from-blue-600 to-cyan-600',
    'from-purple-600 to-pink-600',
    'from-green-600 to-emerald-600',
    'from-orange-600 to-red-600',
    'from-indigo-600 to-purple-600',
    'from-teal-600 to-blue-600',
    'from-rose-600 to-orange-600',
    'from-violet-600 to-purple-600',
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/20 dark:from-gray-900 dark:via-blue-900/5 dark:to-purple-900/5 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              What I Offer
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-900 dark:text-white mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions to bring your digital ideas to life
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {servicesWithFullStack.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              const gradient = gradients[index % gradients.length];
              
              return (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background Glow */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500 ${
                    hoveredCard === index ? 'opacity-50' : ''
                  }`}></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                    
                    {/* Icon Container */}
                    <div className={`relative mb-8 transform group-hover:scale-110 transition-transform duration-500`}>
                      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Floating Particles */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-6">
                      {service.description}
                    </p>

                    {/* Hover Line */}
                    <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${gradient} rounded-full transition-all duration-500`}></div>

                    {/* Corner Accents */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500/50 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500/50 rounded-full group-hover:scale-150 transition-transform duration-300" style={{transitionDelay: '100ms'}}></div>
                  </div>

                  {/* Floating Elements */}
                  <div className={`absolute -z-10 -inset-2 bg-gradient-to-br ${gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3"></div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Ready to start your project? Let's talk!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
