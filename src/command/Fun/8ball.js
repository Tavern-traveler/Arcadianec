const Command = require('../../Structures/Command');

const answers = [
	'Maybe. \n Мэйдей, Мейдей, мы падаем!',
	'Certainly not \n Канишна.',
	'I hope so. \n Надеемся.',
	'Not in your wildest dreams \n Не дорос до такого!.',
	'There is a good chance \n Бред!.',
	'Quite likely \n Оно сожрёт тебя.',
	'I think so \n В душе не хаваю.',
	'I hope not \n Маловероятно!.',
	'I hope so \n Надеемся...',
	'Never \n Никогда, никогда, никогда..!',
	'Fuhgeddaboudit \n Крч умри..',
	'Ahaha! Really?!? \n Лох!',
	'Pfft \n Лолош...',
	'Sorry, bucko \n Сорян педро.',
	'Hell, yes \n О да, у меня рак!.',
	'Hell to the no \n Хрен тебе!.',
	'The future is bleak \n Крч ты умрёшь.',
	'The future is uncertain \n Неизвестное событие.',
	'I would rather not say \n Крысы сваливаем первыми!',
	'Who cares? \n Тебя мучает оно?',
	'Possibly \n Невозможно!',
	'Never, ever, ever \n Не твой уроень, дорогой.',
	'There is a small chance \n Не упускай свой шанс.',
	'Yes! \n О ДА!'
];

module.exports = class extends Command {

	async run(msg, ...question) {
		return msg.reply(question.join(' ').endsWith('?') ?
			`🎱 ${answers[Math.floor(Math.random() * answers.length)]}` :
			'🎱 That doesn\'t seem to be a question, please try again!');
	}

};
