import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-accent font-mono text-sm tracking-wider uppercase mb-2 block">01. Inside My Mind</span>
        <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-8 flex items-center gap-4">
          About Me
          <span className="h-[1px] bg-[var(--border-color)] flex-grow max-w-[300px]"></span>
        </h2>
        
        <div className="grid md:grid-cols-5 md:gap-12 gap-8 items-start">
          <div className="md:col-span-3 text-[var(--text-secondary)] space-y-4 text-lg leading-relaxed">
            <p>
              Hello! My name is <strong className="text-accent font-semibold">Piyush Aryan</strong> and I enjoy creating things that live on the internet. My interest in web development started back in high school when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about architecture & styling!
            </p>
            <p>
              Fast-forward to today, and I've built multiple personal projects, experimenting with different tech stacks, from vanilla JavaScript to robust React and Node.js applications. My main focus these days is building accessible, inclusive products and digital experiences.
            </p>
            <p>
              When I'm not at the computer, I'm usually hanging out with friends, reading a good book, or exploring new coffee shops around town.
            </p>
          </div>
          
          <div className="md:col-span-2 relative group w-64 mx-auto md:w-full">
            {/* Attractive Avatar Border */}
            <div className="absolute inset-0 border-2 border-accent rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 z-0"></div>
            
            <div className="relative z-10 bg-[var(--bg-secondary)] aspect-square rounded-lg flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 border border-[var(--border-color)]">
              <div className="text-6xl font-black text-[var(--border-color)] opacity-40 font-mono tracking-tighter">
                &lt;PA /&gt;
              </div>
              <div className="absolute inset-0 bg-accent/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
