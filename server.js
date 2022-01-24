const express = require('express');
const fs = require('fs');
const path = require('path');
const util = require('util');

//Asynchronous Processes
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//Server
const app = express();
const PORT = process.env.port || 3001; //will change this to 8000 for Heroku

// Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//dir_name is the full directory name on our computer

//Middleware
app.use(express.static("./public"));

//API Route | "GET" request
app.post("/api/notes", function(req,res){
  readFileAsync("./db/db.json", "utf8").then(function(data) {
    notes = [].concat(JSON.parse(data))
    res.json(notes);
  })
});

//API Route | "POST" request
app.post("/api/notes", function(req,res){
  const note = req.body;
  readFileAsync("./db/db.json", "utf8").then(function(data){
    const notes = [].concat(JSON.parse(data));
    note.id = notes.length + 1
    notes.push(note);
    return notes
  }).then(function(notes){
    writeFileAsync("./db/db.json", JSON.stringify(notes))
    res.json(note);
  })
});

//API Route | "Delete" request




//routes
app.get("/notes", function(req, res){
  res.sendFile(path.join(__dirname, ".public/index.html"));
});

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, ".public/index.html"));
});

app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, ".public/index.html"));
});

// Listening Port
app.listen(PORT, function() {
  console.log(`App listening at http://localhost:${PORT}`)
});
