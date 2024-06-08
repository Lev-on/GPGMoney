import { Telegraf, Markup } from 'telegraf';

const token = '7392194034:AAHpXIB9BZ3aLJcnC_5HBhdJKmU1iyYRx_0';
const webAppUrl = 'https://ad05-46-19-97-242.ngrok-free.app/testhtml';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
  ctx.reply('Ara la sxmeq ste u pox bereq mez).', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Launch GPGM',
            web_app: { url: webAppUrl },
          },
        ],
      ],
    },
  });
});

bot.launch();
