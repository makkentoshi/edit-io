"use client";
import Live from "@/components/Live";
import { Room } from "./Room";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <main className="h-screen overflow-hidden">
      <Navbar></Navbar>
      <section className="flex h-full flex-row">
      <Live></Live>
      </section>
    
    </main>
  );
}
