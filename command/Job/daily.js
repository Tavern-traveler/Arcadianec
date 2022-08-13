//Кхузахь вай ахч оьц
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');
const Command = require('../../Structures/Command.js');


module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['daily', 'dau'],
            discription: 'Display ',
            category: 'Job',
            //usage: '<meme>',
            guildOnly: true,
            //args: true
        });
    }

    async run (message, args) { 
        let user = message.author;
        let timeout = 86400000;
        let amount = Math.floor(Math.random() * 80) + 1;

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));

            return message.channel.send(`Хуьн пособи хьа делла, т1ехьо вол  ${time.days}d, ${time.hours}h, ${time.minutes}m, and ${time.seconds}s \n Приходите через это время ${time.days}d, ${time.hours}h, ${time.minutes}m, and ${time.seconds}s.`)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());
            message.channel.send(`Хьа ахч дун  ${amount} \n Твоя ежедневная сумма ${amount}`)
        }
    }
};