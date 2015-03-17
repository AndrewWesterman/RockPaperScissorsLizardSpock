#!/usr/bin/env node

var http = require("http"),
    choices = ["rock","paper","scissors","lizard","spock"],
    server;

// 0 - rock , 1 - paper, 2 - scissors, 3 - lizard, 4 - spock
var outcomes = 
[["tie", "lose", "win", "win", "lose"],
["win", "tie", "lose", "lose", "win"],
["lose", "win", "tie", "win", "lose"],
["lose", "win", "lose", "tie", "win"],
["win", "lose", "win", "lose", "tie"]];

var wins = 0,
    losses = 0,
    ties = 0;

var game = function(choice){
    var won = false,
        opp = getRandomInt(0,4),
        outcome;

    outcome = outcomes[choices.indexOf(choice)][opp];

    switch (outcome){
        case "win":
            wins++;
            break;
        case "tie":
            ties++;
            break;
        case "lose":
            losses++;
            break;
    }

    console.log(choice+" vs "+choices[opp]+", You "+outcome+"!");
    return ({outcome: outcome, wins: wins, losses: losses, ties: ties});
}

// Function acquired from MDN at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}


server = http.createServer(function (req,res){
    res.writeHead(200, {"Content-Type": "app/json"});

    if(req.method === "POST"){
        if (req.url === "/play/rock"){
            res.end(JSON.stringify(game("rock")));
        } else if (req.url === "/play/paper"){
            res.end(JSON.stringify(game("paper")));
        } else if (req.url === "/play/scissors"){
            res.end(JSON.stringify(game("scissors")));
        } else if (req.url === "/play/lizard"){
            res.end(JSON.stringify(game("lizard")));
        } else if (req.url === "/play/spock"){
            res.end(JSON.stringify(game("spock")));
        }
    }    
});

server.listen(3000);

console.log("Server listening on http://localhost/3000");