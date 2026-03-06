export const projects = [
  {
    id: 1,
    slug: 'papersphere-ai-agentic-multi-paper-rag-pipeline',
    title:
      'PaperSphere-AI: Agentic Multi-Paper RAG Pipeline with Hybrid BM25 + Vector Search and Metric-Aware Synthesis',
    category: 'AI',
    shortDescription:
      'Agentic multi-paper RAG system for grounded QA and synthesis across research PDFs.',
    fullDescription:
      'PaperSphere-AI is a FastAPI + Streamlit RAG application that ingests research papers, indexes them, and enables grounded single/multi-paper querying with evaluation support.',
    problem:
      'Comparing multiple research papers manually is slow and often misses cross-paper insights.',
    solution:
      'Built an agentic RAG pipeline with hybrid retrieval and metric-aware synthesis to provide faster and more reliable research answers.',
    techStack: ['FastAPI', 'Streamlit', 'Qdrant', 'Gemini', 'RAG'],
    features: [
      'Single-paper QA with citations',
      'Multi-paper comparison with structured synthesis',
      'Hybrid BM25 + vector retrieval strategy',
      'Retrieval diagnostics and evaluation endpoints',
    ],
    challenges: [
      'Balancing retrieval depth with response latency',
      'Measuring synthesis quality across multiple papers',
    ],
    image:
      `${import.meta.env.BASE_URL}project-images/rag-pipeline.svg`,
    githubUrl: 'https://github.com/Saathvik-Krishnan/Research-Paper-Copilot',
    liveUrl: '',
  },
  {
    id: 2,
    slug: 'crewai-powered-multi-agent-research-pipeline',
    title: 'CrewAI-Powered-Multi-Agent-Research-Pipeline-with-LLM-Based-Summarization',
    category: 'AI',
    shortDescription:
      'Multi-agent research assistant for evidence retrieval, validation, and executive summaries.',
    fullDescription:
      'An end-to-end AI-powered research pipeline that orchestrates multiple agents to gather web evidence, validate sources, and generate executive-level summaries.',
    problem:
      'Manual research and synthesis workflows are repetitive and difficult to standardize.',
    solution:
      'Created a multi-agent workflow that automates retrieval, reasoning, and summarization with a repeatable structure.',
    techStack: ['Python', 'CrewAI', 'LLM', 'Streamlit'],
    features: [
      'Autonomous multi-agent collaboration',
      'Source-grounded evidence workflow',
      'Executive summary generation',
      'CLI and interactive web interface',
    ],
    challenges: [
      'Maintaining coherent final output across agent steps',
      'Improving source trust and relevance filtering',
    ],
    image:
      `${import.meta.env.BASE_URL}project-images/crewai-agents.svg`,
    githubUrl:
      'https://github.com/Saathvik-Krishnan/CrewAI-Powered-Multi-Agent-Research-Pipeline-with-LLM-Based-Summarization',
    liveUrl: '',
  },
  {
    id: 3,
    slug: 'adventureworks-report-dashboard',
    title: 'AdventureWorks-Report-Dashboard',
    category: 'Data Analytics',
    shortDescription:
      'Interactive business reporting dashboard for AdventureWorks data exploration.',
    fullDescription:
      'A dashboard project focused on presenting key business metrics and trends from AdventureWorks-style data in a structured, decision-friendly format.',
    problem:
      'Raw operational data is hard to interpret quickly for business decisions.',
    solution:
      'Designed a report dashboard that organizes KPIs and trends into a clear visual workflow.',
    techStack: ['Dashboarding', 'Data Modeling', 'Analytics'],
    features: [
      'KPI-centric reporting layout',
      'Trend and comparison views',
      'Business performance overview',
    ],
    challenges: [
      'Choosing the most decision-relevant metrics',
      'Keeping dashboard visuals clear and uncluttered',
    ],
    image:
      `${import.meta.env.BASE_URL}project-images/analytics-dashboard.svg`,
    githubUrl: 'https://github.com/Saathvik-Krishnan/AdventureWorks-Report-Dashboard',
    liveUrl: '',
  },
  {
    id: 4,
    slug: 'semantic-systematic-evaluation-news-classification',
    title:
      'SEMANTIC: Systematic Evaluation of Multi-class Article News-Text Identification and Categorization',
    category: 'NLP',
    shortDescription:
      'Systematic multi-class news categorization using traditional and deep learning NLP models.',
    fullDescription:
      'SEMANTIC evaluates multi-class news classification approaches across IAB categories, including classical models and deep learning methods such as CNN/BERT.',
    problem:
      'News datasets with many classes and imbalanced distributions are challenging to classify accurately.',
    solution:
      'Benchmarked diverse models and preprocessing strategies to improve contextual categorization quality.',
    techStack: ['Python', 'NLP', 'CNN', 'BERT', 'Jupyter'],
    features: [
      'Multi-class IAB category classification',
      'Traditional ML and deep model comparison',
      'Class imbalance handling exploration',
      'Systematic evaluation workflow',
    ],
    challenges: ['Class imbalance across 26 categories', 'Variable-length article handling'],
    image:
      `${import.meta.env.BASE_URL}project-images/news-classification.svg`,
    githubUrl: 'https://github.com/Saathvik-Krishnan/SEMANTIC-MAIN',
    liveUrl: '',
  },
  {
    id: 5,
    slug: 'eeg-based-epilepsy-detection-cnn-lstm-deep-learning',
    title: 'EEG-Based Epilepsy Detection using CNN-LSTM and Deep Learning',
    category: 'Healthcare AI',
    shortDescription:
      'Deep learning approach for EEG pattern recognition and epilepsy detection support.',
    fullDescription:
      'A neuroscience-focused project applying deep learning concepts to EEG signals for epilepsy classification and diagnostic assistance.',
    problem:
      'EEG interpretation is complex and can be time-consuming in clinical workflows.',
    solution:
      'Explored deep learning-driven pattern recognition to support accurate and efficient EEG analysis.',
    techStack: ['Python', 'Deep Learning', 'CNN-LSTM', 'EEG', 'Jupyter'],
    features: [
      'EEG signal analysis pipeline',
      'Epilepsy-focused classification workflow',
      'Deep learning experimentation in notebooks',
    ],
    challenges: ['Signal noise and preprocessing complexity', 'Generalization across EEG recording variance'],
    image:
      `${import.meta.env.BASE_URL}project-images/brain-eeg.svg`,
    githubUrl:
      'https://github.com/Saathvik-Krishnan/Enhanced-Epilepsy-Diagnosis-through-EEG-Pattern-Recognition',
    liveUrl: '',
  },
  {
    id: 6,
    slug: 'customer-segmentation-using-rfm-analysis',
    title: 'Customer Segmentation using RFM Analysis',
    category: 'Data Science',
    shortDescription:
      'Customer segmentation project using Recency, Frequency, and Monetary analysis.',
    fullDescription:
      'An e-commerce analytics project that performs RFM-based segmentation to identify customer groups and support targeted business strategy.',
    problem:
      'Businesses need actionable customer clusters for retention, personalization, and campaign targeting.',
    solution:
      'Applied RFM analysis to transaction data to segment users and derive interpretable customer insights.',
    techStack: ['Python', 'Pandas', 'RFM', 'Data Analysis', 'Jupyter'],
    features: [
      'RFM metric computation and scoring',
      'Customer segment identification',
      'Insight-oriented exploratory analysis',
    ],
    challenges: ['Data cleaning for large transaction datasets', 'Designing useful segment thresholds'],
    image:
      `${import.meta.env.BASE_URL}project-images/rfm-analysis.svg`,
    githubUrl: 'https://github.com/Saathvik-Krishnan/E-Commerce-Transaction-Analysis',
    liveUrl: '',
  },
  {
    id: 7,
    slug: 'falcon-9-rockets-landing-prediction',
    title: 'Falcon 9 Rockets Landing Prediction',
    category: 'Data Science',
    shortDescription: 'Predictive analysis project for Falcon 9 first-stage landing outcomes.',
    fullDescription:
      'A capstone project focused on predicting Falcon 9 landing success using exploratory analysis and machine learning-based classification workflows.',
    problem:
      'Launch cost optimization depends on understanding first-stage landing success probability.',
    solution:
      'Used capstone-style data science workflow to model and evaluate landing outcome predictors.',
    techStack: ['Python', 'Machine Learning', 'Data Visualization', 'Jupyter'],
    features: [
      'Falcon 9 mission dataset analysis',
      'Landing success prediction modeling',
      'Capstone project reporting workflow',
    ],
    challenges: ['Feature engineering from mission data', 'Model selection and evaluation tradeoffs'],
    image:
      `${import.meta.env.BASE_URL}project-images/falcon9-prediction.svg`,
    githubUrl: 'https://github.com/Saathvik-Krishnan/Applied-data-science-capstone',
    liveUrl: '',
  },
]

export const categories = ['All', ...new Set(projects.map((project) => project.category))]
