// import { PrismaClient } from '@prisma/client';
// import { NextResponse } from 'next/server';

// const prisma = new PrismaClient();

// export async function GET() {
//   const books = await prisma.book.findMany(); // ✅ ここで定義
//   return NextResponse.json(books);            // ✅ これでOK
// }

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// 📚 書籍一覧取得
export async function GET() {
  const books = await prisma.book.findMany();
  return NextResponse.json(books);
}

// 📚 書籍登録（必要な場合）
export async function POST(req: Request) {
  const body = await req.json();
  const newBook = await prisma.book.create({
    data: {
      title: body.title,
      author: body.author,
      cover: body.cover,
      summary: body.summary,
    },
  });
  return NextResponse.json(newBook);
}
