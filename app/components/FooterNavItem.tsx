'use client';

import Link from 'next/link';

interface NavItemProps {
    href: string;
    label: string;
}

export default function NavItem({ href, label }: NavItemProps) {
    return (
        <Link
            href={href}
            className="flex flex-col items-start group text-base font-normal text-white w-fit"
        >
            <span className="relative z-10 --font-inter">{label}</span>
            <span className="h-[2px] w-0 bg-current transition-all duration-500 group-hover:w-full"></span>
        </Link>
    );
}
