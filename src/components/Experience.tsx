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

// import { GraduationCap } from 'lucide-react';
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
//             Education
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               {/* Timeline line */}
//               <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

//               {portfolioData.experience.map((edu, index) => (
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
//                         <GraduationCap className="w-6 h-6 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
//                           {edu.degree}
//                         </h3>
//                         <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
//                           {edu.institution}
//                         </p>
//                         <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
//                       </div>
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

import { GraduationCap, Award, Calendar, Rocket } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useState, useEffect } from 'react';

export function Experience() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [animatedItems, setAnimatedItems] = useState<boolean[]>([]);

  const educationData = [
    {
      year: "Pending",
      degree: "Bachelor of Science (Hons) in Computer Science",
      institution: "University of Bolton",
      status: "pending"
    },
    {
      year: "2023 – Present",
      degree: "Graduate Diploma in Software Engineering",
      institution: "Institute of Software Engineering (IJSE)",
      status: "pending"
    },
    {
      year: "2022 – 2023",
      degree: "G.C.E. Advanced Level (Maths Stream)",
      institution: "Janadhipathi Balika Vidyalaya",
      status: "completed"
    },
    {
      year: "2018",
      degree: "G.C.E. Ordinary Level",
      institution: "Janadhipathi Balika Vidyalaya",
      status: "completed"
    }
  ];

  useEffect(() => {
    if (isVisible) {
      const timeouts = educationData.map((_, index) => 
        setTimeout(() => {
          setAnimatedItems(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 300)
      );
      
      return () => timeouts.forEach(timeout => clearTimeout(timeout));
    }
  }, [isVisible]);

  const statusConfig = {
    completed: { color: 'from-green-500 to-emerald-500', icon: Award, label: 'Completed' },
    pending: { color: 'from-blue-500 to-cyan-500', icon: Rocket, label: 'In Progress' }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-cyan-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
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

      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>

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
              <GraduationCap className="w-4 h-4 mr-2" />
              Academic Journey
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Education & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Qualifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic path and continuous learning journey
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Main Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-cyan-600 rounded-full shadow-2xl"></div>

              {educationData.map((edu, index) => {
                const status = edu.status || 'completed';
                const { color, icon: StatusIcon, label } = statusConfig[status as keyof typeof statusConfig];
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    className={`relative mb-16 group ${
                      isEven ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:ml-auto'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-900 rounded-full border-4 border-blue-600 z-20 group-hover:scale-150 group-hover:border-purple-600 transition-all duration-300">
                      <div className={`w-full h-full bg-gradient-to-br ${color} rounded-full animate-pulse`}></div>
                    </div>

                    {/* Connecting Line */}
                    <div className={`hidden lg:block absolute top-8 ${
                      isEven ? 'left-1/2' : 'right-1/2'
                    } w-1/4 h-0.5 bg-gradient-to-r ${
                      isEven ? 'from-purple-600 to-blue-600' : 'from-blue-600 to-purple-600'
                    } opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>

                    <div
                      className={`relative transition-all duration-700 transform ${
                        animatedItems[index] 
                          ? 'opacity-100 translate-y-0 scale-100' 
                          : 'opacity-0 translate-y-10 scale-95'
                      }`}
                      style={{ transitionDelay: `${index * 300}ms` }}
                    >
                      {/* Card Glow Effect */}
                      <div className={`absolute -inset-2 bg-gradient-to-r ${color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500`}></div>

                      {/* Main Card */}
                      <div className={`relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 ${
                        isEven ? 'lg:mr-8' : 'lg:ml-8'
                      }`}>
                        
                        {/* Status Badge */}
                        <div className={`absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-r ${color} text-white rounded-full text-sm font-semibold flex items-center space-x-2 shadow-lg`}>
                          <StatusIcon className="w-4 h-4" />
                          <span>{label}</span>
                        </div>

                        {/* Header Section */}
                        <div className="flex items-start space-x-6 mb-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <GraduationCap className="w-8 h-8 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                              {edu.degree}
                            </h3>
                            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                              {edu.institution}
                            </p>
                            
                            {/* Meta Information */}
                            <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.year}</span>
                            </div>
                          </div>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-4 left-4 w-2 h-2 bg-blue-500/50 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500/50 rounded-full group-hover:scale-150 transition-transform duration-300" style={{transitionDelay: '100ms'}}></div>
                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-500/50 rounded-full group-hover:scale-150 transition-transform duration-300" style={{transitionDelay: '200ms'}}></div>
                        <div className="absolute bottom-4 right-4 w-2 h-2 bg-pink-500/50 rounded-full group-hover:scale-150 transition-transform duration-300" style={{transitionDelay: '300ms'}}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress Summary */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center px-6 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                    Continuously learning and growing in the field of Computer Science
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
