const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/usercontroller")





router.get("/", usercontroller.PageF)

router.post("/index", usercontroller.input)

router.get("/about", usercontroller.read)









module.exports = router