import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="sobre-mi" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <h2 className="section-title">Sobre <span>mí</span></h2>
        <div className="section-line" />
        <div className="about-grid">
          <div className="about-text">
            <p>Soy Alex Lascano, tengo 21 años y soy estudiante de la <strong>Escuela Politécnica Nacional</strong>.</p>
            <p>Me apasiona el desarrollo de software y construir soluciones que combinen funcionalidad con buen diseño. Siempre estoy aprendiendo nuevas tecnologías y buscando nuevos retos.</p>
            <p>Cuando no estoy programando, me gusta explorar proyectos creativos y seguir creciendo como desarrollador.</p>
          </div>
          <div className="about-stats">
            {[
              { num: '21', label: 'Años' },
              { num: '3+', label: 'Años estudiando' },
              { num: '5+', label: 'Tecnologías' },
              { num: '1+', label: 'Proyectos' },
            ].map((s, i) => (
              <motion.div className="stat-card" key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.3 }}>
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}