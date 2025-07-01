// import { PrismaClient } from "@prisma/client"

// const prisma = new PrismaClient()

// export async function GET() {
//   const musics = await prisma.music.findMany()
//   return new Response(JSON.stringify(musics), { status: 200 })
// }

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// 🎵 音楽一覧取得
export async function GET() {
  const musics = await prisma.music.findMany();
  return NextResponse.json(musics);
}

// 🎵 音楽登録（必要な場合）
export async function POST(req: Request) {
  const body = await req.json();
  const newMusic = await prisma.music.create({
    data: {
      title: body.title,
      artist: body.artist,
      image: body.image,
      audio: body.audio,
    },
  });
  return NextResponse.json(newMusic);
}
