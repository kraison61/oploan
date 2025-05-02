import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const newPost = await prisma.blogs.create({
      data: {
        title: body.title,
        slug: body.slug,
        description: body.description,
        heading: body.heading,
        content_heading: body.content_heading,
        heading_21: body.heading_21,
        content_21: body.content_21,
        heading_22: body.heading_22,
        content_22: body.content_22,
        heading_23: body.heading_23,
        content_23: body.content_23,
        heading_24: body.heading_24,
        content_24: body.content_24,
        heading_25: body.heading_25,
        content_25: body.content_25,
        heading_26: body.heading_26,
        content_26: body.content_26,
        heading_27: body.heading_27,
        content_27: body.content_27,
        heading_28: body.heading_28,
        content_28: body.content_28,
        heading_29: body.heading_29,
        content_29: body.content_29,
      },
    });

    return NextResponse.json(newPost);
  } catch (error) {
    console.error('❌ เกิดข้อผิดพลาด:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
