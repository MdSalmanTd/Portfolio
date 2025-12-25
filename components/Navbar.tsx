'use client';
import Image from "next/image"
import Link from "next/link"

const navigationItems = ['Home', 'Works', 'About', 'Contact'];

const Navbar = () => {
  return (
    <nav className="w-full fixed flex justify-between items-center max-md:w-full max-md:justify-between px-6 py-4 text-white my-4">

      <Link href="/">
        <Image src="/images/logo.png" alt="Logo" width={32} height={32}
          className="rounded-lg"
        />
      </Link>

      <Image src="/images/hamberger.svg" alt="hamberger"
        className="block md:hidden"
        width={30} height={30}
      />


      <ul className="hidden md:flex font-druk-bold font-bold  items-center gap-6 ml-7">
        {navigationItems.map((item) => (
          <li
            key={item}
            className="relative h-6 md:h-8 overflow-hidden group whitespace-nowrap"
          >
            <Link
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="relative block h-full"
            >
              <span className="invisible">
                {item}
              </span>

              <span
                className="
            absolute inset-0
            flex items-center justify-center
            translate-y-0
            transition-transform duration-300 ease-out
            group-hover:-translate-y-full
          "
              >
                {item}
              </span>

              <span
                className="
            absolute inset-0
            flex items-center justify-center
            translate-y-full
            transition-transform duration-300 ease-out
            group-hover:translate-y-0
          "
              >
                {item}
              </span>
            </Link>
          </li>
        ))}
      </ul>

    </nav>
  )
}

export default Navbar;