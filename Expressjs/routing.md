# Express.js Routing Guide

## 📌 What is Routing in Express.js?
Routing in Express.js refers to **defining URLs (endpoints) for your application** and handling requests made to those URLs using different HTTP methods like `GET`, `POST`, `PUT`, `DELETE`, etc.

Express allows you to **map URLs to specific logic** using route handlers.

---

## 🚀 Setting Up Express.js
To use Express routing, first install Express:
```sh
npm init -y
npm install express
```

Create a file `server.js` and add the following basic setup:

```js
const express = require('express');
const app = express();
const port = 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
```

---

## 🔥 Basic Routing Example
Routing is done using `app.METHOD(PATH, HANDLER)`, where:

- `METHOD` → HTTP method (`GET`, `POST`, `PUT`, etc.)
- `PATH` → URL endpoint (`/`, `/about`, etc.)
- `HANDLER` → Function that runs when the route is accessed

```js
// Home route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// About route
app.get('/about', (req, res) => {
    res.send('Welcome to the About Page');
});

// Contact route
app.get('/contact', (req, res) => {
    res.send('Contact us at contact@example.com');
});
```

