const express=require("express");

const app=express();
app.get('/',(req,res)=>{
    console.log(req.body)
    res.send("express server test!!!!!!!!")
})
app.get('/economy',(req,res)=>{
    const data = require('./public/economy.json');
    res.send(data)
})
app.get('/economy/:year',(req,res)=>{
    const year=req.params.year
    const data = require('./public/economy.json');
    res.send(data[year]);
})


app.listen(8080,()=>{
    console.log(`app is listening on port 8080`)
})