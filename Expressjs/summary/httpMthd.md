## Difference Between GET, POST, and PUT HTTP Methods

| Method | Purpose | Idempotency | Typical Use | Data in URL | Data in Body | Security | Example |
|--------|---------|-------------|-------------|-------------|--------------|----------|---------|
| GET    | Retrieve data from server | Yes        | Reading/fetching resources | Yes (query string) | No           | Least secure (data visible in URL) | Fetching user profile: `GET /users/123` |
| POST   | Create new resource on server | No         | Creating new entries | No          | Yes          | More secure than GET (data in body) | Creating user: `POST /users` with user data in body |
| PUT    | Update or replace resource (or create if not exists) | Yes        | Updating/replacing resources | No          | Yes          | More secure than GET (data in body) | Updating user: `PUT /users/123` with updated data |

---

### **GET**
- Used to *retrieve* data from the server without modifying it.
- Parameters are sent as part of the URL (query string).
- Safe and idempotent: multiple identical GET requests yield the same result, and do not change server state.
- Not suitable for sending sensitive data, as URLs can be logged and cached[1][6][10].

### **POST**
- Used to *create* new resources on the server.
- Data is sent in the request body, not the URL.
- Not idempotent: multiple identical POST requests may create multiple resources.
- Slightly more secure than GET, since data is not exposed in the URL, but still should use HTTPS for sensitive data[1][2][3][4][7][10].

### **PUT**
- Used to *update* or *replace* an existing resource, or create it if it does not exist.
- Data is sent in the request body.
- Idempotent: multiple identical PUT requests will always have the same effect as a single request (e.g., updating a resource to the same state repeatedly does not change the result).
- Typically used for full updates or replacements of resources[1][2][3][5][7][10].

---

#### **Key Differences**
- **Idempotency:** PUT is idempotent, POST is not, GET is idempotent.
- **Purpose:** GET retrieves, POST creates, PUT updates or replaces.
- **Data Handling:** GET sends data in the URL, POST/PUT send data in the body.
- **Security:** GET exposes data in URL; POST/PUT keep data in body (but always use HTTPS for sensitive data)[1][6][10].

---

**Summary:**  
- Use **GET** to fetch data, **POST** to create new data, and **PUT** to update or replace existing data.  
- Choose the method that matches your intended action and respects the properties of idempotency and security as required by your application
