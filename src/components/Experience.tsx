// import { Briefcase, CheckCircle2 } from 'lucide-react';
// import { portfolioData } from '../data/portfolio';
// import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// export function Experience() {
//   const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

//   return (
//     <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           ref={ref}
//           className={`transition-all duration-700 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
//             Work Experience
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               {/* Timeline line */}
//               <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

//               {portfolioData.experience.map((exp, index) => (
//                 <div
//                   key={index}
//                   className={`relative mb-12 ${
//                     index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
//                   }`}
//                   style={{
//                     opacity: isVisible ? 1 : 0,
//                     transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                     transition: 'all 0.7s ease-out',
//                     transitionDelay: `${index * 200}ms`,
//                   }}
//                 >
//                   {/* Timeline dot */}
//                   <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>

//                   <div
//                     className={`bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
//                       index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
//                     }`}
//                   >
//                     <div className="flex items-start space-x-4 mb-4">
//                       <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
//                         <Briefcase className="w-6 h-6 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
//                           {exp.position}
//                         </h3>
//                         <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
//                           {exp.company}
//                         </p>
//                         <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
//                       </div>
//                     </div>
//                     <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
//                       {exp.description}
//                     </p>
//                     <div className="space-y-2">
//                       {exp.achievements.map((achievement, achIndex) => (
//                         <div key={achIndex} className="flex items-start space-x-2">
//                           <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
//                           <span className="text-sm text-gray-600 dark:text-gray-400">
//                             {achievement}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Experience() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

              {portfolioData.experience.map((edu, index) => (
                <div
                  key={index}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.7s ease-out',
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>

                  <div
                    className={`bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
