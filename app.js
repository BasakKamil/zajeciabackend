const functions =require("./functions");
// const http = require("http");
const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.set("view engine","hbs");
app.use("/assets", express.static(path.join(__dirname,"./assets")))
app.use("/js", express.static(path.join(__dirname,"./js")))
// const handler = (request,response) => {
//     console.log("Serwer Działa!");
//     response.end("<h1>Siemano!</h1><p>Dziala!</p>");
// }
// const server = http.createServer(handler);

app.get("/",function(req,res){
    // res.send("Główna Domena");
    res.render("index",{
        pageTitle: "Zajęcia 14.02.2021",
        subTitle: functions.subtitle,
        sample: functions.sample()
    })
})

app.get("/about",function(req,res){
    // res.send("<h2>O Mnie :)</h3>");
    res.render("about")
})


app.listen(port, (err) => {
    if(err){
        return console.log(`błąd ${err}`);
    }
    console.log(`Serwer działa na porcie :${port}`);
})

// console.log("Hello World!");

// functions.add(1,2);
// functions.helloWorld();
