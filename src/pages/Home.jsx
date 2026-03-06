import { useEffect, useMemo, useState } from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import RevealOnScroll from '../components/RevealOnScroll'
import SectionIcon from '../components/SectionIcon'
import Skills from '../components/Skills'
import { categories, projects } from '../data/projects'
import '../styles/home.css'

const timelineItems = [
  {
    year: '2021',
    title: 'First Step Into Data Science',
    text: 'Started with core data-science projects during internship work, building regression, clustering, and classification models while learning how to convert raw data into practical insights.',
  },
  {
    year: '2022',
    title: 'From Analysis to Real Systems',
    text: 'Moved beyond notebooks by building React-based monitoring dashboards and dynamic forms at IIT Madras, where analytics became a real-time decision support tool for machine performance.',
  },
  {
    year: '2025',
    title: 'Deepening AI/ML and Domain Application',
    text: 'Expanded into applied ML use-cases such as EEG-based diagnosis support, customer segmentation using RFM, and NLP-driven classification projects with stronger experimentation discipline.',
  },
  {
    year: '2025-2026',
    title: 'Agentic AI and Production Thinking',
    text: 'Built multi-agent research pipelines and RAG systems (including hybrid BM25 + vector retrieval), while focusing on deployment, security, and reliability to bridge research-grade ideas with production-ready execution.',
  },
]

const faqs = [
  {
    q: 'What roles am I targeting?',
    a: 'Data Analyst, Data Scientist, AI/ML Engineer, and Data Engineer roles.',
  },
  {
    q: 'What is my work authorization and location preference?',
    a: 'F-1 OPT (using EAD). Currently targeting opportunities in the USA only.',
  },
  {
    q: 'What is my current notice period?',
    a: 'I am currently working at an NGO and my notice period is 1 week.',
  },
]

const impactHighlights = [
  {
    title: '25% Error Reduction',
    text: 'Reduced kinematic and dimensional error in machine monitoring workflows through dashboard-driven tracking.',
  },
  {
    title: '15% Wastage Reduction',
    text: 'Improved production monitoring and module-level visibility, helping reduce process wastage.',
  },
  {
    title: '20% Cost Reduction',
    text: 'Contributed to lower production costs by implementing efficient analytics-led monitoring systems.',
  },
  {
    title: 'Production AI Deployment',
    text: 'Deployed Phi-3 Mini on secured GCP VM with Supabase integration for low-latency AI inference.',
  },
  {
    title: 'Hybrid Retrieval Pipeline',
    text: 'Built a multi-paper RAG system combining BM25 and vector search for stronger evidence-grounded responses.',
  },
  {
    title: 'Agentic Research Automation',
    text: 'Implemented a CrewAI multi-agent workflow to automate retrieval, validation, and executive summarization.',
  },
  {
    title: 'Actionable Business Reporting',
    text: 'Designed an AdventureWorks dashboard that converts raw business data into decision-ready KPI views.',
  },
  {
    title: '26-Class NLP Evaluation',
    text: 'Systematically evaluated multi-class news classification across traditional ML and deep learning NLP models.',
  },
  {
    title: 'EEG Deep Learning Workflow',
    text: 'Developed a CNN-LSTM based pipeline for EEG pattern analysis in epilepsy detection use-cases.',
  },
  {
    title: 'Customer Value Segmentation',
    text: 'Applied RFM analysis to identify high-value cohorts and improve targeting strategy for e-commerce users.',
  },
  {
    title: 'Launch Outcome Modeling',
    text: 'Built classification workflows to predict Falcon 9 first-stage landing success from mission-level features.',
  },
]

