import PageShell from '../components/PageShell.jsx'
import PageHeader from '../components/PageHeader.jsx'
import SplitText from '../components/SplitText.jsx'
import { FiMapPin } from 'react-icons/fi'

export default function Profile() {
  return (
    <PageShell>
      <PageHeader text="PROFILE" />

      <div className="bold-profile-grid">
        <div className="profile-image-wrapper">
          <img src="assets/avatar.png" alt="PROFILE_PHOTO" />
        </div>

        <div className="profile-intel">
          <SplitText as="h2" text="Vedanta" className="split-me" />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              color: 'var(--light)',
              fontWeight: 900,
              fontSize: '0.85rem',
              letterSpacing: 1,
              marginTop: -20,
              marginBottom: 30,
            }}
          >
            <FiMapPin size={15} />
            KOLKATA, INDIA
          </div>

          <p className="bio-large" style={{ marginBottom: 40 }}>
            I am a 21 year old tech enthusiast, currently pursuing a <strong>B.Tech in Electronics &amp; Communication Engineering</strong>.
            <br />
            <br />
            I enjoy working on multiple different domains of software development, including <strong>Full-Stack, Cloud-Deployed applications</strong> and <strong>IoT</strong> platforms. As an Electronics Engineer I also like working on <strong>Embedded Systems</strong>, and <strong>Low Power Systems</strong>.
            <br />
            <br />
            Furthermore I enjoy practising <strong>competitive-programming.</strong> I also love cars and have always had a knack for <strong>Graphic Designing</strong>, which led me to have a professional career in <strong>Automotive Visualisation</strong> for nearly a decade and worked with multiple clients as a freelancer as well as employed artist as a <strong>3D Generalist and Environment Artist</strong>.
          </p>

          <div className="data-table">
            <div className="data-row" style={{ borderTop: 'none' }}>
              <span className="data-label">BACHELOR'S</span>
              <div className="data-value-group">
                <span className="data-value">INSTITUTE OF ENGINEERING AND MANAGEMENT</span>
                <span className="data-sub-value">
                  Major | <span style={{ color: 'var(--text)' }}>Electronics and Communication Engineering</span>
                  <br />
                  Minor | <span style={{ color: 'var(--text)' }}>Computer Science Engineering (Internet of Things)</span>
                  <br />
                  Expected 2027 <span className="sep">|</span> CGPA: <span style={{ color: 'var(--text)' }}>8.86</span>
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

            <div className="data-row" style={{ borderTop: 'none' }}>
              <span className="data-label">RESUME</span>
              <div className="data-value-group">
                <a
                  href="assets/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="resume-thumb-link"
                  aria-label="View compiled resume"
                >
                  <img src="assets/CertPreviews/Resume.png" alt="Resume preview" className="resume-thumb" />
                  <span className="cert-thumb-overlay">VIEW ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
