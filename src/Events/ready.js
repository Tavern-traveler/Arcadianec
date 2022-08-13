const Event = require('../Structures/Events.js');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	run() {
		console.log([
			`Logged in as ${this.client.user.tag}`,
			`Loaded ${this.client.commands.size} commands!`,
			`Loaded ${this.client.events.size} events!`
		].join('\n'));

		const activities = [
			`${this.client.guilds.cache.size} servers!`,
			`${this.client.commands.cache} commands!`,
			`${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users!`
		];

		let i = 0;
		setInterval(() => this.client.user.setActivity(`${this.client.prefix}памагите! | ${activities[i++ % activities.length]}`, { type: 'WATCHING' }), 15000);
	}

};