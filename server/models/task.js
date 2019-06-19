const mongoose = require("mongoose");
var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false}
}, {timestamps: true});

module.export = mongoose.model("Task", TaskSchema);