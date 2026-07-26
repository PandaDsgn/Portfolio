import SplitText from './SplitText.jsx'

export default function PageHeader({ text }) {
  return (
    <header className="sub-page-header">
      <SplitText as="h1" text={text} className="split-me" />
    </header>
  )
}
