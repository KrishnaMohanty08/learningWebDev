use("CrudDB")
db.createCollection("courses")
// db.courses.insertMany(
//     [
//         {
//           "name": "Java",
//           "Price": 2000,
//           "Instructor": "Harry"
//         },
//         {
//           "name": "Python",
//           "Price": 0,
//           "Instructor": "Alice"
//         },
//         {
//           "name": "JavaScript",
//           "Price": 1800,
//           "Instructor": "Bob"
//         },
//         {
//           "name": "C++",
//           "Price":0,
//           "Instructor": "Charlie"
//         },
//         {
//           "name": "React",
//           "Price": 2500,
//           "Instructor": "David"
//         },
//         {
//           "name": "Node.js",
//           "Price": 2300,
//           "Instructor": "Eve"
//         },
//         {
//           "name": "Angular",
//           "Price": 0,
//           "Instructor": "Frank"
//         },
//         {
//           "name": "Django",
//           "Price": 2600,
//           "Instructor": "Grace"
//         },
//         {
//           "name": "Flask",
//           "Price": 1900,
//           "Instructor": "Hannah"
//         },
//         {
//           "name": "Ruby on Rails",
//           "Price": 0,
//           "Instructor": "Isaac"
//         },
//         {
//           "name": "Swift",
//           "Price": 0,
//           "Instructor": "Jack"
//         },
//         {
//           "name": "Kotlin",
//           "Price": 0,
//           "Instructor": "Karen"
//         },
//         {
//           "name": "Go",
//           "Price": 0,
//           "Instructor": "Leo"
//         },
//         {
//           "name": "Rust",
//           "Price": 2600,
//           "Instructor": "Mia"
//         },
//         {
//           "name": "PHP",
//           "Price": 1700,
//           "Instructor": "Nathan"
//         },
//         {
//           "name": "SQL",
//           "Price": 1600,
//           "Instructor": "Olivia"
//         },
//         {
//           "name": "MongoDB",
//           "Price": 1900,
//           "Instructor": "Paul"
//         },
//         {
//           "name": "Machine Learning",
//           "Price": 3000,
//           "Instructor": "Quincy"
//         },
//         {
//           "name": "Deep Learning",
//           "Price": 3500,
//           "Instructor": "Rachel"
//         },
//         {
//           "name": "Cybersecurity",
//           "Price": 2900,
//           "Instructor": "Steve"
//         },
//         {
//           "name": "Blockchain",
//           "Price": 3100,
//           "Instructor": "Tina"
//         },
//         {
//           "name": "DevOps",
//           "Price": 3300,
//           "Instructor": "Uma"
//         },
//         {
//           "name": "Cloud Computing",
//           "Price": 3400,
//           "Instructor": "Victor"
//         },
//         {
//           "name": "Data Science",
//           "Price": 3200,
//           "Instructor": "Wendy"
//         },
//         {
//           "name": "AI",
//           "Price": 3600,
//           "Instructor": "Xavier"
//         }
//       ]
      
// )
console.log(db)

let a=db.courses.find({Price:0})
console.log(a.toArray())

let b=db.courses.findOne({Price:0})//give first that comes 
console.log(b)

//update
db.courses.updateOne({Price:0},
    {$set:{Price:1000}}
);

//delete
db.courses.deleteMany({Price:0})