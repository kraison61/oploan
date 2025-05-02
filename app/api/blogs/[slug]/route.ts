import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getMainTable } from "@/lib/db";
// ✅ UPDATE blog by slug
export async function PUT(



  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const body = await req.json();

  try {
    const updated = await getMainTable().update({
      where: { slug },
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

    return NextResponse.json(updated);
  } catch (error) {
    console.error("❌ Error updating blog:", error);

    return new NextResponse("ไม่สามารถอัปเดตบทความได้", {
      status: 500,
    });
  }
}

// ✅ GET blog by slug
export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const blog = await getMainTable().findUnique({
      where: { slug },
    });

    if (!blog) {
      return new NextResponse("ไม่พบบทความ", { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (err) {
    console.error("❌ GET ERROR:", err);
    return new NextResponse("Get failed", { status: 500 });
  }
}

// ✅ DELETE blog by slug
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const blog = await getMainTable().findUnique({
      where: { slug },
    });

    if (!blog) {
      return new NextResponse("ไม่พบบทความ", { status: 404 });
    }

    await prisma.directpaydaylenders.delete({
      where: { id: blog.id },
    });

    return NextResponse.json({ message: "ลบบทความเรียบร้อยแล้ว ✅" });
  } catch (err) {
    console.error("❌ DELETE ERROR:", err);
    return new NextResponse("ลบไม่สำเร็จ", { status: 500 });
  }
}
