// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function POST(req: Request) {
//   const data = await req.json();

//   const newBooks = await prisma.books.create({
//     data: {
//       title: data.title,
//       image: data.url,
//       novelist: data.novelist,
//     },
//   });

//   return new Response(JSON.stringify(newBooks), {
//     status: 200,
//   });
// }

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  const books = await prisma.book.findMany(); // ✅ 定義済み変数
  return NextResponse.json(books);
}

