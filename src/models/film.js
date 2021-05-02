import {Schema, model} from 'mongoose'

const filmSchema = new Schema ({
    title: String,
    img: String
    
},{
    timestamps: true,
    versionKey: false
}) 

export default model('Film', filmSchema)