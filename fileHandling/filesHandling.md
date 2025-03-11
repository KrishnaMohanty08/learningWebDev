# File Handling 

## 1. Importing the File System Module
```javascript
const fs = require('fs');
```

---

## 2. File Operations
### Reading a File
- `fs.readFile(path, encoding, callback)`: Asynchronous file read.
- `fs.readFileSync(path, encoding)`: Synchronous file read.

```javascript
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

### Writing to a File
- `fs.writeFile(path, data, callback)`: Asynchronously writes data to a file.
- `fs.writeFileSync(path, data)`: Synchronous file write.

```javascript
fs.writeFile('example.txt', 'Hello, world!', (err) => {
    if (err) throw err;
    console.log('File written successfully');
});
```

### Appending to a File
- `fs.appendFile(path, data, callback)`: Adds data to the end of the file.
- `fs.appendFileSync(path, data)`: Synchronous version.

```javascript
fs.appendFile('example.txt', '\nAppended text', (err) => {
    if (err) throw err;
    console.log('Content appended');
});
```

---

## 3. File Management
### Checking if a File Exists
- `fs.existsSync(path)`: Returns `true` if the file exists.

```javascript
if (fs.existsSync('example.txt')) {
    console.log('File exists');
} else {
    console.log('File does not exist');
}
```

### Deleting a File
- `fs.unlink(path, callback)`: Asynchronously deletes a file.
- `fs.unlinkSync(path)`: Synchronous version.

```javascript
fs.unlink('example.txt', (err) => {
    if (err) throw err;
    console.log('File deleted');
});
```

### Renaming a File
- `fs.rename(oldPath, newPath, callback)`: Rename or move a file.
- `fs.renameSync(oldPath, newPath)`: Synchronous version.

```javascript
fs.rename('example.txt', 'newfile.txt', (err) => {
    if (err) throw err;
    console.log('File renamed');
});
```

---

## 4. Working with Directories
### Creating a Directory
- `fs.mkdir(path, callback)`: Asynchronous.
- `fs.mkdirSync(path)`: Synchronous.

```javascript
fs.mkdir('newDir', (err) => {
    if (err) throw err;
    console.log('Directory created');
});
```

### Reading a Directory
- `fs.readdir(path, callback)`: Returns an array of file names in the directory.
- `fs.readdirSync(path)`: Synchronous version.

```javascript
fs.readdir('.', (err, files) => {
    if (err) throw err;
    console.log('Files:', files);
});
```

### Deleting a Directory
- `fs.rmdir(path, callback)`: Removes an empty directory.
- `fs.rmdirSync(path)`: Synchronous version.

```javascript
fs.rmdir('newDir', (err) => {
    if (err) throw err;
    console.log('Directory removed');
});
```

---

## 5. File Information
### Getting File Stats
- `fs.stat(path, callback)`: Retrieves file stats like size, type, modified date.
- `fs.statSync(path)`: Synchronous version.

```javascript
fs.stat('example.txt', (err, stats) => {
    if (err) throw err;
    console.log(stats);
});
```

### Checking File Type
- `stats.isFile()`: Checks if it's a file.
- `stats.isDirectory()`: Checks if it's a directory.

```javascript
fs.stat('example.txt', (err, stats) => {
    if (err) throw err;
    console.log('Is file:', stats.isFile());
    console.log('Is directory:', stats.isDirectory());
});
```

---

## 6. File Streams (for Large Files)
### Reading a File as a Stream
```javascript
const readStream = fs.createReadStream('example.txt', 'utf8');
readStream.on('data', (chunk) => {
    console.log(chunk);
});
```

### Writing a File as a Stream
```javascript
const writeStream = fs.createWriteStream('example.txt');
writeStream.write('Hello, this is a stream write.');
writeStream.end();
```

---

These are the core functions available in the `fs` module for handling files and directories in Node.js. 🚀
