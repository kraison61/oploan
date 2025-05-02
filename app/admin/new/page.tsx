'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { slugify } from '@/lib/urlUtils'; // ✅ นำเข้า slugify

type FormData = {
  title: string;
  slug: string;
  description: string;
  heading: string;
  content_heading: string;
  heading_21: string;
  content_21: string;
  heading_22: string;
  content_22: string;
  heading_23: string;
  content_23: string;
  heading_24: string;
  content_24: string;
  heading_25: string;
  content_25: string;
  heading_26: string;
  content_26: string;
  heading_27: string;
  content_27: string;
  heading_28: string;
  content_28: string;
  heading_29: string;
  content_29: string;
};

export default function NewPostPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>();

  const title = watch('title'); // ✅ คอยดูค่าที่ผู้ใช้พิมพ์ใน title

  // ✅ สร้าง slug แบบอัตโนมัติเมื่อ title เปลี่ยน
  useEffect(() => {
    if (title) {
      setValue('slug', slugify(title));
    }
  }, [title, setValue]);

  const onSubmit = async (data: FormData) => {
    const res = await fetch('/admin/new/action', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      router.push('/admin');
    } else {
      alert('เกิดข้อผิดพลาดในการบันทึกโพสต์');
    }
  };

  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] sm:pt-[15vh] bg-[#f7f6fb]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] mx-auto">
        <h1 className="text-2xl font-bold mb-4">✍️ เขียนบทความใหม่</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
              ชื่อบทความ (Meta Title):
            </label>
            <input
              {...register('title', { required: 'กรุณากรอกชื่อบทความ' })}
              placeholder="กรุณากรอก meta title"
              className="w-full border rounded px-3 py-2"
              id="title"
            />
            {errors.title && <p className="text-red-500 text-xs italic">{errors.title.message}</p>}
          </div>

          <div>
            <label htmlFor="slug" className="block text-gray-700 text-sm font-bold mb-2">
              Slug:
            </label>
            <input
              {...register('slug', { required: 'ต้องการ slug' })}
              placeholder="slug from title"
              className="w-full border rounded px-3 py-2 bg-gray-100"
              readOnly // ✅ อ่านได้แต่ไม่ให้แก้ เพราะเราสร้างอัตโนมัติ
              id="slug"
            />
            {errors.slug && <p className="text-red-500 text-xs italic">{errors.slug.message}</p>}
          </div>

          <div>
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              คำอธิบาย (Meta Description):
            </label>
            <textarea
              {...register('description', { required: 'กรุณาใส่คำอธิบาย' })}
              placeholder="กรุณากรอก meta description"
              className="w-full border rounded px-3 py-2"
              id="description"
            />
            {errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
          </div>

          <div>
            <label htmlFor="heading" className="block text-gray-700 text-sm font-bold mb-2">
              หัวข้อหลัก (Heading 1):
            </label>
            <input {...register('heading')} placeholder="Heading 1" className="w-full border rounded px-3 py-2" id="heading" />
          </div>

          <div>
            <label htmlFor="content_heading" className="block text-gray-700 text-sm font-bold mb-2">
              เนื้อหาหัวข้อหลัก (Content Heading 1):
            </label>
            <textarea {...register('content_heading')} placeholder="Content Heading 1" className="w-full border rounded px-3 py-2" id="content_heading" />
          </div>

          {[21, 22, 23, 24, 25, 26, 27, 28, 29].map((i) => (
            <div key={i} className="border rounded p-3 bg-gray-50">
              <label htmlFor={`heading_${i}`} className="block text-gray-700 text-sm font-bold mb-2">
                หัวข้อ {i}:
              </label>
              <input
                {...register(`heading_${i}` as keyof FormData)}
                placeholder={`หัวข้อ ${i} - Heading_${i}`}
                className="w-full border rounded px-3 py-2 mb-2"
                id={`heading_${i}`}
              />

              <label htmlFor={`content_${i}`} className="block text-gray-700 text-sm font-bold mb-2">
                เนื้อหา {i}:
              </label>
              <textarea
                {...register(`content_${i}` as keyof FormData)}
                placeholder={`เนื้อหา ${i} - Heading${i}`}
                className="w-full border rounded px-3 py-2"
                id={`content_${i}`}
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            ✅ บันทึกโพสต์
          </button>
        </form>
      </div>
    </div>
  );
}