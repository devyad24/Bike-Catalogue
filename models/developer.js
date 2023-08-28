const mongoose = require("mongoose");

const Schema = new mongoose.Schema;

const developerSchema = new Schema({
    title: {type: String, required: true},
})

GameSchema.virtual("url").get(function() {
    return `/catalog/developer/${this._id}`;
})
module.exports = mongoose.model("Developer", developerSchema);