//Twój kod
const express = require("express");
const app = express();

let votesYES = 0;
let votesNO = 0;
let votesMAYBE = 0;

app.use(express.static('./public/zadanieDnia/'));

app.get("/vote/:vote", (req, res) => {
    switch(req.params.vote){
        case "yes":
        votesYES++;
        break;
        case "no":
        votesNO++;
        break;
        case "maybe":
        votesMAYBE++;
        break;
        default:
        res.send("ERROR. Invalid request.");
        break;
    }
    res.send("Thank You for voting.");
})

app.get("/votes/check", (req, res) => {
    res.send(`YES - ${votesYES} votes <br/>
    NO - ${votesNO} votes <br/>
    MAYBE - ${votesMAYBE} votes`);
})

app.listen(3000, ()=> {
    console.log('Serwer uruchomiony na porcie 3000');
})