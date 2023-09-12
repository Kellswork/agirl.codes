---
title: 'How to Check if an Object is Empty in JavaScript'
date: 30-03-2021
fullDate: Sunday, 30 March 2021
tags: JavaScript
description: 'In this article, I will be sharing 6 different javascript methods you can use to check if an object is empty or not'
image: '/posts-images/social-media-header.jpg'
url: '/how-to-check-if-an-object-is-empty-in-javascript'
---


In this article, I will be sharing 6 different JavaScript methods you can use to check  if an object is empty or not.

Let's start with creating an empty object using literal syntax.

```jsx
const myObject = {}
```

### 1. Object.entries()

This method returns an array containing the [key, value] pairs found in the object passed in as an argument.
To check if an object is empty, check if the length of the array is 0.

```jsx
Object.entries(myObject).length === 0;
// 0

return Object.entries(myObject).length === 0 ? true: false
// true
```

### 2. Object.keys()

This method returns an array of strings that contains enumerable properties of the object passed as an argument. It returns an array of *[ keys ]*

```jsx
Object.keys(myObject).length === 0;
// 0

return Object.keys(myObject).length === 0 ? true: false
// true
```

You can also create an isEmpty function and pass in the object as a parameter

```jsx
function isEmpty (myObject) {

return Object.keys(myObject).length === 0 ? true: false

}

isEmpty(myObject); // true
```

### 3. Object.getOwnPropertyNames()

It returns an array of strings that corresponds to the properties found in the object passed as an argument. This method calls GetOwnPropertyKeys under the hood.

```jsx
 Object.getOwnPropertyNames(myObject).length === 0;
// 0

if(Object.getOwnPropertyNames(myObject).length === 0) { // return something};
```

### 4. !myObject.key

It checks if the `[key]` is present in `myObject`. Use this when you know the properties that the object is supposed to have.

```jsx
let result = '';

my.object.id // undefined

if (!myObject.id) result = 'object is empty'

console.log(result) // object is empty
```

Note: this won't work `myObject[id]`, JavaScript will throw an error.

### Using a JavaScript Library

### 5. UnderScore.js

[_.isEmpty(collection)](https://underscorejs.org/#isEmpty) Returns true if **collection** has no elements. For strings and array-like objects _.isEmpty checks if the length property is 0.

```jsx
_.isEmpty([1, 2, 3]);

=> false

_.isEmpty({});

=> true
```

### 6. Lodash.Js

[_.isEmpty()](https://lodash.com/docs/#isEmpty) Method Checks if the value is an empty object, collection, map, or set. Objects are considered empty if they have no own enumerable string keyed properties.

```jsx
_.isEmpty({ 'a': 1 });
// => false

_.isEmpty(myObject)
// true
```

Discuss on [Medium](https://agirlcodes.medium.com/how-to-check-if-an-object-is-empty-in-javascript-1916f041c49c)

*Recommended Reads*

- [My Most used git commands](https://www.agirlcodes.dev/my-most-used-git-commands).

- [4 New ES2021(ES12) Features JavaScript Developers Need to Know'](https://www.agirlcodes.dev/4-new-es2021(es12)-features-javascript-developers-need-to-know).