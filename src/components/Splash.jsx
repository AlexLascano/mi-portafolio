import { useEffect, useState } from 'react'

export default function Splash({ onDone }) {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true)
      setTimeout(onDone, 600)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`splash ${hide ? 'hide' : ''}`}>
      <img src="/logo2.png" alt="AL" className="splash-logo" />
    </div>
  )
}