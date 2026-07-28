import PageShell from '../components/PageShell.jsx'
import PageHeader from '../components/PageHeader.jsx'
import SplitText from '../components/SplitText.jsx'

export default function Profile() {
  return (
    <PageShell>
      {/* Original page disabled the .data-table corner-stripe decoration here */}
      <style>{`.profile-page-table .data-table::before { display: none !important; }`}</style>

      <PageHeader text="PROFILE" />

      <div className="bold-profile-grid">
        <div className="profile-image-wrapper">
          <img src="public/assets/avatar.png" alt="PROFILE_PHOTO" />
        </div>

        <div className="profile-intel profile-page-table">
          <SplitText as="h2" text="Vedanta" className="split-me" />

          <p className="bio-large" style={{ marginBottom: 20 }}>
            Software developer building <strong>full-stack, cloud-deployed applications</strong>,
            with a <strong>B.Tech in Electronics &amp; Communication Engineering (CGPA 8.86)</strong>{' '}
            and an active data-structures-and-algorithms practice.
            <br />
            <br />
            Shipped production-style systems spanning <strong>React/Node.js</strong> applications,{' '}
            <strong>PostgreSQL and Redis-backed backends with real-time pub-sub</strong>,{' '}
            <strong>cascaded LLM/AI integrations</strong>, and <strong>IoT platforms</strong> deployed
            on <strong>AWS, Render, and GitHub Pages</strong>.
            <br />
            <br />
            Pairs rigorous problem-solving and ongoing competitive-programming with a{' '}
            <strong>7+ year record</strong> of independently managing client-facing technical
            projects as a <strong>freelance CGI/3D engineer</strong>. Seeking software engineering
            roles where systems thinking, fast execution, and end-to-end ownership matter.
          </p>

          <a
            href="assets/resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'block',
              marginBottom: 60,
              color: 'var(--blue)',
              textDecoration: 'none',
              fontWeight: 900,
              fontSize: '0.85rem',
              letterSpacing: 1,
              transition: 'opacity 0.2s',
            }}
          >
            [VIEW COMPILED RESUME ↗]
          </a>

          <div className="data-table">
            <div className="data-row" style={{ borderTop: 'none' }}>
              <span className="data-label">BACHELOR'S</span>
              <div className="data-value-group">
                <span className="data-value">INSTITUTE OF ENGINEERING AND MANAGEMENT</span>
                <span className="data-sub-value">
                  B.Tech in Electronics and Communication Engineering
                  <br />
                  Expected 2027 <span className="sep">|</span> CGPA: 8.86
                </span>
              </div>
            </div>

            <div className="data-row" style={{ borderTop: 'none' }}>
              <span className="data-label">HIGHER SECONDARY</span>
              <div className="data-value-group">
                <span className="data-value">RAM MOHAN MISSION HIGH SCHOOL (ISC)</span>
                <span className="data-sub-value">73.2%</span>
              </div>
            </div>

            <div className="data-row" style={{ borderTop: 'none' }}>
              <span className="data-label">SECONDARY</span>
              <div className="data-value-group">
                <span className="data-value">RAM MOHAN MISSION HIGH SCHOOL (ICSE)</span>
                <span className="data-sub-value">94.5%</span>
              </div>
            </div>

            <div className="data-row" style={{ borderBottom: 'none', borderTop: 'none' }}>
              <span className="data-label">LOCATION</span>
              <div className="data-value-group">
                <span className="data-value">KOLKATA, INDIA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
