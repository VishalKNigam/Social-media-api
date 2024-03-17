const mongoose=require("mongoose")
require("dotenv").config()
const connectedDB=mongoose.connect(process.env.MONGO_URL)

module.exports={
    connectedDB
}