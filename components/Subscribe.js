import React, { useState } from 'react'
import axios from 'axios'

function Subscribe() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async () => {
    // setState('loading')
    try {
      const response = await axios.post('api/subscribe', { email })
      console.log(response)
      setState('Success')
    } catch (e) {
      setErrorMsg(e.response.data.error)
      setState('Error')
    }
  }

  return (
    <form onSubmit={subscribe}>
      <input
        required
        id="email-input"
        name="email"
        type="email"
        placeholder="What's your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" onClick={subscribe}>
        ✨ Subscribe 💌
      </button>
    </form>
  )
}

export default Subscribe
