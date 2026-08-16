import PageHeader from '../components/PageHeader.jsx'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa6'
import { SiGithub, SiBehance, SiInstagram } from 'react-icons/si'

export default function Profile() {
  return (
    <section id="profile" className="content-section">
      <PageHeader text="PROFILE" />

      <div className="bold-profile-grid" style={{ gridTemplateColumns: '1fr' }}>
        <div className="profile-intel">
          <h2>Vedanta Bandyopadhyay</h2>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              color: 'var(--blue)',
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

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 30 }}>
            <a href="mailto:vedantabandyopadhyay@gmail.com" className="tech-link" aria-label="Email" title="Email">
              <FiMail size={16} />
            </a>
            <span className="sep">|</span>
            <a href="tel:+919038101994" className="tech-link" aria-label="Phone" title="Phone">
              <FiPhone size={16} />
            </a>
            <span className="sep">|</span>
            <a
              href="https://www.linkedin.com/in/vedantabandyopadhyay/"
              target="_blank"
              rel="noreferrer"
              className="tech-link"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <span className="sep">|</span>
            <a
              href="https://github.com/PandaDsgn"
              target="_blank"
              rel="noreferrer"
              className="tech-link"
              aria-label="GitHub"
              title="GitHub"
            >
              <SiGithub size={16} />
            </a>
            <span className="sep">|</span>
            <a
              href="https://www.behance.net/panda_designz"
              target="_blank"
              rel="noreferrer"
              className="tech-link"
              aria-label="Behance"
              title="Behance"
            >
              <SiBehance size={16} />
            </a>
            <span className="sep">|</span>
            <a
              href="https://www.instagram.com/panda._.designz"
              target="_blank"
              rel="noreferrer"
              className="tech-link"
              aria-label="Instagram"
              title="Instagram"
            >
              <SiInstagram size={16} />
            </a>
          </div>

          <p className="bio-large" style={{ marginBottom: 40 }}>
            I am a 21 year old guy, currently pursuing a Bachelor's in <strong>Electronics &amp; Communication Engineering</strong>.
            <br />
            <br />
            I enjoy working on multiple different domains of development, including <strong>Full-Stack, Cloud-Deployed applications</strong> and <strong>IoT</strong> (sensors and devboards). As an Electronics Engineer I also like working on <strong>Embedded Systems</strong>, and <strong>Low Power Systems</strong>. Furthermore I enjoy practising <strong>competitive-programming</strong>.
            <br />
            <br />
            I also love cars and have always had a knack for <strong>Graphic Designing</strong>, which led me to have a professional career in <strong>Automotive Visualisation</strong> for nearly a decade where I worked with multiple clients as a freelancer as well as an employed artist under the role of a <strong>3D Generalist and Environment Artist</strong>. I started back in High School during Covid lockdowns and got heavily invested.
            <br />
            <br />
            And if you can't already tell, I kind of like the colour <strong className="text-blue">blue</strong>.
            <br />
          </p>

          <div className="data-table">
            <div className="data-row" style={{ borderTop: 'none', alignItems: 'center' }}>
              <span className="data-label">RESUME</span>
              <span style={{ flex: 1, textAlign: 'center', color: 'var(--blue)', fontWeight: 900 }}>
                Learn more about me professionally
              </span>
              <div className="data-value-group" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
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
    </section>
  )
}
