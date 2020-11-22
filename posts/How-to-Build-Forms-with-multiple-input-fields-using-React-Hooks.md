---
title: 'How to Build Forms with multiple input fields using React Hooks'
date: 22-11-2020
fullDate: Sunday, 22 November 2020
tags: database
image: google 
description: 'Forms can be considered as the backbone of web applications. How would you get any information from your users without forms?'
---
Forms can be considered as the backbone of web applications. How would you get any information from your users without forms? Yes there are libraries available to easily build forms now ( a nice one is formik) but won't you like to know how to know how to create forms from scratch? It's pretty easy. Being able to build react forms  is like building the basics before moving to a framework or library.

The default action for an HTML form is to have the page refreshed which causes you to lose all your data, With react we can, we use javascript to handle the submission of the way we get access to the data entered by the users.

### Controlled and Uncontrolled input

In HTML, form types such as `<input> <textarea>` generally handle their own state and update based on user input. Controlled input will be to let react handle the state for you as it is mutable. React stores this state in the state property, and it can only be updated using solid-state. Hence, the react component that renders the form is now in control for what happens to that form on subsequent user input.

for more information on controlled Input → [check here](https://reactjs.org/docs/forms.html)

### Handling multiple input fields in a form with UseState

Most scenarios, we will be needing more than one input field from users. To demonstrate this, we will be creating a Registration form

```jsx
import React, { useState } from "react";

export default function Register() {
  const [user, setUser] = useState({ fullname: "", email: "", password: "" });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user created", user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name</label>
      <input type="text" name="fullname" onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" onChange={handleChange} />
      <label htmlFor="password">Passoword</label>
      <input type="password" name="password" onChange={handleChange} />
      <button>Register</button>
    </form>
  );
}
```

let's start from the top

*state* → here we are declaring our user state using useState hook, user represents the object we inserted into useState, setUser is going to be used to update the state.  if you are to familiar with  React classes, 

```jsx
 const [user, setUser] = useState({ fullname: "", email: "", password: "" });
```

```jsx

this.state = {
  user: {
    fullname: "",
    email: "",
    password: ""
  }
}; // setting state using react classes
```

*handleChange →* in our handleChange function, we use setUser to update our user state. I am spreading the user object in the setUser, if you don't do this, setUser is only going update the last property which is password so we have to preserve the other properties state by adding them. we use `e[event.target.name]:event.target.value` to tell setUser function what property to update based on the name.

The `user` data which is now stored in state can be passed down to different components as needed.

`event.preventdefault()` is to prevent the page from re-rending

### Accessibility is Very Important!

Because of its common usage, it is paramount to make sure your forms are easy to understand and interact with by all users. not paying attention to accessibility reduces the  chances of have users with disabilities from interacting with your site form. Little changes can make a lot of difference;

In our form, we used best practice and addded accesilbity by;

- including labels for each input field to describe the purpose of the form control
- provide clear instructions that would help users understand how to complete the forms ie indicate required and optional input fields. Just basically tell the user what data you want fro them
- validate users input to help users avoid mistakes while filling the form
- Notify users if they successfully completed task or not

These are some of the actions we took to improve accessibility on the form.

To dig deeper into how to make your site accessible, read more on [w3.org](https://www.w3.org/WAI/tutorials/forms/)

### Make Sure to Validate User input

Validation should never be skipped because you should never trust that the user would input the right information.  Options are using the inbuilt HTML validation, writing one yourself or using a validation schema like Yup. Any option works fine, I recommend trying Yup as it makes writing validation for the fields a breeze. Here's a Medium link to an article explaining why you need it and how to use it in validation your forms

[Introduction to Yup Object Validation In React](https://medium.com/@rossbulat/introduction-to-yup-object-validation-in-react-9863af93dc0e)

For this article we would be writing our validation for each field

Now that you understand how React forms are built with hooks, you can choose to use build forms using a form helper or using react hooks.