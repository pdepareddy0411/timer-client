var express = require('express');
const { getTime } = require('../utils/clock');

var router = express.Router();

/* GET users listing. */
router.get('/time', function (req, res, next) {
  res.send({ time: getTime() });
});

module.exports = router;
