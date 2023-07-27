const express = require("express")
const { Usermodal } = require("../modal/User.modal")
const { Quesmodal } = require("../modal/Ques.modal")


const Quesrouter = express.Router()


Quesrouter.post("/addquestion", async (req, res) => {
    const { email, question,name } = req.body
    try {
        const user = new Quesmodal({email, question,name})
        await user.save()
        res.json({ msg: "Question Added" })
    } catch (error) {
        res.json({ msg: error})
    }
})

Quesrouter.get("/", async (req, res) => {
    try {
        let usersdata=await Quesmodal.find()
        res.json({ msg: "Getting the question data",usersdata })
       } catch (error) {
        res.json({ msg:error})
       }
})



module.exports = {
    Quesrouter
}