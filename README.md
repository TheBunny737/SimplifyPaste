# SimplifyPaste Project
SimplifyPaste เป็นโปรเจ็คสำหรับการวางข้อความแล้วสามารถนำข้อความเหล่าไปแชร์ไปที่ใดก็ได้ ผ่านตัว URL

## จัดทำโดย
- 6310451201 ธีรภัทร์ เดชนำบัญชาชัย

## วิธีติดตั้งโปรเจ็ค
### ในส่วนของ Backend
- รันคำสั่ง <b>cd pastebin-backend</b> ลงใน Terminal
- รันคำสั่ง <b>npm install express mongoose body-parser</b> ลงใน Terminal
- รันคำสั่ง <b>npm install axios</b> ลงใน Terminal
- รันคำสั่ง <b>npm install cors</b> ลงใน Terminal
### ในส่วนของ Frontend
- รันคำสั่ง <b>cd pastebin-frontend</b> ลงใน Terminal
- รันคำสั่ง <b>npm install axios</b> ลงใน Terminal
- รันคำสั่ง <b>npm install cors</b> ลงใน Terminal

## วิธีรันโปรเจ็ค
- เปิด Backend ด้วยวิธีการรันคำสั่ง <b>cd pastebin-backend</b> และพิมพ์คำสั่ง <b>node index.js</b> ลงใน Terminal
- เปิด Frontend ด้วยวิธีการรันคำสั่ง <b>cd pastebin-frontend</b> และพิมพ์คำสั่ง <b>npm start</b> ลงใน Terminal

## วิธีใช้ Unit Test
- Backend ให้พิมพ์คำสั่ง <b>npm run test</b> ลงใน Terminal
- Frontend ให้พิมพ์คำสั่ง <b>npx cypress open</b> เลือกเป็น E2E Testing และ เลือกเบราว์เซอร์ที่ต้องการจะรันเทส