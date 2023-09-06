const jokesController = require("../controllers/jokes.controller")



module.exports =  (app) => {
    app.post("/api/jokes/", jokesController.createJokes)
    app.get("/api/jokes/",jokesController.findAllJokes)
    app.get("/api/jokes/:id", jokesController.findOneJokes)
    app.put("/api/jokes/:id", jokesController.updateOneJokes)
    app.delete("/api/jokes/:id", jokesController.deleteJokes)
}