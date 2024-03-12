"use client";
import Live from "@/components/Live";
import { Room } from "./Room";
import Navbar from "@/components/Navbar";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { useEffect, useRef } from "react";
import { CustomFabricObject } from "@/types/type";
import { fabric } from "fabric";
// import { initializeFabric } from "@/lib/canvas";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const isDrawing = useRef(false);

  // useEffect(() => {
  //   const canvas = initializeFabric({ canvasRef, fabricRef });
  // }, []);
  return (
    <main className="h-screen overflow-hidden">
      <Navbar></Navbar>
      <section className="flex h-full flex-row">
        <LeftSidebar></LeftSidebar>
        <Live></Live>
        <RightSidebar></RightSidebar>
      </section>
    </main>
  );
}
