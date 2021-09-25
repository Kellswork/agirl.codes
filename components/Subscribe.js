import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const SubscribeContainer = styled.div`
  margin: 20px 0px;
  padding: 24px;
  max-width: 768px;
  box-sizing: border-box;
  border: 1px solid #d0d0032e;
  background: #fbfc1c47;

  .sub-header {
    font-size: 1.25rem;
    font-weight: bold;
  }
  .sub-text {
    margin-top: 10px;
    margin-bottom: 20px;
    color: #2d3748;
    line-height: 1.5;
  }
`
const SubFormContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 531px) {
    width: 100%;
    display: block;
  }

  .form-input {
    width: 78%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    font-size: 16px;
    @media (max-width: 531px) {
      width: 70%;
      display: block;
    }
  }
  .form-input input {
    outline: #f9fafb;
    display: block;
    width: 41%;
    background-color: #f9fafb;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 4px;
    border: 1px solid #6a4feb2e;
    @media (max-width: 680px) {
      width: 40%;
    }
    @media (max-width: 531px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .sub-form-btn {
    margin-left: 10px;

    .form-btn {
      padding-top: 0.7rem;
      padding-bottom: 0.7rem;
      padding-left: 1.2rem;
      padding-right: 1.2rem;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      background: #7f5bd5b0;
      color: #ff0;
      cursor: pointer;
    }
    @media (max-width: 531px) {
      margin-top: 10px;
      margin-left: 0;
    }
  }
`

function Subscribe() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async (e) => {
    e.preventDefault()

    setState('Loading')

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
    <SubscribeContainer>
      <h4 className="sub-header">Subscribe to the newsletter</h4>
      <p className="sub-text">
        Get to notified on quality articles about frontend development and more
        sent to your inbox. I'll send you a an email once a month, no spam.
      </p>
      <form onSubmit={subscribe}>
        <SubFormContainer>
          <div className="form-input">
            <input
              required
              id="email-input"
              name="email"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id="first-name"
              name="first-name"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="sub-form-btn">
            <button
              disabled={state === 'loading'}
              type="submit"
              className="form-btn"
              onClick={subscribe}
            >
              Subscribe
            </button>
          </div>
          
        </SubFormContainer>
      </form>
    </SubscribeContainer>
  )
}

export default Subscribe
