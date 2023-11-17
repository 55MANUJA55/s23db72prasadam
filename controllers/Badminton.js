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


exports.Badminton_view_all_Page = async function(req, res) {
  try{
  theBadminton = await BadmintonModel.find();
  console.log(theBadminton, "data")
  res.render('Badminton', { title: 'Badminton Search Results', results : theBadminton });
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
 };

// Handle Costume delete on DELETE.
exports.Badminton_delete = async function(req, res) {
 console.log("delete " + req.params.id)
 try {
 result = await BadmintonModel.findByIdAndDelete( req.params.id)
 console.log("Removed " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": Error deleting ${err}}`);
 }
};

//view
// Handle a show one view with id specified by query
exports.Badminton_view_one_Page = async function(req, res) {
  console.log("single view for id " + req.query.id)
  try{
  result = await BadmintonModel.findById( req.query.id)
  res.render('Badmintondetail', 
 { title: 'Badminton Detail', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
 };

 // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Badminton_create_Page = function(req, res) {
  console.log("create view")
  try{
  res.render('Badmintoncreate', { title: 'Badminton Create'});
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
 };

 // Handle building the view for updating a costume.
// query provides the id
exports.Badminton_update_Page = async function(req, res) {
  console.log("update view for player "+req.query.id)
  try{
  let result = await BadmintonModel.findById(req.query.id)
  res.render('Badmintonupdate', { title: 'Badminton Update', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
 };

 // Handle a delete one view with id from query
exports.Badminton_delete_Page = async function(req, res) {
 console.log("Delete view for id " + req.query.id)
 try{
 result = await BadmintonModel.findById(req.query.id)
 res.render('Badmintondelete', { title: 'Badminton Delete', toShow: 
 result });
 }
 catch(err){
 res.status(500)
 res.send(`{'error': '${err}'}`);
 }
};


