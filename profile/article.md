# Profile Service

## PostgreSQL database dan foydalanilgan.


## Vazifasi

Profile Service — foydalanuvchilarning shaxsiy ma'lumotlarini saqlash va boshqarish uchun mo‘ljallangan bo‘lim.

Bu service quyidagi jarayonlar amalga oshiriladi:

- **Profil yaratish**:  
  Foydalanuvchi kod orqali autentifikatsiyadan muvaffaqiyatli o‘tgach, tizim avtomatik tarzda uning uchun profil yaratadi. Profilda foydalanuvchining ism, telefon raqami va ro'yxatdan o'tgan vaqti kabi ma'lumotlar saqlanadi.

- **Ma'lumotlarni yangilash**:  
  Foydalanuvchi o‘z ismi, emaili va boshqa shaxsiy ma'lumotlarini o‘zgartirishi mumkin.

- **Profilni ko‘rish**:  
  Foydalanuvchi o‘z profili haqida to‘liq ma'lumotni ko‘rishi mumkin.

- **Ma'lumotlarni xavfsiz saqlash**:  
  Foydalanuvchi ma'lumotlari faqat token orqali himoyalangan va maxfiy saqlanadi.

---

## Foydasi

- Foydalanuvchi o‘z shaxsiy ma'lumotlarini boshqarishi mumkin.
- Tizim barcha foydalanuvchilarning ma'lumotlarini markaziy tarzda saqlaydi.
- Xavfsizlik ta’minlangan — faqat token orqali kirish mumkin.

---

## Xulosa

Profile moduli foydalanuvchilarning shaxsiy ma'lumotlarini yaratish, yangilash va ko‘rish imkonini beradi.  
Foydalanuvchi autentifikatsiyadan o‘tganidan so‘ng, o‘z profiliga xavfsiz va qulay tarzda ega bo‘ladi.

