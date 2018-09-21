//Twój kod
const express = require("express");

const app = express();

app.get("/:firstnumber/:secondnumber", (req, res) => {
    res.send(String(Number(req.params.firstnumber) + Number(req.params.secondnumber)));
})

app.listen(3000, ()=>{
    console.log('Serwer uruchomiony na porcie 3000');
})