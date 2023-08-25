const mongoose=require("mongoose")

//note schema
const noteSchema=mongoose.Schema({
    title: String,
    body: String,
    sub: String,
    userId: String
},{
    versionKey:false
})

const NoteModel=mongoose.model("note",noteSchema)

module.exports={
    NoteModel
}