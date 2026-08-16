import PageHeader from '../components/PageHeader.jsx'
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiRust,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiRender,
  SiGithubpages,
  SiGit,
  SiGithub,
  SiScikitlearn,
  SiLangchain,
  SiHuggingface,
  SiArduino,
  SiRaspberrypi,
  SiNvidia,
  SiKicad,
  SiLtspice,
  SiAnsys,
  SiBlender,
  SiTensorflow,
  SiMysql,
  SiDocker,
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa6'

// Every logo sits in a white circle. Brand colors are sourced from the
// simple-icons dataset (designed for use on a light background). A few marks
// (Rust, Express, Flask, Render, GitHub, GitHub Pages, LangChain) have no
// color set here — their canonical color is pure/near-black, so they fall
// back to black, which reads cleanly against the white circle.
function SkillList({ items }) {
  return (
    <div className="skill-chip-list">
      {items.map((item) => {
        // A few source logos (Keyshot, Nuke, DaVinci) bake in their own circular
        // padding, so at the standard 19px they read visibly smaller than every
        // other logo's padding. Bump those specific ones up via item.size.
        const sizeStyle = item.size ? { width: item.size, height: item.size } : undefined
        return (
          <span className="skill-chip" key={item.name}>
            <span className="skill-icon-badge">
              {item.icon && <item.icon className="skill-icon" style={{ color: item.color || '#000', ...sizeStyle }} />}
              {item.image && <img src={item.image} alt="" className="skill-icon" style={sizeStyle} />}
            </span>
            {item.name}
          </span>
        )
      })}
    </div>
  )
}

const GROUPS = [
  {
    id: '01',
    title: 'LANGUAGES',
    items: [
      { name: 'Python', image: 'assets/logos/Py.svg' },
      { name: 'C', image: 'assets/logos/C.webp' },
      { name: 'Java', image: 'assets/logos/Java.svg' },
      { name: 'JavaScript', image: 'assets/logos/JS.svg' },
    ],
  },
  {
    id: '02',
    title: 'OS Familiarity',
    items: [
      { name: 'Linux', image: 'assets/logos/Linux.svg' },
      { name: 'MacOS', image: 'assets/logos/Mac.svg' },
      { name: 'Windows', image: 'assets/logos/Windows.svg' },
    ],
  },
  {
    id: '03',
    title: 'WEB & BACKEND',
    items: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss, color: '#1572B6' },
    ],
  },
  {
    id: '04',
    title: 'DATABASES & REAL-TIME',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    id: '05',
    title: 'CLOUD, AUTH & DEVOPS',
    items: [
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Firebase', icon: SiFirebase, color: '#DD2C00' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    ],
  },
  {
    id: '06',
    title: 'AI / MACHINE LEARNING',
    items: [
      { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'LangChain', icon: SiLangchain },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },

    ],
  },
  {
    id: '07',
    title: 'EMBEDDED, IoT and Circuitry',
    items: [
      { name: 'Arduino', icon: SiArduino, color: '#00878F' },
      { name: 'Raspberry Pi', icon: SiRaspberrypi, color: '#A22846' },
      { name: 'Jetson', icon: SiNvidia, color: '#76B900' },
    ],
  },
  {
    id: '08',
    title: 'Simulation',
    items: [
      { name: 'KiCAD', icon: SiKicad, color: '#314CB0' },
      { name: 'Cadence Virtuoso', image: 'assets/logos/cadence.svg' },
      { name: 'LTSpice', icon: SiLtspice, color: '#900028' },
      { name: 'MATLAB', image: 'assets/logos/matlab.svg' },
    ],
  },
  {
    id: '09',
    title: 'CAD & 3D',
    items: [
      { name: 'AutoCAD', image: 'assets/logos/autocad.svg' },
      { name: 'Fusion 360', image: 'assets/logos/fusion.webp' },
      { name: 'Blender', icon: SiBlender, color: '#E87D0D' },
      { name: '3ds Max', image: 'assets/logos/3ds-max.svg' },
      { name: 'Corona', image: 'assets/logos/corona.svg' },
    ],
  },
  {
    id: '10',
    title: 'CG and Post Production',
    items: [
      { name: 'Adobe Suite', image: 'assets/logos/Adobe.svg' },
      { name: 'Nuke', image: 'assets/logos/Nuke.svg', size: 24 },
      { name: 'DaVinci Resolve', image: 'assets/logos/Dv.png', size: 24 },
    ],
  },
]

export default function Skillsets() {
  return (
    <section id="skillsets" className="content-section">
      <PageHeader text="SKILLSETS" />
      <div className="bold-profile-grid" style={{ gridTemplateColumns: '1fr' }}>
        <div className="profile-intel">
          {GROUPS.map((group) => (
            <div className="data-table" key={group.id}>
              <div className="data-row">
                <span className="data-label">{group.id}</span>
                <div className="data-value-group" style={{ textAlign: 'left', marginLeft: 0, flexGrow: 1 }}>
                  <span className="data-value">{group.title}</span>
                  <SkillList items={group.items} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
