"use strict"

var Discord = require('discord.js');
var ChatParser = require('ChatParser.js');

class BobBot {
	constructor(clientID) {
		this.client = new Discord.Client();
		this.client.on('message', this.messageParser);
		this.textParser = new ChatParser.TextParser();
		this.client.login(clientID);
	}

	static messageParser(message) {
		if (!message.system && !message.pinned && message.member.id !== this.client.user.id) {
			switch(message.channel.type) {
				case "text":
					this.textParser.parse(message);
					break;
				case "dm":
					break;
				case "group":
					break;
			}
		}
	}
}

