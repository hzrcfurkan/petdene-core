
import { prisma } from "@/lib/db/prisma"

export async function createOwner(data: {
  name: string
  phone: string
  email?: string
  address?: string
}) {
  return prisma.owner.create({ data })
}

export async function getOwners() {
  return prisma.owner.findMany({
    orderBy: { createdAt: "desc" },
  })
}
