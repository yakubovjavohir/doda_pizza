import { Injectable } from '@nestjs/common';
import { Bot } from 'grammy';
import { codee } from '../lib/code';
import { handleLogin } from 'src/common/jwt/token';
import * as dotenv from 'dotenv';
import { NotFoundToken } from './exceptions/bot.error';
dotenv.config();


@Injectable()
export class BotService {
  private bot : Bot
  private botCode : number
  private phone : string
  constructor(){
    const botToken = process.env.TeLEGRAM_BOT_TOKEN;
    if (!botToken) {
      throw new NotFoundToken()
    }
    this.bot = new Bot(botToken);
  }
  onModuleInit(){
    this.bot.start()

    this.bot.command('start', async (ctx) => {
      await ctx.reply(`🇺🇿
Assalomu aleykum ${ctx.from?.first_name}
${'@dodaPizzaBot'}'ning rasmiy botiga xush kelibsiz
        
⬇️ Kontaktingizni yuboring (tugmani bosib)`, {
        reply_markup: {
          keyboard: [
            [{ text: "📞 Raqamni yuborish", request_contact: true }]
          ],
          one_time_keyboard: true
        }
      });
    });

    this.bot.on("message", async (ctx)=>{
      const phone = ctx.message.contact?.phone_number
      if(!phone){
        await ctx.reply("Iltimos nomer kiriting")
        return 
      }
      const generatedCode = codee();
      await ctx.reply(`🔐 *Kodingiz tayyor:* \`${generatedCode}\``, {
        parse_mode: "Markdown"
      });
      this.botCode = generatedCode
      this.phone = phone
    })
  }
  async code(code) { 
      const token = handleLogin(this.phone)   
      const data = {
        access:code === this.botCode,
        phone:this.phone,
        token: await token
      }
      console.log(data);

      return data
  }

  
}
