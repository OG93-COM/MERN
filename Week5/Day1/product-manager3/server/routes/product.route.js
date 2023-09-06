const productController = require("../controllers/product.controller")



module.exports =  (app) => {
    app.post("/api/products/", productController.createProduct)
    app.get("/api/products/",productController.findAllProduct)
    app.get("/api/products/:id", productController.findOneProduct)
    app.put("/api/products/:id", productController.updateOneProduct)
    app.delete("/api/products/:id", productController.deleteProduct)
}