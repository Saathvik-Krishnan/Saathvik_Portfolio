export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <p>© {new Date().getFullYear()} Saathvik. Built with React, HTML, and CSS.</p>
        <a href="#hero">Back to Top</a>
      </div>
    </footer>
  )
}
