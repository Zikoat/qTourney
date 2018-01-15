class Bot {
	constructor(){
		this.name = "Bot Aldrin"; // in the future choose a random name from the bot pool
		setInterval(this.doAction, 5 *10e3);
	}
	doRandomAction(){
		let actions = Bot.actions;
		let randomActionNumber = Math.random() * actions;
		let randomAction = actions[randomActionNumber];
		randomAction();
	}
	static get actions(){
		return [matchAgainstRandom, ]
	}

}