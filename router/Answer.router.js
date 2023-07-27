const express = require("express")
const { Usermodal } = require("../modal/User.modal")
const { Quesmodal } = require("../modal/Ques.modal")
const { Answermodal } = require("../modal/Answer.modal")


const Answerrouter = express.Router()


Answerrouter.post("/addanswer", async (req, res) => {
    const { email, answer,name } = req.body
    try {
        const user = new Answermodal({email, answer,name})
        await user.save()
        res.json({ msg: "Answer Added" })
    } catch (error) {
        res.json({ msg: error})
    }
})

Answerrouter.get("/", async (req, res) => {
    try {
        let usersdata=await Answermodal.find()
        res.json({ msg: "Getting the question data",usersdata })
       } catch (error) {
        res.json({ msg:error})
       }
})



module.exports = {
    Answerrouter
}