const { signup, login, logout } = require("../controller/fbcontroller")
const { statefilter } = require("../middleware/fbmiddleware")
const fb = require("express").Router()

fb.post("/signup",statefilter,signup)
fb.get("/login",statefilter,login)
fb.get("/logout",logout)

module.exports = fb