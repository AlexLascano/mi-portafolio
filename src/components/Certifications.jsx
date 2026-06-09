import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const certs = [
  {
    title: 'Desarrollo Web',
    org: 'SoloLearn',
    icon: '🌐',
    img: '/web.jpg',
    link: 'https://www.sololearn.com/certificates/CC-CRHUZXVJ',
    external: true,
  },
  {
    title: 'Desarrollador Front-End',
    org: 'Capacítate para el Empleo',
    icon: '💻',
    img: '/frontend.png',
    link: '/certfront.pdf',
    external: false,
  },
  {
    title: 'Lógica de Programación',
    org: 'Capacítate para el Empleo',
    icon: '🧠',
    img: '/logica.png',
    link: '/certlog.pdf',
    external: false,
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="certificaciones" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          <span style={{ color: 'var(--purple-light)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Certificaciones</span>
        </div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Cursos y <span>Diplomas</span></h2>
        <div className="section-line" style={{ margin: '0.5rem auto 3rem' }} />
        <div className="certs-grid">
          {certs.map((c, i) => (
            <motion.a
              key={i}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}>
              <div className="cert-img-wrapper">
                <img src={c.img} alt={c.title} className="cert-img" />
                <div className="cert-icon-badge">{c.icon}</div>
                <div className="cert-overlay">
                  <span>Ver certificado ↗</span>
                </div>
              </div>
              <div className="cert-body">
                <h3>{c.title}</h3>
                <p>{c.org}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}