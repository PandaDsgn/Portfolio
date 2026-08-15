import PageShell from '../components/PageShell.jsx'
import PageHeader from '../components/PageHeader.jsx'

// Resolves against Vite's base path so links work both on localhost (base "/")
// and on GitHub Pages (base "/Portfolio/"). Always pass a path with no leading slash.
const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const JOBS = [
  {
    id: '01',
    role: '3D GENERALIST & ENVIRONMENT ARTIST',
    date: 'AUG 2025 — FEB 2026',
    org: 'The AutoFocus Studio | Full Time',
    orgLogo: asset('assets/logos/AF.png'),
    bullets: [
      'Delivered high-fidelity visualizations and technical artwork for studio projects and clients across environment design and generalist 3D workflows.',
      'Worked on the launch campaign for the Hyundai Creta N Line Knight Edition, creating 360° exterior imagery for the website.',
    ],
  },
  {
    id: '02',
    role: 'CO-LEAD',
    date: 'NOV 2022 — MAR 2025',
    org: 'Ninja Fellowship | Part Time',
    orgLogo: asset('assets/logos/NF.png'),
    bullets: ['Led a team of 3D artists over 2+ years, coordinating delivery of visual assets for multiple brand engagements.'],
  },
  {
    id: '03',
    role: 'AUTOMOTIVE & PRODUCT VISUALIZER',
    date: 'APR 2019 — AUG 2025',
    org: 'Freelance',
    orgLogo: asset('assets/logos/FL.png'),
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
  orgLogo: asset('assets/logos/IEM.png'),
  bullets: ['Optimized performance of tri-layer, lead-free, carbon-based perovskite solar cells using machine learning; authored a full technical report.'],
  paper: asset('assets/paper.pdf'),
  certificate: asset('assets/Intern.pdf'),
}

const CERTIFICATIONS = [
  {
    id: '01',
    name: 'Business Intelligence & Analytics',
    issuer: 'NPTEL, IIT Madras',
    date: "JUN '25",
    cert: asset('assets/BIAA.pdf'),
    image: asset('assets/CertPreviews/BIAA.png'),
  },
  {
    id: '02',
    name: 'Cloud Computing',
    issuer: 'NPTEL, IIT Kharagpur',
    date: "JUN '25",
    cert: asset('assets/CC.pdf'),
    image: asset('assets/CertPreviews/CC.png'),
  },
  {
    id: '03',
    name: 'Joy of Computing with Python',
    issuer: 'NPTEL, IIT Ropar',
    date: "NOV '24",
    cert: asset('assets/TJOCWP.pdf'),
    image: asset('assets/CertPreviews/TJOCWP.png'),
  },
  {
    id: '04',
    name: 'Introduction to IoT',
    issuer: 'Coursera, UC San Diego',
    date: "OCT '24",
    cert: asset('assets/IoT.pdf'),
    image: asset('assets/CertPreviews/IoT.png'),
  },
]

const LEADERSHIP = [
  {
    id: '01',
    org: 'Computer Society of India – UEM',
    orgLogo: asset('assets/logos/csi.png'),
    tenure: "MAR '25 — PRESENT",
    positions: [
      { role: 'Vice President', date: "JAN '26 — PRESENT", current: true, duties: ['Manage the full CSI Team alongside the President.', 'Plan events and initiaves and also guide the team on how to execute them.'] },
      { role: 'Manager', date: "AUG '25 — JAN '26", current: false, duties: ['Manage the teams and their workforce and resources.'] },
      { role: 'Graphics Lead', date: "MAR '25 — JAN '26", current: false, duties: ['Lead the graphics team and execute graphics initiatives.'] },
    ],
  },
  {
    id: '02',
    org: 'Iris, UEMK Photography Society',
    orgLogo: asset('assets/logos/iris.png'),
    tenure: "SEP '24 — AUG '25",
    positions: [
      { role: 'Tech/Media/Graphics Lead', date: "SEP '24 — AUG '25", current: false, duties: ['Lead the tech/media/graphics team and execute initiatives.'] },
    ],
  },
  {
    id: '03',
    org: 'Class Rep',
    orgLogo: asset('assets/logos/IEM.png'),
    tenure: "JAN '26 — PRESENT",
    positions: [
      { role: 'Class Rep', date: "JAN '26 — PRESENT", current: true, duties: ['Manage class duties and responsibilities.'] },
    ],
  },
]

function JobHeader({ job }) {
  return (
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
  )
}

function JobExtras({ job }) {
  return (
    <>
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
          [VIEW REPORT ↗]
        </a>
      )}
      {job.certificate && (
        <a
          href={job.certificate}
          target="_blank"
          rel="noreferrer"
          className="data-sub-value"
          style={{ color: 'var(--blue)', textDecoration: 'none', display: 'block', marginTop: 6, fontWeight: 900 }}
        >
          [VIEW CERTIFICATE ↗]
        </a>
      )}
    </>
  )
}