const experiences = [
  {
    role: 'AI/ML Engineer',
    org: 'Community Dreams Foundation Corp',
    location: 'Remote, USA',
    duration: 'Aug 2025 - Present',
    points: [
      'Deployed and configured the Phi-3 Mini LLM on a secured GCP VM and integrated it with Supabase Edge Functions to enable low-latency, production-ready AI inference.',
      'Built the AI Hub front-end module using React/Lovable.dev, providing real-time AI responses for project insights, task suggestions, and research support.',
      'Engineered a robust API gateway with error-handling, CORS rules, and logging, ensuring reliable communication between frontend, Supabase, and the LLM backend.',
      'Implemented Stage and Task Dependencies (manual + AI-assisted via Gemini), improving workflow accuracy and preventing invalid task execution.',
      'Designed RBAC and backend security controls, securing sensitive project data while ensuring scalable, future-ready infrastructure.',
    ],
  },
  {
    role: 'Data Analyst - Research Intern',
    org: 'Advanced Manufacturing Technology Development Centre, IIT Madras',
    location: 'Chennai, India',
    duration: 'Dec 2021 - Feb 2022',
    points: [
      'Designed and developed dynamic forms using React.js, HTML, and CSS, enabling the seamless addition of modules to monitor an unlimited number of machine tools.',
      'Created an interactive dashboard leveraging React.js and Python to monitor machine tool performance and analyze kinematic and dimensional errors in real-time.',
      'Streamlined error tracking and visualization, which reduced kinematic and dimensional errors by 25%, enhancing production accuracy.',
      'Deployed the interactive production error dashboard, enabling users to effortlessly switch between modules and track the performance of individual machine tools.',
      'Achieved a 15% reduction in production wastage by implementing an efficient monitoring system, ultimately lowering overall production costs by 20%.',
    ],
  },
  {
    role: 'Data Science Intern',
    org: 'The Sparks Foundation',
    location: 'Chennai, India',
    duration: 'Aug 2021 - Sept 2021',
    points: [
      'Developed a linear regression model to predict scores based on study hours and performed K-means clustering on the Iris dataset, visualizing the results with a scatter plot.',
      'Conducted exploratory data analysis on the retail dataset, cleaning data, calculating metrics like profit percentage, and analyzing profitability trends by various factors.',
      'Built and visualized a decision tree classifier for the Iris dataset, training the model, making predictions, and evaluating performance.',
    ],
  },
]

const publications = [
  {
    title: 'Human Identifier with Mannerism using Deep Learning',
    url: 'https://www.irjet.net/archives/V9/i8/IRJET-V9I8333.pdf',
  },
  {
    title: 'Reservoir Water Level Checker',
    url: 'https://www.researchgate.net/publication/373918074_Reservoir_Water_Level_Checker',
  },
  {
    title: 'Survey on Autonomous Medical Diagnosis Tools',
    url: 'https://ieeexplore.ieee.org/document/10099905',
  },
]

function LoadingScreen() {
  return (
    <div className="loader-overlay" role="status" aria-live="polite" aria-label="Loading portfolio">
      <div className="loader-core">
        <div className="loader-ring" />
        <p>Loading Experience...</p>
      </div>
    </div>
  )
}

function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const observers = sectionIds
      .map((id) => {
        const element = document.getElementById(id)
        if (!element) return null

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          },
          { threshold: 0.35 },
        )

        observer.observe(element)
        return observer
      })
      .filter(Boolean)

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [sectionIds])

  return activeSection
}

