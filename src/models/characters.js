import {Schema, model} from 'mongoose'

const characterSchema = new Schema ({
    name: {
        type: String,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    history: {
        type: String,
        required: true
    },
    film: [{
        ref: "Film",
        type: Schema.Types.ObjectId,
        unique: true
    }]
}, {
    timestamps: true,
    versionKey: false
})

export default model ('Character', characterSchema)