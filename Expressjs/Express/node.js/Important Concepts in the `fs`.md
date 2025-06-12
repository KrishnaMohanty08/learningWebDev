<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

## Important Concepts in the `fs` (File System) Module of Node.js

The Node.js `fs` module is a core module that allows you to interact with the file system on your computer. It provides both synchronous and asynchronous methods for working with files and directories, making it essential for server-side programming and backend development[^1][^5][^6].

---

### **1. Importing the `fs` Module**

You can use either the classic callback-based API or the modern promise-based API:

```js
// Callback and sync APIs
const fs = require('fs');

// Promise-based API (recommended for async/await)
const fsPromises = require('fs').promises;
```

Or, using ES modules:

```js
import * as fs from 'node:fs/promises';
```


---

### **2. Reading Files**

- **Asynchronous:**

```js
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

- **Synchronous:**

```js
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);
```

- **Promise-based:**

```js
const data = await fsPromises.readFile('file.txt', 'utf8');
console.log(data);
```


---

### **3. Writing and Creating Files**

- **Create or overwrite (asynchronously):**

```js
fs.writeFile('file.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('File written!');
});
```

- **Append to a file:**

```js
fs.appendFile('file.txt', 'More text', (err) => {
  if (err) throw err;
  console.log('Content appended!');
});
```

- **Promise-based:**

```js
await fsPromises.writeFile('file.txt', 'Hello, World!');
```


---

### **4. Updating Files**

- **Overwrite (same as writing):**
`fs.writeFile()` replaces the content.
- **Append:**
`fs.appendFile()` adds content to the end of the file.
[^1][^5]

---

### **5. Deleting Files**

- **Asynchronous:**

```js
fs.unlink('file.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});
```

- **Promise-based:**

```js
await fsPromises.unlink('file.txt');
```


---

### **6. Renaming Files**

- **Asynchronous:**

```js
fs.rename('old.txt', 'new.txt', (err) => {
  if (err) throw err;
  console.log('File renamed!');
});
```


---

### **7. Working with Directories**

- **Create directory:**

```js
fs.mkdir('myDir', (err) => {
  if (err) throw err;
  console.log('Directory created!');
});
```

- **Read directory:**

```js
fs.readdir('myDir', (err, files) => {
  if (err) throw err;
  console.log(files);
});
```

- **Remove directory:**

```js
fs.rmdir('myDir', (err) => {
  if (err) throw err;
  console.log('Directory removed!');
});
```


---

### **8. Watching Files and Directories**

- **Watch for changes:**

```js
fs.watchFile('file.txt', (curr, prev) => {
  console.log('File changed!');
});
```


---

### **9. Synchronous vs. Asynchronous Methods**

- **Asynchronous methods** (e.g., `fs.readFile`) do not block the Node.js event loop; they are preferred for server applications.
- **Synchronous methods** (e.g., `fs.readFileSync`) block the event loop and should be used only when necessary, such as during startup or scripting.
[^5][^6]

---

### **10. Promise-Based API**

- The `fs.promises` API allows you to use `async/await` for cleaner, more modern asynchronous code.

```js
const fsPromises = require('fs').promises;
await fsPromises.writeFile('file.txt', 'data');
```


---

### **Summary Table of Key `fs` Methods**

| Operation | Async Method | Sync Method | Promise-based |
| :-- | :-- | :-- | :-- |
| Read file | fs.readFile | fs.readFileSync | fs.promises.readFile |
| Write file | fs.writeFile | fs.writeFileSync | fs.promises.writeFile |
| Append file | fs.appendFile | fs.appendFileSync | fs.promises.appendFile |
| Delete file | fs.unlink | fs.unlinkSync | fs.promises.unlink |
| Rename file | fs.rename | fs.renameSync | fs.promises.rename |
| Make directory | fs.mkdir | fs.mkdirSync | fs.promises.mkdir |
| Read directory | fs.readdir | fs.readdirSync | fs.promises.readdir |


---

## **Key Takeaways**

- The `fs` module is essential for file and directory operations in Node.js.
- It supports both callback-based and promise-based (async/await) APIs.
- Prefer asynchronous or promise-based methods for production code to keep your application non-blocking and efficient[^5][^6].
- Common tasks include reading, writing, updating, deleting, renaming files, and managing directories[^1][^3][^5].

These concepts form the foundation for working with the file system in Node.js applications.

<div style="text-align: center">⁂</div>

[^1]: https://www.w3schools.com/nodejs/nodejs_filesystem.asp

[^2]: https://nodejs.org/api/fs.html

[^3]: https://dev.to/shanu001x/file-system-nodejs-fs-module-1hg6

[^4]: https://www.youtube.com/watch?v=hNzRoZti6vI

[^5]: https://magecomp.com/blog/node-js-file-system-module/

[^6]: https://heynode.com/tutorial/what-fs-file-system-module/

[^7]: https://kinsta.com/knowledgebase/nodejs-fs/

[^8]: https://www.udemy.com/course/understanding-nodejs-core-concepts/

