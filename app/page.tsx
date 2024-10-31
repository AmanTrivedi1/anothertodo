import Homepage from "@/components/homepage/homepage";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <div className="mb-10">
        <Navbar />
        <div className="mt-20"></div>
      </div>
      <Homepage />
    </>
  );
}
