const express =require('express');
 const app = express();

 app.get('/',(req,res)=>{
     res.send("Hello node");
 });

 app.get('/api/course',(req,res)=>{
     res.send([1,2,3])
 })

 app.listen(3000,()=>console.log("Post 3000 is listinig"));