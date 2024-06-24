const Article = require("../models/schema");

const PageF = (req, res) => {
    res.render("homePage")

};



const input = (req, res) => {
    const Data = new Article(req.body);
    Data.save().then(() => {
        console.log("Data succesfully saved in db");
    }).catch((err) => {
        console.log(err)
    })




    console.log(req.body);


    res.redirect("/")
}


const read = (req, res) => {
    Article.find().then((result) => {
        console.log(result);

        res.render("data", {
            data: result
        })
    }).catch((err) => { console.log(err); });


}










module.exports = {
    PageF,
    input,
    read
}