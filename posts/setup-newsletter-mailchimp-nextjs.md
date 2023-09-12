---
title: 'Setup a Newsletter with Next.js and Mailchimp'
date: 29-10-2021
fullDate: Friday, 29 October 2021
tags: Next JS, React
description: 'In this tutorial, you will learn how to set up a Newsletter on your Next Js blog with Mailchimp.'
image: '/posts-images/next-mailchimp.jpg'
url: '/setup-newsletter-mailchimp-nextjs'
---

Having a Newsletter subscription on your blog can be beneficial. It provides a way for you to keep your readers up to date with your content, drive traffic to your blog, and It is a great way to communicate with your readers.

In this tutorial, you will learn how to set up a Newsletter on your Next Js blog with Mailchimp.

### Why Mailchimp?
MailChimp is a popular online marketing tool that you can use to manage your email list when you start getting subscribers. They have a free version for people with 2000 contacts or less. It's good enough for people beginning their newsletter journey.

### Mailchimp Setup
To get started, [create an account with Mailchimp](https://mailchimp.com/help/create-an-account/). When a user subscribes to your newsletter, the email address is added to your `Audience`. Mailchimp gives you `API Keys` that you can use in other apps to access your account.

To connect to the API we will need three environmental variables from Mailchimp;

- [your generated API Key](https://mailchimp.com/help/about-api-keys/#find+or+generate+your+api+key)
- [API Server](https://mailchimp.com/developer/marketing/guides/quick-start/#make-your-first-api-call)
- [Audience Id](https://mailchimp.com/help/find-audience-id/)


### Get started with Next Js

We will need a form to collect the user’s email and an API that will receive the form submission and save the email on Mailchimp. Luckily, NextJs provides us with the ability to do both without creating a separate backend application using NodeJs.

All we need to create a simple API is to create a pages/api folder in our next Js application. Next Js will map any file inside to /api/* directory and it will becomes an endpoint instead of a page.

We can now begin by creating a fresh NextJs application by running the following command.

```js
npx create-next-app@latest
```

### Setup environment variables for development and production
It's best practice to store environment variables in `.env` files, do not push your environment variables to your remote branch. remember to add the `.env.local` file to .gitignore.

**Local Setup**

Create a `.env.local` file. file in the root folder of your next js application. Place your environment variables in that file:
```js
MAILCHIMP_API_KEY="your-mailchimp-api-key"
MAILCHIMP_AUDIENCE_ID="your-mailchimp-audience-id"
MAILCHIMP_API_SERVER="your-api-server-prefix"
```

**Production Setup**

I have my blog app deployed on Netlify. 

[To add these variables to Netlify](https://docs.netlify.com/configure-builds/environment-variables/), go to Site settings > Build & deploy > Environment > Edit Variables.

[Add environment variables in Vercel](https://vercel.com/docs/concepts/projects/environment-variables).

### Create Server-side API request

Create `pages/api/subscribe.js` and paste the following code inside it: 

```jsx
import axios from 'axios'

export default async (req, res) => {
  const { email } = req.body

  if (!email || !email.length) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY
  const API_SERVER = process.env.MAILCHIMP_API_SERVER
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
  
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

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

  try {
    const response = await axios.post(url, data, options)
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter. Shoot me an email at ogbonnakell@gmail and I'll add you to the list.`
      })
    }
    return res.status(201).json({ message: 'success' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}
```
[Axios](https://www.npmjs.com/package/axios) provides a simple and clean way for us to make API requests. We are importing it inside the `subscribe.js` file because we will use it to make a post request to the [Mailchimp marketing API](https://mailchimp.com/developer/marketing/api/list-members/add-member-to-list/). Be sure to install it using the following command:

```js
npx install axios
```

We are creating an async function that takes a `request` and `response` as parameters. This is the function that handles our API request.

The If block adds a validation check so that the email request body isn't an empty string.

Use `process.env` to grab the env variables, update the Mailchimp URL with the env variable.

Create a data object containing the email address and a subscribed status. An `option` object that tells the content type and sets the authorisation header to your `api_key`.

The code in the `try block` makes a post request to the URL endpoint using axois with the data and options passed in as parameters. 

If the email input field is empty or invalid, a 400(bad request
) status error response is returned, else a 201(created) status response is returned. In case of any other errors, a 500 server error is returned. 

**Note**: It's important to be sure of the arguments Mailchimp API takes. While working on this, I added a `first name` input field to the data object and the API kept returning a 500 server error. I studied what the Mailchimp API takes in as arguments and that solved the server response problem for me. That is after trying to get a form field for `first name` and `email` to work. The moral of this part is to be sure of the data structure the  API will need before creating the frontend UI for it.

To add additional params, [see the full list of available params](https://mailchimp.com/developer/marketing/api/list-members/add-member-to-list/).

### Create Newsletter form component
 Now we have an API that takes an email and submits it to Mailchimp API. Let's create the client-side UI where user can input their email to subscribe. I used `styled-components` for styling the form component.

Create a `Subscribe.js` file in `src/components` folder with the following code:

```jsx

function Subscribe() {

  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async (e) => {
    e.preventDefault()
    setState('Loading')

    try {
      const response = await axios.post('/api/subscribe', { email })
      console.log(response)
      setState('Success')
      setEmail('')
    } catch (e) {
      console.log(e.response.data.error)
      setErrorMsg(e.response.data.error)
      setState('Error')
    }
  }

  return (
    <SubscribeContainer>
      <h4 className="sub-header">Subscribe to the newsletter</h4>
      <p className="sub-text">
        Get to notified on quality articles about frontend development and more
        sent to your inbox. I'll send you an email once a month, no spam.
      </p>
      <form onSubmit={subscribe}>
        <SubFormContainer>
          <div className="form-input">
            <input
              required
              id="email-input"
              name="email"
              type="email"
              placeholder="What's your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="sub-form-btn">
            <button
              disabled={state === 'Loading'}
              type="submit"
              className="form-btn"
              onClick={subscribe}
            >
              Subscribe
            </button>
          </div>
        </SubFormContainer>
        {state === 'Error' && (
          <ErrorState className="error-state">{errorMsg}</ErrorState>
        )}
        {state === 'Success' && (
          <SuccessState>Awesome, you've been subscribed!</SuccessState>
        )}
      </form>
    </SubscribeContainer>
  )
}

export default Subscribe

```

In this component, I am creating three state variables:
- email 
- loading
- error

When a user clicks the `Subscribe button`, *Subscribe function* is called.
The state is set to `Loading` while the request is being made to the API.

Based on the response we get, the state is either set to `Success` for a successful submission or `Error` and returns an error message.

While waiting for the server response, the state is set to `Loading`, the button is set to `disabled`. I did this to prevent users from clicking the button again and as a way to let them know their request is processing.

```jsx

{
  state === 'Error' && (
    <ErrorState className="error-state">{errorMsg}</ErrorState>
  );
}
{
  state === 'Success' && (
    <SuccessState>Awesome, you've been subscribed!</SuccessState>
  );
}

```
This displays the API response to the client. If there are no errors, the email is added to your Mailchimp audience dashboard.

### Fix API route not found in a Next.js App Production Environment.

Be sure to test your subscription form in the production environment. While my subscribe form worked well locally,  I discovered it wasn't working in production. It returned a `404 not found` error. The reason was that [API Routes can't be used with next export](https://nextjs.org/docs/api-routes/introduction#caveats). After removing `next export` from my build script, It worked as expected.

**Final Result**

 ![newsletter](/posts-images/newsletter-blog.jpg)


### Conclusion

To view the complete code, checkout out my blog source code on [GitHub](https://github.com/Kellswork/agirl.codes/blob/main/pages/api/subscribe.js).

I hope this article was helpful. If you have any questions or comments, do share on [medium](https://medium.com/@agirlcodes/setup-a-newsletter-with-next-js-and-mailchimp-d9933cfd785e)

*Recommended Reads*

- [How to sort next js blog posts by most recent post date.](https://www.agirlcodes.dev/sort-nextjs-blog-posts-by-date)

- [Find out how I solved this Jest storybook react interopRequireDefault.js test error.](https://www.agirlcodes.dev/storybook-test-error-cannot-find-interopRequireDefaultjs)

- [The Complete Guide to Building React Forms with useState Hook.](https://www.agirlcodes.dev/complete-guide-build-react-forms-with-usestate-hook)
