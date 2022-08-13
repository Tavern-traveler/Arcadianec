const randomPuppy = require('random-puppy');
const Discord = require('discord.js');
const Command = require(`../../Structures/Command`);

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['mimi', 'meme'],
            discription: 'Display ',
            category: 'Fun',
            //usage: '<meme>',
            guildOnly: true,
            //args: true
        });
    }

    async run (message, [meme]) { 
        const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        
                //const embed = new MessageEmbed()
                .setDescription(`**Meme`)
                .setColor('GREEN')
                .setTitle(`Mime. Away there r/${random}`)
                .setURL(`https://reddit.com/r/${random}`)
                .setImage(img)
                  
                message.channel.send(memeEmbed);
        }
    };