import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="text-2xl font-medium z-20 relative text-gray-900 cursor-pointer">
      <ul className="flex gap-16">
        <Link href={'/'}>
          <li>Home</li>
        </Link>
        <Link href={'/contact'}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar