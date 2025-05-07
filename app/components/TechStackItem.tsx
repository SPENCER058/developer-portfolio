"use client"

import { IconType } from "react-icons";

interface TechStackItemProps {
    label?: string;
    icon?: IconType
    size?: number;
}

export function TechStackItem({ label, icon, size }: TechStackItemProps) {

    const IconComponent = icon;

    return (
        <>
            <p className="text-white flex flex-row text-md font-normal --font-inter gap-2 justify-center items-center 
                transition duration-700 ease-in-out hover:translate-y-[-5px]"
            >
                {IconComponent && <IconComponent size={size || 32} />}
                {label}
            </p>
        </>
    );
}