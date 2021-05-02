import {Schema, model} from 'mongoose'

const characterSchema = new Schema ({
    name: String,
    age: Number,
    weight: Number,
    img: String,
    history: String
}, {
    timestamps: true,
    versionKey: false
})

export default model ('Character', characterSchema)