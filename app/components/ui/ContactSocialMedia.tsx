"use client"

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";

export function ContactSocialMedia() {
    return (
        <>
            <div className="bg-gradient-to-r from-[#5054C6] to-[#AAD9D9]/85 flex flex-col gap-4 w-full p-4 rounded-2xl">
                <h3 className="text-xl font-semibold md:mb-2 --font-poppins text-center">Follow Me On</h3>
                <div className="flex flex-row justify-center gap-8 pb-2 md:pb-4">
                    <a className="text-white will-change-transform hover: transition duration-700 ease-in-out hover:translate-y-[-5px]" href="https://www.linkedin.com/in/galihpanjidev/">
                        <FaLinkedin size={30} />
                    </a>
                    <a className="text-white will-change-transform hover: transition duration-700 ease-in-out hover:translate-y-[-5px]" href="https://github.com/SPENCER058">
                        <FaGithub size={30} />
                    </a>
                    <a className="text-white will-change-transform hover: transition duration-700 ease-in-out hover:translate-y-[-5px]" href="https://x.com/galihpanjidev">
                        <FaTwitter size={30} />
                    </a>
                    <a className="text-white will-change-transform hover: transition duration-700 ease-in-out hover:translate-y-[-5px]" href="https://www.instagram.com/panjipanjii_/">
                        <FaInstagram size={30} />
                    </a>
                    <a className="text-white will-change-transform hover: transition duration-700 ease-in-out hover:translate-y-[-5px]" href="https://www.facebook.com/galih.panji.967/">
                        <FaFacebook size={30} />
                    </a>
                </div>
            </div>
        </>
    );
}