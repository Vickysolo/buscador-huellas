const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    pet: {
        type: Schema.ObjectId,
        ref: 'Pet'
    },
    // user:{
    //     type: Schema.ObjectId,
    //     ref: 'User'
    // },
    status: {
        type: String,
        enum: ["lost", "found", "other"],
        required: true
    },
    pictures: Array,
    extraInfo: String,
    coordinates: {
        type:[Number],
        required: true
    },
    date: Date
})

const model = mongoose.model('PetLostFoundStatus', mySchema);

module.exports = model;