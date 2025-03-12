# MongoDB CRUD Operations

## 1️⃣ Create (Insert Data)

### **Insert a Single Document**
```js
 db.collection.insertOne({ name: "Alice", age: 25, city: "New York" });
```
✅ Inserts a single document into the collection.

### **Insert Multiple Documents**
```js
 db.collection.insertMany([
   { name: "Bob", age: 30, city: "London" },
   { name: "Charlie", age: 28, city: "Paris" }
 ]);
```
✅ Inserts multiple documents at once.

---

## 2️⃣ Read (Retrieve Data)

### **Find One Document**
```js
 db.collection.findOne({ name: "Alice" });
```
✅ Returns the first matching document.

### **Find All Documents**
```js
 db.collection.find({});
```
✅ Returns all documents in the collection.

### **Find with a Condition**
```js
 db.collection.find({ age: { $gt: 25 } });
```
✅ Finds all documents where `age > 25`.

---

## 3️⃣ Update (Modify Data)

### **Update a Single Document**
```js
 db.collection.updateOne(
   { name: "Alice" },
   { $set: { age: 26 } }
 );
```
✅ Updates the first matching document.

### **Update Multiple Documents**
```js
 db.collection.updateMany(
   { city: "London" },
   { $set: { country: "UK" } }
 );
```
✅ Updates all documents that match the condition.

---

## 4️⃣ Delete (Remove Data)

### **Delete a Single Document**
```js
 db.collection.deleteOne({ name: "Charlie" });
```
✅ Deletes the first matching document.

### **Delete Multiple Documents**
```js
 db.collection.deleteMany({ age: { $lt: 25 } });
```
✅ Deletes all documents where `age < 25`.

---

## 🎯 Summary
| Operation  | Method |
|------------|---------------------------------|
| **Create** | `insertOne()`, `insertMany()` |
| **Read**   | `findOne()`, `find()`         |
| **Update** | `updateOne()`, `updateMany()` |
| **Delete** | `deleteOne()`, `deleteMany()` |

🚀 **MongoDB makes it easy to perform CRUD operations with flexible queries!**

