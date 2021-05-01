import {Schema, model} from 'mongoose'

const filmSchema = new Schema ({
    title: String,
    img: String,
    created: Date,
}) 

export default model('Film', filmSchema)