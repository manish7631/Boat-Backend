const express = require("express")
 

const topWatch = require("./controllers/TopWatchController")

 

const app = express()
 
app.use(express.json())
 
 
app.use("/topwatch", topWatch)
 

module.exports = app
 

 

 