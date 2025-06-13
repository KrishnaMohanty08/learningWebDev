const fsPromises=require('fs/promises')

//read
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

const data = await fsPromises.readFile('file.txt', 'utf8');
console.log(data);

