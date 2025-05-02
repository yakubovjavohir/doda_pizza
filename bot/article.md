# Bu Service Vazifasi

Bu servisda Telegram bot va autentifikatsiya uchun backend kodi yaratilgan.

---

## Telegram Bot Vazifasi

Telegram botning vazifasi — foydalanuvchilarga (https://dodopizza.uz/) saytida ro'yxatdan o'tish imkoniyatini yaratishdir.

### Qanday ishlaydi?

- Bot foydalanuvchiga 6 xonali maxfiy kod yaratadi va yuboradi.
- Foydalanuvchi shu kodni saytga kiritadi.
- Kod backend serverga yuboriladi va tekshiriladi.
- Agar kod to'g'ri bo'lsa:
  - Telegram raqami asosida foydalanuvchining shaxsiy profili yaratiladi.

### Xulosa

Telegram bot foydalanuvchilarni SMS orqali tez va xavfsiz autentifikatsiya qiladi, shaxsiy profil yaratadi va tizimdagi xizmatlarga oson kirishni ta'minlaydi.

---

## Autentifikatsiya Vazifasi

Autentifikatsiya — bu foydalanuvchining kimligini tasdiqlash jarayonidir.  
Ushbu jarayon orqali tizim foydalanuvchining haqiqiyligini tekshiradi va unga tizimga kirish huquqini beradi.

---

### Qanday ishlaydi?

- Foydalanuvchi Telegramdan yuborilgan 6 xonali kodni saytga kiritadi.
- Backend server ushbu kodni tekshiradi.
- Agar kod to‘g‘ri bo‘lsa, quyidagicha javob qaytariladi:

```json
{
  "access": true,             // Agar kod to'g'ri bo'lsa true hato bolsa false
  "phone": "+998901234567",    // Telegramdan olingan foydalanuvchi telefon raqami
  "token": "eyJhbGciOiJIUzI1..." // Foydalanuvchiga yaratilgan token
}
```

## Token Haqida Batafsil

**Token** — bu foydalanuvchini tizimda aniqlash va har bir so‘rovni tekshirish uchun ishlatiladigan maxfiy raqamlar ketma-ketligi.

### Tokenning vazifasi:

- Foydalanuvchi bir marta kod kiritib tizimga kirgach, token yaratiladi.
- Keyingi har bir so‘rovda token yuboriladi va server tokenni tekshiradi.
- Agar token to‘g‘ri va amal qilayotgan bo‘lsa, server so‘rovni qabul qiladi.
- Shu orqali foydalanuvchi yana kod yoki parol kiritmasdan tizimda ishlashi mumkin.

### Token qanday ishlaydi?

1. Foydalanuvchi kodni kiritadi va autentifikatsiyadan o‘tadi.
2. Server foydalanuvchiga maxsus `token` beradi.
3. Foydalanuvchi API so‘rovlarida (masalan: profil olish, ma'lumot yangilash) tokenni yuboradi.
4. Server tokenni tekshiradi va foydalanuvchiga kerakli xizmatni taqdim etadi.

### Tokenning foydalari:

- **Tezlik:** Foydalanuvchi har safar parol kiritmaydi.
- **Xavfsizlik:** Tokenlar maxfiy saqlanadi va faqat belgilangan vaqtda amal qiladi.
- **Qulaylik:** Foydalanuvchi doim tizimda qoladi va xizmatlardan bemalol foydalanadi.

---

## Foydalanuvchi uchun qanday afzalliklar mavjud?

- Telefon raqami orqali tez va oson tizimga kirish imkoniyati (login va parol kerak emas).
- 1 marta kod kiritiladi, keyinchalik token orqali tizimda doimiy harakatlanish mumkin.
- Har bir foydalanuvchiga avtomatik ravishda profil ochiladi.
- Profil orqali o‘z ma’lumotlarini boshqarish imkoniyati yaratiladi.

---

## Xulosa

Foydalanuvchi Telegram raqami orqali tizimga kiradi.  
Kod yordamida autentifikatsiyadan o‘tadi va token oladi.  
Token yordamida foydalanuvchi profilini boshqaradi va tizimdagi xizmatlardan qulay foydalanadi.
