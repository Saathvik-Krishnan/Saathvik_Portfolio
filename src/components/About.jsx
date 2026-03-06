const focusAreas = [
  {
    title: 'Data to Decision Workflows',
    text: 'Turning raw, noisy data into reliable metrics, dashboards, and insights that guide decisions.',
  },
  {
    title: 'Applied AI and Machine Learning',
    text: 'Building practical ML and NLP systems such as RAG pipelines, classification models, and prediction workflows.',
  },
  {
    title: 'Scalable Data Engineering Mindset',
    text: 'Designing robust data and inference pipelines with security, performance, and production reliability in mind.',
  },
]

export default function About() {
  return (
    <section className="section" id="about" aria-label="About me">
      <div className="container about-grid">
        <article className="about-panel" data-reveal="left" style={{ '--d': '40ms' }}>
          <h2 data-eyebrow="Profile">About Me</h2>
          <p className="section-text">
            I have always been driven by curiosity to uncover the stories hidden within data and
            transform them into intelligent, real-world solutions. My work lives at the
            intersection of Data Analytics, Data Science, AI/ML Engineering, and Data Engineering,
            where structured thinking meets creativity. I enjoy building systems that do more than
            explain the past. They detect patterns, predict outcomes, and support better decisions.
          </p>
          <p className="section-text">
            From dashboards and data pipelines to machine learning and agentic AI workflows, every
            project I build is a step toward designing reliable, scalable intelligence. I see AI as
            more than a tool. For me, it is a way to rethink how we understand complexity and create
            meaningful impact through technology.
          </p>
        </article>

        <div className="focus-grid">
          {focusAreas.map((item, idx) => (
            <article key={item.title} className="focus-card" data-reveal="up" style={{ '--d': `${120 + idx * 80}ms` }}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
