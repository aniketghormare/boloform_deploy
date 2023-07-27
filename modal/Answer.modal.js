const mongoose=require("mongoose")

const AnswerSchema=mongoose.Schema({
    name:String,
    email:String,
    answer:Array
},{
    versionKey:false
})


const Answermodal=mongoose.model("answer",AnswerSchema)


module.exports={
    Answermodal
}