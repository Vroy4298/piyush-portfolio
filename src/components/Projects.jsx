import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const PROJECTS = [
  {
    title: 'TaskFlow Projects',
    description: 'A robust project management tool built with React and Node.js. Features real-time updates via Socket.io, drag-and-drop kanban boards, and team collaboration tools.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/piyusharyan27',
    external: '#',
  },
  {
    title: 'ShopNest E-Commerce',
    description: 'A full-featured e-commerce platform with a custom CMS, Stripe payment integration, cart management, and user authentication.',
    tech: ['Next.js', 'Tailwind', 'Stripe', 'Prisma'],
    github: 'https://github.com/piyusharyan27',
    external: '#',
  },
  {
    title: 'WeatherLens App',
    description: 'A sleek weather application consuming the OpenWeatherMap API, featuring a 5-day forecast, interactive maps, and location caching.',
    tech: ['React', 'OpenWeatherMap', 'Framer Motion'],
    github: 'https://github.com/piyusharyan27',
    external: '#',
  },
  {
    title: 'ChatSphere Real-Time',
    description: 'A modern chat application supporting multiple rooms, direct messaging, rich text formatting, and image sharing.',
    tech: ['Express', 'React', 'Firebase', 'Tailwind'],
    github: 'https://github.com/piyusharyan27',
    external: '#',
  },
  {
    title: 'FitTrack Workout Logger',
    description: 'A fitness tracker app with custom workout plans, progression charts, calorie counting, and goal setting mechanisms.',
    tech: ['React Native', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/piyusharyan27',
    external: '#',
  },
  {
    title: 'SpendWise Finance',
    description: 'A personal finance dashboard for expense tracking, receipt scanning via OCR, and visual breakdown of monthly spending.',
    tech: ['Vue.js', 'Chart.js', 'Express', 'Tesseract'],
    github: 'https://github.com/piyusharyan27',
    external: '#',
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <span className="text-accent font-mono text-sm tracking-wider uppercase mb-2 block">03. Some Things I've Built</span>
        <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-12 flex items-center gap-4">
          Featured Projects
          <span className="h-[1px] bg-[var(--border-color)] flex-grow max-w-[200px]"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 md:p-8 flex flex-col h-full hover:border-accent group transition-colors duration-300 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
              
              <div className="flex justify-between items-center mb-6">
                <FaFolder className="text-4xl text-accent" />
                <div className="flex gap-4 items-center">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-accent transition-colors text-xl">
                    <FaGithub />
                  </a>
                  <a href={project.external} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-accent transition-colors text-xl">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-accent transition-colors">
                <a href={project.external} target="_blank" rel="noreferrer" className="before:absolute before:inset-0">
                  {project.title}
                </a>
              </h3>
              
              <p className="text-[var(--text-secondary)] mb-6 flex-grow text-[15px] leading-relaxed">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-3 mt-auto text-xs font-mono text-accent/80">
                {project.tech.map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="https://github.com/piyusharyan27" target="_blank" rel="noreferrer" className="inline-block border border-accent text-accent px-8 py-4 rounded hover:bg-accent/10 transition-colors font-mono text-sm">
            View Full Archive
          </a>
        </div>
      </motion.div>
    </section>
  );
}
