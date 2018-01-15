const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
var path = require('path');

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/client/index.html");
})

function logSockets() {
	io.clients((error, clients) => {
	  if (error) throw error;
	  console.log(clients); // => [6em3d4TJP8Et9EMNAAAA, G5p55dHhGgUnLUctAAAB]
	});
}

io.on("connection", function (socket) {
	console.log("a user connected with id", socket.id);
	logSockets();

	socket.on('disconnect', function(){
	  console.log('user disconnected');
	});

	socket.on("join", (gameId)=>{
		console.log("joined", gameId);
	})

	socket.on("startFight", (opponentId)=>{
		console.log("someone started a fight against", opponentId);
	});
})

http.listen(3000, function () {
	console.log("listening on *:3000");
})

function requestMatch(player, opponent) {
	opponent.startMatch(player);
	player.startMatch(opponent);
}

async function playMatch(player1, player2) {
	await player1.getWeapon();
	await player2.getWeapon();
}

