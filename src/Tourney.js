class Tourney {
	constructor(/*options*/){
		this.players = [];
		this.matchesPlayed = [];
		this.currentMatches = [];
	}

	playerJoined(nickname){
		this.players.push(new Player(nickname));
	}

	getPlayer(nickname){
		return this.players.find(player=>
				player.nickname == nickname
			);
	}

	startMatch(player1, player2){ // after authentication
		let match = new Match(player1, player2)
		this.currentMatches.push(new Match(player1, player2));
		let results = await match.results();

	}
}
