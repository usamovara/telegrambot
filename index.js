require('dotenv').config();
const { Telegraf } = require('telegraf');
const { api } = require('covid19-api');

const bot = new Telegraf(process.env.BOT_TOKEN);
//bot.start((ctx) => console.log(ctx.message.from.first_name));
bot.start((ctx) => ctx.reply(`Welcome ${ctx.message.from.first_name}`));

bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();
