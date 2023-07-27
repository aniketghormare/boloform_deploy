const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    name:String,
    description:String
},{
    versionKey:false
})


const Usermodal=mongoose.model("user",UserSchema)


module.exports={
    Usermodal
}