import mongoose from 'mongoose'

export const personSchema = new mongoose.Schema({

    nomPer: {
        type: String,
        required: true,
    },
    emailPer: {
        type: String,
        required: true,
    },
    passPer: {
        type: String,
        // required: true,
    },



})

export default mongoose.model('Person', personSchema);