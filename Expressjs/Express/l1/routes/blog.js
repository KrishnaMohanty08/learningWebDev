const express =require('express')
const path =require('path')
const blogs=require('../data/blogs')
const router=express.Router();


router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})
router.get('/blogs',(req,res)=>{
    blogs.forEach(e=>{
        console.log(e.tittle)
    });
    res.sendFile(path.join(__dirname,'../templates/bloghomepage.html'))
    //res.sendFile(path.join(__dirname,'../data/blogs.js'))
    //res.json(blogs)
})
// router.get('/blogpost/:slug',(req,res)=>{
//     //console.log(req.params.slug)
//     myblog=blogs.filter((e)=>{
//         return e.slug==req.params.slug
//     });
//     console.log(myblog)
//     res.send(myblog)
//     //res.sendFile(path.join(__dirname,'../templates/blogpages.html'))
// })
router.get('/blogpost/:slug', (req, res) => {
    const myblog = blogs.filter(e =>
         e.slug === req.params.slug);
    res.render('blogpages', { myblog }); // Pass data to the template
});



module.exports =router;