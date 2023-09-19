const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BikeInstanceSchema = new Schema({
    bike: {type: Schema.Types.ObjectId, ref: "Bike", required: true},
    registration_no: {type: String, required: true},
    showroom: {type: String, required: true},
    price: {type: Number, required: true},
});

BikeInstanceSchema.virtual("url").get(function() {
    return `/catalog/bikeinstance/${this._id}`;
});

module.exports = mongoose.model("BikeInstance", BikeInstanceSchema);