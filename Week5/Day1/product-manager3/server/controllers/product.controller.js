const Products = require("../models/product.model");


// FindAll
module.exports.findAllProduct =(req,res)=>{
    Products.find()
    .then(allProducts =>{
      console.log(allProducts)
      res.json({allProducts})
     })
    .catch(err => { res.json({message: "Wait a minute😊"})})
}

// FindOne
module.exports.findOneProduct = (req,res) =>{
    Products.findOne({_id:req.params.id})
      .then((product)=>{
        console.log("This Product", product)
        res.json(product)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}

// Create
module.exports.createProduct = (req,res) =>{
    Products.create(req.body).then(newProduct=>{
          console.log("New Product", newProduct)
          res.json(newProduct)
      }).catch(err=>{
          console.log(err)
          res.json({error:err})
      })
  }

  // Update One
module.exports.updateOneProduct = (req, res) => {
    Products.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => { res.json({ updatedProduct }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })
}
// Delete

module.exports.deleteProduct = (req, res) => {
    Products.deleteOne({ _id: req.params.id })
        .then(deletedresult => { res.json({ deletedresult }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })


}