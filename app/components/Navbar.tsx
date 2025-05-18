"use client";

import { FaGlobe, FaBars } from "react-icons/fa6";
import { NavbarChild } from "./NavbarChild";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

export function Navbar() {
    const [isAtTop, setIsAtTop] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY <= 10);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out 
            ${isAtTop ? "bg-transparent" : "bg-[var(--background)]"}
        `}>
            <nav className="w-full py-4 px-4 sm:px-6 md:px-12 lg:px-32">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="transition duration-700 hover:scale-110 will-change-transform">
                        <Link href={"/"} className="font-poppins font-bold text-lg">AWESOMENEKO.</Link>
                    </div>

                    {/* Tablet + Desktop Menu */}
                    <div className="hidden sm:flex justify-center gap-3">
                        <NavbarChild name="home" href="/" />
                        <NavbarChild name="about me" href="/#aboutme" />
                        <NavbarChild name="projects" href="/projects" />
                        <NavbarChild name="tech stacks" href="/#techstacks" />
                        <NavbarChild name="contact" href="/#contact" />
                    </div>

                    {/* Language Selector */}
                    <div className="hidden sm:flex flex-row gap-2 justify-center items-center transition duration-700 ease-in-out hover:translate-y-[-5px]">
                        <FaGlobe />
                        <h6>EN</h6>
                    </div>

                    {/* Hamburger Button */}
                    <div className="sm:hidden">
                        <button onClick={toggleMenu} aria-label="Toggle menu">
                            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-[var(--background)] shadow-md flex flex-col items-center py-4 gap-2 z-40">
                        <NavbarChild name="home" href="/" />
                        <NavbarChild name="about me" href="/#aboutme" />
                        <NavbarChild name="projects" href="/projects" />
                        <NavbarChild name="tech stacks" href="/#techstacks" />
                        <NavbarChild name="contact" href="/#contact" />

                        <div className="flex flex-row gap-2 justify-center items-center mt-2">
                            <FaGlobe />
                            <h6>EN</h6>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
