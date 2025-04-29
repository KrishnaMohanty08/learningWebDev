const express =require('express')
const app = express();
const path=require('path')
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/static',express.static(path.join(__dirname,'static')))
app.use('/',require(path.join(__dirname,'routes/blog.js')))

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});