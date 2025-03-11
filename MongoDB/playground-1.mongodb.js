/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('Sigma');

// Insert a few documents into the sales collection.
db.getCollection('Course').insertMany([
    {
      "name": "Java",
      "Price": 2000,
      "Instructor": "Harry"
    },
    {
      "name": "Python",
      "Price": 1500,
      "Instructor": "Alice"
    },
    {
      "name": "JavaScript",
      "Price": 1800,
      "Instructor": "Bob"
    },
    {
      "name": "C++",
      "Price": 2200,
      "Instructor": "Charlie"
    },
    {
      "name": "React",
      "Price": 2500,
      "Instructor": "David"
    },
    {
      "name": "Node.js",
      "Price": 2300,
      "Instructor": "Eve"
    },
    {
      "name": "Angular",
      "Price": 2700,
      "Instructor": "Frank"
    },
    {
      "name": "Django",
      "Price": 2600,
      "Instructor": "Grace"
    },
    {
      "name": "Flask",
      "Price": 1900,
      "Instructor": "Hannah"
    },
    {
      "name": "Ruby on Rails",
      "Price": 2100,
      "Instructor": "Isaac"
    },
    {
      "name": "Swift",
      "Price": 2800,
      "Instructor": "Jack"
    },
    {
      "name": "Kotlin",
      "Price": 2400,
      "Instructor": "Karen"
    },
    {
      "name": "Go",
      "Price": 2500,
      "Instructor": "Leo"
    },
    {
      "name": "Rust",
      "Price": 2600,
      "Instructor": "Mia"
    },
    {
      "name": "PHP",
      "Price": 1700,
      "Instructor": "Nathan"
    },
    {
      "name": "SQL",
      "Price": 1600,
      "Instructor": "Olivia"
    },
    {
      "name": "MongoDB",
      "Price": 1900,
      "Instructor": "Paul"
    },
    {
      "name": "Machine Learning",
      "Price": 3000,
      "Instructor": "Quincy"
    },
    {
      "name": "Deep Learning",
      "Price": 3500,
      "Instructor": "Rachel"
    },
    {
      "name": "Cybersecurity",
      "Price": 2900,
      "Instructor": "Steve"
    },
    {
      "name": "Blockchain",
      "Price": 3100,
      "Instructor": "Tina"
    },
    {
      "name": "DevOps",
      "Price": 3300,
      "Instructor": "Uma"
    },
    {
      "name": "Cloud Computing",
      "Price": 3400,
      "Instructor": "Victor"
    },
    {
      "name": "Data Science",
      "Price": 3200,
      "Instructor": "Wendy"
    },
    {
      "name": "AI",
      "Price": 3600,
      "Instructor": "Xavier"
    }
  ]
  );



// Print a message to the output window.
console.log(` data inserted`);


