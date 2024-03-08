import { Socials } from "@/constants"
import Image from "next/image"
import React from "react"

const Navbar = () => {
    return (
        <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20 max-sm:flex-col max-sm:mt-2">
            <div className="flex flex-row gap-3 items-center">
                <div className="relative">
                    <Image
                        src="/foto.jpg"
                        alt="logo"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <h1 className="text-white text-[25px] font-semibold">
                    Carlos
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500">
                        Dev
                    </span>
                </h1>
            </div>

            <div className="flex flex-row gap-10 mb-1">
                {Socials.map((social, index) => (
                    <a key={index} href={social.link} target="_blank">
                        <Image
                            key={social.name}
                            src={social.src}
                            alt={social.name}
                            width={28}
                            height={28}
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Navbar