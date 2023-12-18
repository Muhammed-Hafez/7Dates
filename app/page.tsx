import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full mx-auto">
      <Hero />
      <About />
      <Products />
    </main>
  );
}
