const db = require('quick.db');
const Command = require('../../Structures/Command.js');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');



module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['buy'],
            discription: 'Display ',
            category: 'Job',
            //usage: '<meme>',
            guildOnly: true,
            //args: true
        });
    }

    async run (message, args) { 
        let purchase = args.join(' ');
        if (!purchase) return message.channel.send('Йохк хум яц \n Пожалуйста, предоставьте товар для покупки')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if (purchase === 'sword' || 'Sword') {
            if (db.has(`variable`, { items: ["Sword"] })) {
                return message.reply("Хоьгахь шоьлт доллуш ду \n У вас уже есть меч!")

            } else {
                if (amount < 900) return message.channel.send('Хоьгахь ахч кхоччуш дац. \n У вас недостаточно денег для покупки этого предмета.');
                db.subtract(`money_${message.guild.id}_${message.author.id}`, 900);
                db.push(message.author.id, "Sword");
                message.channel.send('Х1ар хьа, щоьлт дун. \n Вы успешно купили один меч.')
            }
        }
        if (purchase === 'Shield' || 'Shield') {
            if (amount < 250) return message.channel.send('Хоьгахь ахч кхоччуш дац. \n У вас недостаточно денег для покупки этого предмета.');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 600);
            db.push(message.author.id, "Shield");
            message.channel.send('Хоьгахь  доллуш ду \n У вас уже есть щит!')
        } else {
            if (amount < 600) return message.channel.send('Хоьгахь ахч кхоччуш дац. \n У вас недостаточно денег для покупки этого предмета.');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 600);
            db.push(message.author.id, "Shield");
            message.channel.send('Хоьгахь доллуш ду \n У вас уже есть щит!')
        }

        if (purchase === 'Item-X' || 'Item-X') {
            if (db.has(`variable`, { items: ["Item-X"] })) {
                return message.reply("Хоьгахь X \n У вас X!")

            } else {
                if (amount < 900) return message.channel.send('Хоьгахь ахч кхоччуш дац. \n У вас недостаточно денег для покупки этого предмета.');
                db.subtract(`money_${message.guild.id}_${message.author.id}`, 900);
                db.push(message.author.id, "Sword");
                message.channel.send('Х1ар хьа X ду \n Вы успешно купили X.')
            }
        }

        if (purchase === 'Item-X' || 'Item-X') {
            if (db.has(`variable`, { items: ["Item-X"] })) {
                return message.reply("Хоьгахь X \n У вас X!")

            } else {
                if (amount < 900) return message.channel.send('Хоьгахь ахч кхоччуш дац. \n У вас недостаточно денег для покупки этого предмета.');
                db.subtract(`money_${message.guild.id}_${message.author.id}`, 900);
                db.push(message.author.id, "Sword");
                message.channel.send('Х1ар хьа X ду \n Вы успешно купили X.')
            }
            
        }if (purchase === 'Item-X' || 'Item-X') {
            if (db.has(`variable`, { items: ["Item-X"] })) {
                return message.reply("Хоьгахь X \n У вас X!")

            } else {
                if (amount < 900) return message.channel.send('Хоьгахь ахч кхоччуш дац. \n У вас недостаточно денег для покупки этого предмета.');
                db.subtract(`money_${message.guild.id}_${message.author.id}`, 900);
                db.push(message.author.id, "Sword");
                message.channel.send('Х1ар хьа X ду \n Вы успешно купили X.')
            }

        }if (purchase === 'Item-X' || 'Item-X') {
            if (db.has(`variable`, { items: ["Item-X"] })) {
                return message.reply("Хоьгахь X \n У вас X!")

            } else {
                if (amount < 900) return message.channel.send('Хоьгахь ахч кхоччуш дац. \n У вас недостаточно денег для покупки этого предмета.');
                db.subtract(`money_${message.guild.id}_${message.author.id}`, 900);
                db.push(message.author.id, "Sword");
                message.channel.send('Х1ар хьа X ду \n Вы успешно купили X.')
            }

        }if (purchase === 'Item-X' || 'Item-X') {
            if (db.has(`variable`, { items: ["Item-X"] })) {
                return message.reply("Хоьгахь X \n У вас X!")

            } else {
                if (amount < 900) return message.channel.send('Хоьгахь ахч кхоччуш дац. \n У вас недостаточно денег для покупки этого предмета.');
                db.subtract(`money_${message.guild.id}_${message.author.id}`, 900);
                db.push(message.author.id, "Sword");
                message.channel.send('Х1ар хьа X ду \n Вы успешно купили X.')
            }

        }if (purchase === 'Item-X' || 'Item-X') {
            if (db.has(`variable`, { items: ["Item-X"] })) {
                return message.reply("Хоьгахь X \n У вас X!")

            } else {
                if (amount < 900) return message.channel.send('Хоьгахь ахч кхоччуш дац. \n У вас недостаточно денег для покупки этого предмета.');
                db.subtract(`money_${message.guild.id}_${message.author.id}`, 900);
                db.push(message.author.id, "Sword");
                message.channel.send('Х1ар хьа X ду \n Вы успешно купили X.')
            }
        }































    }
}