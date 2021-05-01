import {Schema, model} from 'mongoose'

const characterSchema = new Schema ({
    name: String,
    age: Number,
    weight: Number,
    imgURL: String,
    history: String
}, {
    film: [{
        ref: 'Film',
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
})

export default model ('Character', characterSchema)