// app/api/random/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // 1 to 100
  return NextResponse.json({ number: randomNumber });
}