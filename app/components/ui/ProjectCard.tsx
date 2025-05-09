"use client"

import { TechStackTag, TechVariant } from "../TechStackTags";

interface ProjectCardProps {
    imageSource?: string;
    title: string;
    type: string;
    date: string;
    tags?: { variant: TechVariant }[];
    description: string;
}

export function ProjectCard({ title, type, date, tags, description }: ProjectCardProps) {

    const uppercaseTitle = title.toLocaleUpperCase();


    return (
        <>
            <div className="m-8 transition-transform ease-in-out duration-500 hover:scale-105 flex flex-col gap-6 p-2">
                <div className="bg-gray-500 w-full min-h-52" />
                <div className="flex flex-col gap-4 px-1">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-lg will-change-transform overflow-ellipsis">{uppercaseTitle}</h1>
                        <div className="flex flex-col gap-3 overflow-hidden">
                            <div className="text-medium text-gray-400 will-change-transform">
                                {type}<span className="mx-1">&middot;</span>{date}
                            </div>
                            <div className="flex flex-row gap-2 will-change-transform">
                                {tags?.map((tag, idx) => (
                                    <TechStackTag key={idx} variant={tag.variant} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="line-clamp-3 text-wrap overflow-ellipsis will-change-transform">
                        {description}
                    </p>
                </div>
            </div >
        </>
    );
}