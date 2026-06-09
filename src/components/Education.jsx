import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const edu = [
  { type: 'Universidad', name: 'Escuela Politécnica Nacional', desc: 'Desarrollo de Software' },
  { type: 'Colegio', name: 'Colegio Juan Pío Montúfar', desc: 'Bachillerato en Ciencias' },
  { type: 'Escuela', name: 'Escuela República Argentina', desc: 'Educación Primaria' },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="educacion" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <h2 className="section-title">Mi <span>educación</span></h2>
        <div className="section-line" />
        <div className="edu-list">
          {edu.map((e, i) => (
            <motion.div className="edu-card" key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 }}>
              <div className="edu-type">{e.type}</div>
              <h3>{e.name}</h3>
              <p>{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}