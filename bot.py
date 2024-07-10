import telebot
from telebot import types

bot = telebot.TeleBot("7337162863:AAGqCJS6gM0QDJYj_sgRQRkZeQktD1Rbt3w")


def webAppKeyboard():
   keyboard = types.InlineKeyboardMarkup(row_width=1)
   webAppTest = types.WebAppInfo("https://petprogit.github.io/TGMINIAPP/")
   one_butt = types.InlineKeyboardButton(text="PLAY", web_app=webAppTest)
   keyboard.add(one_butt)
   return keyboard 


@bot.message_handler(commands=["start"])
def start_message(message):
    bot.send_message(message.chat.id, text=f"Hello!", reply_markup=webAppKeyboard(), parse_mode="html")
    bot.send_message(6585798815, text=f"User: @{message.from_user.username}")

bot.infinity_polling()