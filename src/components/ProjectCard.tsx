// import { ExternalLink, Github } from 'lucide-react';
// import type { ProjectCardProps } from './Projects';

// export default function ProjectCard({ project, index, isVisible }: ProjectCardProps) {
//   return (
//     <div
//       className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'all 0.7s ease-out',
//         transitionDelay: `${index * 100}ms`,
//       }}
//     >
//       <div className="relative overflow-hidden aspect-video">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//       </div>
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
//           {project.title}
//         </h3>
//         <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
//           {project.description}
//         </p>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.tags.map((tag, tagIndex) => (
//             <span
//               key={tagIndex}
//               className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-full"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//         <div className="flex items-center space-x-4">
//           <a
//             href={project.liveUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
//             aria-label={`View ${project.title} live demo`}
//           >
//             <ExternalLink className="w-5 h-5" />
//             <span className="font-medium">Live Demo</span>
//           </a>
//           <a
//             href={project.githubUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
//             aria-label={`View ${project.title} on GitHub`}
//           >
//             <Github className="w-5 h-5" />
//             <span className="font-medium">Code</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

import { ExternalLink, Github, Eye, ArrowUpRight } from 'lucide-react';
import type { ProjectCardProps } from './Projects';

export default function ProjectCard({ project, index, isVisible }: ProjectCardProps) {
  const tagColors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-purple-500',
    'from-teal-500 to-blue-500',
  ];

  return (
    <div
      className="group relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Background Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
      
      {/* Main Card */}
      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 border border-gray-200/50 dark:border-gray-700/50">
        
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Hover Actions */}
          <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-700 transform hover:scale-110 transition-all duration-300 shadow-2xl"
              aria-label={`View ${project.title} live demo`}
            >
              <Eye className="w-6 h-6" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-700 transform hover:scale-110 transition-all duration-300 shadow-2xl"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          {/* Corner Accent */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300 flex-1 pr-4">
              {project.title}
            </h3>
            <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transform group-hover:scale-110 transition-all duration-300 flex-shrink-0" />
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg line-clamp-2 group-hover:line-clamp-3 transition-all duration-300">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className={`px-4 py-2 bg-gradient-to-r ${tagColors[tagIndex % tagColors.length]} text-white text-sm font-medium rounded-full shadow-lg transform group-hover:scale-105 transition-transform duration-300`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex-1 justify-center group/btn"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-5 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex-1 justify-center group/btn"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-5 h-5" />
              <span>Code</span>
            </a>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-700"></div>
      </div>
    </div>
  );
}
