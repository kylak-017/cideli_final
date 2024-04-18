const express = require('express');
const router = express.Router();

const {
    getSession
} = require('./user');


router.get('/session', getSession);


module.exports = router;