import Link from "next/link"

export default function Header () {
  return(
    <div>
      <h1 className="text-3xl font-bold mb-6">お気に入りカテゴリ</h1>
      <Link href="/">
        <div className="text-red-500 p-6 rounded shadow hover:bg-gray-200 transition cursor-pointer">
          HOME
        </div>
      </Link>
    </div>
  )
}