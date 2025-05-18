import { ProjectCard } from "@/app/components/ui/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects"
}


export default function Page() {
    return (
        <>
            <div className="relative w-full bg-transparent">
                <div className="w-full h-[700px] bg-gray-500">

                </div>
                <div className="sm:px-6 md:px-12 lg:px-24 xl:px-32 ">
                    <div className="flex flex-col justify-center items-center gap-4 py-12">
                        <h1 className="text-2xl font-bold --font-poppins text-center pb-8">LATEST PROJECTS</h1>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                                link="/projects"
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
                                link="/projects"
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}