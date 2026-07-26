import PageShell from '../components/PageShell.jsx'
import PageHeader from '../components/PageHeader.jsx'

function SkillList({ items }) {
  return items.map((item, i) => (
    <span key={item}>
      {item}
      {i < items.length - 1 && <span className="sep">|</span>}
    </span>
  ))
}

const GROUPS = [
  {
    id: '01',
    title: 'LANGUAGES',
    items: ['Python', 'C/C++', 'Java', 'JavaScript', 'Rust', 'SQL'],
  },
  {
    id: '02',
    title: 'WEB & BACKEND',
    items: ['React.js', 'Node.js', 'Express.js', 'Flask', 'REST API design', 'HTML/CSS'],
  },
  {
    id: '03',
    title: 'DATABASES & REAL-TIME',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'LISTEN/NOTIFY pub-sub', 'Server-Sent Events (SSE)'],
  },
  {
    id: '04',
    title: 'CLOUD, AUTH & DEVOPS',
    items: ['AWS', 'Firebase (Auth/Firestore)', 'CI/CD pipelines', 'Render', 'GitHub Pages', 'Git/GitHub', 'RBAC'],
  },
  {
    id: '05',
    title: 'AI / MACHINE LEARNING',
    items: ['Scikit-learn', 'LangChain', 'RAG', 'Hugging Face', 'Deep Learning (CNNs)', 'Computer Vision', 'LLM/Gemini API integration'],
  },
  {
    id: '06',
    title: 'DATA STRUCTURES & ALGORITHMS',
    items: ['Competitive programming (arrays, graphs, DP, prefix sums, BFS, tree algorithms, Euler tour/LCA)'],
  },
  {
    id: '07',
    title: 'EMBEDDED & IOT',
    items: [
      'Arduino',
      'Raspberry Pi',
      'Jetson',
      'KiCAD',
      'Cadence Virtuoso',
      'LTSpice',
      'HFSS',
      'MATLAB',
      'IoT sensor integration (DHT11, HC-SR04, LDR)',
    ],
  },
  {
    id: '08',
    title: 'CAD & 3D (FREELANCE DOMAIN)',
    items: ['AutoCAD', 'SolidWorks', 'Fusion 360', 'Blender3D', 'Maya', '3ds Max', 'V-Ray/Corona/KeyShot rendering'],
  },
]

export default function Skillsets() {
  return (
    <PageShell>
      <PageHeader text="SKILLSETS" />
      <div className="bold-profile-grid" style={{ gridTemplateColumns: '1fr' }}>
        <div className="profile-intel">
          {GROUPS.map((group) => (
            <div className="data-table" key={group.id}>
              <div className="data-row">
                <span className="data-label">{group.id}</span>
                <div className="data-value-group" style={{ textAlign: 'left', marginLeft: 0, flexGrow: 1 }}>
                  <span className="data-value">{group.title}</span>
                  <span className="data-sub-value">
                    <SkillList items={group.items} />
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
