import { useEffect, useRef, useState } from 'react'

const roles = ['Data Analyst', 'Data Scientist', 'AI/ML Engineer', 'Data Engineer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedRole, setTypedRole] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const heroRef = useRef(null)
  const magneticButtonsRef = useRef([])

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const isRoleComplete = typedRole === currentRole
    const isRoleCleared = typedRole.length === 0

    let delay = isDeleting ? 42 : 72

    if (!isDeleting && isRoleComplete) {
      delay = 1200
    }

    const timer = setTimeout(() => {
      if (!isDeleting && isRoleComplete) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && isRoleCleared) {
        setIsDeleting(false)
        setRoleIndex((current) => (current + 1) % roles.length)
        return
      }

      if (isDeleting) {
        setTypedRole(currentRole.slice(0, typedRole.length - 1))
      } else {
        setTypedRole(currentRole.slice(0, typedRole.length + 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [isDeleting, roleIndex, typedRole])

  const handlePointerMove = (event) => {
    if (!heroRef.current) return

    const rect = heroRef.current.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    const px = (x - 0.5) * 2
    const py = (y - 0.5) * 2

    heroRef.current.style.setProperty('--px', px.toFixed(3))
    heroRef.current.style.setProperty('--py', py.toFixed(3))

    magneticButtonsRef.current.forEach((button) => {
      if (!button) return
      const bRect = button.getBoundingClientRect()
      const bx = (event.clientX - (bRect.left + bRect.width / 2)) / bRect.width
      const by = (event.clientY - (bRect.top + bRect.height / 2)) / bRect.height
      const dx = Math.max(-1, Math.min(1, bx)) * 10
      const dy = Math.max(-1, Math.min(1, by)) * 8
      button.style.setProperty('--mx', `${dx.toFixed(2)}px`)
      button.style.setProperty('--my', `${dy.toFixed(2)}px`)
    })
  }

  const handlePointerLeave = () => {
    if (!heroRef.current) return
    heroRef.current.style.setProperty('--px', '0')
    heroRef.current.style.setProperty('--py', '0')
    magneticButtonsRef.current.forEach((button) => {
      if (!button) return
      button.style.setProperty('--mx', '0px')
      button.style.setProperty('--my', '0px')
    })
  }

  return (
    <section
      ref={heroRef}
      className="hero"
      id="hero"
      aria-label="Introduction"
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
    >
      <div className="hero-parallax" aria-hidden="true">
        <div className="hero-geo hero-geo-a" />
        <div className="hero-geo hero-geo-b" />
        <div className="hero-geo hero-geo-c" />
        <div className="hero-geo hero-geo-d" />
        <div className="hero-geo hero-geo-e" />
        <div className="hero-wireframe" />
        <div className="hero-glow" />
      </div>

      <div className="container hero-content">
        <img
          className="hero-avatar"
          src="/profile-photo.jpg"
          alt="Saathvik Krishnan"
          loading="eager"
        />

        <p className="hero-kicker">Saathvik Krishnan</p>
        <h1>Designing production-ready AI and Data systems that turn complex problems into measurable business impact.</h1>
        <p className="hero-role" aria-live="polite">
          {typedRole}
          <span className="type-caret" aria-hidden="true">|</span>
        </p>

        <p className="hero-text">
          I build data-driven and intelligent systems with strong focus on analytics, machine
          learning, and production-ready engineering workflows.
        </p>

        <div className="hero-actions">
          <a
            className="btn btn-primary magnetic-btn"
            href="#projects"
            ref={(el) => {
              magneticButtonsRef.current[0] = el
            }}
          >
            Explore Projects
          </a>
          <a
            className="btn btn-secondary magnetic-btn"
            href="#contact"
            ref={(el) => {
              magneticButtonsRef.current[1] = el
            }}
          >
            Collaborate
          </a>
        </div>

        <div className="hero-tags" aria-label="Core focus areas">
          <span>RAG Systems</span>
          <span>Multi-Agent AI</span>
          <span>NLP</span>
          <span>Data Science</span>
          <span>Deep Learning</span>
        </div>
      </div>
    </section>
  )
}
