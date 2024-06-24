const express=require("express")
const app = express();
const mongoose = require('mongoose');
const data = require("./models/schema")
const routes=require("./config/routes");




//connect styling to the file

//parsing incoming data from form to an object
app.use(express.urlencoded({ extended: true }));
//set the view engine as ejs to be able to show ejs code
app.set("view engine", "ejs");
//tell the server where to find routes
app.use(routes)
//start the server



mongoose.connect('mongodb+srv://aichametioui:UC9pR8WrdRnjMggC@cluster0.dlcjunu.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')


app.listen( 8000, (req,res)=>{
    console.log("app runing at 8000")});