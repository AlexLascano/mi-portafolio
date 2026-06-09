import { motion } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { Player } from '@lottiefiles/react-lottie-player'

const fullText = 'Desarrollador de Software apasionado por crear experiencias digitales modernas y funcionales.'

function Typewriter() {
  const [text, setText] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (text.length === fullText.length) { setDone(true); return }
    const timeout = setTimeout(() => {
      setText(fullText.slice(0, text.length + 1))
    }, 35)
    return () => clearTimeout(timeout)
  }, [text])

  return (
    <span>
      {text}
      {!done && <span style={{ borderRight: '2px solid var(--purple-light)', marginLeft: '2px', animation: 'blink 1s infinite' }} />}
    </span>
  )
}

export default function Hero() {
  const [init, setInit] = useState(false)

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine)
    setInit(true)
  }, [])

  return (
    <section className="hero" id="inicio">
      {init !== null && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            particles: {
              number: { value: 60, density: { enable: true, area: 800 } },
              color: { value: '#2dd4bf' },
              links: { enable: true, color: '#2dd4bf', opacity: 0.15, distance: 130 },
              move: { enable: true, speed: 0.8 },
              opacity: { value: 0.25 },
              size: { value: { min: 1, max: 2.5 } },
            },
            detectRetina: true,
          }}
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        />
      )}

      <div className="hero-inner">
        <div className="hero-content">
          <motion.div className="hero-tag"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            👋 Bienvenido a mi portafolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            Hola, soy <span>Alex Lascano</span>
          </motion.h1>
          <motion.p className="hero-desc"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <Typewriter />
          </motion.p>
          <motion.div className="hero-btns"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <a href="#proyectos" className="btn-primary">Ver proyectos</a>
            <a href="#contacto" className="btn-outline">Contáctame</a>
          </motion.div>
        </div>

        <motion.div className="hero-lottie"
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json"
            style={{ width: '340px', height: '340px' }}
          />
        </motion.div>
      </div>
    </section>
  )
}