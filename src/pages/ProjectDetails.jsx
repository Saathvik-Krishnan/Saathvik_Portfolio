import { Link, useParams } from 'react-router-dom'
import RevealOnScroll from '../components/RevealOnScroll'
import { projects } from '../data/projects'
import '../styles/project-details.css'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <RevealOnScroll as="main" className="project-page">
        <div className="container">
          <article className="not-found-card" data-reveal="up">
            <h1>Project not found</h1>
            <p>The project you are looking for does not exist.</p>
            <Link className="btn btn-primary" to="/">
              Back to Portfolio
            </Link>
          </article>
        </div>
      </RevealOnScroll>
    )
  }

  return (
    <RevealOnScroll as="main" className="project-page">
      <div className="container">
        <Link className="back-link" to="/#projects" data-reveal="left">
          Back to Projects
        </Link>

        <article className="project-detail-card" data-reveal="up">
          <img src={project.image} alt={`${project.title} screenshot`} />

          <div className="detail-body">
            <p className="project-category">{project.category}</p>
            <h1>{project.title}</h1>
            <p className="lead">{project.fullDescription}</p>

            <section className="detail-block">
              <h2>Problem</h2>
              <p>{project.problem}</p>
            </section>

            <section className="detail-block">
              <h2>Solution</h2>
              <p>{project.solution}</p>
            </section>

            <section className="detail-block">
              <h2>Tech Stack</h2>
              <ul className="bullet-list">
                {project.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </section>

            <section className="detail-block">
              <h2>Key Features</h2>
              <ul className="bullet-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className="detail-block">
              <h2>Challenges and Learnings</h2>
              <ul className="bullet-list">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </section>

            <div className="detail-actions">
              {project.liveUrl && (
                <a className="btn btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a className="btn btn-secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub Repo
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
    </RevealOnScroll>
  )
}
