import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" } })
  };

  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center relative pt-10">
      <motion.div initial="hidden" animate="visible" className="max-w-3xl">
        <motion.p custom={1} variants={textVariants} className="text-accent font-mono font-medium mb-4 text-base md:text-lg">
          Hi, my name is
        </motion.p>
        
        <motion.h1 custom={2} variants={textVariants} className="text-5xl md:text-7xl font-bold text-[var(--text-primary)] mb-6 tracking-tight">
          Piyush Aryan.
        </motion.h1>
        
        <motion.h2 custom={3} variants={textVariants} className="text-4xl md:text-6xl font-bold text-[var(--text-secondary)] mb-8 tracking-tight">
          I build things for the web.
        </motion.h2>
        
        <motion.p custom={4} variants={textVariants} className="text-lg text-[var(--text-secondary)] mb-12 max-w-xl leading-relaxed">
          I'm an aspiring Full Stack Developer specializing in building exceptional digital experiences. I am passionate about creating clean, scalable applications with intuitive user interfaces.
        </motion.p>
        
        <motion.div custom={5} variants={textVariants} className="flex flex-wrap gap-6 items-center">
          <a href="#projects" className="px-8 py-4 bg-accent text-white font-medium rounded-[4px] shadow-[4px_4px_0px_0px_var(--text-primary)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_var(--text-primary)] transition-all">
            Check out my work!
          </a>
          
          <div className="flex gap-4 items-center pl-4">
            <a href="https://github.com/piyusharyan27" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-accent hover:-translate-y-1 transition-all text-2xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/piyush-aryan-1524b9299/" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-accent hover:-translate-y-1 transition-all text-2xl">
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
