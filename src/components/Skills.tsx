import { portfolioData } from '../data/portfolio';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Skills() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

          <div className="max-w-5xl mx-auto space-y-12">
            {Object.entries(portfolioData.skills).map(([category, skills], index) => (
              <div
                key={category}
                className="transition-all duration-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-5 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-gray-900 dark:text-white rounded-lg font-medium hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/40 dark:hover:to-purple-900/40 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
