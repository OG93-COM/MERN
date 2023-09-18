const mongoDBController = require("../controllers/mongoDB.controller")



module.exports =  (app) => {
    app.post("/api/mongoDB/", mongoDBController.createMongoDB)
    app.get("/api/mongoDB/", mongoDBController.findAllMongoDB)
    app.get("/api/mongoDB/:id", mongoDBController.findOneMongoDB)
    app.put("/api/mongoDB/:id", mongoDBController.updateOneMongoDB)
    app.delete("/api/mongoDB/:id", mongoDBController.deleteMongoDB)
}