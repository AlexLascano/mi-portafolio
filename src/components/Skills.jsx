import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'Python', icon: '🐍' },
  { name: 'C++', icon: '⚙️' },
  { name: 'Java', icon: '☕' },
  { name: 'Git', icon: '🔧' },
  { name: 'GitHub', icon: '🐙' },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="habilidades" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <h2 className="section-title">Mis <span>habilidades</span></h2>
        <div className="section-line" />
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div className="skill-card" key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}