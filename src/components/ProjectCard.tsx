"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

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
            onClick={handleFlip}
            className='w-[450px] h-[280px] rounded-md cursor-pointer '>
            <motion.div
                className='flip-card-inner w-full h-full'
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 360 }}
                transition={{ duration: 0.6, animationDirection: 'normal' }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>
                    <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-50 duration-150' />
                    <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center font-bold'>
                        Learn More &gt;
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${image2})` }}
                    className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4'>
                    <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-80 z-[-1]' />
                    <div className='flex flex-col gap-10 py-1 z-[30]'>
                        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500 text-2xl font-bold'>{title}</h1>
                        <p className='text-gray-300 text-[16px]'>
                            {text}
                        </p>
                        <div className='flex items-center gap-10 justify-center'>
                            <span className='flex items-center gap-4 hover:scale-110 hover:text-blue-400 duration-150'>
                                <Image
                                    src="/githubmini.png"
                                    alt="logo"
                                    width={40}
                                    height={40} />
                                <a href={repo} target='_blank' >
                                    GitHub Code
                                </a>
                            </span>
                            <span className='flex items-center gap-4 hover:scale-110 hover:text-blue-400 duration-150'>
                                <Image
                                    src="/share.png"
                                    alt="logo"
                                    width={25}
                                    height={20} />
                                <a href={deploy} target='_blank' >
                                    Deploy
                                </a>

                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectCard