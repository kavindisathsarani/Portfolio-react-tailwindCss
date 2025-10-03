// import { portfolioData } from '../data/portfolio';
// import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
// import { lazy, Suspense } from 'react';

// const ProjectCard = lazy(() => import('./ProjectCard'));

// export function Projects() {
//   const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

//   return (
//     <section id="projects" className="py-20 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           ref={ref}
//           className={`transition-all duration-700 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
//             Featured Projects
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//             <Suspense
//               fallback={
//                 <div className="col-span-full flex justify-center py-12">
//                   <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
//                 </div>
//               }
//             >
//               {portfolioData.projects.map((project, index) => (
//                 <ProjectCard key={index} project={project} index={index} isVisible={isVisible} />
//               ))}
//             </Suspense>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export interface ProjectCardProps {
//   project: {
//     title: string;
//     description: string;
//     image: string;
//     tags: string[];
//     liveUrl: string;
//     githubUrl: string;
//   };
//   index: number;
//   isVisible: boolean;
// }


import { portfolioData } from '../data/portfolio';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { lazy, Suspense } from 'react';
import { Sparkles, Zap } from 'lucide-react';

const ProjectCard = lazy(() => import('./ProjectCard'));

export function Projects() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/20 to-blue-50/20 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              My Creations
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Featured <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Showcasing my passion for building innovative digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Suspense
              fallback={
                <div className="col-span-full flex justify-center py-12">
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-0 w-16 h-16 border-4 border-blue-600 border-b-transparent rounded-full animate-spin animation-reverse"></div>
                  </div>
                </div>
              }
            >
              {portfolioData.projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} isVisible={isVisible} />
              ))}
            </Suspense>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Interested in working together? Let's build something amazing!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
  };
  index: number;
  isVisible: boolean;
}