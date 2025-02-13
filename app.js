const express = require('express');

const app = express();

app.use(express.static('public'));



app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/homepage.html')
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
});

app.get("/works", (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
});

app.listen(3000, () => console.log("express is listening in port 3000"));