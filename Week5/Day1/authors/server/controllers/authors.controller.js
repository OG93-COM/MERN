const authors = require("../models/authors.model");


// FindAll
module.exports.findAllAuthors =(req,res)=>{
    authors.find()
    .then(allAuthors =>{
      console.log(allAuthors)
      res.json({allAuthors})
     })
    .catch(err => { res.json({message: "Wait a minute😊"})})
}

// FindOne
module.exports.findOneAuthors = (req,res) =>{
    authors.findOne({_id:req.params.id})
      .then((Authors)=>{
        console.log("This Authors", Authors)
        res.json(Authors)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}

// Create
module.exports.createAuthors = (req,res) =>{
    authors.create(req.body).then(newAuthors=>{
          console.log("New Authors : ", newAuthors)
          res.json(newAuthors)
      }).catch(err=>{
          console.log(err)
          res.json({error:err})
      })
  }

  // Update One
module.exports.updateOneAuthors = (req, res) => {
    authors.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthors => { res.json({ updatedAuthors }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })
}
// Delete

module.exports.deleteAuthors = (req, res) => {
    authors.deleteOne({ _id: req.params.id })
        .then(deletedresult => { res.json({ deletedresult }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })


}