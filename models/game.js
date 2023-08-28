const mongoose = require("mongoose");

const Schema = new mongoose.Schema;

const GameSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    genre: {type: Schema.Types.objectId, ref: "Genre", required: true},
    release_date: {type: Date, default: Date.now},
    developer: {type: Schema.Types.objectId, ref: "Developer", required: true},
    status: {
        type: String,
        required: true,
        enum: ["Finished", "Backlog", "Yet to Play"],
        default: "Yet to Play",
    }
})

GameSchema.virtual("url").get(function() {
    return `/catalog/game/${this._id}`;
})
module.exports = mongoose.model("Game", GameSchema);