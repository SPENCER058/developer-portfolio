"use client"

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import NavItem from "./FooterNavItem";
import { NavSocialItem } from "./FooterSocialItem";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="flex flex-col px-32 w-full bg-black">
            <div className="flex flex-row justify-between py-8">
                <div className="flex flex-col gap-2.5">
                    <Link href="/">
                        <h3 className="--font-poppins font-medium text-2xl transition ease-in-out duration-700 hover:scale-110 will-change-transform">
                            AWESOMENEKO.
                        </h3>
                    </Link>
                    <div>
                        <h2 className="--font-poppins font-semibold text-4xl text-[#DADADA]">
                            Let&#39;s
                        </h2>
                        <h1 className="--font-poppins font-bold text-6xl">
                            Built!
                        </h1>
                    </div>
                </div>
                <div className="flex gap-4 flex-col">
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
                <div className="flex gap-4 flex-col">
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
                <div className="flex flex-col gap-4">
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
            <div className="flex w-full justify-center items-center px-2.5 border-t-2 border-[#516479] p-4">
                <h1 className="--font-poppins text-md font-medium pb-2">
                    @2025 Galih Panji Hanindito
                </h1>
            </div>
        </footer>
    );
}