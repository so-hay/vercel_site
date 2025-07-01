// import { PrismaClient } from "@prisma/client/extension";
// import { create } from "domain";
// import { NextResponse } from "next/server";

// const prisma = new PrismaClient();

// export async function GET() {
//   const musics = await prisma.musics.findMany({ orderBy: {createdAt: 'desc'} });
// }

// export async function POST(req: Request) {
//   const body = await req.json();
//   const{title, artist, image, audio } = body;

//   const newMusic = await prisma.music.create({
//     data: {title, artist, image, audio },
//   });

//   return NextResponse.json(newMusic);
// }