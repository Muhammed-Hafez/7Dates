import About from "@/components/About/About";
import Benefits from "@/components/Benefits/Benefits";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full mx-auto">
      <Hero />
      <About />
      <Products />
      <Benefits />
      <ContactInfo />
    </main>
  );
}
