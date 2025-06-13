Here is your content formatted as a markdown (.md) file:

````markdown
# 🌐 URL Methods in JavaScript / Node.js

---

## 1. ✅ The Modern URL Class

```js
const url = new URL('https://user:pass@example.com:8080/path/name?search=test#hash');
````

### 🧩 URL Object Properties

| Property       | Example Value                              | Description                        |
| -------------- | ------------------------------------------ | ---------------------------------- |
| `href`         | full URL                                   | The full URL string                |
| `origin`       | [https://example.com](https://example.com) | Protocol + hostname                |
| `protocol`     | https:                                     | Protocol used                      |
| `username`     | user                                       | Auth username                      |
| `password`     | pass                                       | Auth password                      |
| `host`         | example.com:8080                           | Hostname and port                  |
| `hostname`     | example.com                                | Hostname without port              |
| `port`         | 8080                                       | Port number                        |
| `pathname`     | /path/name                                 | URL path                           |
| `search`       | ?search=test                               | Query string (starts with ?)       |
| `searchParams` | URLSearchParams object                     | Methods to access query parameters |
| `hash`         | #hash                                      | Fragment identifier                |

---

## 2. 🛠️ URLSearchParams Methods

```js
const params = new URLSearchParams('a=1&b=2&c=3');
```

| Method              | Example                        | Description                       |
| ------------------- | ------------------------------ | --------------------------------- |
| `get(name)`         | `params.get('a')` → "1"        | Get value for a key               |
| `set(name, value)`  | `params.set('a', '5')`         | Set or overwrite value            |
| `append(name, val)` | `params.append('a', '6')`      | Add a new value (won’t overwrite) |
| `delete(name)`      | `params.delete('b')`           | Remove a parameter                |
| `has(name)`         | `params.has('c')` → true       | Check if a param exists           |
| `toString()`        | `params.toString()` → a=1\&c=3 | Serialize back to query string    |
| Looping             | `for (const [k,v] of params)`  | Iterate over parameters           |

---

## 3. 🧓 Legacy (Node.js): url.parse()

```js
const { parse } = require('url');
const parsed = parse('https://example.com/page?x=1', true);
```

| Property   | Description                         |
| ---------- | ----------------------------------- |
| `href`     | Full URL string                     |
| `host`     | example.com                         |
| `hostname` | example.com                         |
| `port`     | (undefined if default port)         |
| `pathname` | /page                               |
| `search`   | ?x=1                                |
| `query`    | { x: '1' } (if second param = true) |

> ⚠️ Note: This is the older API. Prefer `new URL()` in modern code.

---

## 📌 Example: Construct URL

```js
const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL.href); // https://example.org/a/b/c?d=e#fgh

