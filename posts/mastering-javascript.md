---
title: The complete JavaScript curse
excerpt: JavaScript is the most important programming language for web development. You probably don't know it well enough!
image: mastering-js-thumb.png
isFeatured: false
date: '2021-10-30'
---

JavaScript powers the web - it's **one of the** most important programming language you need to know as a web developer.

---

## Contents throughout this course: 📚

- variables
- Data Types
- BasicOperators
- if / else Sttements
- Logical Operatos
- Ternay Conditional Operator
- Functions
- Arrays
- Object-Oriented Programming
- Loops
- Map , Filter , reduce
- Asynchronous JavaScript,Fetch, AJAX and APIs
- Promises
- Debugging
- etc.

---

## Some JavaScript examples:

```js
const basics = [
  {
    name: 'Lorenzo',
    age: 29,
  },
  {
    name: 'Gbriel',
    age: 35,
  },
];

basics.map((item) => {
  return (
    <ul key={item.i}>
      <li>{item.name}</li>
      <li>{item.age} </li>
    </ul>
  );
});

printBasics();
```

```js
import axios from 'axios';

function getInformation() {
  axios
    .get('Url')
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

getInformation();
```

---

## Diplomas, Next.js Courses 📜

- _interacting with arrays_ 😄

![Create routes via your file + folder structure](js.PNG)

**The #1 bestselling JavaScript course on Udemy!**

_Updated for ES2021 and ES2022 in November 2021_

_"Really, really well made course. Super in-depth, with great challenges and projects that will solidify your Javascript understanding. I found the lectures were paced perfectly -- Jonas doesn't skip over anything that might be useful to a JS developer" — Carson Bartholomew_
