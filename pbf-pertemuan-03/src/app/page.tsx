import Image from "next/image";
import Profile from "../app/components/profile";
import { Gallery } from "../app/components/gallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-32">
        <p>Ilmuwan yang Luar Biasa</p>
      <div className="w-full items-center justify-between font-mono text-sm lg:flex">
        <Gallery></Gallery>
      </div>
    </main>
  );
}
