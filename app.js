const express =  require('express');
const session= require("express-session")
const app = express();
const path = require('path');

const dotenv = require('dotenv')
dotenv.config();

app.set("view engine", "ejs")

app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname,"public")))
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));

app.listen(3000, ()=>{
    console.log('visit http://localhost:3000/');
});


app.get("/", (req, res) =>{
    res.render("map.ejs");
})