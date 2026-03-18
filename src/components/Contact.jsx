import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaRegPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully!');
      e.target.reset();
      setTimeout(() => setStatus(''), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-accent font-mono text-sm tracking-wider uppercase mb-2 block">04. What's Next?</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">Get In Touch</h2>
        <p className="text-[var(--text-secondary)] text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-16 space-y-4 text-left">
          <div>
            <input type="text" placeholder="Name" required className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] px-4 py-3 rounded outline-none focus:border-accent transition-colors" />
          </div>
          <div>
            <input type="email" placeholder="Email Address" required className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] px-4 py-3 rounded outline-none focus:border-accent transition-colors" />
          </div>
          <div>
            <textarea rows="4" placeholder="Message" required className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] px-4 py-3 rounded outline-none focus:border-accent transition-colors resize-y"></textarea>
          </div>
          <button type="submit" className="w-full bg-accent text-white font-medium py-3 rounded flex justify-center items-center gap-2 hover:bg-accent/90 transition-colors">
            <FaRegPaperPlane /> Send Message
          </button>
          {status && <p className="text-accent text-center text-sm font-medium mt-2">{status}</p>}
        </form>
        
        <div className="flex justify-center gap-8 mb-16">
          <a href="https://github.com/piyusharyan27" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-accent transition-colors text-2xl" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/piyush-aryan-1524b9299/" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-accent transition-colors text-2xl" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="mailto:piyusharyan27@gmail.com" className="text-[var(--text-secondary)] hover:text-accent transition-colors text-2xl" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <div className="mt-20 text-[var(--text-secondary)] font-mono text-xs">
          <p>Designed & Built by Piyush Aryan</p>
          <p className="mt-2">© {new Date().getFullYear()} – React, Tailwind, Framer Motion</p>
        </div>
      </motion.div>
    </section>
  );
}
