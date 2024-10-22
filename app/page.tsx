"use client";
import Homepage from "@/components/homepage/homepage";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <div className="mb-10">
        <Navbar />
      </div>
      <Homepage />
    </>
  );
}
