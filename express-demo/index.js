const express =require('express');
 const app = express();

 app.get('/',(req,res)=>{
     res.send("Helo node");
 });

 app.listen(3000,()=>console.log("Post 3000 is listinig"));