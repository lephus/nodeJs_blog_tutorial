const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: {type: String, maxLength: 255},
        description: {type: String},
        image: {type: String},
        slug: { type: String, slug: "name" }
    },
    {
        timestamps: true,
    }
);

// ADD PLUGIN
Course.plugin(mongooseDelete);
Course.plugin(mongooseDelete, 
    {
        deletedAt: true,
        overrideMethods: 'all' 
    }
);
mongoose.plugin(slug);

module.exports = mongoose.model('Course', Course);