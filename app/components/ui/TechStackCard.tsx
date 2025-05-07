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
                        <TechStackItem label="Unity" icon={FaUnity} />
                        <TechStackItem label="Rider" icon={SiRider} />
                        <TechStackItem label="Visual Studio" icon={DiVisualstudio} />
                        <TechStackItem label="Visual Studio Code" icon={VscVscode} />
                    </TechStackBar>

                    <TechStackBar backgroundClass="border-[#3B46E0] bg-[#04042D] border-2">
                        <TechStackItem label="Laravel" icon={FaLaravel} />
                        <TechStackItem label="React" icon={FaReact} />
                        <TechStackItem label="Next.js" icon={SiNextdotjs} />
                        <TechStackItem label="Node.js" icon={FaNodeJs} />
                        <TechStackItem label="Tailwind" icon={SiTailwindcss} />
                        <TechStackItem icon={SiDotnet} size={32} />
                        <TechStackItem label="MySQL" icon={GrMysql} />
                        <TechStackItem label="Postgre" icon={SiPostgresql} />
                        <TechStackItem label="SQLite" icon={SiSqlite} />
                    </TechStackBar>

                    <TechStackBar backgroundClass="border-[#3B46E0] bg-[#04042D] border-2">
                        <TechStackItem label="Github" icon={FaGithub} />
                        <TechStackItem label="Gitlab" icon={FaGitlab} />
                        <TechStackItem label="SourceTree" icon={FaSourcetree} />
                        <TechStackItem label="ClickUp" icon={SiClickup} />
                        <TechStackItem label="Trello" icon={FaTrello} />
                        <TechStackItem label="Notion" icon={RiNotionFill} />
                    </TechStackBar>

                    <TechStackBar backgroundClass="border-[#3B46E0] bg-[#04042D] border-2">
                        <TechStackItem label="Blender" icon={SiBlender} />
                        <TechStackItem label="Figma" icon={FaFigma} />
                        <TechStackItem label="Photoshop" icon={DiPhotoshop} />
                        <TechStackItem label="Illustrator" icon={DiIllustrator} />
                        <TechStackItem label="Davinci" icon={SiDavinciresolve} />
                    </TechStackBar>

                </div>
            </div>
        </>
    );
}