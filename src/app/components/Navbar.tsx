import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    

    <div className="flex items-center justify-evenly mt-6 font-bold text-xl">

      <div >
        <h1 className="text-fuchsia-500 text-2xl">M.Mughees</h1>
      </div>
      <ul className=" flex justify-evenly w-3/5 ">

       <Link href="/"> <li className="hover:text-fuchsia-500 cursor-pointer transition">Home</li></Link>
       <Link href="/About"> <li className="hover:text-fuchsia-500 cursor-pointer transition">About</li></Link>
       <Link href="/Projects"> <li className="hover:text-fuchsia-500 cursor-pointer transition">Projects</li></Link>
        <Link href="/Contact"><li className="hover:text-fuchsia-500 cursor-pointer transition">Contact</li></Link>
         
      </ul>
    </div>
   
  )
}
