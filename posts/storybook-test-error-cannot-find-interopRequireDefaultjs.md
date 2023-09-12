---
title: 'How to solve Jest storybook test error “cannot find interopRequireDefault.js”'
date: 22-02-2022
fullDate: Tuesday, 22 Febuary 2022
tags: Storybook, Jest
description: 'In this article, I am going to highlight how I got this storybook jest snapshot test error "cannot find @babel/runtime/helpers/interopRequireDefault.js" and  what I did to fix this jest snapshot test  error'
image: '/posts-images/failed-storybook-test.png'
url: '/storybook-test-error-cannot-find-interopRequireDefaultjs'
---

In this article, I am going to highlight how I got this storybook jest snapshot test error `cannot find @babel/runtime/helpers/interopRequireDefault.js`, what I tried to fix the error that didn’t work, and what did work.

 ![failed storybook test](/posts-images/failed-storybook-test.png)

### What caused this error?

I wanted to update my current branch with the master branch. In the process, I encountered a merge conflict with the storybook snapshot test. The incoming test file had been updated with new tests. I accepted both changes without duly reviewing them and that must have caused some data to be repeated or redundant.

### What I tried to fix the issue?

Usually, when I get errors like this that have a `package can't be found` error, I delete and re-install `node_modules`, `package-lock.json`. In this case, It did not help

Next, after some more research, I tried installing  `@babel/runtime` as a dependency to the project based on some StackOverflow recommendations, but that still didn’t fix it.

### What Solved the Error?

Deleting the Jest cache directory. I added this command to my package.json and ran it.

```js

"test": "react-scripts test --clearcache"

```

This clears the cache without running the test. Jest possible had the old snapshot test data cached and didn't know what to do with the new changes. Remove the cache and run the test once more, 

 ![storybook test result](/posts-images/storybook-test-result.png)

 ### Conclusion

Jest stores information in the cache to improve test performance, I suspect the merge with new data must have clashed with the cache data, thereby confusing Jest.

Discuss on [Medium](https://agirlcodes.medium.com/how-to-solve-jest-storybook-test-error-cannot-find-interoprequiredefault-js-a17bf1e0088f)


*Recommended Reads*

- [How to sort next js blog posts by most recent post date.](https://www.agirlcodes.dev/sort-nextjs-blog-posts-by-date)

- [Setup a Newsletter with Next.js and Mailchimp.](https://www.agirlcodes.dev/setup-newsletter-mailchimp-nextjs)