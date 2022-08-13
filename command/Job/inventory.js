const db = require('quick.db');
const Command = require('../../Structures/Command.js');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');



module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['inv', 'inventory'],
            discription: 'Display ',
            category: 'Job',
            //usage: '<meme>',
            guildOnly: true,
            //args: true
        });
    }

    async run (message, args) { 
        let items = await db.fetch(message.author.id);
        if(items === null) items = "Nothing"

        const Embed = new Discord.MessageEmbed()
        .addField('Inventory', items)

        message.channel.send(Embed);
    }
}