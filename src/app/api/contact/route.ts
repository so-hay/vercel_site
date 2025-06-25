import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const body = await request.json()

  const newContact = await prisma.contact.create({
    data: {
      name: body.name,
      email: body.email,
      message: body.message,
    },
  })

  return new Response(JSON.stringify(newContact), {
    status: 200,
  })
}
