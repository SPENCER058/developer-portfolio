"use client"

import { TbZoom } from "react-icons/tb";
import { ActionButton } from "./Button";
import { ProjectCard } from "./ProjectCard";

export function PortfolioCard() {
    return (
        <>
            <section id="projects" className="scroll-mt-15">
                <h1 className="text-2xl font-bold --font-poppins text-center pb-8">PROJECTS</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ProjectCard
                        imageSource="/assets/images/dashboard_kai/kai_chart_pie_bar.png"
                        title="SARANA KAI DAOP 6"
                        type="Web App"
                        date="May 2025"
                        tags={[
                            { variant: 'nextjs' },
                            { variant: 'tailwind' },
                            { variant: 'typescript' },
                            { variant: 'asp' },
                            { variant: 'mysql' },
                        ]}
                        description={`Web app for report summary, including charts, and employee management, this web is a task or project that initiated by PT. KAI Indonesia DAOP 6 Infrastructure Department.`}
                    />
                    <ProjectCard
                        imageSource="/assets/images/simba_ar/banner.png"
                        title="SIMBA AR"
                        type="Augmented Reality | Mobile"
                        date="July 2024"
                        tags={[
                            { variant: 'unity' },
                            { variant: 'vuforia' },
                            { variant: 'csharp' },
                        ]}
                        description={`Augmented Reality based app used for learning media about disaster mitigation. Providing explanations about what that can cause disasters, displaying the process of disaster, and teaching disaster mitigation correctly.`}
                    />
                    <ProjectCard
                        imageSource="/assets/images/super_cleaner/super_cleaner_game1.jpg"
                        title="SUPER CLEANER"
                        type="Video Game | Desktop"
                        date="December 2023"
                        tags={[
                            { variant: 'unity' },
                            { variant: 'csharp' },
                        ]}
                        description={`In 'Super Cleaner,' race against time as an extraordinary janitor cleaning up the chaos left behind by hero-monster battles, all while dodging the clock before civilians catch on to the chaos!`}
                    />
                    <ProjectCard
                        imageSource="/assets/images/crossing_chicken/header_1.png"
                        title="CROSSING CHICKEN"
                        type="Video Game | Desktop"
                        date="April 2023"
                        tags={[
                            { variant: 'unity' },
                            { variant: 'csharp' },
                        ]}
                        description={`As a chicken, do you dare crossing busy roads, cars, and obstacles? Inspired by Crossy Road, simple controls, quirky charm, and endless fun—perfect for casual players and high-score chasers alike.`}
                    />
                    <ProjectCard
                        imageSource="/assets/images/mini_golf/header_1.png"
                        title="Mini Golf"
                        type="Video Game | Desktop"
                        date="March 2023"
                        tags={[
                            { variant: 'unity' },
                            { variant: 'csharp' },
                        ]}
                        description={`A "fun" mini-golf experience packed withabsurd obstacles, and physics-based gameplay! Can you master this absurd level? How many shoot count until you reach your destination?`}
                    />
                    <ProjectCard
                        imageSource="/assets/images/studio_ghibli/header1.png"
                        title="Ghibli Fan Game"
                        type="Video Game | Desktop"
                        date="December 2022"
                        tags={[
                            { variant: 'unity' },
                            { variant: 'csharp' },
                        ]}
                        description={`A fan game made inspired by legendary Ghibli Studio. Soar through this world as a young witch on a broomstick! Collect playful soot sprites while dodging spooky No-Face spirits floating through the sky. `}
                    />
                </div>

                <div className="hidden justify-center">
                    <ActionButton
                        href="/projects"
                        label="See More"
                        bgColor="bg-[#04042D]"
                        borderColor="border-[#3B46E0]"
                        hoverBgColor="hover:bg-[#3B46E0]"
                        additionalClass="px-8 justify-center"
                        icon={TbZoom}
                    />
                </div>
            </section>
        </>
    );
}