import { NavLink } from 'react-router-dom'

export default function Navbar({ activeSection }) {
  const sectionLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="site-header">
      <div className="container nav-container">
        <NavLink className="brand" to="/" aria-label="Go to homepage">
          Saathvik Krishnan
        </NavLink>

        <nav aria-label="Section navigation">
          <ul className="nav-list">
            {sectionLinks.map((link) => (
              <li key={link.id}>
                <a
                  className={activeSection === link.id ? 'nav-link active' : 'nav-link'}
                  href={`#${link.id}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
