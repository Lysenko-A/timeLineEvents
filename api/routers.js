const {
    getUserTimeLine,
    postUserTimeLine,
    deleteUserTimeLine
} = require('./controllers/timeline');

const express = require('express');
const router = express.Router();

router.get('/user-timeline', getUserTimeLine);

router.post('/user-timeline/', postUserTimeLine);

router.delete('/user-timeline/:id', deleteUserTimeLine);

module.exports = router;