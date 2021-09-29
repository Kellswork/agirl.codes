---
title: '4 New ES2021(ES12) Features JavaScript Developers Need to Know'
date: 13-06-2021
fullDate: Sunday, 13 June 2021
tags: JavaScript, ES2021
description: 'These new Javascript features have reached final stage of the Ecmascript proposal and are included in the latest draft. It will be published between June 2021 and Jul 2021.'
image: '/posts-images/es2021.jpg'
url: '/4-new-es2021(es12)-features-javascript-developers-need-to-know'
---

These new Javascript features have reached the [final stage](https://github.com/tc39/proposals/blob/master/finished-proposals.md) of the Ecmascript proposal and are included in the latest draft. It will be published between June 2021 and July 2021. For now, they can only be used with Babel.

### 1. Logical Assignment Operators

This feature combines mathematical assignment operators with the most often used Logical operators like so `(??=, &&=, ||=)`. It provides a neatly short and concise expressive style. This concept confused me a bit at first, refactoring it from an *IF statement* to a *Logical Assignment*  helped me understand how it works.

#### Logical OR Assignment  ( || = )

```jsx
let person = {name: 'Mary' , job:'specialist', sex: '' }

person.name ||= 'user'
console.log(person.name) // Mary

person.sex ||= 'not specified'
console.log(person.name) // not specified


//popular way using if statement
if(!person.name) person.name = 'user'
if(!person.sex) person.sex = 'not specified'

// or
person.name = person.name || 'user'
person.sex = person.sex || 'not specified'
```

 Logical OR operation does a short circuit evaluation.

 If the first operand is *truthy*, it returns the value. Else it returns the second operand.

 In the first example `person.name` is *truthy* so it was returned, in the second `person.sex` is empty therefore *falsey* so it returned `not specified` .

#### Logical AND Assignment  ( && = )

```jsx
let person = {name: 'Mary' , job:'specialist', sex: 'female' }

const changeJob =() => 'hustler';

person.job &&= changeJob()
console.log(person.job) // 'hustler'


//popular way using if statement
if(person.job) changeJob()

// or
person.name = person.name && changeJob()

```

If the first operand is *truthy*, `changeJob()` is called. Else if it's *falsey*, it stops the execution and returns `person.job` value.

#### Logical Nullish Assignment  ( ?? = )

```jsx
let person = {name: 'Mary' , job:'specialist', sex: 'female' }

person.sex ??= 'not specified'
console.log(person.sex) // female

person.location ??= 'lagos'
console.log(person.location) // lagos

//popular way using if statement
if(person.location == null || person.location == undefined) {
    person.location = 'lagos'
}

```

nullish operator will only assign a value to a variable if it is null or undefined.

In this case `person.location` == `null` and was assigned `lagos` value.

### 2. Numeric Separators

This feature helps large numbers in javascript become easier to read and understand.

it uses underscore( _ ) to improve readability both in integers and floating points (numbers in JS are floats).

```js
//before
1000000  // squints eye, counts Zeros carefully

// now
1_000_000 // Oh it's a million

let price = 23_000  // $23,000
    price = 230_00  // $230. zeros after underscore is for cent
    price = 2340_00  // $2,340
    price = 1213_0500  // $1213.05

```

### 3. Promise.any() + Aggregator

**Promise.any()** accept an array of `Promise` objects and returns the first promise object to be fulfilled or resolved.

```js
const promise1 = new Promise((resolve) => setTimeout(() => resolve('number 1'), 30)
const promise2 = new Promise((resolve) => setTimeout(() => resolve('number 2'), 20)
const promise3 = new Promise((resolve) => setTimeout(() => resolve('number 3'), 10)

 try {
  const first = await Promise.any([ promise1, promise2, promise3 ]);
  console.log(first) // number 3
  // any promise that resolves first in this case, promise3. 

} catch (error) {
  // All of the promises were rejected.
}
```

**AggregateError** is an object that holds rejection reasons for all promises that were rejected. In the above example error is an **AggregateError**

**Promise.any()** will throw an **AggregateError** if all the promises were rejected.

### 4. String.prototype.replaceAll

The `replaceAll()` method gives developers a straightforward way of replacing a substring in a string that occurs once or more.

Unlike the `String.replace()` method that replaces the only first substring it finds in the string. 


```js
let str = 'music is life, music feeds the soul';

str.replaceAll('music', 'food');

console.log(str); // 'food is life, food feeds the soul'

```

### Conclusion

To get started using ES2021 features in your code, set up your project with Babel compiler, the packages have already been included in `@babel/preset-env`


> [A link to setting up a Babel in your project](https://babeljs.io/setup#installation)
