import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const contact = await prisma.contact.create({
    data: { name, email, message },
  });

  return NextResponse.json(contact);
}
