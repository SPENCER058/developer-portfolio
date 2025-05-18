"use client"

import Image from "next/image";
// import Image from "next/image"; 
import { ActionButton } from "./Button";
import { FaGraduationCap } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { TbBinaryTree } from "react-icons/tb";

export function AboutMeCard() {
    return (
        <>
            <section id="aboutme" className="flex flex-col w-full md:flex-row gap-8 lg:gap-16 items-start scroll-mt-50">
                <div className="relative hidden md:block w-fit md:min-w-md h-[350px] border-b-2 border-[#3B46E0]">
                    <Image
                        src="/assets/images/formal_pict.png"
                        alt="Formal Picture"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="flex flex-col gap-6 w-full">
                    <h1 className="pb-4 border-b-2 border-[#3B46E0] text-2xl font-bold --font-poppins">ABOUT ME</h1>
                    <p className="text-justify --font-inter px-1">
                        {`
                        Hi, I'm Galih Panji Hanindito. I am a fresh graduate student of Informatics Engineering, from Sebelas Maret University of Surakarta.
                        `}
                    </p>
                    <p className="text-justify --font-inter px-1">
                        {`
                        Since young age, I already take interest in computer, and at high school I start focusing in Game Development. I create several simple games for practice, and also a start line to build my future in Game Development Industry. But basically I love programming or doing work in front of computer, so I also love to learn 3D, Art, or other development like software, website, or mobile.
                        `}
                    </p>
                    <p className="text-justify --font-inter px-1">
                        {`
                        In the end its nice to meet you, hope we can collaborate futher.
                        `}
                    </p>

                    <div className="hidden ">
                        <div className="flex flex-row gap-4 flex-wrap">

                        </div>
                        <ActionButton
                            href="/"
                            label="My education"
                            bgColor="bg-[#04042D]"
                            borderColor="border-[#3B46E0]"
                            hoverBgColor="hover:bg-[#3B46E0]"
                            additionalClass="flex-1 justify-center"
                            icon={FaGraduationCap}
                        />
                        <ActionButton
                            href="/"
                            label="My skills"
                            bgColor="bg-[#04042D]"
                            borderColor="border-[#3B46E0]"
                            hoverBgColor="hover:bg-[#3B46E0]"
                            additionalClass="flex-1 justify-center"
                            icon={TbBinaryTree}
                        />
                        <ActionButton
                            href="/"
                            label="More about me"
                            bgColor="bg-[#04042D]"
                            borderColor="border-[#3B46E0]"
                            hoverBgColor="hover:bg-[#3B46E0]"
                            additionalClass="flex-1 justify-center"
                            icon={MdArrowOutward}
                        />
                    </div>

                </div>
            </section>
        </>
    );
}