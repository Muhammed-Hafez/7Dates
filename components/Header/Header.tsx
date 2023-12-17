import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { id: "1", name: "Home", path: "/" },
  { id: "2", name: "About", path: "/about" },
  { id: "3", name: "Products", path: "/products" },
  { id: "4", name: "Contact", path: "/contact" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between md:py-2 max-w-[1600px] mx-auto w-full">
      <Link href="/" className="flex items-center justify-start">
        <Image
          src="/images/logo.png"
          alt="Seven Dates"
          width={180}
          height={180}
        />
      </Link>

      <nav className="flex items-center justify-center gap-5">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="text-lg font-bold text-gray-700 hover:text-gray-900"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
