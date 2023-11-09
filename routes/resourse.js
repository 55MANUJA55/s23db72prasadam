var express = require('express');
var router = express.Router();
var api_controller = require('../controllers/api');
var Badminton_controller = require('../controllers/Badminton');
router.get('/', api_controller.api);
router.post('/Badminton', Badminton_controller.Badminton_create_post);
router.delete('/Badminton/:id', Badminton_controller.Badminton_delete);
router.put('/Badminton/:id', Badminton_controller.Badminton_update_put);
router.get('/Badminton/:id', Badminton_controller.Badminton_detail);
router.get('/Badminton', Badminton_controller.Badminton_list);

module.exports = router;