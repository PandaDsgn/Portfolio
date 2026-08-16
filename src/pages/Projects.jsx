import PageHeader from '../components/PageHeader.jsx'

// Resolves against Vite's base path so links work both on localhost (base "/")
// and on GitHub Pages (base "/Portfolio/"). Always pass a path with no leading slash.
const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const PROJECTS = [
  {
    id: '01',
    title: 'CODEJUDGE',
    subtitle: 'Browser-Based Coding Classroom & Auto-Grading Platform',
    date: "JUL '26",
    link: 'pandadsgn.github.io/CodeJudge/',
    image: 'assets/HomePages/CodeJudge.png',
    bullets: [
      'A Dockerized, multi-language (Python/C/C++/Java) code-execution sandbox with ulimit-capped resources and privilege-dropped execution, giving tuition students without personal computers a secure browser-based IDE to write and run code from any device.',
      'Uses a PostgreSQL-backed assignment judge with deadline-gated access, hidden test cases, and LeetCode-style verdicts, plus JWT/RBAC auth and automated student onboarding via a Google Form webhook and Resend transactional email.',
    ],
    tech: 'React, Node.js, Express.js, PostgreSQL, Docker, JWT, Resend, Render, GitHub Page',

  },
  {
    id: '02',
    title: 'INFRASTRUCTURE-ASSASSIN',
    subtitle: 'AI-Driven Infrastructure Testing & Resilience Suite',
    date: "JUL '26",
    link: 'pandadsgn.github.io/Infrastructure-Assassin-Production/',
    image: 'assets/HomePages/InfrastructureAssassin.png',
    bullets: [
      'A multi-tier, RBAC-governed platform using PostgreSQL for persistent telemetry and Redis for session caching, with LISTEN/NOTIFY pub-sub over Server-Sent Events for real-time dashboard updates.',
      'Sports a cascaded LLM pipeline (Gemini -> Ollama -> Grok -> Fallback NLP using data on DB) for automated threat analysis, Firebase Authentication, and a shipped CI/CD to a multi-instance Render backend + GitHub Pages frontend.',
    ],
    tech: 'React, Node.js, PostgreSQL, Redis, Firebase, Gemini API, CI/CD, Render, GitHub Pages',
  },
  {
    id: '03',
    title: 'Restro-cafe',
    subtitle: 'Full Stack Restaurant Management System',
    date: "JUN '26",
    link: 'pandadsgn.github.io/restro-cafe/',
    image: 'assets/HomePages/RestroCafe.png',
    bullets: [
      'Designed a full-stack restaurant management system with a React frontend and Node.js backend, including a RESTful API and database schema.',
      'Has OpenMaps for geolocation tracking, Razorpay for payment processing, and an inventory management system, along with a smart reservation management system.',
    ],
    tech: 'Node.js, React, Render, Git/GitHub, Firebase',
  },
  {
    id: '04',
    title: 'OCCUNOVA',
    subtitle: 'Deep Learning Diagnostic System for Glaucoma Detection',
    date: "JUN '26",
    link: 'pandadsgn.github.io/OccuNova/',
    image: 'assets/HomePages/OccuNova.png',
    bullets: [
      'A cascaded ResNet50 computer-vision pipeline with an UNet cropping to isolate optic-nerve regions from retinal fundus scans. The dual layer allows for more accurate detections.',
      'Trained on a massive dataset from multiple sources, and hosted on Render and GitHub Pages for the frontend and on Hugging Face for the backend.',
    ],
    tech: 'Python, CNNs, Computer Vision, Node.js, React, Git/GitHub',
  },
  {
    id: '05',
    title: 'AGRO-GUARD',
    subtitle: 'IoT Crop & Grain-Silo Monitoring System',
    date: "FEB '26",
    link: 'pandadsgn.github.io/Agro-Guard/',
    image: 'assets/HomePages/AgroGuard.png',
    bullets: [
      'An Arduino-based sensor pipeline (DHT11, HC-SR04, LDR) for continuous environmental telemetry capture and threat detction in agricultural silos.',
      'Features an AI-driven analytics for smarter and more efficient grain storage management by detecting environmental threats and sensor anomalies in real-time and deciding for users.',
    ],
    tech: 'Arduino, IoT sensors, Node.js, React, Render, Git/GitHub',
  },

]

const PUBLICATIONS = [
  {
    id: '01',
    title: 'AGRO-GUARD',
    journal: 'Bentham Science Journal',
    status: 'Publication Pending',
    link: asset('assets/Agro_Guard_Book_Chapter.pdf'),
  },
]

export default function Projects() {
  return (
    <section id="projects" className="content-section">
      <PageHeader text="PROJECTS & PUBLICATIONS" />
      <div className="bold-profile-grid" style={{ gridTemplateColumns: '1fr' }}>
        <div className="profile-intel">
          <p className="section-heading">PROJECTS</p>
          {PROJECTS.map((p) => (
            <div className="data-table" key={p.id}>
              <div className="data-row" style={{ borderTop: 'none' }}>
                <span className="data-label">{p.id}</span>
                <div className="data-value-group" style={{ textAlign: 'left', marginLeft: 0, flexGrow: 1 }}>
                  <div className="project-row">
                    <a
                      href={`https://${p.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-thumb-link"
                      aria-label={`Open ${p.title} project`}
                    >
                      <img src={asset(p.image)} alt={`${p.title} preview`} className="project-thumb" />
                      <span className="project-thumb-overlay">VIEW PROJECT ↗</span>
                    </a>
                    <div className="project-divider"></div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'baseline',
                          width: '100%',
                          marginBottom: 5,
                        }}
                      >
                        <span className="data-value">{p.title}</span>
                        <span
                          style={{
                            fontWeight: 900,
                            color: 'var(--text)',
                            fontSize: '0.9rem',
                            textAlign: 'right',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {p.date}
                        </span>
                      </div>
                      <span className="data-sub-value" style={{ lineHeight: 1.6 }}>
                        {p.subtitle}
                        <br />
                        {p.bullets.map((b, i) => (
                          <span key={`${p.id}-bullet-${i}`} style={{ color: 'var(--text)', display: 'block', marginTop: 6 }}>
                            • {b}
                          </span>
                        ))}
                        <span style={{ display: 'block', marginTop: 10 }}>Tech: {p.tech}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <p className="section-heading">PUBLICATIONS</p>
          {PUBLICATIONS.map((pub) => (
            <div className="data-table" key={pub.id}>
              <div className="data-row" style={{ borderTop: 'none' }}>
                <span className="data-label">{pub.id}</span>
                <div className="data-value-group" style={{ textAlign: 'left', marginLeft: 0, flexGrow: 1 }}>
                  <span className="data-value" style={{ color: 'var(--text)' }}>{pub.title}</span>
                  <span className="data-sub-value" style={{ lineHeight: 1.6 }}>
                    {pub.journal}
                    <br />
                    <span style={{ display: 'block', marginTop: 6, color: 'var(--text)' }}>{pub.status}</span>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--blue)', textDecoration: 'none', display: 'block', marginTop: 6, fontWeight: 900 }}
                    >
                      [VIEW ↗]
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
