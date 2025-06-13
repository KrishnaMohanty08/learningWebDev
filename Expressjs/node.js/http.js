//basic http setup
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World'); // use res.end instead of res.send
}).listen(port, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});

//http with url 
const url=require('url')
const serve =http.createServer((req,res)=>{
    const q=url.parse(req.url,true).query;
    const year=q.year;
    const month=q.month;
    
    res.writeHead(200,{'Content-Type':"text/plain"});
    res.end(`Year:${year},Month: ${month}`);
}).listen(port, '127.0.0.2', () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});