import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET /api/users
export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// POST /api/users
export async function POST(request: Request) {
  const body = await request.json();
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email
    }
  });

  return NextResponse.json(user);
}