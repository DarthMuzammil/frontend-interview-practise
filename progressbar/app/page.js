import ApiRequestSimulator from "@/components/Fake";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-red-100">
      <h1 className="text-2xl text-black font-bold mb-4">API Progress Bar</h1>
      <ApiRequestSimulator />
    </main>
  );
}
