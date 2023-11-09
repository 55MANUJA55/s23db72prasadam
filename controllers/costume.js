var Costume = require('../models/costume');


exports.costume_list = async function (req, res) {
  try {
    const costumes = await Costume.find();
    res.json(costumes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};



exports.costume_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};


exports.costume_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Costume create POST');
};


exports.costume_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
exports.costume_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: Costume update PUT ' + req.params.id);
};