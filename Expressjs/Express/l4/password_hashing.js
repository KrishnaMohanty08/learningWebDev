import crypto from'crypto'


const password = 'hello123';
//a salt is a random string of characters that is added to a password before it's hashed.
const salt = crypto.randomBytes(16).toString('hex');
/*PBKDF2 stands for: Password-Based Key Derivation Function 2
It strengthens a password by:Adding a salt
crypto.pbkdf2Sync(password, salt, iterations, keylen, digest)
*/
const hash = crypto.pbkdf2Sync(password, salt, 100, 20, 'sha512');
console.log("hashed  :"+salt+' '+hash);
