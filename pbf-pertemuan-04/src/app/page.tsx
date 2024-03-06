"use client";
import Tombol_1, { Tombol_2 } from "@/components/button";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <h2>Kuis Kota</h2>
        <Tombol_1/>
        <hr />
        <Tombol_2 isiPesan="Mana Bintangmu?" namaTombol="Ini Bintangku"/> 
      </div>
    </div>
  )
}
