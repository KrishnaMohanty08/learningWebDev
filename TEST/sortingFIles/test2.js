const fs = require('fs');
const path = require('path');

const dirPath = 'K:/GitHub/learningWebDev/TEST/express';

// Check if directory exists
if (!fs.existsSync(dirPath)) {
    console.error('Directory does not exist!');
    process.exit(1); // Exit if directory does not exist
}

// Read all files in the directory
const files = fs.readdirSync(dirPath);
console.log("Files found:", files);

// Allowed file extensions
const allowedExtensions = ['.txt', '.png', '.pdf', '.jpg'];

for (let i = 0; i < files.length; i++) {
    const fileName = path.join(dirPath, files[i]); // Get full file path
    const fileExt = path.extname(files[i]); // Extract file extension

    if (allowedExtensions.includes(fileExt)) {
        const folderName = path.join(dirPath, fileExt.slice(1)); // Remove dot from extension for folder name (e.g., "txt", "png")

        // Create the folder if it doesn't exist
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName, { recursive: true });
            console.log(`Created folder: ${folderName}`);
        }

        const destination = path.join(folderName, files[i]); // Destination inside the extension folder

        // Move the file
        fs.renameSync(fileName, destination);
        console.log(`Moved ${files[i]} to ${folderName}`);
    }
}
