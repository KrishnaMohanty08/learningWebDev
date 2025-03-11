const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests (needed for PUT/DELETE with body)
app.use(express.json());

// Serve static files from "public" folder
app.use(express.static("public"));

// GET request
app.get('/', (req, res) => {
    console.log("Hello, it's a GET request");
    res.send('Hello World!');
});

// POST request
app.post('/', (req, res) => {
    console.log("It's a POST request");
    res.send('Hello World POST!');
});

// PUT request (Fixed)
app.put('/', (req, res) => {
    console.log("It's a PUT request");
    res.send('Hello World PUT!');
}).delete('/', (req, res) => {
    console.log("It's a DELETE request");
    res.send('Hello World DELETE!');
}).get('/api', (req, res) => {
    console.log("JSON response sent");
    res.json({ a: 1, b: 2, c: 3, d: 4, name: "herray" });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
