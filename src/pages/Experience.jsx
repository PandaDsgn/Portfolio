import PageShell from '../components/PageShell.jsx'
import PageHeader from '../components/PageHeader.jsx'

const JOBS = [
  {
    id: '01',
    role: '3D GENERALIST & ENVIRONMENT ARTIST',
    date: 'AUG 2025 — FEB 2026',
    org: 'The AutoFocus Studio',
    bullets: [
      'Delivered high-fidelity visualizations and technical artwork for studio projects and clients across environment design and generalist 3D workflows.',
      'Worked on the launch campaign for the Hyundai Creta N Line Knight Edition, creating 360° exterior imagery for the website.',
    ],
  },
  {
    id: '02',
    role: 'CO-LEAD',
    date: 'NOV 2022 — MAR 2025',
    org: 'Ninja Fellowship',
    bullets: ['Led a team of 3D artists over 2+ years, coordinating delivery of visual assets for multiple brand engagements.'],
  },
  {
    id: '03',
    role: 'AUTOMOTIVE & PRODUCT VISUALIZER',
    date: 'APR 2019 — AUG 2025',
    org: 'Freelance',
    bullets: [
      '7+ years independently managing end-to-end client projects, delivering hyper-accurate 3D design and lighting for automotive and product visualization.',
      'Collaborated with PJKT on a classified project built on a design by Sasha Selipanov (former Bugatti / Koenigsegg designer).',
    ],
  },
]

const INTERNSHIP = {
  id: '01',
  role: 'ADVANCED & CLEANER MATERIALS IN SOLAR TECHNOLOGY',
  date: 'JUN 2025 — JUL 2025',
  org: 'Internship at IEM Newtown, IEDC',
  bullets: ['Optimized performance of tri-layer, lead-free, carbon-based perovskite solar cells using machine learning; authored a full technical report.'],
  paper: '/assets/paper.pdf',
}

const CERTIFICATIONS = [
  { name: 'Business Intelligence & Analytics', issuer: 'NPTEL, IIT Madras', date: "JUN '25" },
  { name: 'Cloud Computing', issuer: 'NPTEL, IIT Kharagpur', date: "JUN '25" },
  { name: 'Joy of Computing with Python', issuer: 'NPTEL, IIT Ropar', date: "NOV '24" },
  { name: 'Introduction to IoT', issuer: 'Coursera, UC San Diego', date: "OCT '24" },
]

const LEADERSHIP = [
  {
    org: 'Computer Society of India – UEM',
    roles: "Vice President (Jan '26–Present), Manager (Aug '25–Jan '26), Graphics Lead (Mar '25–Jan '26)",
  },
  {
    org: 'Iris, UEMK Photography Society',
    roles: "Tech/Media/Graphics Lead (Sep '24–Aug '25)",
  },
  {
    org: 'Class Rep',
    roles: "Jan '26–Present",
  },
]

function JobRow({ job }) {
  return (
    <div className="data-table">
      <div className="data-row" style={{ borderTop: 'none' }}>
        <span className="data-label">{job.id}</span>
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
            <span className="data-value">{job.role}</span>
            <span
              style={{
                fontWeight: 900,
                color: 'var(--text)',
                fontSize: '0.9rem',
                textAlign: 'right',
                whiteSpace: 'nowrap',
              }}
            >
              {job.date}
            </span>
          </div>
          <span className="data-sub-value" style={{ lineHeight: 1.6 }}>
            {job.org}
            <br />
            {job.bullets.map((b) => (
              <span key={b} style={{ color: 'var(--text)', display: 'block', marginTop: 6 }}>
                • {b}
              </span>
            ))}
            {job.paper && (
              <a
                href={job.paper}
                target="_blank"
                rel="noreferrer"
                className="data-sub-value"
                style={{ color: 'var(--blue)', textDecoration: 'none', display: 'block', marginTop: 6, fontWeight: 900 }}
              >
                [VIEW ↗]
              </a>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <PageShell>
      <PageHeader text="EXPERIENCE" />
      <div className="bold-profile-grid" style={{ gridTemplateColumns: '1fr' }}>
        <div className="profile-intel">
          <p className="section-heading">PROFESSIONAL EXPERIENCE</p>
          {JOBS.map((job) => (
            <JobRow job={job} key={job.id} />
          ))}

          <p className="section-heading">INTERNSHIP & CERTIFICATIONS</p>
          <JobRow job={INTERNSHIP} />

          <div className="data-table">
            <div className="data-row" style={{ borderTop: 'none' }}>
              <span className="data-label">02</span>
              <div className="data-value-group" style={{ textAlign: 'left', marginLeft: 0, flexGrow: 1 }}>
                <span className="data-value">CERTIFICATIONS</span>
                <span className="data-sub-value" style={{ lineHeight: 1.6 }}>
                  {CERTIFICATIONS.map((c) => (
                    <span key={c.name} style={{ display: 'block', marginTop: 6 }}>
                      {c.name} <span className="sep">|</span> {c.issuer} <span className="sep">|</span> {c.date}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>

          <p className="section-heading">LEADERSHIP & EXTRACURRICULAR</p>
          <div className="data-table">
            <div className="data-row" style={{ borderTop: 'none', borderBottom: 'none' }}>
              <span className="data-label">01</span>
              <div className="data-value-group" style={{ textAlign: 'left', marginLeft: 0, flexGrow: 1 }}>
                <span className="data-sub-value" style={{ lineHeight: 1.8 }}>
                  {LEADERSHIP.map((l) => (
                    <span key={l.org} style={{ display: 'block', marginBottom: 10 }}>
                      <span style={{ color: 'var(--text)', fontWeight: 900 }}>{l.org}</span>
                      <span className="sep">|</span>
                      {l.roles}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
