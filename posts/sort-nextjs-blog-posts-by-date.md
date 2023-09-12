---
title: 'How to sort next.js blog posts by date'
date: 09-06-2022
fullDate: Thursday, 9 June 2022
tags: NextJS
description: 'In this article, I share how to sort your blog posts by the most recent date'
image: '/posts-images/sort-blog-post-by-date.png'
url: '/sort-nextjs-blog-posts-by-date'
---

Recently, I added a new article to my blog and quickly realised the blog post list was sorted alphabetically. I wanted the blog posts with the most recent date at the top instead of having the post sorted alphabetically. In this article, I share how to sort your blog posts by the most recent date.

### Convert the date string to a date object
To sort the blog post by date, we need to convert the date string variable to a Date Object.

Every blog post has a date string included in the post’s Front Matter.

Manually writing code that converts a date string to a Javascript Date object can be difficult and time-consuming, I used **Luxon** to simplify the process.

**Luxon** is an npm library that simplifies working with dates and times in JavaScript.

install **Luxon** 

```jsx
npm install Luxon
```

Import it into the component file that renders your blog post list.

`/components/postList/postList.js`
```jsx
import { dateTime } from 'Luxon'
```

The [dateTime.fromFormat()](https://moment.github.io/luxon/api-docs/index.html#datetimefromformat) converts the date string to a Javascript Date Object.

[fromFormat()](https://moment.github.io/luxon/api-docs/index.html#datetimefromformat) is a function that creates a DateTime  from a text string( date string), and fmt(the format the string is expected to be in) parsers the input string using a date format we pass in as a second parameter.

[fromFormat()](https://moment.github.io/luxon/api-docs/index.html#datetimefromformat) takes two arguments, a date string and a format string.

```
DateTime.fromFormat('09-06-2022, 'm-d-yyyy')
```
This will format the date string into a date object that looks like  `06-09-2022`.

I fetch the date string variable from the date included in every blog post's Front Matter.

Example of the date string included in the Front Matter in the blog post markdown file.

![front-matter](/posts-images/front-matter-date.png)


With this date format `mm-dd-yyyy`, the post list  will be sorted by the most recent `month => day => year`. This way, the blog post with the most recent month, day, and year stays at the top of the post list.

> when I tested using the date format (dd-mm-yyyy), I did not get the desired result with the sort function.

### Order blog post by most recent date

Now that the date string has been converted to a Javascript Date object, use the javascript built-in `sort` function to sort the blog posts in descending order.

In the src folder, go to the component displaying your blog post list, create a variable `sortBlogPostsByDatesort` and assign the sort function code to the variable

`/components/postLists/postLists.js`
```jsx
const sortBlogPostsByDate = posts.sort((a, b) => {
    const beforeDate = DateTime.fromFormat(a.frontmatter.date, 'm-d-yyyy')
    const afterDate = DateTime.fromFormat(b.frontmatter.date, 'm-d-yyyy')
    return afterDate - beforeDate
  })
```

The new Array data `sortBlogPostsByDate` contains the sorted blog posts with the most recent article displayed at the top of the list.

Finally using a javascript map function, loop through the sorted post data to display the blog posts list on the dom.

`/components/postLists/postLists.js`
```jsx
return (
    <div className="postlist">
      {posts &&

        sortBlogPostsByDate.map((post) => {

          return (
            <DivList key={post.slug}>
            
              <Link href={{ pathname: `/${post.slug}` }}>
                <PostTitle href={`/${post.slug}`}>
                  {post.frontmatter.title}
                </PostTitle>
              </Link>

              <PostData>
                <PostTag>{post.frontmatter.tags}</PostTag>
                <PostDate className="post-date">
                  {post.frontmatter.date}
                </PostDate>
              </PostData>

              <PostText>{post.frontmatter.description}</PostText>

            </DivList>
          )
        })}
    </div>
  )
  ```


Your Blog post list should be sorted now, with the most recent post at the top of the list.

Final Result!

![Final result](/posts-images/sort-blog-post-by-date.png)

Discuss on [Medium](https://agirlcodes.medium.com/how-to-sort-next-js-blog-posts-by-date-1665b641842b)


*Recommended Reads*

- [Setup a Newsletter with Next.js and Mailchimp.](https://www.agirlcodes.dev/setup-newsletter-mailchimp-nextjs)

- [Find out how I solved this Jest storybook react interopRequireDefault.js test error.](https://www.agirlcodes.dev/storybook-test-error-cannot-find-interopRequireDefaultjs)