const MongoDB = require("../models/mongoDB.model");


// FindAll
module.exports.findAllMongoDB =(req,res)=>{
    MongoDB.find()
    .then(mongoDB =>{res.json({mongoDB}) })
    .catch(err => { res.json(err)})
}

// FindOne
module.exports.findOneMongoDB = (req,res) =>{
    MongoDB.findById(req.params.id)
      .then((MongoDB)=>{ res.status(200).json(MongoDB) })
      .catch(err=> { res.status(400).json(err) })
}

// Create
module.exports.createMongoDB = (req,res) =>{
    MongoDB.create(req.body)
    .then(newMongoDB=> res.status(200).json(newMongoDB))
    .catch(err=> res.status(400).json(err) )
  }

  // Update One
module.exports.updateOneMongoDB = (req, res) => {
    MongoDB.findByIdAndUpdate( 
        req.params.id ,
        req.body, 
        { new: true, runValidators: true }
    )
        .then(updatedMongoDB => { res.json( updatedMongoDB) } )
        .catch(err => res.json(err) )
}
// Delete

module.exports.deleteMongoDB = (req, res) => {
    MongoDB.findByIdAndDelete(req.params.id)
        .then(deletedresult =>  res.json(deletedresult ) )
        .catch(err => { res.json(err) })


}