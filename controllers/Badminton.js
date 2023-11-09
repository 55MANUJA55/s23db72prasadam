var BadmintonModel = require('../models/Badminton');

exports.Badminton_list = async function (req, res) {
  try {
    const BadmintonList = await BadmintonModel.find();
    res.json(BadmintonList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};





exports.Badminton_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Badminton detail: ' + req.params.id);
};


exports.Badminton_create_post =async  function(req, res) {

 console.log(req.body)
 let document=new BadmintonModel()
 document.Player_Name=req.body.Player_Name;
 document.Player_Age=req.body.Player_Age;
 document.No_Of_Matches_Played=req.body.No_Of_Matches_Played;
 try{
  let result=await document.save();
  res.send(result);
 }
 catch(err)
 {
  res.status(500);
  res.send(`{"error": ${err}}`)
 }
};


exports.Badminton_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Badminton delete DELETE ' + req.params.id);
};
exports.Badminton_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: Badminton update PUT ' + req.params.id);
};