const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    passwd: { type: String, required: true },
    email: { type: String, },
    age: { type: Number, }
});

const Member = mongoose.model("Member", memberSchema);




