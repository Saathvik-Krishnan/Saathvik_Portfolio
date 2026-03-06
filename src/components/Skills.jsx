import { useMemo, useState } from 'react'
import SectionIcon from './SectionIcon'

const skillGroups = [
  {
    track: 'Core Programming',
    items: ['SQL', 'Python', 'R', 'C', 'C++', 'JavaScript', 'HTML', 'CSS', 'React'],
  },
  {
    track: 'Data and Analytics',
    items: [
      'Data Analysis',
      'Data Visualization',
      'DAX',
      'Power Query',
      'Data Mining',
      'Data Wrangling',
    ],
  },
  {
    track: 'AI/ML and Intelligent Systems',
    items: [
      'Machine Learning',
      'Natural Language Processing',
      'Retrieval-Augmented Generation (RAG)',
      'Hybrid Retrieval (BM25 + Vector Search)',
      'OpenCV',
    ],
  },
  {
    track: 'Databases',
    items: ['MongoDB', 'MySQL', 'Supabase', 'Qdrant Cloud'],
  },
  {
    track: 'Cloud and Deployment',
    items: ['GCP', 'AWS EC2', 'Render', 'Streamlit'],
  },
  {
    track: 'Tools and Platforms',
    items: [
      'Git',
      'Microsoft Power BI',
      'Tableau',
      'Microsoft Excel',
      'Microsoft Suite',
      'MATLAB',
    ],
  },
  {
    track: 'Libraries',
    items: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Scikit-learn',
      'TensorFlow',
      'NLTK',
      'PyTorch',
      'FastAPI',
    ],
  },
  {
    track: 'AI and Agent Systems',
    items: [
      'CrewAI',
      'Agno',
      'Multi-Agent Systems',
      'LLM Orchestration',
      'Prompt Engineering',
      'Gemini API',
      'Tavily API',
    ],
  },
  {
    track: 'Soft Skills',
    items: [
      'Communication',
      'Team Player',
      'Problem-Solving',
      'Decision-making',
      'Critical Thinking',
      'Leadership',
      'Adaptability',
    ],
  },
]

const tracks = ['All', ...skillGroups.map((group) => group.track)]

export default function Skills() {
  const [activeTrack, setActiveTrack] = useState('All')

  const visibleGroups = useMemo(() => {
    if (activeTrack === 'All') return skillGroups
    return skillGroups.filter((group) => group.track === activeTrack)
  }, [activeTrack])

  return (
    <section className="section" id="skills" aria-label="Skills">
      <div className="container">
        <div className="section-heading">
          <div className="heading-title">
            <SectionIcon name="skills" />
            <h2 data-eyebrow="Expertise">Skill Matrix</h2>
          </div>
          <p>Track-wise view of my current strengths.</p>
        </div>

        <div className="skill-filters" role="tablist" aria-label="Filter skills by track" data-reveal="up" style={{ '--d': '40ms' }}>
          {tracks.map((track) => (
            <button
              key={track}
              className={activeTrack === track ? 'chip active' : 'chip'}
              type="button"
              onClick={() => setActiveTrack(track)}
            >
              {track}
            </button>
          ))}
        </div>

        <div className="skill-meter-grid">
          {visibleGroups.map((group, idx) => (
            <article key={group.track} className="skill-meter-card" data-reveal="up" style={{ '--d': `${80 + (idx % 6) * 70}ms` }}>
              <div className="skill-meter-top">
                <h3>{group.track}</h3>
              </div>
              <div className="skill-pill-grid">
                {group.items.map((item) => (
                  <span key={item} className="skill-pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
