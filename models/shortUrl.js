const mongoose = require('mongoose');
const shortId = require('shortid');

const shortUrlSchema = new mongoose.Schema(
    {
        full: {
            type: String,
            requred: true
        },
        short: {
            type: String,
            required: true,
            default: shortId.generate
        },
        clicks: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);

module.exports = ShortUrl;