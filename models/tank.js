const mongoose = require("mongoose");

const TankSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
const Tank = mongoose.model("Tank", TankSchema);
module.exports = Tank;
