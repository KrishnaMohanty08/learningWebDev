const express = require('express');
const path = require('path');
const router = express.Router();
const items=require("../data/items")

router.use(express.urlencoded({ extended: true })); 
router.use(express.json()); 

// Routes
router.get('/', (req, res) => {
    console.log("home");
    res.sendFile(path.join(__dirname, '../Templates/home.html'));
    //res.redirect('/home')
});

router.get('/contact', (req, res) => {
    console.log("contact");
    res.sendFile(path.join(__dirname, '../Templates/contact.html'));
    //res.redirect("/contact")
});

router.get('/about', (req, res) => {
    console.log("about");
    res.sendFile(path.join(__dirname, '../Templates/about.html'));
});

router.get('/login', (req, res) => {
    console.log("login");
    res.sendFile(path.join(__dirname, '../Templates/login.html'));
});

router.post('/login', (req, res, next) => {
    console.log("checking in pls wait......");
    const { username, password } = req.body;
    try {
        if (username === "krish" && password === "***") {
            console.log("Welcome")
            res.redirect('/shop');
            // res.render('shop',{items}) ;
        } else {
            throw new Error("Invalid credential");
        }
    } catch (error) {
        next(error);
    }
});

router.get('/shop/:name', (req, res) => {
    console.log("shopcart", items);
    
    const filteredItems = items.filter(e => e.name == req.params.name);
    console.log(filteredItems);
    res.render("shop", { items: filteredItems }); 
});

router.get('/shop',(req,res)=>{
    res.render('shop',{items})
})

module.exports = router;
