const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BikeSchema = new Schema({
    model: {type: String, required: true},
    brand: {type: Schema.Types.ObjectId, ref: "Brand", require: true},
    mileage: {type: Number, required: true},
    price: {type: Number, required: true},
    category: {type: Schema.Types.ObjectId, ref:"Category", require: true}
})

BikeSchema.virtual("url").get(function() {
    return `/catalog/bike/${this._id}`;
})

module.exports = mongoose.model("Bike", BikeSchema);