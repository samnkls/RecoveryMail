"use client";

import { Hero } from "@/components/sections/Hero";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Hero />
      <FAQ />
      <Footer />
    </main>
  );
}