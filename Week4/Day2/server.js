const express = require("express");
const app = express();

const mongoseconfig = require("./config/mongoose.config")

// Middelware //

app.use(express.json(), express.urlencoded({extended:true}));

// Load .env variable //

require("dotenv").config()

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`The server is runing ${port}`)
})