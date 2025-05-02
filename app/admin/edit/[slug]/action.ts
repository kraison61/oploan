
import { NextResponse } from 'next/server';
import { getMainTable } from '@/lib/db';

export async function PUT(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const body = await req.json();

  const updated = await getMainTable().update({
    where: { slug: slug },
    data: body,
  });

  return NextResponse.json(updated);
}
