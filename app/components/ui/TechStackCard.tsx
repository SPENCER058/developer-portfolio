"use client"

import { FaFigma, FaGithub, FaGitlab, FaLaravel, FaNodeJs, FaReact, FaSourcetree, FaTrello, FaUnity } from "react-icons/fa6";
import { TechStackBar } from "../TechStackBar";
import { TechStackItem } from "../TechStackItem";
import { SiBlender, SiClickup, SiDavinciresolve, SiDotnet, SiNextdotjs, SiPostgresql, SiRider, SiSqlite, SiTailwindcss } from "react-icons/si";
import { DiIllustrator, DiPhotoshop, DiVisualstudio } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { RiNotionFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";

export function TechStackCard() {
    return (
        <>
            <div className="flex flex-col gap-8">
                <h1 className="text-center text-2xl font-bold --font-poppins">TECH STACK</h1>
                <div className="flex flex-col gap-3">

                    <TechStackBar backgroundClass="border-[#3B46E0] bg-[#04042D] border-2">
                        <TechStackItem label="Unity" link="https://unity.com/" icon={FaUnity} />
                        <TechStackItem label="Rider" link="https://www.jetbrains.com/rider/" icon={SiRider} />
                        <TechStackItem label="Visual Studio" link="https://visualstudio.microsoft.com/" icon={DiVisualstudio} />
                        <TechStackItem label="Visual Studio Code" link="https://code.visualstudio.com/" icon={VscVscode} />
                    </TechStackBar>

                    <TechStackBar backgroundClass="border-[#3B46E0] bg-[#04042D] border-2">
                        <TechStackItem label="Laravel" link="https://laravel.com/" icon={FaLaravel} />
                        <TechStackItem label="React" link="https://react.dev/" icon={FaReact} />
                        <TechStackItem label="Next.js" link="https://nextjs.org/" icon={SiNextdotjs} />
                        <TechStackItem label="Node.js" link="https://nodejs.org/en" icon={FaNodeJs} />
                        <TechStackItem label="Tailwind" link="https://tailwindcss.com/" icon={SiTailwindcss} />
                        <TechStackItem icon={SiDotnet} link="https://dotnet.microsoft.com/" size={32} />
                        <TechStackItem label="MySQL" link="https://www.mysql.com/" icon={GrMysql} />
                        <TechStackItem label="Postgre" link="https://www.postgresql.org/" icon={SiPostgresql} />
                        <TechStackItem label="SQLite" link="https://www.sqlite.org/" icon={SiSqlite} />
                    </TechStackBar>

                    <TechStackBar backgroundClass="border-[#3B46E0] bg-[#04042D] border-2">
                        <TechStackItem label="Github" link="https://github.com/" icon={FaGithub} />
                        <TechStackItem label="Gitlab" link="https://about.gitlab.com/" icon={FaGitlab} />
                        <TechStackItem label="SourceTree" link="https://www.sourcetreeapp.com/" icon={FaSourcetree} />
                        <TechStackItem label="ClickUp" link="https://clickup.com/" icon={SiClickup} />
                        <TechStackItem label="Trello" link="https://trello.com/" icon={FaTrello} />
                        <TechStackItem label="Notion" link="https://www.notion.com/" icon={RiNotionFill} />
                    </TechStackBar>

                    <TechStackBar backgroundClass="border-[#3B46E0] bg-[#04042D] border-2">
                        <TechStackItem label="Blender" link="https://www.blender.org/" icon={SiBlender} />
                        <TechStackItem label="Figma" link="https://www.figma.com/" icon={FaFigma} />
                        <TechStackItem label="Photoshop" link="https://www.adobe.com/products/photoshop.html" icon={DiPhotoshop} />
                        <TechStackItem label="Illustrator" link="https://www.adobe.com/products/illustrator.html" icon={DiIllustrator} />
                        <TechStackItem label="Davinci" link="https://www.blackmagicdesign.com/products/davinciresolve" icon={SiDavinciresolve} />
                    </TechStackBar>

                </div>
            </div>
        </>
    );
}