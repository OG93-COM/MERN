const authorsController = require("../controllers/authors.controller")



module.exports =  (app) => {
    app.post("/api/author/", authorsController.createAuthors)
    app.get("/api/author/", authorsController.findAllAuthors)
    app.get("/api/author/:id", authorsController.findOneAuthors)
    app.put("/api/author/:id", authorsController.updateOneAuthors)
    app.delete("/api/author/:id", authorsController.deleteAuthors)
}