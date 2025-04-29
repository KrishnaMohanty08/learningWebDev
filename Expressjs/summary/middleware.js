const express = require('express');
const app = express();
const port = 3000;
const fs =require ("fs");

// Middleware function -logger of the application
const loggerMiddleware = (req, res, next) => {
    fs.appendFileSync("loginLogs.txt",(`[${new Date().toISOString()}, ${req.method} request to ${req.url}]\n`));
    next(); // Move to the next middleware or route
};

// Apply middleware globally
app.use(loggerMiddleware);

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
