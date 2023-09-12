---
title: 'How to Build Forms with Multiple Input Fields using React Hooks'
date: 22-11-2020
fullDate: Sunday, 22 November 2020
tags: React
image: '/posts-images/signup-form.png'
description: 'In this article, I will show you how to use React Hook to build forms with multiple input fields.'
url: '/how-to-build-forms-with-multiple-input-fields-using-react-hooks'
---

Forms can be considered as the backbone of web applications. How would you get any information from your users without forms? Yes, there are libraries available to easily build forms now ( a nice one is Formik) but having an understanding of how to create forms in React from scratch is beneficial, It's pretty easy.

### Controlled and Uncontrolled Input

The default action for an HTML form is to have the page refreshed which causes you to lose all your data. With React, we use javascript to handle the way we get access to the data entered by the users.

In HTML, form types such as `<input> <textarea>` generally handle their own state and update based on user input. letting the DOM handle user input for you is referred to as `uncontrolled input`.

`Controlled input` is letting React handle the state for you as it is mutable. React stores this state in the state property, and can only be updated using solid-state. Hence, the React component that renders the form is now in control of what happens to that form on subsequent user input.

for more information on controlled Input → [check here](https://reactjs.org/docs/forms.html)

### Handling Multiple Input Fields in a Form with useState

In most scenarios, we will be needing more than one input field from users. To demonstrate this, let's create a registration form.

```jsx
import React, { useState } from "react";

export default function Register() {
  const [user, setUser] = useState({ fullname: "", email: "", password: "" });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
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

*state* → here we are declaring the state using *useState hook*, user represents the object we inserted into *useState*, *setUser* is going to be used to update the state. if you are to familiar with  React classes

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

*handleChange →* in our handleChange function, we use *setUser* to update the `user` state. I am spreading the `user` object in *setUser*, if you don't do this, *setUser* is only going update the last property which is the `password` so we have to preserve the other properties state by adding them.

we use `e[event.target.name]:event.target.value` to tell *setUser* function what property to update based on the name.

The `user` data which is now stored in state can be passed down to different components as needed.

> event.preventdefault() is to prevent the page from re-rending

### Accessibility is Very Important

Because of its common usage, it is paramount to make sure your forms are easy to understand and interact with by all users. not paying attention to accessibility reduces the  chances of having users with disabilities interacting with your site form. Little changes can make a lot of difference;

In our form, we used best practice and added accessibly by;

- including labels for each input field to describe the purpose of the form control

To dig deeper into how to make your site accessible, read more on [w3.org](https://www.w3.org/WAI/tutorials/forms/)

### Make Sure to Validate User Input

Validation should never be skipped because you should never trust that the user would input the right information. Options are using the inbuilt HTML validation, writing one yourself or using a validation schema. Any option works fine, I recommend using a validation schema like Yup as it makes writing validation for input fields easy. Here's a Medium link to an article explaining why you need it and how to use it for form validation.
> [Introduction to Yup Object Validation In React](https://medium.com/@rossbulat/introduction-to-yup-object-validation-in-react-9863af93dc0e)

Now that you understand how forms are built with React Hooks, you can choose to either build forms using a form helper or using React hooks.

> The code for the Signup form can be found here [codesandbox.io](https://codesandbox.io/s/how-to-build-forms-with-multiple-input-fields-using-react-hooks-2c7dt?file=/src/styles.css)


For a more in-depth beginner guide on how to build forms with multiple input fields -  [The Complete Guide to Building React Forms with useState Hook](https://www.agirlcodes.dev/complete-guide-build-react-forms-with-usestate-hook)

Discuss on [Medium](https://medium.com/nerd-for-tech/how-to-build-forms-with-multiple-input-fields-using-react-hooks-677da2b851aa)

*Recommended Reads*

- [The Complete Guide to Building React Forms with useState Hook.](https://www.agirlcodes.dev/complete-guide-build-react-forms-with-usestate-hook)

- [How to sort next js blog posts by most recent post date.](https://www.agirlcodes.dev/sort-nextjs-blog-posts-by-date)

- [Find out how I solved this Jest storybook react test error.](https://www.agirlcodes.dev/storybook-test-error-cannot-find-interopRequireDefaultjs)

- [Setup a Newsletter with Next.js and Mailchimp](https://www.agirlcodes.dev/setup-newsletter-mailchimp-nextjs).

- [My Most used git commands](https://www.agirlcodes.dev/my-most-used-git-commands).
