const UserTimeline = require('../models/userTimeline');

module.exports.getUserTimeLine = async function (req, res) {
    const timeLines = await UserTimeline.find();
    res.json(timeLines[0]);
};

module.exports.postUserTimeLine = function (req, res) {
    UserTimeline.create(req.body);
    res.end();
};

module.exports.deleteUserTimeLine = async function (req, res) {
    UserTimeline.findOneAndDelete({id: req.param.id});
    res.end();
};