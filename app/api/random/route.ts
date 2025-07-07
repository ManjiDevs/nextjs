// app/api/random/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ number: Math.floor(Math.random() * 100) });
}