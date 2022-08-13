const db = require('quick.db');
const ms = require('parse-ms');
const Command = require('../../Structures/Command.js');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');



module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['work', 'i out'],
            discription: 'Display ',
            category: 'Job',
            //usage: '<meme>',
            guildOnly: true,
            //args: true
        });
    }

    async run (message, [work]) { 
        let user = message.author;
        let timeout = 600000;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`You cannot work again for ${time.minutes}m and ${time.seconds}s`)
        } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

            message.channel.send(`${user}, you worked and earned ${amount} coins`)
        }
    }
}