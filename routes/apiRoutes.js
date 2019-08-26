var db = require("../models");

module.exports = function(app) {
  



  app.post("/api/savingsInput", function (req, res){
  
    console.log(req.body)
    var user = req.body['data[userName]']
    var pass = req.body['data[password]']
    
    console.log(user + " " + pass)
    db.Savings.create({
      userName: user,
      password: pass
    })
    .then(function (dbSavings) {
      console.log("Your log in information has been recorded")
      res.send(dbSavings)
    }).catch(function (err) {
      console.log(err);
    });
  })

  app.get("/api/userInfo", function (req,res) {
    db.Savings.findOne({where: {userName: req.userName }}).then(function(user){
      res.json(user)
    })
  })

};