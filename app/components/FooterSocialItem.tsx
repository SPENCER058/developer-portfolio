"use client"

import Link from "next/link";
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
            <Link className="--font-inter text-base transition ease-in-out duration-700 hover:scale-130 will-change-transform"
                href={href} target="_blank"
            >
                <IconComponent size={size || 20} />
            </Link>
        </>
    );
}