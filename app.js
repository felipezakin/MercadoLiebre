const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 5000;

app.use('/public', express.static(__dirname + '/public'));

app.listen(port, ()=> {console.log("Levantando un servidor con Express")});

app.get("/", (req, res) => {
    let home = path.resolve(__dirname, "views/home.html");
    res.sendFile(home)
});

app.get("/register", (req, res) => {
    let register = path.resolve(__dirname, "views/register.html");
    res.sendFile(register)
})

app.get("/login", (req, res) => {
    let login = path.resolve(__dirname, "views/login.html");
    res.sendFile(login)
})

app.listen(port, ()=>{
    console.log("start server"); 
})