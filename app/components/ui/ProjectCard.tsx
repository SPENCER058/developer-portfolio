"use client"

import Link from "next/link";
import { TechStackTag, TechVariant } from "../TechStackTags";
import Image from "next/image";

interface ProjectCardProps {
    imageSource: string;
    title: string;
    type: string;
    date: string;
    tags?: { variant: TechVariant }[];
    description: string;
    link?: string;
}

export function ProjectCard({ title, type, date, tags, description, imageSource, link = "/" }: ProjectCardProps) {

    const uppercaseTitle = title.toLocaleUpperCase();
    return (
        <>
            <Link href={link} className="w-full h-full bg-zinc-900  border-2 border-[#3B46E0]/75 flex flex-col gap-4 pb-6 rounded-2xl 
            transition-transform ease-in-out duration-700 hover:scale-103 overflow-hidden">
                <div className="relative w-full h-52">
                    <Image src={imageSource} fill alt={"Project image" + title} className="object-fill" />
                </div>
                <div className="flex flex-col gap-4 px-6">
                    <div className="flex flex-col">
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
                    <p className="line-clamp-4 --font-inter text-sm text-wrap overflow-ellipsis will-change-transform text-justify">
                        {description}
                    </p>
                </div>
            </Link >
        </>
    );
}