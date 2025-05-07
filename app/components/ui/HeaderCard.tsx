"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiDownloadCloud } from "react-icons/fi";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { ActionButton } from "./Button";

const roles = ['Unity Game Developer', 'Next.js Web Developer', 'ASP.NET Web Developer'];

export function HeaderCard() {


    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-10 py-6">
                    <div>
                        <p className="text-[#B4B4B4] --font-poppins font-bold text-3xl px-1">HELLO I&apos;M</p>
                        <h2 className="--font-poppins font-bold text-8xl bg-gradient-to-r from-[#69B4F6] to-[#3B46E0] text-transparent bg-clip-text">
                            GALIH
                        </h2>
                        <h1 className="text-[#ECECEC] --font-poppins font-bold text-9xl">PANJI</h1>
                    </div>
                    <div className="flex flex-col gap-2 px-1">
                        <p className="text-lg font-medium --font-inter text-white">from pixel to polygon, from code to reality.</p>
                        <div className="flex flex-row items-baseline py-1 gap-2.5 flex-wrap">
                            <p className="text-lg font-medium --font-inter text-white whitespace-nowrap">I&apos;m a</p>
                            <div className="relative h-[1.5rem] overflow-ellipsis">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={roles[index]}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 1 }}
                                        className="font-bold --font-inter text-2xl bg-gradient-to-r text-transparent bg-clip-text from-[#69B4F6] to-[#4B6DE7] absolute whitespace-nowrap"
                                    >
                                        {roles[index]}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-row gap-3.5 px-1">
                        <ActionButton
                            href="/"
                            label="Contact Me"
                            bgColor="bg-[#3B46E0]"
                            borderColor="border-[#3B46E0]"
                            icon={HiOutlinePaperAirplane}
                            additionalClass="hover:scale-110 will-change-transform"
                        />
                        <ActionButton
                            href="/"
                            label="Download CV"
                            bgColor="bg-[#04042D]"
                            borderColor="border-[#3B46E0]"
                            icon={FiDownloadCloud}
                            additionalClass="hover:scale-110 will-change-transform"
                        />
                    </div>

                </div>
                <div className="bg-gray-500 min-w-[800px] min-h-96">
                    {/* <Image src={"/assets/images/logo.png"} width={500} height={300} alt="Test Img" /> */}
                </div>
            </div >
        </>
    );
} 