const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hi there, This is Ali's first task at Nest JS 😉")
});

module.exports = router;
