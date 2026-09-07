import { useState } from 'react'
import { partnerTypes } from '../data'

export default function PartnerForm() {
  const [status, setStatus] = useState('idle')

  function handleSubmit(event) {
    event.preventDefault()
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div className="form-success" role="status">
        <h3>Thank you. We will be in touch.</h3>
        <p>
          A member of the UDMH partnerships team will review your note and follow up
          shortly.
        </p>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Full name
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Organisation
          <input name="organisation" type="text" autoComplete="organization" />
        </label>
        <label>
          I am a
          <select name="role" required defaultValue="">
            <option value="" disabled>
              Select a role
            </option>
            {partnerTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        How can we work together?
        <textarea name="message" rows="5" required />
      </label>
      <button type="submit" className="btn btn-primary">
        Send message
      </button>
    </form>
  )
}
