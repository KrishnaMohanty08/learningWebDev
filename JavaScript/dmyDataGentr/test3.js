import express from 'express'
import mongoose from 'mongoose'
import employee from "./module/employee.js"

const app = express()
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/company');
app.set('view engine','ejs');

app.get('/', (req, res) => {
    res.render('index',{foo:'FOO'});
  })

const name=['harry','ishan','nipun','krishna','mukesh',"Alice", "Bob", "Charlie", "David", "Eve"];
const languages = ["JavaScript", "Python", "Java", "C++", "Ruby", "Go", "Swift", "PHP", "C#", "Kotlin"];
const cities = ["New York", "Los Angeles", "London", "Tokyo", "Paris", "Berlin", "Sydney", "Dubai", "Mumbai", "Toronto"];

app.get('/generate', async(req, res) => {
    for(let index =0;index<10;index++){
        let e=await employee.create({
            name:name[index],
            salary:Math.floor(Math.random()*1000)+1,
            language:languages[Math.floor(Math.random()*languages.length)],
            city:cities[Math.floor(Math.random()*cities.length)],
            isManager:false||true
        })

    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})