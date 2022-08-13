const db = require('quick.db');
const Command = require('../../Structures/Command.js');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');



module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['store'],
            discription: 'Display ',
            category: 'Job',
            //usage: '<meme>',
            guildOnly: true,
            //args: true
        });
    }

    async run (message, args) { 
        const embed = new Discord.MessageEmbed()
            .setTitle('Store')
            .setDescription(`Item - X coins \n Item 2 - X coins`)
            .setTimestamp();


        message.channel.send(embed);
    }


}