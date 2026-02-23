
import { NextResponse } from "next/server"
import { createOwner, getOwners } from "@/lib/services/owner.service"

export async function GET() {
  const owners = await getOwners()
  return NextResponse.json(owners)
}

export async function POST(req: Request) {
  const body = await req.json()
  const owner = await createOwner(body)
  return NextResponse.json(owner)
}