function StatCard({ label, target, shouldAnimate }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!shouldAnimate) return

    const easeOutBack = (t) => {
      const c1 = 1.70158
      const c3 = c1 + 1
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)
    }

    let frame
    const durationMs = 1080
    const startTime = performance.now()

    const animate = (time) => {
      const progress = Math.min((time - startTime) / durationMs, 1)
      const eased = easeOutBack(progress)
      const nextValue = Math.max(0, Math.round(target * eased))
      setValue(progress < 1 ? nextValue : target)
      if (progress < 1) {
        frame = requestAnimationFrame(animate)
      }
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [target, shouldAnimate])

  return (
    <article className="metric-card">
      <h3>{value}+</h3>
      <p>{label}</p>
    </article>
  )
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')
  const [aiOnly, setAiOnly] = useState(false)
  const [statsInView, setStatsInView] = useState(false)
  const [copied, setCopied] = useState(false)
  const [openFaqs, setOpenFaqs] = useState([0])
  const [scrollProgress, setScrollProgress] = useState(0)
  const [progressPulse, setProgressPulse] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const activeSection = useActiveSection([
    'about',
    'skills',
    'experience',
    'publications',
    'projects',
    'contact',
  ])

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    const aiCategories = new Set(['AI', 'NLP', 'Healthcare AI', 'Data Science', 'Data Analytics'])

    const visible = projects.filter((project) => {
      const categoryMatch = activeCategory === 'All' || project.category === activeCategory
      const titleMatch = project.title.toLowerCase().includes(normalizedQuery)
      const techMatch = project.techStack.some((tech) => tech.toLowerCase().includes(normalizedQuery))
      const textMatch = !normalizedQuery || titleMatch || techMatch
      const aiMatch = !aiOnly || aiCategories.has(project.category)

      return categoryMatch && textMatch && aiMatch
    })

    if (sortBy === 'alphabetical') {
      return [...visible].sort((a, b) => a.title.localeCompare(b.title))
    }

    if (sortBy === 'category') {
      return [...visible].sort((a, b) => a.category.localeCompare(b.category))
    }

    return visible
  }, [activeCategory, aiOnly, query, sortBy])

  useEffect(() => {
    const section = document.getElementById('metrics')
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
      setScrollProgress(progress)
      setShowTop(scrollTop > 500)
      document.documentElement.style.setProperty('--bg-shift', `${(-scrollTop * 0.05).toFixed(2)}px`)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setProgressPulse(true)
    const timer = setTimeout(() => setProgressPulse(false), 420)
    return () => clearTimeout(timer)
  }, [activeSection])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isLoading])

  const totalProjects = projects.length
  const aiProjectCount = projects.filter((project) =>
    ['AI', 'NLP', 'Healthcare AI', 'Data Science', 'Data Analytics'].includes(project.category),
  ).length
  const uniqueTechCount = new Set(projects.flatMap((project) => project.techStack)).size

  const copyEmail = async () => {
    const email = 'saathkrish2001@gmail.com'
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1300)
    } catch {
      setCopied(false)
    }
  }

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => (
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    ))
  }

  return (
    <div>
      {isLoading && <LoadingScreen />}
      <div className={progressPulse ? 'scroll-progress pulse' : 'scroll-progress'} style={{ transform: `scaleX(${scrollProgress})` }} />
      <Navbar activeSection={activeSection} />
      <RevealOnScroll as="main">
        <Hero />

        <section className="section" id="quick-actions" aria-label="Quick actions">
          <div className="container quick-grid">
            <article className="quick-card" data-reveal="up" style={{ '--d': '40ms' }}>
              <h3>Open Source</h3>
              <p>Explore repositories, commits, and implementation details.</p>
              <a href="https://github.com/Saathvik-Krishnan" target="_blank" rel="noreferrer">Visit GitHub</a>
            </article>
            <article className="quick-card" data-reveal="up" style={{ '--d': '120ms' }}>
              <h3>Professional Profile</h3>
              <p>View complete timeline, roles, and project journey.</p>
              <a href="https://www.linkedin.com/in/saathvik-krishnan/" target="_blank" rel="noreferrer">Open LinkedIn</a>
            </article>
            <article className="quick-card" data-reveal="up" style={{ '--d': '200ms' }}>
              <h3>Instant Contact</h3>
              <p>Copy email and reach out quickly for opportunities.</p>
              <button type="button" onClick={copyEmail}>{copied ? 'Email Copied' : 'Copy Email'}</button>
            </article>
          </div>
        </section>

        <section className="section" id="metrics" aria-label="Highlights">
          <div className="container metrics-grid">
            <div data-reveal="up" style={{ '--d': '40ms' }}>
              <StatCard label="Curated Projects" target={totalProjects} shouldAnimate={statsInView} />
            </div>
            <div data-reveal="up" style={{ '--d': '100ms' }}>
              <StatCard label="AI and Data Projects" target={aiProjectCount} shouldAnimate={statsInView} />
            </div>
            <div data-reveal="up" style={{ '--d': '160ms' }}>
              <StatCard label="Technologies Used" target={uniqueTechCount} shouldAnimate={statsInView} />
            </div>
            <div data-reveal="up" style={{ '--d': '220ms' }}>
              <StatCard label="Years Since GitHub Start" target={6} shouldAnimate={statsInView} />
            </div>
          </div>
        </section>

        <section className="section" id="impact" aria-label="Impact board">
          <div className="container impact-grid">
            <article className="impact-card" data-reveal="left" style={{ '--d': '40ms' }}>
              <h3>Research-Focused AI</h3>
              <p>Built pipelines that retrieve, validate, and synthesize information across multiple sources.</p>
            </article>
            <article className="impact-card" data-reveal="up" style={{ '--d': '120ms' }}>
              <h3>Applied ML</h3>
              <p>Worked on NLP, segmentation, prediction, and healthcare signal analysis use-cases.</p>
            </article>
            <article className="impact-card" data-reveal="right" style={{ '--d': '200ms' }}>
              <h3>Presentation Quality</h3>
              <p>Each project is documented as a clear case study with practical value.</p>
            </article>
          </div>
        </section>

        <About />

        <section className="section" id="timeline" aria-label="Journey timeline">
          <div className="container">
            <div className="section-heading">
              <h2 data-eyebrow="Journey">Journey Timeline</h2>
            </div>
            <div className="timeline" data-reveal="up">
              {timelineItems.map((item, idx) => (
                <article key={item.title} className="timeline-item" data-reveal="up" style={{ '--d': `${idx * 90}ms` }}>
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Skills />

        <section className="section" id="experience" aria-label="Experience">
          <div className="container">
            <div className="section-heading">
              <div className="heading-title">
                <SectionIcon name="experience" />
                <h2 data-eyebrow="Career">Experience</h2>
              </div>
              <p>Hands-on impact across AI/ML engineering and analytics roles.</p>
            </div>

            <div className="experience-grid">
              {experiences.map((item, idx) => (
                <article
                  key={item.role + item.org}
                  className="experience-card"
                  data-reveal="up"
                  style={{ '--d': `${idx * 100}ms` }}
                >
                  <h3>{item.role}</h3>
                  <p className="exp-meta">{item.org} | {item.location}</p>
                  <p className="exp-duration">{item.duration}</p>
                  <ul className="exp-list">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="publications" aria-label="Publications">
          <div className="container">
            <div className="section-heading">
              <div className="heading-title">
                <SectionIcon name="publications" />
                <h2 data-eyebrow="Research">Publications</h2>
              </div>
              <p>Research and technical publications.</p>
            </div>

            <div className="publication-grid">
              {publications.map((item, idx) => (
                <article key={item.url} className="publication-card" data-reveal="up" style={{ '--d': `${idx * 100}ms` }}>
                  <h3>{item.title}</h3>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    Open Publication
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects" aria-label="Projects">
          <div className="container">
            <div className="section-heading">
              <div className="heading-title">
                <SectionIcon name="projects" />
                <h2 data-eyebrow="Portfolio">Project Intelligence Hub</h2>
              </div>
              <p>{filteredProjects.length} projects currently visible.</p>
            </div>

            <div className="filter-bar">
              <div className="category-chips" role="tablist" aria-label="Filter projects by category">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={activeCategory === category ? 'chip active' : 'chip'}
                    onClick={() => setActiveCategory(category)}
                    type="button"
                  >
                    {category}
                  </button>
                ))}
              </div>

              <label className="search-box" htmlFor="project-search">
                <span className="sr-only">Search projects</span>
                <input
                  id="project-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by title or technology"
                />
              </label>
            </div>

            <div className="project-toolbar">
              <div className="toolbar-group">
                <label htmlFor="sort-by">Sort:</label>
                <select id="sort-by" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="alphabetical">Alphabetical</option>
                  <option value="category">Category</option>
                </select>
              </div>

              <div className="toolbar-group">
                <button className={aiOnly ? 'chip active' : 'chip'} type="button" onClick={() => setAiOnly((v) => !v)}>
                  AI and Data Focus
                </button>
                <button className={viewMode === 'grid' ? 'chip active' : 'chip'} type="button" onClick={() => setViewMode('grid')}>
                  Grid
                </button>
                <button className={viewMode === 'list' ? 'chip active' : 'chip'} type="button" onClick={() => setViewMode('list')}>
                  List
                </button>
              </div>
            </div>

            {filteredProjects.length > 0 ? (
              <div className={viewMode === 'list' ? 'projects-grid list-view' : 'projects-grid'}>
                {filteredProjects.map((project, idx) => (
                  <div key={project.id} data-reveal="up" style={{ '--d': `${(idx % 6) * 80}ms` }}>
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="empty-state">No projects match this combination. Adjust filters and try again.</p>
            )}
          </div>
        </section>

        <section className="section" id="social-proof" aria-label="Testimonials">
          <div className="container">
            <div className="section-heading">
              <div className="heading-title">
                <SectionIcon name="impact" />
                <h2 data-eyebrow="Impact">Impact Highlights</h2>
              </div>
              <p>Outcome-focused highlights across analytics and AI engineering work.</p>
            </div>

            <div className="impact-highlights-grid">
              {impactHighlights.map((item, idx) => (
                <article key={item.title} className="impact-highlight-card" data-reveal="up" style={{ '--d': `${idx * 90}ms` }}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq" aria-label="FAQ">
          <div className="container">
            <div className="section-heading">
              <h2 data-eyebrow="Answers">FAQ</h2>
              <p>Quick answers for recruiters and collaborators.</p>
            </div>
            <div className="faq-list">
              {faqs.map((item, idx) => (
                <article key={item.q} className={openFaqs.includes(idx) ? 'faq-item active' : 'faq-item'}>
                  <button type="button" onClick={() => toggleFaq(idx)}>
                    <span>{item.q}</span>
                    <span>{openFaqs.includes(idx) ? '-' : '+'}</span>
                  </button>
                  {openFaqs.includes(idx) && <p>{item.a}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact" aria-label="Contact">
          <div className="container contact-panel">
            <div>
              <div className="heading-title">
                <SectionIcon name="contact" />
                <h2 data-eyebrow="Contact">Let us build something high-impact</h2>
              </div>
              <p className="section-text">
                Open to Data Analyst, Data Scientist, AI/ML Engineer, and Data Engineer opportunities.
                Work authorization: F-1 OPT (EAD). Location preference: USA only. Notice period: 1 week.
              </p>
            </div>

            <div className="contact-grid">
              <a href="mailto:saathkrish2001@gmail.com">
                Email: saathkrish2001@gmail.com
              </a>
              <a href="tel:+918482136939">
                Phone: +91 8482136939
              </a>
              <a href="https://github.com/Saathvik-Krishnan" target="_blank" rel="noreferrer">
                GitHub Profile
              </a>
              <a href="https://www.linkedin.com/in/saathvik-krishnan/" target="_blank" rel="noreferrer">
                LinkedIn Profile
              </a>
              <button type="button" onClick={copyEmail} className="copy-btn">
                {copied ? 'Email Copied' : 'Copy Email'}
              </button>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {showTop && (
        <button type="button" className="top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Top
        </button>
      )}

      <Footer />
    </div>
  )
}
