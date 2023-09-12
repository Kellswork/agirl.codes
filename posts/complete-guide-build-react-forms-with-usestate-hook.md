---
title: 'The Complete Guide to Building React Forms with useState Hook'
date: 27-09-2021
fullDate: Monday, 27 September 2021
tags: React forms, React Hooks
image: /posts-images/react-forms/guide-build-react-forms-with-usestate-hook.jpg
description: "This tutorial teaches how to build forms in react with uesState hook, how to pass the data as props to another react component and have it rendered to the browser"
url: '/complete-guide-build-react-forms-with-usestate-hook'
---

In this tutorial, You'll learn how to build forms with one or more input fields using JSX, understand how a html uncontrolled form transforms to a React controlled state form, retrieve the form data when submitted and save it to state using useState hook and finally, pass form data as props to a component and have the component render the data on the browser.

The project we will be building is a Contact form with three input fields for the contact's name, email, and phone number. when the form is submitted, the form data will be saved in a contacts state and passed to a contact list component, where it is rendered to the browser. 

If you want a quick overview of how to build forms with multiple input fields using react hook, you can view it [here](https://www.agirlcodes.dev/how-to-build-forms-with-multiple-input-fields-using-react-hooks). This article will beginner-focused or for anyone who wants to refresh their knowledge on react building React forms with useState hook.

### 1. Build a simple React form with multiple input fields

```jsx
npx create-react-app contact-info

```

Get rid of everything you don't need, here's a link to what my app looks like after getting rid of content and files I don't need; [Cleanup application](https://github.com/Kellswork/contact-info/tree/cleanup-application)

In the src folder, create a file `src/components/ContactForm.jsx`, this component  contains the code to build the form.


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

 Adding the `type` to the input field, HTML validates the email and number input.It will check that whatever the user inputs for `email` is an email and for `phone number`, must be a number.

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

Now that we have a simple form being rendered on the browser, we are going to convert the form input state to be controlled by React. By default, forms handle their own state. Converting the form to a controlled state is telling React to take over the form state from the browser in the following ways;

- Creating a `state` object to store the form data. React uses the `useState hook` to handle the form state.
- Add the `value` property to the form, and assign it to the `state` object properties.
- Add an `onChange event listener` function to handle updating the form state.

`useState` is a React hook used to manage state in functional components. 

`state` is the information we don't want to lose while the page re-renders.

Navigate to `src/components/ContactForm.jsx` , import `useState` hook from react.

Create a  `contact` state with the form input names as the properties.

Add `value` property to each input field and set the value to contact state properties as illustrated below.


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

React now has control over the form but we are yet to update the input fields.

we are setting the `value` in the input fields to the `contact` state properties.

 If you check your form in the browser, you will realise you can't type in the input fields, that's because React has no way to track the value of input elements.

 ![contact-form](/posts-images/react-forms/jsx-contact-form.png)

 The `onChange event Listner` is how React updates the input fields in real-time.

Let's add a  `handleChange` function to take care of updating the input fields. Add this  below `contact` state. 

```jsx
const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
```

`setContactInfo` is a function that comes with `useState Hook` and it's used to update our current state object.

To preserve the previous state, we spread the `contactInfo` data using the javascript spread operator. This way, the previous data is not lost while we update the input state. 

For example, without spreading the previous state, the only state that will be saved in the `contact` state when you submit your form data is `phone number`. `setContactInfo` will replace the old state with the new state which will be the last input field you updated(`phone number`).

To handle multiple controlled input elements, the name attribute added to each input element is used by `setContactInfo` to update the `contact state` properties based on the values from `event.target.name`.

### 3. Retrieving Form Data from Controlled Input Field.

Now, Let's log the form data to the console using a `handlesubmit` function.

The `handleSubmit` function will log the `contactInfo` state to the browser. 

Navigate to `ContactInfo` and add the `handleSubmit` function. 

Pass the `handleSubmit` function to an `onSubmit event listener` in the `<form>` tag. When the submit button is clicked, the user data is logged to the console.

```jsx
const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(contactInfo);
  };



<form onSubmit={handleSubmit}> 
  
```

 ![submit-form](/posts-images/react-forms/jsx-submit-form.png)

 Last, let's clear the input field when the submit button is clicked, set the `contactInfo` state variable to an empty string. Update `handleSubmit` function like so

```jsx
const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contactInfo);
    setContactInfo({ name: "", email: "", phonenumber: "" });
  };
```
### 4. Display Form Data in Another Component

in this phase, you learn how to pass data from parent component to child component. This data will be passed from `App.js`(parent) to the `ContactList` (child) component where it is displayed.

Now that we have our form data, let's display this data in `ContactList.jsx`.

Before that, let's create a `contacts` state in `App.js` to store each `contactInfo` object data gotten from `ContactForm.jsx`. It serves as data.
This `contacts` state will be passed as props to the `ContactList.jsx` component.

Navigate to App.js and create a `contacts` state using `useState` React Hook and set it to an empty array.

Create an `addContact` function that takes `contactInfo` as a parameter for updating the `contacts` state.

pass `addContact` function as `props` to the `ContactForm.jsx` component. This is also an example of passing data from parent to child component.

```jsx
import { useState } from "react";
import ContactForm from "./components/ContactForm.jsx";
import "./App.css";

function App() {
  // here we create an array state to store the contact form data
  const [contacts, updateContacts] = useState([]);

  const addContact = (contactInfo) => {
    updateContacts([...contacts, contactInfo]);
  };
  console.log(contacts)

  return (
    <div className="App">
      <ContactForm addContact={addContact} />
    </div>
  );
}

export default App;
```

Using object [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) in javascript, get `addContact` from props, Update the `handleSubmit` function so instead of logging the data to the console, pass it as a parameter to the addContact function.

```jsx
import { useState } from "react";

export default function UserForm({addContact}) {
 
const handleSubmit = (event) => {
    event.preventDefault();

    addContact(contactInfo);

    setContactInfo({ name: "", email: "", phonenumber: "" });
  };
```

When you submit the form, the `contacts` state is updated with the new form state.

Now that we have an array of contacts, let's display each contact info in a `ContactList` component.

#### Pass `Contacts` state data as props to a React component.

 Last on the agenda is setting up the `ContactList.jsx` to display the `contacts state` data.

create a `ContactList` file in `src/components` and export a simple `<div>` tag to prevent the app from breaking.

Import `ContactList` file into `App.js` and pass `contacts` data as props to `contactList` component

```jsx
import { useState } from "react";
import ContactForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import "./App.css";

function App() {
  // here we create an array state to store the contact form data
  const [contacts, updateContacts] = useState([]);

  const addContact = (contact) => {
    updateContacts([...contacts, contact]);
  };
  console.log(contacts)

  return (
    <div className="App">
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
```

Navigate to `src/ContactList.jsx`, retrieve the props data passed into the component using destructing as we did for `ContactForm.jsx`.

Due to `contacts` data being an array, we need a way to display each `contact` detail.  I'm using `Array.prototype.map()` to loop through each value in and setting the `key` attribute  value to `phone number` because it is guaranteed to be unique. The `key` attribute is how React keeps track of the values in the array.

the `<p>` tag is used to display `name`, `email` and `phone number` of each contact object

```jsx

export default function UserList({contacts}) {
  return (
    <div>
      {props.contactList.map((contact) => (
        <div className="card" key={contact.phonenumber}>
          <p className="card-name">{contact.name}</p>
          <p>{contact.email}</p>
          <p>{contact.phonenumber}</p>
        </div>
      ))}
    </div>
  );
}
```

At this point, when you fill the form and click on the submit button, the data is displayed on the page.

 ![form-result](/posts-images/react-forms/form-result.png)

### Conclusion

In this tutorial, I covered;

- how to set up a basic React app using create-react-app and create a simple jsx form.
- how React converts an uncontrolled form to a controlled form component.
- how to retrieve the form data and pass it as props to another component.
- Create a React functional component that takes the form data as props and renders it to the browser.

> To view the full project code, link to [Github repository](https://github.com/Kellswork/contact-info).

Discuss on [Medium](https://medium.com/@agirlcodes/the-complete-guide-to-building-react-forms-with-usestate-hook-e3d282ff0025)


*Recommended Reads*

- [How to sort next js blog posts by most recent post date.](https://www.agirlcodes.dev/sort-nextjs-blog-posts-by-date)

- [My Most used git commands](https://www.agirlcodes.dev/my-most-used-git-commands).

- [Find out how I solved this Jest storybook react test error.](https://www.agirlcodes.dev/storybook-test-error-cannot-find-interopRequireDefaultjs)

- [Setup a Newsletter with Next.js and Mailchimp](https://www.agirlcodes.dev/setup-newsletter-mailchimp-nextjs).

