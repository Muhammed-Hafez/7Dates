"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

import About from "../../components/About/About";
import Benefits from "../../components/Benefits/Benefits";
import Clients from "../../components/Clients/Clients";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Hero from "../../components/Hero/Hero";
import PrivateLabel from "../../components/PrivateLabel/PrivateLabel";
import Products from "../../components/Products/Products";

export default function Home() {
  const { locale } = useParams();
  const router = useRouter();

  // useState to store the current language
  const [language, setLanguage] = useState(locale || "en");

  // Update lang state when locale changes
  useEffect(() => {
    setLanguage(locale || "en");
  }, [locale]);

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
