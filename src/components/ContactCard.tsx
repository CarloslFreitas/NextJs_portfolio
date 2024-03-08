"user client"

import Image from "next/image";

interface ContactProps {
    title: string;
    img: string;
    description: string;
    link: string;
    url: string;
}

// title: "Email",
//     img: "/mail.png",
//     description: "Envie-me um email com feedbacks, sugestões e ideias.",
//     link: "Me envie um email",
//     url: "carlos.d.freitas0@hotmail.com",

const ContactCard = ({ title, description, img, link, url }: ContactProps) => {
    return (
        <div className="flex max-w-[100%] w-[439px] rounded-[15px] p-3 gap-5 hover:scale-110 duration-200 bg-black bg-opacity-75">
            <div>
                <Image src={img} alt="phone" width={80} height={80} />
            </div>
            <div className=" w-[100%] flex flex-col gap-5" >
                <h1 className="text-white font-semibold">
                    {title}
                </h1>
                <p className="text-gray-400 font-light text-sm ">
                    {description}
                </p>
                <a href={url} target="_blank" className="flex max-w-[200px] pl-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00d7fd] to-white mb-3 font-mono hover:scale-[115%] duration-150 hover:font-bold border-b-[.5px] border-blue-300">
                    {link}
                </a>
            </div>
        </div>
    )
}

export default ContactCard