import { PrismaClient } from "@prisma/client/extension";
import { create } from "domain";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const books = await prisma.books.findMany({ orderBy: {createdAt: 'desc'} });
}

export async function POST(req: Request) {
  const body = await req.json();
  const{title, author, cover, summary } = body;

  const newMusic = await prisma.music.create({
    data: {title, artist, cover, summary },
  });

  return NextResponse.json(newBooks);
}