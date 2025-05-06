"use client"

import { FaGlobe } from "react-icons/fa6";
import { NavbarChild } from "./NavbarChild";
import { useEffect, useState } from "react";

export function Navbar() {

    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY <= 10);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <header className={`sticky top-0 z-50 transition-all duration-700 ease-in-out ${isAtTop ? "bg-transparent" : "bg-[var(--background)]"}`}>
                <nav className={`top-0 z-50 w-full py-4 transition-colors`}>
                    <div className="flex justify-between items-center fex-col px-32">
                        <div className="transition ease-in-out duration-700 hover:scale-110 will-change-transform">
                            <h1 className="font-poppins font-bold text-lg">AWESOMENEKO.</h1>
                        </div>

                        <div className="flex justify-center w-full gap-3">
                            <NavbarChild key={"home"} name={"home"} href={"/"} />
                            <NavbarChild key={"about"} name={"about me"} href={"/about"} />
                            <NavbarChild key={"projects"} name={"projects"} href={"/projects"} />
                            <NavbarChild key={"certifications"} name={"certifications"} href={"/certifications"} />
                            <NavbarChild key={"skills"} name={"skills"} href={"/skills"} />
                            <NavbarChild key={"contact"} name={"contact"} href={"/contact"} />
                        </div>
                        <div className="flex flex-row gap-2 justify-center items-center 
                        transition duration-700 ease-in-out hover:translate-y-[-5px]"
                        >
                            <FaGlobe />
                            <h6>EN</h6>
                        </div>
                    </div>
                </nav>
            </header >
        </>
    );
}