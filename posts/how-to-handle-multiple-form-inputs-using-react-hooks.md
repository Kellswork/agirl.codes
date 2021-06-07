---
title: 'how to handle multiple form inputs using react hooks'
date: 22-11-2020
fullDate: Sunday, 22 November 2020
tags: React
image: ../../posts-images/signup-form.png
description: 'In this article, I will show you how to use React Hooks for handling multiple input fields in a form with useState.'
---

Forms can be considered as the backbone of web applications. How would you get any information from your users without forms? Yes there are libraries available to easily build forms now ( a nice one is Formik) but having an understanding of how to create forms in React from scratch will give you a good understanding of what libraries like Formik does under the hood, It's pretty easy. 

### Controlled and Uncontrolled Input

The default action for an HTML form is to have the page refreshed which causes you to lose all your data. With react we can, we use javascript to handle the way we get access to the data entered by the users.

In HTML, form types such as `<input> <textarea>` generally handle their own state and update based on user input. letting the DOM handle user input for you is referred to as `uncontrolled input`

`Controlled input` is letting react handle the state for you as it is mutable. React stores this state in the state property, and it can only be updated using solid-state. Hence, the react component that renders the form is now in control for what happens to that form on subsequent user input.

for more information on controlled Input → [check here](https://reactjs.org/docs/forms.html)

### Handling Multiple Input Fields in a Form with useState

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

*state* → here we are declaring our user state using *useState hook*, user represents the object we inserted into *useState*, *setUser* is going to be used to update the state.  if you are to familiar with  React classes, 

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

*handleChange →* in our handleChange function, we use *setUser* to update our user state. I am spreading the user object in the *setUser*, if you don't do this, *setUser* is only going update the last property which is password so we have to preserve the other properties state by adding them.

we use `e[event.target.name]:event.target.value` to tell *setUser* function what property to update based on the name.

The `user` data which is now stored in state can be passed down to different components as needed.

> event.preventdefault() is to prevent the page from re-rending

### Accessibility is Very Important

Because of its common usage, it is paramount to make sure your forms are easy to understand and interact with by all users. not paying attention to accessibility reduces the  chances of having users with disabilities interacting with your site form. Little changes can make a lot of difference;

In our form, we used best practice and added accessibly by;

- including labels for each input field to describe the purpose of the form control

To dig deeper into how to make your site accessible, read more on [w3.org](https://www.w3.org/WAI/tutorials/forms/)

### Make Sure to Validate User Input

Validation should never be skipped because you should never trust that the user would input the right information.  Options are using the inbuilt HTML validation, writing one yourself or using a validation schema. Any option works fine, I recommend trying using a validation schema like Yup as it makes writing validation for the fields a breeze. Here's a Medium link to an article explaining why you need it and how to use it in validation your forms
> [Introduction to Yup Object Validation In React](https://medium.com/@rossbulat/introduction-to-yup-object-validation-in-react-9863af93dc0e)

Now that you understand how React forms are built with hooks, you can choose to use build forms using a form helper or using react hooks.

> The code for the Signup form can be found here [codesandbox.io](https://codesandbox.io/s/how-to-build-forms-with-multiple-input-fields-using-react-hooks-2c7dt?file=/src/styles.css)
