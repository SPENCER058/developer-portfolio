"use client"

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import NavItem from "./FooterNavItem";
import { NavSocialItem } from "./FooterSocialItem";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="flex flex-col lg:px-32 w-full bg-black">
            <div className="flex flex-col lg:flex-row justify-between py-4 md:py-8">
                <div className="flex flex-col gap-1 lg:gap-2.5">
                    <Link href="/">
                        <h3 className="--font-poppins font-medium text-center md:text-left  text-2xl transition ease-in-out duration-700 hover:scale-110 will-change-transform">
                            AWESOMENEKO.
                        </h3>
                    </Link>
                    <div className="flex flex-row md:flex-col w-full justify-center gap-2 md:gap-0 items-center md:items-start">
                        <h2 className="--font-poppins font-semibold text-xl lg:text-4xl text-[#DADADA] text-center md:text-left">
                            Let&#39;s
                        </h2>
                        <h1 className="--font-poppins font-bold text-2xl lg:text-6xl text-center md:text-left">
                            Built!
                        </h1>
                    </div>
                </div>
                <div className="hidden md:flex flex-col gap-4">
                    <h1 className="--font-poppins font-semibold text-2xl">
                        Website
                    </h1>
                    <div className="flex gap-2.5 flex-col">
                        <NavItem href="/" label="about me" />
                        <NavItem href="/" label="projects" />
                        <NavItem href="/" label="certifications" />
                        <NavItem href="/" label="skills" />
                        <NavItem href="/" label="contact" />
                    </div>
                </div>
                <div className="hidden md:flex flex-col gap-4">
                    <h1 className="--font-poppins font-semibold text-2xl">
                        Projects
                    </h1>
                    <div className="flex gap-2.5 flex-col">
                        <NavItem href="/" label="video games" />
                        <NavItem href="/" label="website" />
                        <NavItem href="/" label="software" />
                        <NavItem href="/" label="ar/vr" />
                    </div>
                </div>
                <div className="hidden md:flex flex-col gap-4">
                    <h1 className="--font-poppins font-semibold text-2xl">
                        Follow Me
                    </h1>
                    <div className="flex flex-row gap-3.5">
                        <NavSocialItem href="https://github.com/SPENCER058" icon={FaGithub} size={20} />
                        <NavSocialItem href="https://www.facebook.com/galih.panji.967/" icon={FaFacebook} size={20} />
                        <NavSocialItem href="https://www.instagram.com/panjipanjii_/" icon={FaInstagram} size={20} />
                        <NavSocialItem href="https://x.com/galihpanjidev" icon={FaTwitter} size={20} />
                        <NavSocialItem href="https://www.linkedin.com/in/galihpanjidev/" icon={FaLinkedin} size={20} />
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center items-center border-t-2 border-[#516479] px-2 sm:px-4 py-3 sm:py-4">
                <h1 className="--font-poppins text-xs lg:text-base font-medium text-center">
                    @2025 Galih Panji Hanindito
                </h1>
            </div>

        </footer>
    );
}