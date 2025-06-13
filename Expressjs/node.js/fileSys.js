const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');

// Create directory if it doesn't exist
const dirPath = path.join(__dirname, 'newF');

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
  console.log('Directory created');
}

// Write file (sync version used properly)
fs.writeFileSync(path.join(dirPath, 'new.txt'), "hello learner!?");

// Main file operations
const fileOps = async () => {
  try {
    // Read the content of new.txt
    const data = await fsPromises.readFile(path.join(dirPath, 'new.txt'), 'utf8');
    console.log('Original Data:', data);

    // Write to a new file
    const writePath = path.join(dirPath, 'promiseWrite.txt');
    await fsPromises.writeFile(writePath, data);

    // Append more content
    await fsPromises.appendFile(writePath, '\n\nNice to meet you.');

    // Rename the file (within the same folder)
    const renamedPath = path.join(dirPath, 'promiseReWrite.txt');
    await fsPromises.rename(writePath, renamedPath);

    // Read the renamed file
    const newData = await fsPromises.readFile(renamedPath, 'utf8');
    console.log('After Rename:', newData);

    // Optional: remove folder after operations
    await fsPromises.rm(dirPath, { recursive: true, force: true });
    console.log('Directory and all contents removed');

  } catch (err) {
    console.error(err);
  }
};

fileOps();
