import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">お気に入りカテゴリ</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/music">
          <div className="bg-white p-6 rounded shadow hover:bg-gray-200 transition cursor-pointer">
            🎵 音楽
          </div>
        </Link>
        <Link href="/books">
          <div className="bg-white p-6 rounded shadow hover:bg-gray-200 transition cursor-pointer">
            📚 本
          </div>
        </Link>
      </div>
    </main>
  );
}
