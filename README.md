# 🏫 Campus Guide Application (KKU Nong Khai)

เว็บแอปพลิเคชันแนะนำและจัดการข้อมูลสถานที่ภายใน **คณะสหวิทยาการ มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย** พัฒนาด้วย Next.js (App Router), TypeScript และ Tailwind CSS

🌐 Live Demo : https://campus-guide-xi.vercel.app/
---

## 📸 ภาพตัวอย่างการทำงานแต่ละหน้า (Screenshots)

### 1. หน้าหลัก (Home Page - `/`)
แสดงส่วนต้อนรับ การ์ดแนะนำสถานที่ยอดนิยม และข้อมูลที่ตั้งคณะสหวิทยาการ
<img width="1906" height="971" alt="image" src="https://github.com/user-attachments/assets/3276ceca-71f1-40eb-b2b1-1a71da6235cd" />


---

### 2. หน้าสถานที่ทั้งหมด (Places Page - `/places`)
แสดงรายการสถานที่ในมหาวิทยาลัยทั้งหมดในรูปแบบการ์ด พร้อมระบบค้นหาและแยกหมวดหมู่
<img width="1917" height="967" alt="image" src="https://github.com/user-attachments/assets/ae9f8789-7c22-4d4d-b70b-5b9831fed8df" />



---

### 3. หน้ารายละเอียดสถานที่ (Place Detail - `/places/[slug]`)
แสดงข้อมูลเจาะจงของแต่ละสถานที่ เวลาทำการ อาคาร/ที่ตั้ง และสิ่งอำนวยความสะดวก
<img width="1917" height="967" alt="image" src="https://github.com/user-attachments/assets/f7c792cc-f351-430c-97eb-3b4ce91a6e39" />


---

### 4. หน้าเกี่ยวกับผู้จัดทำ (About Page - `/about`)
แสดงข้อมูลประวัติและรายละเอียดของผู้พัฒนาแอปพลิเคชัน
<img width="1917" height="907" alt="image" src="https://github.com/user-attachments/assets/4982befe-c2d2-42f0-82de-44f4655c7aec" />


---

### 5. หน้าจัดการสถานที่สำหรับแอดมิน (Place Management - `/placemanagement`)
หน้า Backoffice สำหรับผู้ดูแลระบบ แสดงตารางรายการสถานที่ทั้งหมดในรูปแบบ Read-Only
<img width="1917" height="968" alt="image" src="https://github.com/user-attachments/assets/864b9434-c50e-4423-a283-da763c41d49b" />


---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
campus-guide-app/
├── public/                          # ไฟล์ Static ทั้งหมด (รูปภาพสถานที่, โลโก้, Screenshots)
│   ├── kku-logo.png                 # ตราสัญลักษณ์มหาวิทยาลัยขอนแก่น
│   ├── screenshots/                 # ภาพแคปหน้าจอสำหรับ README.md
│   │   ├── home.png
│   │   ├── places.png
│   │   ├── place-detail.png
│   │   ├── about.png
│   │   └── place-management.png
│   └── ... (รูปสถานที่ต่างๆ เช่น fn.jpg, aquarium.jpg, office.jpg)
│
├── src/
│   ├── app/
│   │   ├── (public)/                # Public Layout Zone (สำหรับผู้ใช้งานทั่วไป)
│   │   │   ├── layout.tsx           # PublicLayout ( Header + Breadcrumbs + Footer )
│   │   │   ├── page.tsx             # หน้าหลัก (Home Page)
│   │   │   ├── about/
│   │   │   │   └── page.tsx         # หน้าเกี่ยวกับผู้จัดทำ (About Page)
│   │   │   └── places/
│   │   │       ├── page.tsx         # หน้าแสดงรายการสถานที่ทั้งหมด (Places List)
│   │   │       └── [slug]/
│   │   │           └── page.tsx     # หน้าแสดงรายละเอียดสถานที่แบบ Dynamic Route
│   │   │
│   │   └── (backoffice)/            # Backoffice Layout Zone (สำหรับผู้ดูแลระบบ)
│   │       ├── layout.tsx           # Admin Layout ( Navigation + Sidebar สำหรับ Admin )
│   │       └── placemanagement/
│   │           └── page.tsx         # หน้าตารางจัดการข้อมูลสถานที่ (Place Management)
│   │
│   ├── components/                  # Reusable UI Components
│   │   └── Breadcrumbs.tsx          # คอมโพเนนต์แสดงตำแหน่งหน้าปัจจุบัน (Breadcrumb Navigation)
│   │
│   └── data/
│       └── places.ts                # ไฟล์ Mock Data ข้อมูลสถานที่ทั้งหมดภายในวิทยาเขต
│
├── .gitignore
├── next.config.mjs
├── package.json
├── README.md                        # เอกสารอธิบายโปรเจกต์
├── tailwind.config.ts
└── tsconfig.json

---

📌 พัฒนาโดย: 
ชื่อ-นามสกุล: นายบ ธีรเดช ประสารสุข
รหัสนักศึกษา: 673450195-4
สาขาวิชา: วิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ
คณะ: คณะสหวิทยาการ มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย
อีเมล: thiradet.pr@kkumail.com
