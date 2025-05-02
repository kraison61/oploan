app/
├── layout.tsx                 # Layout หลักของเว็บ
├── page.tsx                   # หน้า Home หรือ Landing
│
├── blog/
│   ├── page.tsx               # หน้าแสดงรายการ blog (public)
│   ├── [slug]/                # หน้าแสดง blog รายตัว
│   │   └── page.tsx
│
├── admin/
│   ├── page.tsx               # Dashboard หรือรายการบทความ (client)
│   ├── new/
│   │   └── page.tsx           # สร้างบทความใหม่
│   └── edit/
│       └── [id]/              # แก้ไขบทความ
│           ├── page.tsx
│           └── action.ts      # ฟังก์ชัน PUT อัปเดตบทความ
│
├── api/
│   └── blogs/
│       ├── route.ts           # GET / POST รายการบทความ
│       └── [id]/              # สำหรับ blog รายตัว
│           └── route.ts       # GET / PUT / DELETE
│
components/
├── ui/                        # ปุ่ม ตาราง ฯลฯ (shadcn/ui)
├── blog/                      # blog card, detail, editor
├── layout/                    # header/footer/nav
│
lib/
├── prisma.ts                  # Export Prisma Client
│
types/
├── blog.ts                    # type Blog หรือ FormData ต่าง ๆ
│
public/
├── images/                    # รูปประกอบ
│
prisma/
├── schema.prisma              # Prisma schema
