const mongoose = require("mongoose");
var slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const Course = new Schema({
    name: {type: String, maxLength: 255},
    description: {type: String},
    image: {type: String},
    slug: { type: String, slug: "name" }
}, {timestamps: true,});
// createAt: {type: Date, default: Date.now},
    // updatedAt: {type: Date, default: Date.now},
module.exports = mongoose.model('Course', Course);