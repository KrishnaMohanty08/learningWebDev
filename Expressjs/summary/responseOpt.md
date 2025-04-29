The `res` object in Express (short for *response*) is used to send HTTP responses from your server to the client. It provides a variety of methods and properties to control the response's status, content, headers, and more. Here are the most commonly used `res` methods and properties, with examples:

---

## Common `res` Methods

- **res.send()**  
  Sends a response of various types (string, object, array, Buffer, etc.) to the client and ends the response process.
  ```js
  res.send('Hello World!');
  res.send({ user: 'Alice' });
  ```


- **res.json()**  
  Sends a JSON response. Useful for APIs.
  ```js
  res.json({ message: 'Success' });
  ```


- **res.status()**  
  Sets the HTTP status code for the response.
  ```js
  res.status(404).send('Not Found');
  ```


- **res.render()**  
  Renders a view template (like EJS, Pug) and sends the resulting HTML to the client.
  ```js
  res.render('profile', { user: userObject });
  ```


- **res.redirect()**  
  Redirects the client to a different URL.
  ```js
  res.redirect('/login');
  ```


- **res.sendFile()**  
  Sends a file as an HTTP response.
  ```js
  res.sendFile('/path/to/file.html');
  ```


- **res.download()**  
  Prompts the client to download a file as an attachment.
  ```js
  res.download('/path/to/file.pdf');
  ```


- **res.end()**  
  Ends the response process without sending any data.
  ```js
  res.end();
  ```


- **res.set() / res.setHeader()**  
  Sets HTTP headers for the response.
  ```js
  res.set('Content-Type', 'application/json');
  ```


---

## Common `res` Properties

- **res.app**  
  Reference to the Express application instance.[5][7]

- **res.locals**  
  Object for passing data between middleware and views for the current request.[5][6][7]

- **res.headersSent**  
  Boolean indicating whether the response headers have already been sent.[5][6][7]

---

## Example Usage

```js
app.get('/user/:id', (req, res) => {
  // Send plain text
  res.send('User profile');

  // Send JSON
  // res.json({ id: req.params.id });

  // Set status and send
  // res.status(404).send('User not found');

  // Render a view
  // res.render('user', { id: req.params.id });
});
```


---

**In summary:**  
The `res` object is essential for sending responses in Express. Its methods like `send()`, `json()`, `status()`, `render()`, `redirect()`, and `sendFile()` cover most response scenarios in web applications and APIs.

