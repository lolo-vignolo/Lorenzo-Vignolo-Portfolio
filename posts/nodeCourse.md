---
title: Node from scratch
excerpt: Rest, despliegues, Heroku, Mongo, Git, GitHub, Sockets, archivos, JWT and more to become an expert in Node 😉.
image: main.png
isFeatured: false
date: '2021-02-30'
---

## What about this course? 🧐

With the aim of learning Node.js this course goes through different tools and options that Node offers, but in this course, not only node is seen deeply but also other topics such as:

- MongoDB
- SocketIO
- Tokens - JWT
- Mongo Atlas
- Git - Github
- Google Services
- Google APIs
- Heroku
- mySQL
- PostMan
- NPM
- REST Server
- YARGS
- Express
- TypeScript

---

## Other characteristics 😎

_It is a 28,5 hours long course_ , where the knowledge is doing. That is why it is so interesting and works to learn.

```js
const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);
    console.log('DB Online :)');
  } catch (error) {
    console.log(error);
    throw new Error('ERROR in the connection with the DB');
  }
};

module.exports = {
  dbConnection,
};
```
