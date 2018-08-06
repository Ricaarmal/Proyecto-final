const express = require('express');
const router  = express.Router();
const path = require('path');

/* GET home page */
router.get('/*', (req, res, next) => {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = router;
