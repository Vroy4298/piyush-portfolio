import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase,
  SiGit, SiGithub, SiFigma, SiDocker
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const SKILLS = [
  { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#f7df1e' },
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#ffffff' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Firebase', icon: SiFirebase, color: '#ffca28' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'Git', icon: SiGit, color: '#f05032' },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-4xl"
      >
        <span className="text-accent font-mono text-sm tracking-wider uppercase mb-2 block">02. My Arsenal</span>
        <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-12 flex items-center gap-4">
          Technologies
          <span className="h-[1px] bg-[var(--border-color)] flex-grow max-w-[200px]"></span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group flex flex-col items-center justify-center p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl cursor-crosshair transition-all duration-300 hover:border-accent hover:shadow-[0_0_15px_rgba(108,99,255,0.2)]"
            >
              <skill.icon size={40} className="mb-4 text-[var(--text-secondary)] group-hover:text-[--hover-color] transition-colors" style={{ '--hover-color': skill.color }} />
              <span className="text-sm font-medium text-[var(--text-primary)] text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