function JobRow({ job }) {
  return (
    <div className="data-table">
      <div className="data-row" style={{ borderTop: 'none' }}>
        <span className="data-label">{job.id}</span>
        <div className="data-value-group" style={{ textAlign: 'left', marginLeft: 0, flexGrow: 1 }}>
          {job.orgLogo ? (
            <div className="job-row-with-logo">
              <span className="job-org-logo-badge">
                <img src={job.orgLogo} alt="" className="job-org-logo" />
              </span>
              <div className="project-divider"></div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <JobHeader job={job} />
                <span className="data-sub-value" style={{ lineHeight: 1.6 }}>
                  {job.org}
                  <br />
                  <JobExtras job={job} />
                </span>
              </div>
            </div>
          ) : (
            <>
              <JobHeader job={job} />
              <span className="data-sub-value" style={{ lineHeight: 1.6 }}>
                {job.org}
                <br />
                <JobExtras job={job} />
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function LeadershipHeader({ item }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        width: '100%',
        marginBottom: 5,
      }}
    >
      <span className="data-value">{item.org}</span>
      <span
        style={{
          fontWeight: 900,
          color: 'var(--text)',
          fontSize: '0.9rem',
          textAlign: 'right',
          whiteSpace: 'nowrap',
        }}
      >
        {item.tenure}
      </span>
    </div>
  )
}

function LeadershipPositions({ positions }) {
  return (
    <>
      {positions.map((p) => (
        <span key={p.role} style={{ display: 'block', marginTop: 6 }}>
          •{' '}
          <span style={{ color: 'var(--blue)', fontWeight: 900 }}>
            {p.role}
          </span>
          <span className="sep">|</span>
          {p.date}
          {p.duties.map((d) => (
            <span key={d} style={{ color: 'var(--text)', display: 'block', marginTop: 4, marginLeft: 16 }}>
              – {d}
            </span>
          ))}
        </span>
      ))}
    </>
  )
}

function CertItem({ cert }) {
  return (
    <div className="cert-item">
      <span className="data-label">{cert.id}</span>
      <a
        href={cert.cert}
        target="_blank"
        rel="noreferrer"
        className="cert-thumb-link"
        aria-label={`View ${cert.name} certificate`}
      >
        <img src={cert.image} alt={`${cert.name} certificate preview`} className="cert-thumb" />
        <span className="cert-thumb-overlay">VIEW ↗</span>
      </a>
      <div className="project-divider"></div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <span className="data-value" style={{ fontSize: '0.85rem', display: 'block', marginBottom: 3 }}>
          {cert.name}
        </span>
        <span className="data-sub-value" style={{ fontSize: '0.78rem' }}>
          {cert.issuer}
        </span>
        <span className="data-sub-value" style={{ fontSize: '0.72rem', display: 'block', marginTop: 2 }}>
          {cert.date}
        </span>
      </div>
    </div>
  )
}

function CertPairRow({ pair }) {
  return (
    <div className="data-table">
      <div className="data-row" style={{ borderTop: 'none' }}>
        <div className="cert-pair">
          {pair.map((cert) => (
            <CertItem cert={cert} key={cert.id} />
          ))}
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

          <p className="section-heading">INTERNSHIPS</p>
          <JobRow job={INTERNSHIP} />

          <p className="section-heading">CERTIFICATIONS</p>
          {CERTIFICATIONS.reduce((rows, cert, i) => {
            if (i % 2 === 0) rows.push([cert])
            else rows[rows.length - 1].push(cert)
            return rows
          }, []).map((pair, i) => (
            <CertPairRow pair={pair} key={i} />
          ))}

          <p className="section-heading">LEADERSHIP & EXTRACURRICULAR</p>
          {LEADERSHIP.map((l) => (
            <div className="data-table" key={l.id}>
              <div className="data-row" style={{ borderTop: 'none' }}>
                <span className="data-label">{l.id}</span>
                <div className="data-value-group" style={{ textAlign: 'left', marginLeft: 0, flexGrow: 1 }}>
                  {l.orgLogo ? (
                    <div className="job-row-with-logo">
                      <span className="job-org-logo-badge sm">
                        <img src={l.orgLogo} alt="" className="job-org-logo" />
                      </span>
                      <div className="project-divider"></div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <LeadershipHeader item={l} />
                        <span className="data-sub-value" style={{ lineHeight: 1.6 }}>
                          <LeadershipPositions positions={l.positions} />
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <LeadershipHeader item={l} />
                      <span className="data-sub-value" style={{ lineHeight: 1.6 }}>
                        <LeadershipPositions positions={l.positions} />
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
