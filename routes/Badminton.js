var express = require('express');
const Badminton_controlers= require('../controllers/Badminton');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Badminton', { title: 'Search Results' });
});

module.exports = router;
router.get('/detail', Badminton_controlers.Badminton_view_one_Page);
