const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
    timeEvents: [
        {
            time: String,
            events: [
              {
                title: String,
                startTime: String,
                duration: Number,
              }
            ]
        }
    ]
});

module.exports = mongoose.model('userTimeline', schema);


const TimeEvents = mongoose.model('userTimeline', schema);

const time = new TimeEvents({   timeEvents: [
    {
      time: '10-00',
      events: [
        {
          title: 'Lorem 10-00',
          startTime: '10-00',
          duration: 7200000,
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
          startTime: '10-00',
          duration: 3600000,
        }
      ]
    },
    {
      time: '14-00',
      events: [
        {
          title: 'lorem 14-00',
          startTime: '14-00',
          duration: 9000000,
        },
      ]
    },
    {
      time: '16-30',
      events: [
        {
          title: 'lorem 16-30',
          startTime: '16-30',
          duration: 1800000,
        },
      ]
    }
  ] });
time.save();
