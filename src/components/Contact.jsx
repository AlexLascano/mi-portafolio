import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="contacto" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <h2 className="section-title">Contac<span>tame</span></h2>
        <div className="section-line" />
        <div className="contact-wrapper">
          <p>¿Tienes un proyecto en mente o quieres colaborar? No dudes en escribirme, estaré feliz de conversar.</p>
          <div className="contact-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="contact-btn">
              🐙 GitHub
            </a>
            <a href="mailto:alexlascano151@gmail.com" className="contact-btn">
              ✉️ alexlascano151@gmail.com
            </a>
            <a href="tel:+593999826289" className="contact-btn">
              📱 0999826289
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}