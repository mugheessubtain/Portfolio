"use client"
import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Contact() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")

  return (
    <div className="background">
        <Navbar/>
        <div className="w-full mt-16">
            <h1 className="text-4xl text-center ">
                GET IN TOUCH
            </h1>
            <p className="text-xl text-center mb-10">I would like to know the final requirements of your project. Please get in touch with me and share details about your project.
            </p>
        </div>
        <div>
        <div className="flex flex-col w-full items-center gap-5 justify-center">
              <input
                placeholder="Name"
                style={{ margin: '0 auto' }}
                className="w-50 mt-5 w-[600] p-2 "
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                placeholder="Email"
                type="email"
                style={{ margin: '0 auto' }}
                className="w-50 mt-3  w-[600] p-2 "
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <textarea
                placeholder="Leave a comment here"
                style={{ margin: '0 auto', height: '10rem ' }}
                className="w-50 mt-3  w-[600] p-2 "
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <div className="text-center">
                {/* <Button className='mt-5'><Spinner animation="border" /></Button> */}
                <button  className='mt-5 bg-fuchsia-800 p-4 rounded-lg  '>Send a message</button>
                
              </div>
            </div>
        </div>

    </div>
  )
}
