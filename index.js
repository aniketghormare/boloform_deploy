const express=require("express")
const { connect } = require("./db")
const { Userrouter } = require("./router/User.router")
const cors=require("cors")
const { Quesrouter } = require("./router/Question.router")
const { Answermodal } = require("./modal/Answer.modal")
const { Answerrouter } = require("./router/Answer.router")
require('dotenv').config()
const app=express()
app.use(express.json())
app.use(cors())
app.use("/users",Userrouter)
app.use("/question",Quesrouter)
app.use("/answer",Answerrouter)
app.listen(process.env.PORT,async()=>{
    try {
        await connect
        console.log(`server connected ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
   
})