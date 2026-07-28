import PageShell from '../components/PageShell.jsx'
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
    bullets: [
      'Built a Dockerized, multi-language (Python/C/C++/Java) code-execution sandbox with ulimit-capped resources and privilege-dropped execution, giving tuition students without personal computers a secure browser-based IDE to write and run code from any device.',
      'Implemented a PostgreSQL-backed assignment judge with deadline-gated access, hidden test cases, and LeetCode-style verdicts, plus JWT/RBAC auth and automated student onboarding via a Google Form webhook and Resend transactional email',
    ],
    tech: 'React, Node.js, Express.js, PostgreSQL, Docker, JWT, Resend, Render, GitHub Page',

  },
  {
    id: '02',
    title: 'INFRASTRUCTURE-ASSASSIN',
    subtitle: 'AI-Driven Infrastructure Testing & Resilience Suite',
    date: "JUL '26",
    link: 'pandadsgn.github.io/Infrastructure-Assassin-Production/',
    bullets: [
      'Built a multi-tier, RBAC-governed platform using PostgreSQL for persistent telemetry and Redis for session caching, with LISTEN/NOTIFY pub-sub over Server-Sent Events for real-time dashboard updates.',
      'Integrated a cascaded LLM pipeline (Gemini API, batched to manage quota) for automated threat analysis, added Firebase Authentication, and shipped CI/CD to a multi-instance Render backend + GitHub Pages frontend.',
    ],
    tech: 'React, Node.js, PostgreSQL, Redis, Firebase, Gemini API, CI/CD, Render, GitHub Pages',
  },
  {
    id: '03',
    title: 'OCCUNOVA',
    subtitle: 'Deep Learning Diagnostic System for Glaucoma Detection',
    date: "JUN '26",
    link: 'pandadsgn.github.io/OccuNova/',
    bullets: [
      'Designed a cascaded ResNet50 computer-vision pipeline with AI-driven UNet cropping to isolate optic-nerve regions from retinal fundus scans.',
      'Built a scalable inference backend and React/Node.js frontend covering the full lifecycle from clinical data preprocessing to model training and deployment.',
    ],
    tech: 'Python, CNNs, Computer Vision, Node.js, React, Git/GitHub',
  },
  {
    id: '04',
    title: 'AGRO-GUARD',
    subtitle: 'IoT Crop & Grain-Silo Monitoring System',
    date: "FEB '26",
    link: 'pandadsgn.github.io/Agro-Guard/',
    bullets: [
      'Engineered an Arduino-based sensor pipeline (DHT11, HC-SR04, LDR) for continuous environmental telemetry capture in agricultural storage.',
      'Built AI-driven analytics for grain storage management on a scalable backend deployed on Render, spanning hardware integration through cloud deployment.',
    ],
    tech: 'Arduino, IoT sensors, Node.js, React, Render, Git/GitHub',
  },
]

const PUBLICATIONS = [
  {
    id: '01',
    title: 'AGRO-GUARD',
    journal: 'Bentham Science Journal',
    status: 'Yet to be published',
    link: asset('assets/Agro_Guard_Book_Chapter.pdf'),
  },
]

export default function Projects() {
  return (
    <PageShell>
      <PageHeader text="PROJECTS & PUBLICATIONS" />
      <div className="bold-profile-grid" style={{ gridTemplateColumns: '1fr' }}>
        <div className="profile-intel">
          <p className="section-heading">PROJECTS</p>
          {PROJECTS.map((p) => (
            <div className="data-table" key={p.id}>
              <div className="data-row" style={{ borderTop: 'none' }}>
                <span className="data-label">{p.id}</span>
                <div className="data-value-group" style={{ textAlign: 'left', marginLeft: 0, flexGrow: 1 }}>
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
                    <a
                      href={`https://${p.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--text)', textDecoration: 'underline', display: 'inline-block', marginTop: 6 }}
                    >
                      {p.link}
                    </a>
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
          ))}

          <p className="section-heading">PUBLICATIONS</p>
          {PUBLICATIONS.map((pub) => (
            <div className="data-table" key={pub.id}>
              <div className="data-row" style={{ borderTop: 'none' }}>
                <span className="data-label">{pub.id}</span>
                <div className="data-value-group" style={{ textAlign: 'left', marginLeft: 0, flexGrow: 1 }}>
                  <span className="data-value" style={{ color: '#fff' }}>{pub.title}</span>
                  <span className="data-sub-value" style={{ lineHeight: 1.6 }}>
                    {pub.journal}
                    <br />
                    <span style={{ display: 'block', marginTop: 6 }}>{pub.status}</span>
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
    </PageShell>
  )
}
