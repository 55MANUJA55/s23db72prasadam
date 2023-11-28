var express = require('express');
const Badminton_controlers= require('../controllers/Badminton');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Badminton', { title: 'Search Results' });
// });

module.exports = router;

router.get('/', Badminton_controlers.Badminton_view_all_Page);
router.get('/detail', Badminton_controlers.Badminton_view_one_Page);

// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

router.get('/create',secured, Badminton_controlers.Badminton_create_Page);
router.get('/update',secured, Badminton_controlers.Badminton_update_Page);
router.get('/delete',secured, Badminton_controlers.Badminton_delete_Page);

