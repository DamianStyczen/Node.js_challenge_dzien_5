//Twój kod
const express = require("express");

const app = express();

let name;
app.get("/name/set/:imie", (req, res) => {
    name = req.params.imie;
    res.send("Name successfully stored");
})
app.get("/name/show", (req, res) => {
    res.send(name);
})
app.get("/name/check", (req, res) => {
    if(name){
        res.send("Name stored: " + name);
    }
    else{
        res.send("No name stored");
    }
})

app.listen(3000, ()=>{
    console.log('Serwer uruchomiony na porcie 3000');
})