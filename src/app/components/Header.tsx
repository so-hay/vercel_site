import Link from "next/link"

export default function Header () {
  return(
    <div>
      <Link href="/" className="text-center p-6 rounded shadow hover:bg-gray-200">Home</Link>
    </div>
  )
}