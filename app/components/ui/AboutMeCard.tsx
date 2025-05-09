"use client"

// import Image from "next/image"; 
import { ActionButton } from "./Button";
import { FaGraduationCap } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { TbBinaryTree } from "react-icons/tb";

export function AboutMeCard() {
    return (
        <>
            <div className="flex flex-row gap-16 items-start">
                <div>
                    <div className="bg-gray-500 w-xl h-[500px]">
                        {/* <Image src={"/"} /> */}
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h1 className="pb-4 border-b-2 border-[#3B46E0] text-2xl font-bold --font-poppins">ABOUT ME</h1>
                    <p className="text-justify --font-inter px-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quia nihil iure voluptatem architecto neque sunt ullam optio explicabo est tempore et quae, fugit, recusandae repudiandae a adipisci distinctio sed soluta maxime. Similique quo enim et molestiae repellendus rerum possimus deserunt ut ipsam? Cupiditate architecto vero hic obcaecati iste? Molestiae maxime porro magni temporibus libero architecto velit cumque quod. Commodi, facilis esse harum asperiores doloremque iusto magnam officiis libero eaque excepturi ab tempore debitis fugit in mollitia ea minima repudiandae dolore quaerat, architecto repellat, molestias accusantium. Similique quis earum quos exercitationem reiciendis aliquam temporibus, blanditiis incidunt corrupti, itaque autem aspernatur.</p>
                    <div className="flex flex-row gap-4">
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
            </div>
        </>
    );
}