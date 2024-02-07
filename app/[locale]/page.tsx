import About from "@/components/About/About";
import Benefits from "@/components/Benefits/Benefits";
import Clients from "@/components/Clients/Clients";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import Hero from "@/components/Hero/Hero";
import PrivateLabel from "@/components/PrivateLabel/PrivateLabel";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <main className="w-full mx-auto">
      <Hero />
      <About />
      <Products />
      <PrivateLabel />
      <Benefits />
      <Clients />
      <ContactInfo />
    </main>
  );
}
