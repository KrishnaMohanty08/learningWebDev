const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use((req,res,next)=>{
    fs.appendFile("log.txt",`${Date.now()}:${req.method}:${req.path}\n`,
(err)=>{
    if(err){
        console.log(err,"error occured")
    }next();
})
})

app.get('/users', (req, res) => {
    return res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userID = Number(req.params.id);
    const user = users.find(u => u.id === userID);
    if (user) {
        res.json(user);
    } else {
        res.status(404);
        res.json({ message: "user not found" });
    }
})
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        first_name: "Krishna",
        last_name: "Mohanty",
        email: "omu0@yellowpages.com",
        gender: "Male",
        job_title: "Technical Writer"
    }
    users.push(newUser);
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users,null,2),err=>{
        if(err) return res.status(500).json({message:"Failed to save user"})
    })
    res.status(201).json(newUser);
})

// PATCH (Update) user by ID
app.patch('/users/:id', (req, res) => {
  const userId = Number(req.params.id);
  const updatedFields = req.body;

  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[userIndex] = { ...users[userIndex], ...updatedFields };

  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
    if (err) return res.status(500).json({ message: "Failed to update user" });
    return res.json({ message: "User updated", data: users[userIndex] });
  });
});

// DELETE user by ID
app.delete('/users/:id', (req, res) => {
  const userId = Number(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(userIndex, 1)[0];

  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
    if (err) return res.status(500).json({ message: "Failed to delete user" });
    return res.json({ message: "User deleted", data: deletedUser });
  });
});




// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});