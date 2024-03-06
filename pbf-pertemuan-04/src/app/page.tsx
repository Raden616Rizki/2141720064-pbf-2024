"use client";
import Tombol_1, { Tombol_2, Tombol_3 } from "@/components/button";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <h2>Kuis Kota</h2>
        <Tombol_1/>
        <hr />
        <Tombol_2 isiPesan="Mana Bintangmu?" namaTombol="Ini Bintangku"/> 
      </div>
      <br />
      <div className="bg-red-300" 
      onClick={() => alert('Parent Element: Div')}>
        <Tombol_3 isiPesan="Child Element: Tombol-1" namaTombol="Tombol-1"/>
        <Tombol_3 isiPesan="Child Element: Tombol-2" namaTombol="Tombol-2"/>
      </div>
    </div>
  )
}
