//кхузахь мел ахч ду. гойтур ду вай
const Discord = require('discord.js');
const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['balance', 'bal'],
            discription: 'Display ',
            category: 'Job',
            //usage: '<meme>',
            guildOnly: true,
            //args: true
        });
    }

    async run (message, args) { 
        const balEmbed = new Discord.MessageEmbed()
        let user = message.mentions.users.first() || message.author;

        let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
        if (bal === null) bal = 0;

        message.channel.send(`Хьокх хьошал веан накъостигахь ${user} хьокхал ахч ${bal} ду \n У этого человека ${user} в наличии ${bal} денег.`)
    }
};