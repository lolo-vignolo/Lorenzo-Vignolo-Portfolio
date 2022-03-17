---
title: 'Next.JS and React - The complete Guide'
date: '2022-01-16'
image: getting-started-nextjs.png
excerpt: NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR. 🧨
isFeatured: false
---

NextJS is a **framework for ReactJS**. 🤔

Wait a second ... a "framework" for React? Isn't React itself already a framework for JavaScript?

Well ... first of all, React is a "library" for JavaScript. That seems to be important for some people.

Not for me, but still, there is a valid point: React already is a framework / library for JavaScript. So it's already an extra layer on top of JS.

---

## Why would we then need NextJS?

Because NextJS makes building React apps easier - especially React apps that should have server-side rendering (though it does way more than just take care of that).

In this curse, I have dived into the core concepts and features NextJS has to offer:

- File-based Routing
- Built-in Page Pre-rendering
- Rich Data Fetching Capabilities
- Image Optimization
- Link
- ServerSide Rendering
- Markdown
- Context
- Hooks
- Functional COmponents
- Classes Style
- Variables in Style
- Much More

---

## Server Side Rendering 💻

Next.js gives us between others, the option to render on the server side. One of the option is **getStaticProps** the render will be done with **npm run build**, and another **getServersideProps**.

```js
export function getStaticProps(context) {
 
    // information from a Fetch , Axios, my App, etc.

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  
    // When the Rutes are dinamics, we should create them
    // as well in the build momet. Also,There exist other options.

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

```

## File-based Routing 🚦

Another really useful thing in Next.js the *File-bases Routing*, with a route system integrated, going into it through the folder **pages**. 

![Create routes via your file + folder structure](routes.png)

---

## Diplomas, Next.js Courses 📜

- *Next.js & React - The Complete Guide*

![Create routes via your file + folder structure](nextjs.png)

- *Create your own E-commerce*

![Create routes via your file + folder structure](E-commerce.png)

