import React from 'react'
import Image from "next/image"
import Navbar from '../components/Navbar'
export default function About() {
    return (
        <div className="background">
            <Navbar/>

        <div className="background flex items-center justify-between p-32">
            
            <div className="w-[50%]">
                <h1 className="text-center text-4xl font-bold m-6">LET ME <span className="text-fuchsia-500">INTRODUCE</span> MYSELF</h1>
                <p className="text-balance text-xl">
                    Hello! I'm M. Mughees, a passionate software engineer and dedicated MERN stack developer. Currently, I'm a
                     Computer Science student at NED University, where I’ve been deepening my knowledge in web development and 
                     emerging technologies. My journey in tech has been driven by a genuine love for translating creative ideas 
                     into responsive, interactive, and visually appealing digital experiences.

                    In my pursuit of mastering the full-stack development process, I’m particularly focused on refining my 
                    
                    expertise in React.js and Next.js. 

                    I’m enthusiastic about contributing to innovative projects, collaborating with like-minded professionals, and continuing to push the boundaries of what’s possible in front-end and full-stack development. Recently, I’ve also taken part in hackathons and competitions, working to build e-commerce solutions and interactive resumes using HTML, CSS, TypeScript, and more. Additionally, I’m ex
                    cited about advancements in AI, Metaverse, Blockchain, and Web3.0, areas I’m exploring to stay at the forefront of the industry.
                </p>
            </div>
            <Image
                src="/avatar.svg"
                alt='pic'
                height={350}
                width={350}
            ></Image>
        </div>
                </div>
    )
}
