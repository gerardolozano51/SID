var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./dashboard/dashboard', { title: 'Dashboard S.I.D.' });
});

module.exports = router;
