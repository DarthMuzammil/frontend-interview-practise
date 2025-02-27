'use client';

import { useEffect } from 'react';
import Search from '../components/Search';

export default function Page() {
  useEffect(() => {
    // Mock API endpoint for search
    const originalFetch = globalThis.fetch;
    globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      if (typeof input === 'string' && input.startsWith('/api/search')) {
        const query = new URLSearchParams(input.split('?')[1]).get('q') || '';
        const mockData = [
          { id: 1, title: 'React.js Guide' },
          { id: 2, title: 'Next.js Best Practices' },
          { id: 3, title: 'TypeScript Tips' },
          { id: 4, title: 'Advanced JavaScript' },
          { id: 5, title: 'Tailwind CSS Tricks' },
        ];
        return new Response(JSON.stringify(mockData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))));
      }
      return originalFetch(input, init);
    };
    return () => {
      globalThis.fetch = originalFetch;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Search Example</h1>
      <Search />
    </div>
  );
}
