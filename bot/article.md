## Bu service vazifasi

Bu service da telegram bot va autentifikatsiya dastur kodi yaratilgan.





## Telegram bot vazifasi 

Telegram bot nima uchun yaratildi shuni korib otamiz. Botning vazifasi (https://dodopizza.uz/) saytidan ro'yxatdan otish uchun.

Qanday ishlaydi?

    Bot 6 xonali kod yaratadi va uni foydalanuvchi saytga kiritadi so'ngra u kod yana backandga qaytib keladi va tekshiruv boladi kodni tog'ri kirtsangiz telegram nomeringizga shaxsiy profile ochiladi.



Xulosa

    Telegram bot foydalanuvchilarni SMS orqali tez va xavfsiz autentifikatsiya qiladi, profil yaratadi va tizimdagi xizmatlarga oson kirishni ta’minlaydi.



## Autentifikatsiya vazifasi

Autentifikatsiya — bu foydalanuvchining kimligini tasdiqlash jarayonidir. Ushbu jarayon yordamida tizim foydalanuvchining haqiqiyligini tekshiradi va unga tizimga kirish huquqini beradi.

Qanday ishlaydi?

    Foydalanuvchi kodni kirtganda va u tog'ri bolsa dastur avtomatik token yaratadi va frontend ga   
    --------------------------------------------------------------------------------  
      {
        access: true yoki false   // agar kod (togri) bolsa true xato bolsa (false)
        phone:telefon raqam,    // telgramdan raqam olinadi va qoshib jonatiladi
        token: token       // token ham jonatiladi
      }
    --------------------------------------------------------------------------------

    shu tarzda qaytaradi.
    Token — bu foydalanuvchi tizimga kirganligini tasdiqlovchi maxfiy raqamlar ketma-ketligi. Har safar serverga so‘rov yuborilganda, token yuboriladi va server uni tekshiradi.


Foydalanuvchi uchun qanday afzalliklar bor?

    Telefon raqam orqali tez kirish — login va parol degan narsa shart bolmaydi.

    1 marta kod kiritiladi, keyinchalik token orqali tizimda harakatlanadi.

    Avtomatik profil yaratiladi, shunda foydalanuvchi o‘z ma'lumotlarini boshqarishi mumkin.


Xulosa

    Foydalanuvchi telgram raqami orqali tizimga kiradi kod bilan autentifikatsiyadan o‘tadi va token oladi. Token yordamida foydalanuvchi profilini boshqaradi va tizimdan qulay foydalanadi.