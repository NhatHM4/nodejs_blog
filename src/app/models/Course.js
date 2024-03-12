const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    videoId: { type: String, maxLength: 255 },
    // slug: { type: String, slug: "name"}
    slug: { type: String, slug: ['name'] },
});

module.exports = mongoose.model('Course', Course);
