const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petSchema = new Schema({
    animalType: {
        type: String,
        enum: ["cat", "dog", "other"],
        required: true
    },
    animalRace: String,
    size: {
        type: String,
        enum: ["small", "medium", "big", "no-info"],
        default: "no-info"
    },
    color: String,
    chip: {
        type: Boolean,
        default: false
    },
    photoId: String,
    observations: String,
    date: Date,
    name: String,
    years: Number
    
})

const model = mongoose.model('Pet', petSchema);

module.exports = model;