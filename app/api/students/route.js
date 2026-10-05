
import { prisma } from "@/lib/prisma";

export async function GET() {
  const data = await prisma.student.findMany();
  return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();
  await prisma.student.create({
    data: body,
  });
  return Response.json({ message: "created" });
}

export async function PUT(req) {
  const body = await req.json();
  await prisma.student.update({
    where: { id: body.id },
    data: body,
  });
  return Response.json({ message: "updated" });
}

export async function DELETE(req) {
  const body = await req.json();
  await prisma.student.delete({
    where: { id: body.id },
  });
  return Response.json({ message: "deleted" });
}
