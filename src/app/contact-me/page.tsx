"use client"
import ContactCard from "@/components/ContactCard"
import { Contacts } from "@/constants"
import Image from "next/image"
import React from "react"

const Page = () => {
    return (
        <div
            style={{ backgroundImage: "url(/space3.jpg)" }}
            className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
            <div className=" pt-20 max-w-[90%] w-[1220px] h-[75%] md:h-[75%] flex justify-around flex-wrap scrollbar-thin scrollbar-webkit overflow-y-auto overflow-x-hidden gap-7 p-4 mt-10">
                <div className=" z-10 flex flex-col items-center flex-wrap gap-7 max-w-[100%] w-[450px] mt-10">
                    <h1 className='font-semibold text-white text-[45px] mb-3 text-center'>
                        Entre em {" "}
                        <span className='text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                            Contato
                        </span>
                    </h1>
                    <h1 className=" text-white text-center text-2xl font-bold text leading-10 max-w-[100%]">
                        Let{"'"}s set up a conversation and
                        {" "}
                        <span className=" text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
                            develop our creativity
                        </span>
                        {" "}
                        together?
                    </h1>
                    <p className="text-gray-300 text-center leading-8">
                        Entre em contato por qualquer meio disponibilizado para que possamos desenrolar um projeto!
                    </p>
                </div>
                <div className="z-10 flex flex-col items-center gap-7 max-w-[100%] w-[450px] md:max-h-[100%]">
                    {Contacts.map((contact, index) => (
                        <ContactCard
                            key={index}
                            title={contact.title}
                            description={contact.description}
                            img={contact.img}
                            link={contact.link}
                            url={contact.url}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Page