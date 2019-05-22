const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
    timeEvents: [
        {
            time: String,
            events: [
                {
                    title: String,
                    startTime: Number,
                    endTime: Number,
                }
            ]
        }
    ]
});

module.exports = mongoose.model('userTimeline', schema);