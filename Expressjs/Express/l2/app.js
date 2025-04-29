const express=require('express')
const path=require('path')
const app =express()
const port =4000;
const route=express.Router();

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })); // <== Add this


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/templates/index.html'))
})

app.get('/login',(req,res,next)=>{
    console.log("login")
    res.sendFile(path.join(__dirname,'/templates/login.html'))
})

app.post('/login',(req,res,next)=>{
    console.log("check in")
    try{
        const {username}=req.body;
        if(username.toLowerCase()==="krish"){
            res.redirect('/home');
        }else{
            throw new Error ("Invalid Username");
        }
    }catch(error){
        next(error);
    }
})

app.use((err, req, res, next) => {
    console.error('Error caught by middleware:', err.message);
    res.status(500).send('Oops! Something went wrong: ' + err.message);
});

app.get('/home',(req,res,next)=>{
    console.log("login")
    res.send('<h2>Landing on home page</h2>')
})

app.listen(port,()=>{
    console.log(`http://localhost:4000`)
})