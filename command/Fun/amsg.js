const Command = require(`../../Structures/Command`);
const {MessageEmbed} = require (`discord.js`);
const moment = require(`moment`);

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['amsg', 'isay'],
            discription: 'Sayd',
            category: 'Fun',
            //usage: '<emoji>',
            guildOnly: true,
            //args: true
        });
    }

    async run(message, args) {
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }
}