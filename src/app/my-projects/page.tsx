"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
    return (
        <div
            style={{ backgroundImage: "url(/space3.jpg)" }}
            className=' w-screen h-screen flex items-center flex-col justify-center bg-center bg-cover'>
            <div className='z-10 grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%] h-[580px] overflow-auto max-lg:grid-cols-1 max-lg:max-h-[68%] scrollbar-thin scrollbar-webkit p-1'>
                <h1 className='gap-5 flex justify-center text-wrap items-center font-semibold text-white text-[45px] mb-3'>
                    Meus {" "}
                    <span className='text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                        Projetos
                    </span>
                </h1>
                {Projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        text={project.text}
                        image={project.src}
                        image2={project.src2}
                        deploy={project.deploy}
                        repo={project.githubRepo}
                    />
                ))}
            </div>
        </div>
    )
}

export default Page