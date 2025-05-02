'use client'

import { useRouter } from 'next/navigation'

export default function DeletePostButton({ slug }: { slug: string }) {
  const router = useRouter()

  const handleDelete = async () => {
    const confirmed = confirm('คุณแน่ใจหรือไม่ว่าต้องการลบโพสต์นี้?')
    if (!confirmed) return

    const res = await fetch(`/api/post/${slug}`, {
      method: 'DELETE',
    })

    if (res.ok) {
      alert('ลบโพสต์เรียบร้อยแล้ว ✅')
      router.push('/blog') // ย้อนกลับไปหน้า blog
    } else {
      alert('เกิดข้อผิดพลาดในการลบโพสต์ ❌')
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="mt-4 text-red-600 underline cursor-pointer"
    >
      🗑 ลบโพสต์นี้
    </button>
  )
}
