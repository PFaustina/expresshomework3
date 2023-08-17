const express = require('express');
const app = express();
const port = 3000;

// Exercise
// The goal of the exercise is to do put in a rep doing everything that you did during the Express lesson!

// Instructions
// Build 10 Routes and a view engine, say anything you want
// Make 2 different templates, and use them both in different routes 
// ( you can only have 1 view engine but multiple templates )

//1
app.get("/travel", (req, res) => {
    res.send("<h1>Vacation Places</h1><p>I would love to go to Japan</p>");
});
//2
app.get("/food", (req, res) => {
    res.send("<h1>Favorite Food</h1><p>I love to eat ramen</p>");
});
//3
app.get("/color", (req, res) => {
    res.send("<h1>Favorite Color</h1><p>My favorite color is pink.</p>");
});
//4
app.get("/hobby", (req, res) => {
    res.send("<h1>Hobbies</h1><p>I enjoy gardening.</p>");
});
//5
app.get("/animal", (req, res) => {
    res.send("<h1>Favourite Animal</h1><p>My favourite animal are cats.</p>");
});
//6
app.get("/book", (req, res) => {
    res.send("<h1>Favourite Book</h1><p>My favourite book is What the Most Successful People Do Before Breakfast.</p>");
});
//7
app.get("/music", (req, res) => {
    res.send("<h1>Favourite Music</h1><p>My favourite music genre is Pop.</p>");
});
//8
app.get("/anime", (req, res) => {
    res.send("<h1>Favourite Anime</h1><p>My favourite anime is Ponyo .</p>");
});
//9
app.get("/tvshow", (req, res) => {
    res.send("<h1>Favourite TV Show/h1><p>My favourite tv show is The Good Place.</p>");
});
//10
 app.get("/drink", (req, res) => {
     res.send("<h1>Favourite Drink</h1><p>My favourite drink is coffee.</p>");
});


app.listen(port,() => {
    console.log('listening on port' , port);
});