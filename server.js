const express=require("express");
const cors=require("cors")



const app=express();


app.use(express.static('public'));
app.use(cors());
app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());
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


app.listen(process.env.PORT || 3000,()=>{
    console.log(`app is listening on port 8080`)
})