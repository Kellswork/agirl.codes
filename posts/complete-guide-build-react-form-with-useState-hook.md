---
title: 'The complete guide to building React forms with useState Hook'
date: 26-09-2021
fullDate: Sunday, 19 September 2021
tags: React forms, React Hooks
image: ../../posts-images/signup-form.png
description: "In this tutorial, You will learn how to build forms with one or more input fields using JSX. You will retrieve the form data when submitted and save it to state using useState hook."
---

In this tutorial, You'll learn how to build forms with one or more input fields using JSX. You will understand how a form moves from an uncontrolled state to a controlled state with React. 
Next, you will retrieve the form data when submitted and save it to state using useState hook. Finally, you will pass form data as props to a component and have the component render the data on the browser.

To show how this works, We will be building a Contact form with three input fields for the contact's name, email, and phone number. when the form is submitted, the form data will be saved in a contacts state and passed to a contact list component, where it is rendered to the browser.

If you want a quick overview of how to build forms with multiple input fields using react hook, you can view it [here](https://www.agirl.codes/post/how-to-build-forms-with-multiple-input-fields-using-react-hooks). This article will beginner-focused or for anyone who wants to refresh their knowledge on react building React forms with useState hook.

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

 ![contact-form](/posts-images/react-forms/jsx-contact-form.png)

 The `onChange event Listner` is how React updates the input fields in real-time.

Let's add a  `handleChange` function to take care of updating the input fields. Add this  below `contact` state. 

```jsx
const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
```

`setContactInfo` is a function that comes with `useState Hook` and it's used to update our current state object.

To preserve the previous state, we spread the `contactInfo` data using the javascript spread operator. This way, we don't lose any of the previous data as we update our input field state. 

For example, without spreading the previous state, the only state that will be saved in the `contact` state when you submit your form data is `phone number`. `setContactInfo` will replace the old state with the new state which will be the last input field you updated(`phone number`).

To handle multiple controlled input elements, the name attribute added to each input element is used by `setContactInfo` to update the `contact state` properties based on the values from `event.target.name`.

### 3. Retrieving Form Data from controlled input Field.

Finally, we are going to log the form data to the console using a `handlesubmit` function.

The `handleSubmit` function will log the `contactInfo` state to the browser. 

Navigate to `ContactInfo` and add the `handleSubmit` function. 

Pass the `handleSubmit` function to an `onSubmit event listener` in the `<form>` tag. When the submit button is clicked, the user data is logged to the console.

```jsx
const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(contactInfo);
  };
```

 ![submit-form](/posts-images/react-forms/jsx-submit-form.png)

 Last, let's clear the input field when the submit button is clicked by setting the `contactInfo` state variable to an empty string. Update `handleSubmit` function like so

```jsx
const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contactInfo);
    setContactInfo({ name: "", email: "", phonenumber: "" });
  };
```
### 4. Display Form Data in Another Component

in this phase, you learn how to pass data from parent component to child component. This data will be passed from `App.js`(parent) to the `UserList` (child) component where it is displayed.

Now that we have our form data, let's display this data in another component `ContactList.jsx`

To do that, we have to first make some updates to `App.js`. 

First, we have to create a `contacts` state to store the `contactInfo` object data from `ContactForm.jsx`. This `contacts` Array list will be passed as props to the `ContactList.jsx` component as props.

- Navigate to App.js and create a `contacts` state using `useState` React Hook and set it to an empty array.
- Create an `addContact` function that is going to take `contactInfo` as a parameter for updating the `contacts` state.
- pass `addContact` function as `props` to the `ContactForm.jsx` component. This is also and example of passing data from parent to child component.

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

Using object [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) in javascript, get `addContact` from props, Update the `handleSubmit` function so instead of logging the data to the console, we will pass it as a parameter to the addContact Function.

```jsx
import { useState } from "react";

export default function UserForm({addContact}) {
 
const handleSubmit = (event) => {
    event.preventDefault();

    addContact(contactInfo);

    setContactInfo({ name: "", email: "", phonenumber: "" });
  };
```

 When you submit the form, the `contacts` state is updated with the form data.

Now that we have an array of contacts, let's display the contact details in a `ContacList` component.

#### Pass `Contacts` state data as props to a React component.

 Last on the agenda is setting up the `ContactList.jsx` to display the `contacts` state data.

create a `ContactList` file in `src/components` and export a simple `<div>` tag to prevent the app from breaking.

pass `contacts` data as props to `contactList` component, use the same syntax as HTML attributes as we did for `addContact` in `ContactForm`, the `ContactList` component will receive the data as props.

Import `ContactList` file into `App.js` and pass `contacts` data to as a parameter to `ContactList` component as shown below.

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

Navigate to `src/ContactList.jsx`

We are going to retrieve the props data passed into the component using destructing as we did for `ContactForm.jsx`.

Instead of using `props.contacts` to get the data, use object restructuring to access contacts data directly.

Due to `contacts` data being an array format, we need a way to display each `contact` detail.  I'm using `Array.prototype.map()` to loop through each value in and setting `key` attribute to `phone number` because it is unique. The `Key` value is how React keeps track of the values in the array.

Here we use `<p>` tags to display `name`, `email` and `phone number` of each contact object as shown below.

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

At this point, when you fill the form and click on the submit button, the data is displayed on the page. Feel free to style the page any way you like.

 ![form-result](/posts-images/react-forms/jsx-submit-form.png)

### Conclusion

In this tutorial, we learnt;

- how to set up a basic React app using create-react-app and create a simple jsx form.
- how React converts an uncontrolled form to a controlled form component.
- how to retrieve the form data and pass it as props to another component.
- Create a React functional component that takes the form data as props and renders it to the browser.

To view the full project code, here's a link to [Github repository](https://github.com/Kellswork/contact-info).

If you found this tutorial helpful, subscribe to my newsletter and to be notified of more upcoming quality articles as soon as they are published sent to your inbox