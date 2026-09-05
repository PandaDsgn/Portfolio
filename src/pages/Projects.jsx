import PageHeader from '../components/PageHeader.jsx'

// Resolves against Vite's base path so links work both on localhost (base "/")
// and on GitHub Pages (base "/Portfolio/"). Always pass a path with no leading slash.
const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const PROJECTS = [
  {
    id: '01',
    title: 'HONORROLL',
    subtitle: 'One Stop Full Scale Insitutional Management System',
    date: "JUL '26",
    link: 'pandadsgn.github.io/HonorRoll/',
    image: 'assets/HomePages/HonorRoll.png',
    bullets: [
      'A multi-tenant LMS and assessment platform (React web + React Native/Expo mobile) spanning student, teacher, admin, and superadmin roles, with per-organization structure for departments, subjects, rosters, billing, and branding.',
      'Runs a sandboxed code judge (child_process -> unprivileged OS user -> ulimit-capped execution, no Docker) across 10 languages with per-testcase verdicts, alongside scan-mode grading that captures paper answers via live edge-detection and grades them through deferred OCR.',
      'Features real-time webcam exam proctoring via on-device computer vision (MediaPipe: face-absence -> multi-face -> gaze/head-turn -> phone/speech detection) with browser lockdown, plus cross-org superadmin tooling (platform-wide audit logs, scoped admin impersonation via org-override headers).',
    ],
    tech: 'React, React Native/Expo, Node.js, Express.js, PostgreSQL, MediaPipe, JWT, Resend, Render, GitHub Pages',

  },
  {
    id: '02',
    title: 'INFRASTRUCTURE-ASSASSIN',
    subtitle: 'AI-Driven Infrastructure Testing & Resilience Suite',
    date: "JUL '26",
    link: 'pandadsgn.github.io/Infrastructure-Assassin-Production/',
    image: 'assets/HomePages/InfrastructureAssassin.png',
    bullets: [
      'A multi-tenant LMS and assessment platform (React web + React Native/Expo mobile) spanning student, teacher, admin, and superadmin roles, with per-organization structure for departments, subjects, rosters, billing, and branding.',
      'Runs a sandboxed code judge (child_process -> unprivileged OS user -> ulimit-capped execution, no Docker) across 10 languages with per-testcase verdicts, alongside scan-mode grading that captures paper answers via live edge-detection and grades them through deferred OCR.',
      'Features real-time webcam exam proctoring via on-device computer vision (MediaPipe: face-absence -> multi-face -> gaze/head-turn -> phone/speech detection) with browser lockdown, plus cross-org superadmin tooling (platform-wide audit logs, scoped admin impersonation via org-override headers).',],
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
          <p className="section-heading">Projects</p>
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

          <p className="section-heading">Publications</p>
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
