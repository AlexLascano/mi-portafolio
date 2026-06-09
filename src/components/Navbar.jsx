import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}>
      <div className="nav-logo">
        <span style={{ color: '#a855f7' }}>&lt;</span>
        AL
        <span style={{ color: '#a855f7' }}>/&gt;</span>
      </div>
      <ul className="nav-links">
        {['sobre-mi','habilidades','proyectos','educacion','contacto'].map(s => {
          const label = s.replace('-', ' ')
          const capitalized = label.charAt(0).toUpperCase() + label.slice(1)
          return <li key={s}><a href={`#${s}`}>{capitalized}</a></li>
        })}
      </ul>
    </motion.nav>
  )
}