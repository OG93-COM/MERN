const express = require("express")
const cors = require("cors")
const app = express()



//---MIDDLEWARE --

app.use(cors(),express.json(),express.urlencoded({extended: true}))


require("dotenv").config()
require("./config/mongoose.config")
require("./routes/authors.route")(app)





//---Connect To Port --
const PORT =process.env.PORT
app.listen(PORT,()=>{
    console.log(`>>>>> server is running on Port ${PORT} 😊😊`)
})
    