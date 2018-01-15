class player {
	constructor(nickname) {
		this.id = Math.floor(Math.random()*10e3);
		this.nickname = nickname;
		this.fightingAgainst = null;
		this.matchesWon = 0;
		this.matchesPlayed = 0;
		
	}

	sendInput(weapon) {

	}
}