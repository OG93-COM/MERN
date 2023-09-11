const Players = require("../models/players.model");


// FindAll
module.exports.findAllPlayers =(req,res)=>{
    Players.find()
    .then(allPlayers =>{
      console.log(allPlayers)
      res.json({allPlayers})
     })
    .catch(err => { res.json({message: "Wait a minute😊"})})
}

// FindOne
module.exports.findOnePlayers = (req,res) =>{
    Players.findOne({_id:req.params.id})
      .then((Players)=>{
        console.log("This Player", Players)
        res.json(Players)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}

// Create
module.exports.createPlayers = (req,res) =>{
    Players.create(req.body).then(newPlayers=>{
          console.log("New Player : ", newPlayers)
          res.json(newPlayers)
      }).catch(err=>{
          console.log(err)
          res.json({error:err})
      })
  }

  // Update One
module.exports.updateOnePlayers = (req, res) => {
    Players.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPlayers => { res.json({ updatedPlayers }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })
}
// Delete

module.exports.deletePlayers = (req, res) => {
    Players.deleteOne({ _id: req.params.id })
        .then(deletedresult => { res.json({ deletedresult }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })


}