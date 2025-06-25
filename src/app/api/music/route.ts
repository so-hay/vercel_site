import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  const musics = await prisma.music.findMany()
  return new Response(JSON.stringify(musics), { status: 200 })
}
