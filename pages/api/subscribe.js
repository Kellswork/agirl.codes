import axios from 'axios'

export default (req, res) => {
  const { email } = req.body

  if (!email || !email.length) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY
  const LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID
  const DATA_CENTER = process.env.MAILCHIMP_API_KEY.split('-')[1]
  const url = `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`

  const data = {
    email_address: email,
    status: 'subscribed'
  }

  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `api_key ${API_KEY}`
    }
  }
  axios
    .post(url, data, options)
    .then((response) => {
      console.log('res', response)
      if (response.status >= 400) {
        return res.status(400).json({
          error: `There was an error subscribing to the newsletter. Shoot me an email at ogbonnakell@gmail and I'll add you to the list.`
        })
      }
      return res.status(201).json({ message: 'success' })
    })
    .catch((error) => {
      console.log(error)
      return res.status(500).json({ error: error.message })
    })
    
}
//steps:
    // get mailchimp api key, audience id,
    // install axios and setup  post request using Promise, i dunno if async works, 
    // pass the data need ( data, options and url), make sure not to make any mistakes in the url and data 
    // infact with any parameter being passed cause it could lead to an error message
    // move to componnents/subscribe