import { ProjectCard } from "@/app/components/ui/ProjectCard";
import { Metadata } from "next";
import Image
    from "next/image";
export const metadata: Metadata = {
    title: "Projects"
}


export default function Page() {
    return (
        <>
            <div className="relative w-full bg-transparent">
                <div className="w-full h-[700px] relative flex items-center justify-center">
                    <Image
                        src="/assets/images/heading_projects.jpg"
                        fill
                        alt="Projects Header Picture"
                        className="object-cover -z-10 mask-t-from-80%"
                    />
                    <span className="--font-poppins tracking-widest text-white text-6xl font-bold z-10">Projects</span>
                </div>

                <div className="sm:px-6 md:px-12 lg:px-24 xl:px-32 ">
                    <div className="flex flex-col justify-center items-center gap-4 py-12">
                        <h1 className="text-2xl font-bold --font-poppins text-center pb-8">LATEST PROJECTS</h1>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia veniam amet omnis fugit asperiores sit tempore?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia veniam amet omnis fugit asperiores sit tempore?
                        "
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
                                imageSource="/assets/images/dashboard_kai/kai_chart_pie_bar.png"
                                title="PINBALL"
                                type="Video Game | Desktop"
                                date="August 2023"
                                tags={[
                                    { variant: 'unity' },
                                    { variant: 'csharp' },
                                ]}
                                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia veniam amet omnis fugit asperiores sit tempore?"
                            />
                            <ProjectCard
                                imageSource="/assets/images/dashboard_kai/kai_chart_pie_bar.png"
                                title="CROSSYROAD"
                                type="Video Game | Desktop"
                                date="April 2023"
                                tags={[
                                    { variant: 'unity' },
                                    { variant: 'csharp' },
                                ]}
                                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia veniam amet omnis fugit asperiores sit tempore?"
                            />
                            <ProjectCard
                                imageSource="/assets/images/dashboard_kai/kai_chart_pie_bar.png"
                                title="LABYRINT"
                                type="Video Game | Desktop"
                                date="March 2023"
                                tags={[
                                    { variant: 'unity' },
                                    { variant: 'csharp' },
                                ]}
                                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia veniam amet omnis fugit asperiores sit tempore?"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}