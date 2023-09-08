const { countryfilter } = require("./middleware/fbmiddleware")
const fb = require("./routing/fbrouting")
const express = require("express")
const app = express()

app.use("/fb",countryfilter,fb)

app.listen(5000,()=>{
    console.log("server is live")
})