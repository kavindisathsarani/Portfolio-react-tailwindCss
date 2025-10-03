import { lazy, Suspense } from 'react';
import { useTheme } from './hooks/useTheme';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <About />
          <Services />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default App;
