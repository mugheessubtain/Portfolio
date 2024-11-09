
import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function Project() {
    return (
        <div className="background">
            <Navbar />
            <div>
                <h1 className="text-4xl font-bold text-center mt-10">My Recent <span className="text-fuchsia-500">Work</span></h1>
                <p className="text-center m-2 text-xl ">Here are my some projects on which i had Recently Worked</p>
            </div>
            <div className="flex justify-evenly items-center">
                <div className="card card-compact w-72 shadow-xl">
                    <figure>
                        <img
                            src="/expense.png"
                            alt="Shoes"
                            className="h-56" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl m-4 text-center">Expense Tracker App</h2>
                        <p>An intuitive Next.js app designed to simplify budgeting. Users can easily track, 
                            categorize, and manage their expenses with real-time updates and a user-friendly 
                            interface, showcasing efficient state management and dynamic routing in Next.js.</p>
                        <div className="card-actions justify-end">
                            <Link href="https://github.com/mugheessubtain/Expense-Tracker-App.git">
                            <button className="bg-fuchsia-500 p-2 w-44 rounded-md ml-10 mt-5">GitHub</button></Link>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-72 shadow-x">
                    <figure>
                        <img
                            src="/pak.png"
                            alt="Shoes" 
                            className="h-56" 
                            />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">PakWheel Clone</h2>
                        <p>This PakWheels clone, built to emulate the popular automotive marketplace, offers a 
                            user-friendly platform for browsing, buying, and selling vehicles. With a sleek design
                             and intuitive navigation, the site provides features like detailed vehicle listings, 
                             search filters, and user account management, delivering an engaging and seamless user experience.</p>
                        <div className="card-actions justify-end">
                            <Link href="https://github.com/mugheessubtain/PakWheel-Clone.git">
                            <button className="bg-fuchsia-500 p-2 w-44 rounded-md ml-10 mt-5">GitHub</button></Link>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-72 shadow-xl">
                    <figure>
                        <img
                            src="/resume.png"
                            alt="Shoes" 
                            className="h-56" 
                            
                            />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Resume Builder App</h2>
                        <p>A streamlined Resume Builder app designed to help users craft professional resumes 
                            effortlessly. This interactive app allows users to input personal details, skills, 
                            and experiences, then generates a polished, customizable resume. With a focus on
                             user-friendly design and efficient data handling, the app simplifies resume creation for job seekers.</p>
                        <div className="card-actions justify-end">
                            <Link href="https://github.com/mugheessubtain/Editable-Resume-Builder.git">
                            <button className="bg-fuchsia-500 p-2 w-44 rounded-md ml-10 mt-5">GitHub</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
