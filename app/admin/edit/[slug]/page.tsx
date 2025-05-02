'use client';

import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

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

export default function EditPostPage() {
  const { slug } = useParams() as { slug: string };
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        const data = await res.json();

        reset(data);
      } catch (error) {
        console.error("❌ โหลดข้อมูลไม่สำเร็จ:", error);
        alert("ไม่สามารถโหลดบทความได้");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, reset]);

  const onSubmit = async (data: FormData) => {
    const res = await fetch(`/api/blogs/${slug}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      router.push('/admin');
    } else {
      alert('❌ แก้ไขไม่สำเร็จ');
    }
  };

  if (loading) return <p>⏳ กำลังโหลดข้อมูล...</p>;

  return (
    <div className="max-w-3xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">📝 แก้ไขบทความ</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="font-semibold mb-1 block">Meta Title</label>
          <input
            {...register('title', { required: 'กรุณากรอกชื่อบทความ' })}
            placeholder="ชื่อบทความ"
            className="w-full border rounded px-3 py-2"
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>

        <div>
          <label className="font-semibold mb-1 block">Slug</label>
          <input
            {...register('slug', { required: 'ต้องการ slug' })}
            placeholder="slug เช่น 'how-to-use-nextjs'"
            className="w-full border rounded px-3 py-2 bg-gray-100"
            readOnly
          />
          {errors.slug && <p className="text-red-500">{errors.slug.message}</p>}
        </div>

        <div>
          <label className="font-semibold mb-1 block">Meta Description</label>
          <textarea
            {...register('description')}
            placeholder="คำอธิบายบทความ"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="font-semibold mb-1 block">Heading 1</label>
          <input
            {...register('heading')}
            placeholder="หัวข้อหลัก"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="font-semibold mb-1 block">Content Heading 1</label>
          <textarea
            {...register('content_heading')}
            placeholder="เนื้อหาหัวข้อหลัก"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {[21, 22, 23, 24, 25, 26, 27, 28, 29].map((i) => (
          <div key={i} className="border rounded p-3 bg-gray-50">
            <div>
              <label className="block text-sm font-medium mb-1">{`หัวข้อ ${i}`}</label>
              <input
                {...register(`heading_${i}` as keyof FormData)}
                placeholder={`Heading ${i}`}
                className="w-full border rounded px-3 py-2 mb-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{`เนื้อหา ${i}`}</label>
              <textarea
                {...register(`content_${i}` as keyof FormData)}
                placeholder={`Content ${i}`}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
        >
          💾 บันทึกการแก้ไข
        </button>
      </form>
    </div>
  );
}
