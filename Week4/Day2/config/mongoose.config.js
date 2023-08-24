const mongoose = require("mongoose")  ;
const dbname = process.env.DB ;

mongoose.connect(`mongodb://127.0.0.1:27017/${dbname}`)
    .then( () => { console.log("is connected to my database cars") } )
    .catch( err => { console.log("there are a problem with connection ", err)})