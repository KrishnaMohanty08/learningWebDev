import express from 'express';
import crypto from 'crypto';

const app = express();
const port = 3000;

app.use(express.json()); 

const users = {
  testuser: {
    salt: 'random_salt',
    hash: crypto.pbkdf2Sync('password123', 'random_salt', 10000, 64, 'sha512'),
  }
};

app.post('/', (req, res) => {
  let username = req.body.username || '';
  const password = req.body.password || '';

  username = username.replace(/[!@#$%^&*]/g, '');

  if (!username || !password || !users[username]) {
    console.log("error")
    return res.sendStatus(400);
  }
  console.log(username,password);
  const { salt, hash } = users[username];
  const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512');

  if (crypto.timingSafeEqual(hash, encryptHash)) {
    res.sendStatus(200); // Success
  } else {
    res.sendStatus(401); // Unauthorized
  }
});

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});
