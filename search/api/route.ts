import { NextResponse } from 'next/server';

const mockData = [
  { id: 1, title: 'Apple' },
  { id: 2, title: 'Banana' },
  { id: 3, title: 'Orange' },
  { id: 4, title: 'Pineapple' },
  { id: 5, title: 'Grapes' }
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase() || '';
  await delay(500); // simulate network latency
  const results = mockData.filter(item =>
    item.title.toLowerCase().includes(q)
  );
  return NextResponse.json(results);
}
