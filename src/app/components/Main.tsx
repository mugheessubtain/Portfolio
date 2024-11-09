"use client"
import React from 'react'
import Image from "next/image";

import { useTypewriter } from 'react-simple-typewriter';
import Link from 'next/link';

export default function Main() {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'NextJS Developer', 'ReactJS Developer'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <>
      <div className="flex  justify-between w-4/5 items-center m-40">
        <div>
          <h1 className="text-4xl md:text-5xl mt-2 font-bold">Hi! There  <span className="wave">👋🏻</span> </h1>
          <h1 className="text-4xl md:text-5xl mt-2 font-bold mb-16">I'm <span className="text-fuchsia-500"> M.Mughees</span></h1>
          <h1 className="text-3xl md:text-5xl mt-6 text-fuchsia-500 font-bold">{text} <span className="text-cyan-50">|</span></h1>
        </div>
        <Image
          src="/home-main.svg"
          alt="avatar"
          width={500}
          height={500}
        >

        </Image>

      </div>
      <div className=" flex flex-col justify-center  m-5 items-center">
        <h1 className="text-4xl font-bold">Find Me on</h1>
        <p className="text-2xl m-2">Feel free to connect me</p>
      </div>
      <div className="flex justify-center gap-10 mb-10">
        <Link href="https://github.com/mugheessubtain">
        <Image
          src="/github (1).png"
          alt='pic'
          height={50}
          width={50}
          ></Image>
          </Link>
          <Link href="https://www.linkedin.com/in/mughees-subtain-17aab72ba/">
        <Image
          src="/linkedin (1).png"
          alt='pic'
          height={50}
          width={50}
          ></Image>
          </Link>
        
      </div>
    </>

  )
}
