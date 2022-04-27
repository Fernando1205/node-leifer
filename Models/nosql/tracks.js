const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
    name: String,
    album: String,
    cover: {
        type: String,
        validate: {
            validator: (req) => {
                return true;
            },
            message: "ERROR_URL",
        }
    },
    artist: {
        name: String,
        nickname: String,
        nationality: String
    },
    durations: {
        start: Number,
        end: Number
    },
    mediaId: mongoose.Types.ObjectId
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = mongoose.model("tracks", TrackSchema);