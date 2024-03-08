"use client"
import Image from "next/image"
import React from "react"

const Page = () => {
    return (
        <div
            style={{ backgroundImage: "url(/space3.jpg)" }}
            className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
            <div className=" pt-20 max-w-[100%] w-[1220px] h-[75%] md:h-[75%] flex justify-around flex-wrap overflow-auto gap-7 p-4 mt-10">
                <div className="flex flex-col items-center flex-wrap gap-7 max-w-[100%] w-[450px]">
                    <h1 className=" text-white text-center text-2xl font-bold text leading-10 max-w-[100%]">
                        Let{"'"}s set up a conversation and
                        {" "}
                        <span className=" text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
                            develop our creativity
                        </span>
                        {" "}
                        together?
                    </h1>
                    <p className="text-gray-300 text-justify leading-8">
                        Entre em contato por qualquer meio disponibilizado para que possamos desenrolar um projeto!
                    </p>
                </div>
                <div className=" flex flex-col items-center gap-7 max-w-[100%] w-[450px] md:max-h-[100%]">
                    <div className="flex max-w-[100%] w-[439px] rounded-[15px] p-3 gap-5 bg-black bg-opacity-75">
                        <div>
                            <Image src={"/phonew.png"} alt="phone" width={80} height={80} />
                        </div>
                        <div className=" w-[100%] flex flex-col gap-5" >
                            <h1 className="text-white">
                                Text prop here
                            </h1>
                            <p className="text-gray-500  font-sm font-light">
                                text apresentation what is here
                            </p>
                            <a href="" className="text-white mb-4">
                                link for something
                            </a>
                        </div>
                    </div>
                    <div className="flex max-w-[100%] w-[439px] rounded-[15px] p-3 gap-5 bg-black bg-opacity-75">
                        <div>
                            <Image src={"/phonew.png"} alt="phone" width={80} height={80} />
                        </div>
                        <div className=" w-[100%] flex flex-col gap-5" >
                            <h3 className="text-white">
                                Text prop here
                            </h3>
                            <p className="text-gray-500  font-sm font-light">
                                text apresentation what is here
                            </p>
                            <a href="" className="text-white mb-4">
                                link for something
                            </a>
                        </div>
                    </div>
                    <div className="flex max-w-[100%] w-[439px] rounded-[15px] p-3 gap-5 bg-black bg-opacity-75">
                        <div>
                            <Image src={"/phonew.png"} alt="phone" width={80} height={80} />
                        </div>
                        <div className=" w-[100%] flex flex-col gap-5" >
                            <h3 className="text-white">
                                Text prop here
                            </h3>
                            <p className="text-gray-500  font-sm font-light">
                                text apresentation what is here
                            </p>
                            <a href="" className="text-white mb-4">
                                link for something
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page