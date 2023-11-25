const exprees = require('express')
const router = require('./Routes/user')
const app = exprees()
const cors = require("cors")
const morgan = require('morgan')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://faiz:faiz@cluster0.enqka2g.mongodb.net/').then(()=>{
    console.log("connect mongoDb");
})
.catch((err)=>{console.log(err);})

app.use(morgan("tiny"))
app.use(exprees.json())
app.use('/user', router)

const middelever=(req ,res , next)=>{
console.log("Middlewere console");
next()
}
app.use(middelever)
app.use(cors())

app.get("/",(req ,res)=>{
    res.send({
        "status" :"200",
        "Name" :"Faiz"
    })
})


app.listen(3000,()=>{
console.log("Server React To Go-->");
})