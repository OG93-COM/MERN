const Jokes = require("../models/jokes.model");


// FindAll
module.exports.findAllJokes =(req,res)=>{
    Jokes.find()
    .then(allJokes =>{
      console.log(allJokes)
      res.json({allJokes})
     })
    .catch(err => { res.json({message: "Wait a minute😊"})})
}

// FindOne
module.exports.findOneJokes = (req,res) =>{
    Jokes.findOne({_id:req.params.id})
      .then((Jokes)=>{
        console.log("This joke", Jokes)
        res.json(Jokes)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}

// Create
module.exports.createJokes = (req,res) =>{
    Jokes.create(req.body).then(newJokes=>{
          console.log("New Jokes", newJokes)
          res.json(newJokes)
      }).catch(err=>{
          console.log(err)
          res.json({error:err})
      })
  }

  // Update One
module.exports.updateOneJokes = (req, res) => {
    Jokes.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJokes => { res.json({ updatedJokes }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })
}
// Delete

module.exports.deleteJokes = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(deletedresult => { res.json({ deletedresult }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })


}