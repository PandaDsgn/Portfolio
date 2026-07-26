import PageShell from '../components/PageShell.jsx'
import PageHeader from '../components/PageHeader.jsx'

const PROJECTS = [
  {
    id: '01',
    title: 'INFRASTRUCTURE-ASSASSIN',
    subtitle: 'AI-Driven Infrastructure Testing & Resilience Suite',
    date: "JUL '26",
    bullets: [
      'Built a multi-tier, RBAC-governed platform using PostgreSQL for persistent telemetry and Redis for session caching, with LISTEN/NOTIFY pub-sub over Server-Sent Events for real-time dashboard updates.',
      'Integrated a cascaded LLM pipeline (Gemini API, batched to manage quota) for automated threat analysis, added Firebase Authentication, and shipped CI/CD to a multi-instance Render backend + GitHub Pages frontend.',
    ],
    tech: 'React, Node.js, PostgreSQL, Redis, Firebase, Gemini API, CI/CD, Render, GitHub Pages',
  },
  {
    id: '02',
    title: 'OCCUNOVA',
    subtitle: 'Deep Learning Diagnostic System for Glaucoma Detection',
    date: "JUN '26",
    bullets: [
      'Designed a cascaded ResNet50 computer-vision pipeline with AI-driven UNet cropping to isolate optic-nerve regions from retinal fundus scans.',
      'Built a scalable inference backend and React/Node.js frontend covering the full lifecycle from clinical data preprocessing to model training and deployment.',
    ],
    tech: 'Python, CNNs, Computer Vision, Node.js, React, Git/GitHub',
  },
  {
    id: '03',
    title: 'AGRO-GUARD',
    subtitle: 'IoT Crop & Grain-Silo Monitoring System',
    date: "FEB '26",
    bullets: [
      'Engineered an Arduino-based sensor pipeline (DHT11, HC-SR04, LDR) for continuous environmental telemetry capture in agricultural storage.',
      'Built AI-driven analytics for grain storage management on a scalable backend deployed on Render, spanning hardware integration through cloud deployment.',
    ],
    tech: 'Arduino, IoT sensors, Node.js, React, Render, Git/GitHub',
  },
]

export default function Projects() {
  return (
    <PageShell>
      <PageHeader text="PROJECTS" />
      <div className="bold-profile-grid" style={{ gridTemplateColumns: '1fr' }}>
        <div className="profile-intel">
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
                    {p.bullets.map((b) => (
                      <span key={b} style={{ color: 'var(--text)', display: 'block', marginTop: 6 }}>
                        • {b}
                      </span>
                    ))}
                    <span style={{ display: 'block', marginTop: 10 }}>Tech: {p.tech}</span>
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
