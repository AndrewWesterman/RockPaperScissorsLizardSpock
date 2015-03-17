#!/usr/bin/env node

var http = require("http"),
    choices = ["rock","paper","scissors","lizard","spock"],
    server;

var wins = 0,
    losses = 0,
    ties = 0;

var game = function(choice){

}

server = http.createServer(function (req,res){
    res.writeHead(200, {"Content-Type": "app/javascript"});


    if(req.method === "POST"){
        if (req.url === "/play/rock"){
            game("rock");
        } else if (req.url === "/play/rock")
    }    
});

server.listen(3000);

console.log("Server listening on port 3000");