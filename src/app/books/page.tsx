export default function books() {
  return(
    <div>
       <main className="min-h-screen bg-gray-100 p-6">
      {/* タイトルバー */}
      <header className="bg-white shadow-md p-4 text-center text-2xl font-bold mb-6">
        ～ タイトル ～
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 左カラム */}
        <aside className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-2">自己紹介</h2>
          <p className="mb-4">ここに自己紹介文が入ります。</p>
          <img
            src="/profile.jpg"
            alt="プロフィール画像"
            className="w-full h-auto object-cover rounded"
          />
          <h3 className="mt-4 font-bold">・見出し</h3>
        </aside>

        {/* 中央カラム */}
        <section className="bg-white p-4 rounded shadow-md">
          <img
            src="/work1.jpg"
            alt="作品1"
            className="w-full h-auto object-cover rounded"
          />
          <h3 className="mt-4 font-bold">・見出し</h3>
          <p>ここに作品の説明が入ります。</p>
        </section>

        {/* 右カラム */}
        <section className="bg-white p-4 rounded shadow-md">
          <img
            src="/work2.jpg"
            alt="作品2"
            className="w-full h-auto object-cover rounded"
          />
          <h3 className="mt-4 font-bold">・見出し</h3>
          <p>ここに作品の説明が入ります。</p>
        </section>
      </div>
    </main>
    </div>
  )
}