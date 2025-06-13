import Link from "next/link"

export default function Header () {
  return(
    <div className="text-center grid grid-cols-1 gap-4 text-gray-800">
      <Link href="/" 
      className=" p-6 rounded shadow hover:bg-gray-200">
      Home</Link>
    </div>
  )
}