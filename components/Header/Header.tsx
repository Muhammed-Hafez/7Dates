import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between md:px-24 md:py-5">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Seven Dates"
          width={200}
          height={200}
        />
      </Link>

      <nav className="flex items-center justify-center gap-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
