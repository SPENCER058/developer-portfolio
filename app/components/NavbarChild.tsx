"use client"

import Link from "next/link";

interface NavbarChildProps {
    name: string;
    href: string;
}

export function NavbarChild({ name, href }: NavbarChildProps) {
    return (
        <>
            <Link className="bg-transparent px-4 py-1 rounded-full font-poppins duration-500 hover:bg-[var(--primary)] font-medium text-sm"
                key={name} href={href}>
                {name}
            </Link>
        </>
    );
}