# Blob in React

## Introduction
Blob (**Binary Large Object**) is a fundamental data type in JavaScript used for handling raw binary data, such as images, videos, and text files. It is commonly used in React applications for file uploads, downloads, and API interactions.

---

## 📌 Key Features
- Efficiently handles **binary data** in web applications.
- Works well with **file uploads and downloads**.
- Supports **dynamic file generation** (e.g., CSV, JSON, text files).
- Allows **image rendering from API responses**.

---

## 📂 Common Use Cases

### 1️⃣ Creating a Blob from Text or JSON
```js
const data = { name: "John Doe", age: 25 };
const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
console.log(blob); // Outputs the Blob object
2️⃣ Downloading a File Using Blob
js
Copy
Edit
const downloadFile = () => {
    const text = "Hello, this is a sample text file!";
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "sample.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url); // Free memory
};
3️⃣ Fetching and Displaying an Image from Blob
js
Copy
Edit
const [imageUrl, setImageUrl] = React.useState(null);

const fetchImage = async () => {
    const response = await fetch("https://via.placeholder.com/150");
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setImageUrl(url);
};

React.useEffect(() => {
    fetchImage();
}, []);

return <img src={imageUrl} alt="Fetched from Blob" />;
4️⃣ Uploading and Reading a File as Blob
js
Copy
Edit
const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        console.log(reader.result); // Outputs the file content
    };

    reader.readAsText(file); // Use `readAsDataURL(file)` for images
};

return <input type="file" onChange={handleFileUpload} />;
🛠 When to Use Blob in React?
✅ When dealing with file uploads and downloads.
✅ When handling binary data from APIs.
✅ When generating dynamic files (CSV, JSON, PDFs, etc.).
✅ When rendering images or videos fetched as blobs.

