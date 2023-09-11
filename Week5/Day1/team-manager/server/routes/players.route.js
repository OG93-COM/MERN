const playersController = require("../controllers/players.controller")



module.exports =  (app) => {
    app.post("/api/players/", playersController.createPlayers)
    app.get("/api/players/", playersController.findAllPlayers)
    app.get("/api/players/:id", playersController.findOnePlayers)
    app.put("/api/players/:id", playersController.updateOnePlayers)
    app.delete("/api/players/:id", playersController.deletePlayers)
}