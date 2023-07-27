const express = require("express")
const { Usermodal } = require("../modal/User.modal")


const Userrouter = express.Router()


Userrouter.post("/add", async (req, res) => {
    const { name, description } = req.body
    try {
        const user = new Usermodal({name, description})
        await user.save()
        res.json({ msg: "User Added" })
    } catch (error) {
        res.json({ msg: error})
    }
})
Userrouter.get("/", async(req, res) => {
   try {
    let usersdata=await Usermodal.find()
    res.json({ msg: "Getting the user data",usersdata })
   } catch (error) {
    res.json({ msg:error})
   }
})


module.exports = {
    Userrouter
}