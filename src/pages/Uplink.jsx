import { useState } from 'react'
import PageShell from '../components/PageShell.jsx'
import PageHeader from '../components/PageHeader.jsx'

const FORM_ENDPOINT = 'https://formspree.io/f/xzdelkkb'

export default function Uplink() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const buttonLabel =
    status === 'sending' ? 'SENDING...' : status === 'sent' ? 'SENT' : status === 'error' ? 'RETRY_SEND' : 'SEND'

  return (
    <PageShell>
      <div className="bold-profile-grid" style={{ gridTemplateColumns: '1fr' }}>
        <div className="profile-intel">
          <div className="data-table">
            <div className="data-row" style={{ borderTop: 'none' }}>
              <span className="data-label">01</span>
              <div className="data-value-group" style={{ textAlign: 'left', marginLeft: 0, flexGrow: 1 }}>
                <span className="data-value">DIRECT CONTACTS</span>
                <div style={{ marginTop: 10 }}>
                  <a
                    href="mailto:vedantabandyopadhyay@gmail.com"
                    className="data-sub-value"
                    style={{ textDecoration: 'none', cursor: 'default', textTransform: 'lowercase' }}
                  >
                    vedantabandyopadhyay@gmail.com
                  </a>
                  <span className="data-sub-value" style={{ marginTop: 5, display: 'block' }}>
                    +91 90381 01994
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="data-table">
            <div className="data-row" style={{ borderTop: 'none' }}>
              <span className="data-label">02</span>
              <div className="data-value-group" style={{ textAlign: 'left', marginLeft: 0, flexGrow: 1 }}>
                <span className="data-value">GET IN TOUCH</span>

                <form id="uplink-form" className="uplink-form" onSubmit={handleSubmit}>
                  <div className="input-group">
                    <label htmlFor="name" className="input-label">
                      IDENTITY [NAME]
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="tech-input"
                      required
                      autoComplete="off"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email" className="input-label">
                      RETURN ADDRESS [EMAIL]
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="tech-input"
                      required
                      autoComplete="off"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="message" className="input-label">
                      DIRECTIVE [MESSAGE]
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="tech-input"
                      rows="4"
                      required
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button type="submit" className="transmit-btn" id="transmit-btn" disabled={status === 'sending'}>
                    {buttonLabel}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
