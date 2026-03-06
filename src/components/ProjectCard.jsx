import { useState } from 'react'

const fallbackImage =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="%230c1628"/><stop offset="1" stop-color="%231a2f4d"/></linearGradient></defs><rect width="1200" height="675" fill="url(%23g)"/><g fill="none" stroke="%233f5f87" opacity="0.6"><path d="M0 80h1200"/><path d="M0 180h1200"/><path d="M0 280h1200"/><path d="M0 380h1200"/><path d="M0 480h1200"/><path d="M120 0v675"/><path d="M300 0v675"/><path d="M480 0v675"/><path d="M660 0v675"/><path d="M840 0v675"/><path d="M1020 0v675"/></g></svg>'

export default function ProjectCard({ project }) {
  const [imageSrc, setImageSrc] = useState(project.image)

  const handleCardMove = (event) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    const ry = (x - 0.5) * 5.2
    const rx = (0.5 - y) * 4.6

    card.style.setProperty('--rx', `${rx.toFixed(2)}deg`)
    card.style.setProperty('--ry', `${ry.toFixed(2)}deg`)
    card.style.setProperty('--glx', `${(x * 100).toFixed(2)}%`)
    card.style.setProperty('--gly', `${(y * 100).toFixed(2)}%`)
  }

  const handleCardLeave = (event) => {
    const card = event.currentTarget
    card.style.setProperty('--rx', '0deg')
    card.style.setProperty('--ry', '0deg')
    card.style.setProperty('--glx', '50%')
    card.style.setProperty('--gly', '50%')
  }

  return (
    <article className="project-card" onMouseMove={handleCardMove} onMouseLeave={handleCardLeave}>
      <span className="project-beam" aria-hidden="true" />
      <div className="project-image-wrap">
        <img
          className="project-image"
          src={imageSrc}
          alt={`${project.title} preview`}
          loading="lazy"
          onError={() => setImageSrc(fallbackImage)}
        />
        <p className="project-category">{project.category}</p>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>

        <div className="project-stack">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-card-footer">
          <a className="project-link" href={project.githubUrl} target="_blank" rel="noreferrer">
            View GitHub Project
          </a>
        </div>
      </div>
    </article>
  )
}
