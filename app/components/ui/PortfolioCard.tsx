"use client"

import { TbZoom } from "react-icons/tb";
import { ActionButton } from "./Button";
import InnerBorderGrid from "./InnerBorderGrid"
import { ProjectCard } from "./ProjectCard";

export function PortfolioCard() {
    return (
        <>
            <div>
                <h1 className="text-2xl font-bold --font-poppins text-center pb-12">LATEST PROJECTS</h1>

                <InnerBorderGrid borderColor="border-[#3B46E0]/50">
                    <ProjectCard
                        title="SARANA KAI DAOP 6"
                        type="Web App"
                        date="May 2025"
                        tags={[
                            { variant: 'nextjs' },
                            { variant: 'tailwind' },
                            { variant: 'typescript' },
                        ]}
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia veniam amet omnis fugit asperiores sit tempore?"
                    />
                    <ProjectCard
                        title="SIMBA AR"
                        type="Augmented Reality"
                        date="July 2024"
                        tags={[
                            { variant: 'nextjs' },
                            { variant: 'tailwind' },
                            { variant: 'typescript' },
                        ]}
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia veniam amet omnis fugit asperiores sit tempore?"
                    />
                    <ProjectCard
                        title="SUPER CLEANER"
                        type="Video Game"
                        date="December 2023"
                        tags={[
                            { variant: 'nextjs' },
                            { variant: 'tailwind' },
                            { variant: 'typescript' },
                        ]}
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia veniam amet omnis fugit asperiores sit tempore?"
                    />
                    <ProjectCard
                        title="PINBALL"
                        type="Video Game"
                        date="August 2023"
                        tags={[
                            { variant: 'nextjs' },
                            { variant: 'tailwind' },
                            { variant: 'typescript' },
                        ]}
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia veniam amet omnis fugit asperiores sit tempore?"
                    />
                    <ProjectCard
                        title="CROSSYROAD"
                        type="Video Game"
                        date="April 2023"
                        tags={[
                            { variant: 'nextjs' },
                            { variant: 'tailwind' },
                            { variant: 'typescript' },
                        ]}
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia veniam amet omnis fugit asperiores sit tempore?"
                    />
                    <ProjectCard
                        title="LABYRINT"
                        type="Video Game"
                        date="March 2023"
                        tags={[
                            { variant: 'nextjs' },
                            { variant: 'tailwind' },
                            { variant: 'typescript' },
                        ]}
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia veniam amet omnis fugit asperiores sit tempore?"
                    />
                </InnerBorderGrid>


                <div className="grid grid-cols-3 gap-10 pt-10 ">

                </div >
                <div className="flex justify-center">
                    <ActionButton
                        href="/"
                        label="See More"
                        bgColor="bg-[#04042D]"
                        borderColor="border-[#3B46E0]"
                        hoverBgColor="hover:bg-[#3B46E0]"
                        additionalClass="px-8 justify-center"
                        icon={TbZoom}
                    />
                </div>
            </div>
        </>
    );
}