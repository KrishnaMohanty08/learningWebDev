use("CrudDB")
db.createCollection("courses")
db.courses.insertOne({
    name:"harayys work dev free",
    prices:293,
    assignment:12,
    projects:45
})
console.log(db)
