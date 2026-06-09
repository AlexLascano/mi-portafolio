import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    tag: 'Web',
    name: 'Poligamer',
    desc: 'Plataforma web para gamers desarrollada con tecnologías modernas. Explora contenido, comunidad y más.',
    link: 'https://poligamer2.netlify.app/',
  }
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="proyectos" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <h2 className="section-title">Mis <span>proyectos</span></h2>
        <div className="section-line" />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div className="project-card-new" key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-img-link">
                <div className="project-img-wrapper">
                  <img
                    src="/poligamer.png"
                    alt={p.name}
                    className="project-img"
                    onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
                  />
                  <div className="project-img-fallback">🎮</div>
                  <div className="project-overlay">
                    <span>Ver proyecto ↗</span>
                  </div>
                </div>
              </a>
              <div className="project-card-body">
                <div className="project-tag">{p.tag}</div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  Abrir proyecto →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}