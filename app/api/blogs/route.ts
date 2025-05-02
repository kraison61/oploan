import { NextResponse } from "next/server";
import { getMainTable } from "@/lib/db";

export async function GET() {
  const minute = await getMainTable().findMany({
    orderBy: { id: "desc" },
  });
  return NextResponse.json(minute);
}
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const data = await req.json();

  try {
    const updated = await getMainTable().update({
      where: { id: (await params).id },
      data,
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error("❌ UPDATE ERROR:", err);
    return new NextResponse("Update failed", { status: 500 });
  }
}
