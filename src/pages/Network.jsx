import PageShell from '../components/PageShell.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SiBehance, SiGithub, SiInstagram } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'

const LINKS = [
  {
    id: '01',
    label: 'LINKEDIN',
    href: 'https://www.linkedin.com/in/vedantabandyopadhyay/',
    sub: 'Vedanta Bandyopadhyay',
    tag: 'PROFESSIONAL NETWORK',
    icon: FaLinkedin,
    color: '#0A66C2',
  },
  {
    id: '02',
    label: 'BEHANCE',
    href: 'https://www.behance.net/panda_designz',
    sub: 'panda_designz',
    tag: 'SELECTED VISUALISATION PROJECTS',
    icon: SiBehance,
    color: '#1769FF',
  },
  {
    id: '03',
    label: 'GITHUB',
    href: 'https://github.com/PandaDsgn',
    sub: (
      <>
        PandaDsgn
      </>
    ),
    tag: 'REPOSITORIES',
    icon: SiGithub,
    color: '#181717',
  },
  {
    id: '04',
    label: 'INSTAGRAM',
    href: 'https://www.instagram.com/panda._.designz',
    sub: '@panda_designz',
    tag: 'ALL VIZ PROJECTS',
    icon: SiInstagram,
    color: '#FF0069',
  },
]

export default function Network() {
  return (
    <PageShell>
      <PageHeader text="NETWORK" />
      <div className="bold-profile-grid" style={{ gridTemplateColumns: '1fr' }}>
        <div className="profile-intel">
          {LINKS.map((link) => (
            <div className="data-table" key={link.id}>
              <div className="data-row" style={{ borderTop: 'none' }}>
                <span className="data-label">{link.id}</span>
                <div className="data-value-group" style={{ textAlign: 'left', marginLeft: 0, flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span className="skill-icon-badge">
                      <link.icon className="skill-icon" style={{ color: link.color }} />
                    </span>
                    <a href={link.href} target="_blank" rel="noreferrer" className="tech-link" style={{ fontSize: '1.5rem' }}>
                      {link.label}
                    </a>
                  </div>
                  <span className="data-sub-value">{link.sub}</span>
                </div>
                <span className="data-label" style={{ textAlign: 'right', marginLeft: 20 }}>
                  {link.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
