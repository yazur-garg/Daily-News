const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
    id: String,
    name: String,
    email: String,
    img: String,
    prefs: {
        locs: [String],
        categs: [String],
    }
});

module.exports = userSchema;