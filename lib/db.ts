// lib/db.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 1. กำหนดชื่อ table หลักที่ต้องการใช้ (เปลี่ยนแค่ตรงนี้)
export const MAIN_TABLE_NAME = 'nativeamericanpaydayloans' as const

// 2. ฟังก์ชันที่คืน model/table โดยใช้ชื่อ table ข้างบน
export function getMainTable() {
  return prisma[MAIN_TABLE_NAME]
}
