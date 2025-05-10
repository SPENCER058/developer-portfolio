"use client"

import { IconType } from "react-icons";

interface TechStackItemProps {
    label?: string;
    icon?: IconType
    size?: number;
    link?: string;
}

export function TechStackItem({ label, icon, size, link = "/" }: TechStackItemProps) {

    const IconComponent = icon;

    return (
        <>
            <a href={link} rel="noopener noreferrer" target="_blank" className="text-white flex flex-row text-md font-normal --font-inter gap-2 justify-center will-change-transform items-center transition duration-700 ease-in-out hover:translate-y-[-5px]"
            >
                {IconComponent && <IconComponent size={size || 32} />}
                {label}
            </a>
        </>
    );
}