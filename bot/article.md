# Bu Service Vazifasi

Bu servisda Telegram bot va autentifikatsiya uchun backend kodi yaratilgan.

---

## Telegram Bot Vazifasi

Telegram botning vazifasi — foydalanuvchilarga (https://dodopizza.uz/) saytida ro'yxatdan o'tish imkoniyatini yaratishdir.

### Qanday ishlaydi?

- Bot foydalanuvchiga 6 xonali maxfiy kod yaratadi va yuboradi.
- Foydalanuvchi shu kodni saytga kiritadi.
- Saytdan kelgan kod backend orqali tekshiriladi.
- Agar kod to'g'ri kiritilgan bo‘lsa:
  - Telegram raqam asosida foydalanuvchining shaxsiy profili yaratiladi.

### Xulosa

Telegram bot foydalanuvchilarning SMS orqali tez va xavfsiz autentifikatsiyasini ta'minlaydi, shaxsiy profil yaratadi va xizmatlarga qulay kirishni imkon qiladi.

---

## Autentifikatsiya Vazifasi

Autentifikatsiya — bu foydalanuvchining kimligini tasdiqlash jarayonidir.  
Ushbu jarayon orqali tizim foydalanuvchining haqiqiyligini tekshiradi va tizimga kirish huquqini beradi.

### Qanday ishlaydi?

- Foydalanuvchi Telegramdan yuborilgan 6 xonali kodni saytga kiritadi.
- Backend kodni tekshiradi.
- Agar kod to‘g‘ri bo‘lsa, server quyidagi javobni qaytaradi:

```json
{
  "access": true,        // Kod to‘g‘ri bo‘lsa true, noto‘g‘ri bo‘lsa false
  "phone": "+998901234567", // Telegramdan olingan foydalanuvchi raqami
  "token": "eyJhbGciOi..."  // Autentifikatsiya tokeni
}
