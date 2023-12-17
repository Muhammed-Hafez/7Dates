import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between md:px-24 md:py-5">
      <Image
        src="/images/logo.png"
        alt="Seven Dates"
        width={200}
        height={200}
      />

      <nav className="flex items-center justify-center gap-5">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
