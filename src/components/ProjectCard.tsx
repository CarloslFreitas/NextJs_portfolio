"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { HiArrowLeft } from "react-icons/hi";

interface Props {
    image: string;
    image2: string;
    title: string;
    text: string;
    repo: string;
    deploy: string
}

const ProjectCard = ({ image, title, text, image2, deploy, repo }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
    return (
        <div
            className='max-w-[100%] w-[450px] max-h-[480px] min-h-[280px] flex flex-wrap rounded-md '>
            <div className='flip-card-inner w-full h-full '>
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className='w-full h-full group relative  bg-cover bg-center text-white rounded-lg p-4 '>
                    <div className=' absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-50 duration-150' />
                    <div className=' border border-white overflow-auto flex-col absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] gap-8 p-4 justify-center rounded-md hover:bg-black duration-150 opacity-80 font-bold'>
                        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500 text-2xl font-bold'>
                            {title}
                        </h1>
                        <p className='text-gray-300 text-[16px] max-h-[100px] hidden sm:block'>
                            {text}
                        </p>
                        <div className='flex items-center gap-10 justify-center max-[410px]:flex-col max-[410px]:gap-5 max-[410px]:items-start'>
                            <span className='flex items-center gap-4 hover:scale-110 hover:text-blue-400 duration-150'>
                                <Image
                                    src="/github.png"
                                    alt="logo"
                                    width={25}
                                    height={25} />
                                <a href={repo} target='_blank' >
                                    GitHub Code
                                </a>
                            </span>

                            {deploy.length > 0 ?
                                <span className='flex items-center gap-4 hover:scale-110 hover:text-blue-400 duration-150'>
                                    <Image
                                        src="/share.png"
                                        alt="logo"
                                        width={25}
                                        height={20} />
                                    <a href={deploy} target='_blank' >
                                        Deploy
                                    </a>
                                </span> : ''}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard