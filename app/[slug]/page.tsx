// app/blog/(blogs)/[slug]/page.tsx

import { notFound } from "next/navigation";
import Hero from "@/components/Home/Hero/Hero";
import WhyChoose from "@/components/Home/WhyChoose/WhyChoose";
import Review from "@/components/Home/Review/Review";
import HowItWork from "@/components/Home/HowItWork/HowItWork";
import Offer from "@/components/Home/Offer/Offer";
import type { Metadata, ResolvingMetadata } from "next";
import { getMainTable } from "@/lib/db";

// ✅ ไม่ต้องใช้ Promise ใน type
type Params = { slug: string };
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  try {
    const blogs = await getMainTable().findMany();

    return blogs.map((blog) => ({
      slug: blog.slug,
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return []; // Or handle the error as appropriate for your application
  }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  // fetch data
  const blog = await getMainTable().findUnique({ where: { slug } });

  return {
    title: blog?.title || null,
    description: blog?.description || null,
  };
}

export default async function Page(props: { params: Promise<Params> }) {
  const params = await props.params;
  const { slug } = params;

  const blog = await getMainTable().findUnique({ where: { slug } });

  if (!blog) return notFound();

  const data = blog as unknown as Record<string, string>;

  const blogSection = [];

  for (let i = 21; i <= 29; i++) {
    const heading = data[`heading_${i}`];
    const content = data[`content_${i}`];

    // เฉพาะส่วนที่มีทั้ง heading และ content จะถูกเพิ่มเข้าไป
    if (heading && content) {
      blogSection.push({
        heading,
        content,
      });
    }
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
