const Bot = require("./Bot.js");

class BotPool {
	constructor (amount) {
		this.bots = [];
		for (var i = 0; i < amount; i++) {
			this.bots[i] = new Bot();
		}
	}
}