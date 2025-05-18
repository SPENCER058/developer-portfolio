"use client"

import { ReactNode } from "react";

interface TechStackBarProps {
    children: ReactNode;
    backgroundClass: string;
    paddingY?: string;
}

export function TechStackBar({ children, backgroundClass, paddingY = "py-4 md:py-6" }: TechStackBarProps) {
    return (
        <div className={`${backgroundClass} rounded-2xl ${paddingY}`}>
            <div className="flex flex-row items-center justify-center gap-8 md:gap-10 flex-wrap">
                {children}
            </div>
        </div>
    );
}
