const Command = require(`../../Structures/Command`);
const {MessageEmbed} = require (`discord.js`);
const moment = require(`moment`);

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['ei', 'emojiinfo'],
            discription: 'Display information emoji',
            category: 'Fun',
            usage: '<emoji>',
            guildOnly: true,
            args: true
        });
    }

    async run(message, [emote]) {
        const regex = emote.replace(/^<a?:\w+:(\d+)>$/, '$1');

        const emoji = message.guild.emojis.cache.find((emj) => emj.name === emote || emj.id === regex);
        if (!emoji) return message.channel.send('Укажите значение Кастомного эмодзи в Сообществе.');
                //win+Ю
        const authorFetch = await emoji.fetchAuthor();
        const checkOrCross = (bool) => bool ? '✅' : '❎';

        const embed = new MessageEmbed()
            .setDescription(`**Emoji information for __${emoji.name.toLowerCase}__**`)
            .setColor('BLUE')
            .setThumbnail(emoji.url)
            .addField('General:', [
                `**> ID:** ${emoji.id}`,
                `**> URL:** [Link to Emoji](${emoji.url})`,
                `**> Author:** ${authorFetch.tag} (${authorFetch.id})`,
                `**> Time Created:** ${moment(emoji.createdTimestamp).format('LT')} ${moment(emoji.createdTimestamp).format('LL')} ${moment(emoji.createdTimestamp).fromNow()}`,
                `**> Accessible by:** ${emoji.roles.cache.map((role) => role.name).join(', ') || `Everyone`}`
            ])
            .addField('Other:', [
                `**> Requires Colons:** ${checkOrCross(emoji.requiresColons)}`,
                `**> Delatable:** ${checkOrCross(emoji.deletable)}`,
                `**> Animated:** ${checkOrCross(emoji.Animated)}`,
                `**> Managed:** ${checkOrCross(emoji.Managed)}`
            ]);
            return message.channel.send(embed);
    }

};