// import { portfolioData } from '../data/portfolio';
// import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// export function Skills() {
//   const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

//   return (
//     <section id="skills" className="py-20 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           ref={ref}
//           className={`transition-all duration-700 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
//             Skills & Technologies
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

//           <div className="max-w-5xl mx-auto space-y-12">
//             {Object.entries(portfolioData.skills).map(([category, skills], index) => (
//               <div
//                 key={category}
//                 className="transition-all duration-700"
//                 style={{
//                   opacity: isVisible ? 1 : 0,
//                   transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
//                   transitionDelay: `${index * 150}ms`,
//                 }}
//               >
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
//                   {category}
//                 </h3>
//                 <div className="flex flex-wrap gap-3">
//                   {skills.map((skill, skillIndex) => (
//                     <span
//                       key={skillIndex}
//                       className="px-5 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-gray-900 dark:text-white rounded-lg font-medium hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/40 dark:hover:to-purple-900/40 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { portfolioData } from '../data/portfolio';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Code, Database, Server, Palette, Cpu, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const categoryIcons = {
  'Frontend': Palette,
  'Backend': Server,
  'Database': Database,
  'Tools & Platforms': Cpu,
  'Methodologies': Zap,
  'Programming Languages': Code,
};

export function Skills() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: boolean[]}>({});

  // Enhanced skills data with your technologies
  const enhancedSkills = {
    'Frontend': ['React.js', 'Vue.js', 'React Native', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap', 'Tailwind CSS', 'Redux'],
    'Backend': ['Java', 'Spring Boot', 'Node.js', 'Next.js', 'REST APIs'],
    'Database': ['MySQL', 'Firebase', 'Firestore'],
    'Tools & Platforms': ['Git', 'Figma', 'npm', 'Firebase Authentication', 'Docker', 'Kubernetes'],
    'Methodologies': ['Software Architecture', 'UI/UX Design', 'Responsive Web Design'],
    'Programming Languages': ['JavaScript', 'TypeScript', 'Java', 'HTML/CSS','Python']
  };

  useEffect(() => {
    if (isVisible) {
      Object.keys(enhancedSkills).forEach((category, catIndex) => {
        enhancedSkills[category as keyof typeof enhancedSkills].forEach((_, skillIndex) => {
          setTimeout(() => {
            setAnimatedSkills(prev => ({
              ...prev,
              [category]: {
                ...prev[category],
                [skillIndex]: true
              }
            }));
          }, (catIndex * 200) + (skillIndex * 80));
        });
      });
    }
  }, [isVisible]);

  const skillColors = {
    'Frontend': 'from-blue-500 to-cyan-500',
    'Backend': 'from-purple-500 to-pink-500',
    'Database': 'from-green-500 to-emerald-500',
    'Tools & Platforms': 'from-orange-500 to-red-500',
    'Methodologies': 'from-indigo-500 to-purple-500',
    'Programming Languages': 'from-teal-500 to-blue-500',
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/20 to-blue-50/20 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10 relative overflow-hidden">
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
              Technical Expertise
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Skills & <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies I use to bring ideas to life
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {Object.entries(enhancedSkills).map(([category, skills], categoryIndex) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons];
              const gradient = skillColors[category as keyof typeof skillColors];
              
              return (
                <div
                  key={category}
                  className="group transition-all duration-700"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transitionDelay: `${categoryIndex * 150}ms`,
                  }}
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-8 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                    <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {category}
                      </h3>
                      <div className={`w-16 h-1 bg-gradient-to-r ${gradient} rounded-full mt-2 group-hover:w-24 transition-all duration-500`}></div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-4">
                    {skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`relative group/skill transition-all duration-500 transform ${
                          animatedSkills[category]?.[skillIndex] 
                            ? 'opacity-100 scale-100 rotate-0' 
                            : 'opacity-0 scale-50 rotate-12'
                        }`}
                        style={{ transitionDelay: `${(categoryIndex * 200) + (skillIndex * 80)}ms` }}
                      >
                        {/* Background Glow */}
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-xl blur opacity-0 group-hover/skill:opacity-30 transition duration-500`}></div>
                        
                        {/* Skill Badge */}
                        <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:shadow-2xl">
                          <span className="text-gray-900 dark:text-white font-semibold text-lg group-hover/skill:text-transparent group-hover/skill:bg-clip-text group-hover/skill:bg-gradient-to-r group-hover/skill:from-purple-600 group-hover/skill:to-blue-600 transition-all duration-300">
                            {skill}
                          </span>
                          
                          {/* Corner Accents */}
                          <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-purple-500/50 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-blue-500/50 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" style={{transitionDelay: '100ms'}}></div>
                        </div>

                        {/* Floating Dot */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 group-hover/skill:opacity-100 animate-ping transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Stats */}
          <div className="text-center mt-16">
            <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">6+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">25+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Dedication</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">∞</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}