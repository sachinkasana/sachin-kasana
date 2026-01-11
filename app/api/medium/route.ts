import { NextResponse } from 'next/server';
import { getMediumPosts } from '@/lib/fetchMediumPosts';

export async function GET() {
  const posts = await getMediumPosts();
  return NextResponse.json(posts);
}
