const mongoose = require("mongoose");

const mongo_uri = process.env.MONGO_URI

function dbConnection(){
    mongoose.connect(mongo_uri).then(console.log("DB Connected")).catch((err)=>console.log("Failed to connect DB" + err))
}

module.exports={dbConnection}
