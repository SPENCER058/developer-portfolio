"use client"

import { IconType } from "react-icons";

interface NavSocialItemProps {
    href: string;
    icon: IconType;
    size?: number;
}

export function NavSocialItem({ href, icon, size }: NavSocialItemProps) {

    const IconComponent = icon;

    return (
        <>
            <a className="--font-inter text-base transition ease-in-out duration-700 hover:scale-130 will-change-transform"
                href={href} target="_blank" rel="noopener noreferrer"
            >
                <IconComponent size={size || 20} />
            </a>
        </>
    );
}