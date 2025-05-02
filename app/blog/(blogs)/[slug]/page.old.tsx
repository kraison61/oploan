// app/blog/(blogs)/[slug]/page.tsx

import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Hero from "@/components/Home/Hero/Hero";
import WhyChoose from "@/components/Home/WhyChoose/WhyChoose";
import Review from "@/components/Home/Review/Review";
import HowItWork from "@/components/Home/HowItWork/HowItWork";
import Offer from "@/components/Home/Offer/Offer";
import type { Metadata } from "next";

// ✅ ไม่ต้องใช้ Promise ใน type
type Params = { slug: string };

export async function generateMetadata(
  props: {
    params: Promise<Params>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  const blog = await prisma.blogs.findUnique({ where: { slug } });

  if (!blog) return { title: "ไม่พบบทความ" };

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function Page(props: { params: Promise<Params> }) {
  const params = await props.params;
  const { slug } = params;

  const blog = await prisma.blogs.findUnique({ where: { slug } });

  if (!blog) return notFound();

  const data = blog as unknown as Record<string, string>;

  const blogSection = [];

  for (let i = 21; i <= 29; i++) {
    blogSection.push({
      heading: data[`heading_${i}`],
      content: data[`content_${i}`],
    });
  }

  return (
    <div className="overflow-hidden h-full">
      <Hero blog={blog} />
      <WhyChoose />
      <Review blogSection={blogSection} />
      <HowItWork />
      <Offer />
    </div>
  );
}
