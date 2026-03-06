import { Link } from 'react-router-dom'
import RevealOnScroll from '../components/RevealOnScroll'

export default function NotFound() {
  return (
    <RevealOnScroll as="main" className="project-page">
      <div className="container">
        <article className="not-found-card" data-reveal="up">
          <h1>404 - Page Not Found</h1>
          <p>The page you requested does not exist.</p>
          <Link className="btn btn-primary" to="/">
            Go to Home
          </Link>
        </article>
      </div>
    </RevealOnScroll>
  )
}
