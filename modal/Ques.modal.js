const mongoose=require("mongoose")

const QuesSchema=mongoose.Schema({
    name:String,
    email:String,
    question:Object
},{
    versionKey:false
})


const Quesmodal=mongoose.model("ques",QuesSchema)


module.exports={
    Quesmodal
}