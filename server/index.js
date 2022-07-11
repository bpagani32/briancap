const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, pickArmour, createUser } = require('./controller')
// const {getFortune} = require('./controller')
// const {pickArmour} = require('./controller')
//end points---------------------------
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/armours", pickArmour);
app.post("/api/createUser", createUser);
//end points---------------------------
app.listen(4000, () => console.log("Jamming on server 4000!"));
