---
title: 'The complete guide to building React forms with useState Hook'
date: 19-09-2021
fullDate: Sunday, 19 September 2021
tags: React forms, React Hooks
image: ../../posts-images/signup-form.png
description: "In this tutorial, You will learn how to build forms with one or more input fields using JSX. You will retrieve the form data when submitted and save it to state using useState hook."
---

In this tutorial, You'll learn how to build forms with one or more input fields using JSX. You will understand how a form moves from an uncontrolled state to a controlled state with React. 
Next, you will retrieve the form data when submitted and save it to state using useState hook. Finally, you will pass form data as props to a component and have the component render the data on the browser.

To show how this works, We will be building a Contact form with three input fields for the contact's name, email, and phone number. when the form is submitted, the form data will be saved in a contacts state and passed to a contact list component, where it is rendered to the browser.

If you want a quick overview of how to build forms with multiple input fields using react hook, you can view it [here](https://www.agirl.codes/post/how-to-build-forms-with-multiple-input-fields-using-react-hooks). This article will beginner-focused as I will walk you through;

- how to set up a basic React app using create-react-app
- how React converts an uncontrolled form to a controlled form component.
- how to retrieve the form data and pass it as props to another component.
- Create a React functional component that takes the form data as props and renders it to the browser.

Here's a link to the Project on [Github](https://github.com/Kellswork/contact-info).

### 1. Build a simple React form with multiple input fields

```jsx
npx create-react-app contact-info

```

Get rid of everything you don't need, here's a link to what my app looks like after getting rid of content and files I don't need; [Cleanup application](https://github.com/Kellswork/contact-info/tree/cleanup-application)

In the src folder, create a file `src/components/ContactForm.jsx`, here we will build our form and import it into `App.js` to be rendered.


```jsx

export default function UserForm() {

  return (
    <div>
      <form>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="number"
            name="phonenumber"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <button>Submit Contact</button>
        </div>
      </form>
    </div>
  );
}

```

Here I have a `<div>` tag that serves as the container. It contains `<form>` tag with a `<h3>` title tag and three `<input>` tags for `name` ,`phone number` and `email` wrapped in `<div>` tags, and a submit button for submitting the form data.

 I also added the types as HTML uses it to provide a bit of validation for us. It will check that whatever the user input for `email` is an email and for `phone number`, must be a Number.

Import `UserForm.jsx` into `App.js` to see the form rendered on your browser.

``` jsx
import ContactForm from "./components/ContactForm.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App;

```
### 2. Converting JSX Form to a Controlled Form with React Hooks

Now that we have a simple form being rendered on the browser, we are going to convert the form input state to be controlled by React. By default, forms handle their own state. Converting the form to a controlled state is telling React to take over the form state from the browser with the following ways;

- Create a `state` object that will be used to store the form data. This form state will be handled by React using the `useState` hook.
- Add the `value` property to the form, and assign it to the `state` object properties.
- Add an `onChange event listener` function to handle updating the form state.

`useState` is a React hook used to manage state in functional components. 

`state` is the information we don't want to lose while the page re-renders.

Navigate to `src/components/ContactForm.jsx` , import `useState` hook from react.

Create a  `contact` state object with the form input names as the properties.

Add `value` property to each input field and set the value to contact object property as illustrated below.


```jsx

import { useState } from "react";

export default function UserForm() {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });

  return (
    <div className="form-container">
      <form>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contactInfo.name}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contactInfo.email}
          />
        </div>
        <div>
          <input
            type="number"
            name="phonenumber"
            placeholder="Phone Number"
            value={contactInfo.phonenumber}
          />
        </div>
        <div>
          <button>Submit Contact</button>
        </div>
      </form>
    </div>
  );
}

```

Right now, we have given React control over the form but we are yet to update the input fields.

we are setting the `value` in the input fields to the `contact` state properties.

 If you check your form in the browser, you will realise you can't type in the input fields, that's because we are yet to provide a way for React to track the value of input elements.
 