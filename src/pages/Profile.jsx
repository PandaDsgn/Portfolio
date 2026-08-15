import PageShell from '../components/PageShell.jsx'
import PageHeader from '../components/PageHeader.jsx'
import SplitText from '../components/SplitText.jsx'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa6'
import { SiGithub, SiBehance, SiInstagram } from 'react-icons/si'

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
            I am a 21 year old tech enthusiast, currently pursuing a Bachelor's in <strong>Electronics &amp; Communication Engineering</strong>. And if you can't already tell, I kind of like the colour <strong className="text-blue">blue</strong>.
            <br />
            <br />
            I enjoy working on multiple different domains of software development, including <strong>Full-Stack, Cloud-Deployed applications</strong> and <strong>IoT</strong> platforms. As an Electronics Engineer I also like working on <strong>Embedded Systems</strong>, and <strong>Low Power Systems</strong>. Furthermore I enjoy practising <strong>competitive-programming</strong>.
            <br />
            <br />
            I also love cars and have always had a knack for <strong>Graphic Designing</strong>, which led me to have a professional career in <strong>Automotive Visualisation</strong> for nearly a decade where I worked with multiple clients as a freelancer as well as an employed artist under the role of a <strong>3D Generalist and Environment Artist</strong>. I started back in High School during Covid lockdowns and got heavily invested.
            </p>

          <div className="data-table">
            <div className="data-row" style={{ borderTop: 'none' }}>
              <span className="data-label">CONTACT</span>
              <div className="data-value-group" style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end' }}>
                <a
                  href="mailto:vedantabandyopadhyay@gmail.com"
                  className="tech-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    textTransform: 'lowercase',
                    fontSize: '0.95rem',
                  }}
                >
                  <FiMail size={16} />
                  vedantabandyopadhyay@gmail.com
                </a>
                <a
                  href="tel:+919038101994"
                  className="tech-link"
                  style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.95rem' }}
                >
                  <FiPhone size={16} />
                  +91 90381 01994
                </a>
                <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
                  <a
                    href="https://www.linkedin.com/in/vedantabandyopadhyay/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-link"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <FaLinkedin size={17} />
                  </a>
                  <a
                    href="https://github.com/PandaDsgn"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-link"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <SiGithub size={16} />
                  </a>
                  <a
                    href="https://www.behance.net/panda_designz"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-link"
                    aria-label="Behance"
                    title="Behance"
                  >
                    <SiBehance size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/panda._.designz"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-link"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <SiInstagram size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

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
