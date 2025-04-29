const express = require('express');
const path = require('path');
const app = express();
const itemRouter = require('./routes/item');

// Set up EJS view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Templates'));

// Mount the router
app.use('/', itemRouter);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error('Error caught by middleware:', err.message);
    res.status(500).send('Oops! Something went wrong: ' + err.message);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
