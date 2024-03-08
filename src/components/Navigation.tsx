"use client"
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Transition from "./Transitions";

const Navigation = () => {
    const [isRouting, setisRouting] = useState(false);
    const path = usePathname();
    const [prevPath, setPrevPath] = useState("/");

    useEffect(() => {
        if (prevPath !== path) {
            setisRouting(true);
        }
    }, [path, prevPath]);

    useEffect(() => {
        if (isRouting) {
            setPrevPath(path);
            const timeout = setTimeout(() => {
                setisRouting(false);
            }, 1200);

            return () => clearTimeout(timeout);
        }
    }, [isRouting]);
    // className="relative z-[50] -bottom-36 w-[80%] max-h-[150px] rounded-t-3xl flex justify-between items-center border bg-black bg-opacity-90 border-white px-4 py-7"
    return (
        <div style={{ maxWidth: "500px", }}
            className=" relative z-[50] bottom-[70px] w-[80%] max-h-[150px] rounded-t-3xl flex justify-between items-center border bg-black bg-opacity-95 border-white px-4 py-7">
            {isRouting && <Transition />}
            {NavLinks.map((nav) => (
                <Link
                    key={nav.name}
                    href={nav.link}
                    className="mb-16 pl-4 min-w-[20%]">
                    <nav.icon className={`w-[24px] h-[24px] hover:text-sky-500 hover:scale-150 duration-200 ${path === nav.name ? "text-cyan-400" : "text-white"}`} />
                </Link>
            ))}
        </div>
    );
};

export default Navigation;