import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {portfolioData.name}
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-4 font-semibold">
              {portfolioData.title}
            </p>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              {portfolioData.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Get in touch"
            >
              Get In Touch
            </button>
            <a
              href="#projects"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              aria-label="View my work"
            >
              View My Work
            </a>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-16 animate-slide-up">
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub profile"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href={portfolioData.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-110"
              aria-label="Twitter profile"
            >
              <Twitter className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-110"
              aria-label="Send email"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto text-gray-400 dark:text-gray-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
