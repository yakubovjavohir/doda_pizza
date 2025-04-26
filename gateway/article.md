# Gateway Service

## Vazifasi

Gateway service — tizimdagi barcha mikroservislar va foydalanuvchilar o‘rtasida ko‘prik (oraliq qopqa) vazifasini bajaradi.

Gatewayning asosiy funksiyalari:

- **So‘rovlarni qabul qilish va tarqatish**:  
  Foydalanuvchilardan keladigan barcha HTTP yoki WebSocket so‘rovlar birinchi Gateway orqali o‘tadi va tegishli mikroservislarga yuboriladi.

- **Token tekshirish (autentifikatsiya qilish)**:  
  Foydalanuvchidan kelgan har bir so‘rovda token mavjudligini tekshiradi. Agar token to‘g‘ri bo‘lsa, so‘rovni ichkariga yuboradi. Aks holda, xato qaytaradi.

- **Xatoliklarni boshqarish**:  
  Mikroservislar tomonidan yuborilgan xatoliklar Gateway orqali standart shaklda foydalanuvchiga ko‘rsatib beriladi.

- **Xavfsizlikni ta'minlash**:  
  Tizimga faqat to'g'ri autentifikatsiyadan o'tgan foydalanuvchilar kirishini kafolatlaydi.

---

## Foydasi

- **Markazlashgan boshqaruv** — barcha kirishlar bitta joyda nazorat qilinadi.
- **Xavfsizlik** — tokenlar tekshiriladi, noaniq foydalanuvchilarga tizim yopiq.
- **Yukni taqsimlash** — so‘rovlar kerakli mikroservislarga tez va to‘g‘ri yetkaziladi.
- **Xatoliklarni boshqarish** — foydalanuvchi uchun tushunarli xatoliklar qaytariladi.

---

## Xulosa

Gateway service tizimga kirish nuqtasidir.  
U foydalanuvchi so‘rovlarini qabul qiladi, token asosida autentifikatsiya qiladi va kerakli mikroservisga yo‘naltiradi.  
Shuningdek, Gateway tizim xavfsizligini va so‘rovlar boshqarilishini markazlashgan tarzda ta'minlaydi.

