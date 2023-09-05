const productController = require("../controllers/product.controller")



module.exports =  (app) => {
    app.post("/api/products/", productController.createProduct)
    app.get("/api/Products/",productController.findAllProduct)
    app.get("/api/Products/:id", productController.findOne)
}