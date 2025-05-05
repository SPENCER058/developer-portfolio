"use client"

import Link from "next/link";
import { FiDownloadCloud } from "react-icons/fi";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

export function Header() {
    return (
        <>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-10">
                    <div>
                        <p className="text-[#B4B4B4] --font-poppins font-bold text-3xl px-1">HELLO I'M</p>
                        <h2 className="--font-poppins font-bold text-8xl bg-gradient-to-r from-[#69B4F6] to-[#3B46E0] text-transparent bg-clip-text">
                            GALIH
                        </h2>
                        <h1 className="text-[#ECECEC] --font-poppins font-bold text-9xl">PANJI</h1>
                    </div>
                    <div className="flex flex-col gap-2 px-1">
                        <p className="text-md font-medium --font-inter text-[#FFFFFF]">from pixel to polygon, from code to reality.</p>
                        <div className="flex flex-row items-center gap-2.5">
                            <p className="text-md font-medium --font-inter text-[#FFFFFF]">I'm a</p>
                            <p className="font-bold --font-inter text-2xl bg-gradient-to-r text-transparent bg-clip-text from-[#69B4F6] to-[#4B6DE7]">Game Developer</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-3.5 px-1">
                        <Link className="flex items-center gap-2.5 px-4 py-1.5 rounded-full border-2 border-[#3B46E0] bg-[#3B46E0]" href={"/"}>
                            <p className="--font-poppins font-medium text-lg whitespace-nowrap">Contact Me</p>
                            <HiOutlinePaperAirplane size={20} />
                        </Link>
                        <Link className="flex items-center gap-2.5 px-4 py-1.5 rounded-full border-2 border-[#3B46E0] bg-[#04042D]" href={"/"}>
                            <p className="--font-poppins font-medium text-lg whitespace-nowrap">Download CV</p>
                            <FiDownloadCloud size={20} />
                        </Link>
                    </div>

                </div>
                <div className="bg-gray-500 min-w-[800px] min-h-36">
                    {/* <Image src={"/assets/images/logo.png"} width={500} height={300} alt="Test Img" /> */}
                </div>
            </div>
        </>
    );
} 