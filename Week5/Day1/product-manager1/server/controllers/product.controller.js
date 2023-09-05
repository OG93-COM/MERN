const Products = require("../models/product.model");



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