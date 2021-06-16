const tankModel = require("../models/tank");
const express = require("express");
const app = express();

app.get("/tanks", async (req, res) => {
    const tanks = await tankModel.find({});
    res.send(tanks);
});
app.get("/tank", async (req, res) =>{
    const tank = new tankModel({name: 'teste'});
    await tank.save();
    res.send(tank);
}) 
module.exports = app;