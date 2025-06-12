//A URL string is a structured string containing multiple meaningful components. When parsed, a URL object is returned containing properties for each of these components
const url = require('url');

const myUrl = url.parse("https://user:passi@sub.example.com:8080/p/a/t/h?query=string#hash", true);

console.log(myUrl.hostname);  // sub.example.com
console.log(myUrl.auth);      // user:passi
console.log(myUrl.query);     // { query: 'string' }
console.log(myUrl.pathname);  // /p/a/t/h
console.log(myUrl.hash);      // #hash

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
const yourURL = new URL(`https://example.org${myURL.pathname}${myURL.search}${myURL.hash}`); 
console.log(yourURL.href);

//new URL ('input':String,'base':String)  WHATWG standards
const isURL = new URL('/foo', 'https://example.org/');
// https://example.org/foo

//In cases where it is not known in advance if input is an absolute URL and a base is provided, it is advised to validate that the origin of the URL object is what is expected.
someURL = new URL('https://Example.com/', 'https://example.org/');
// https://example.com/
