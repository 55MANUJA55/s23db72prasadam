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



// for a specific Badminton.
exports.Badminton_detail = async function(req, res) {
 console.log("detail" + req.params.id)
 try {
 result = await BadmintonModel.findById( req.params.id)
 console.log(result)
 res.send(result)
 } catch (error) {
 res.status(500)
 res.send(`{"error": document for id ${req.params.id} not found`+error);
 }
};

//Handle Costume update form on PUT.
exports.Badminton_update_put = async function(req, res) {
  console.log(`update on id ${req.params.id} with body 
 ${JSON.stringify(req.body)}`)
  try {
  let toUpdate = await BadmintonModel.findById( req.params.id)
  // Do updates of properties
  if(req.body.Player_Name) 
  toUpdate.Player_Name = req.body.Player_Name;
  if(req.body.Player_Age) toUpdate.Player_Age = req.body.Player_Age;
  if(req.body.No_Of_Matches_Played) toUpdate.No_Of_Matches_Played = req.body.No_Of_Matches_Played;
  let result = await toUpdate.save();
  console.log("Sucess " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": ${err}: Update for id ${req.params.id} 
 failed`);
  }
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
