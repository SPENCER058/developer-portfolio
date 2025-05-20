"use client";

import React from 'react';

export type TechVariant = 'unity' | 'nextjs' | 'asp' | 'laravel' | 'typescript' | 'tailwind' | 'node' | 'react' | 'postgre' | 'mysql' | 'vuforia' | 'csharp';

const tagMap: Record<TechVariant, { label: string; className: string }> = {
    unity: { label: 'Unity', className: 'border-white text-white bg-gray-600' },
    nextjs: { label: 'Next.js', className: 'border-white text-white bg-gray-600' },
    asp: { label: 'ASP', className: 'border-purple-500 text-purple-300 bg-purple-900' },
    laravel: { label: 'Laravel', className: 'border-red-500 text-red-500' },
    typescript: { label: 'TypeScript', className: 'border-blue-500 text-blue-300 bg-blue-900' },
    tailwind: { label: 'Tailwind', className: 'border-cyan-400 text-cyan-300 bg-cyan-900' },
    node: { label: 'Node.js', className: 'border-green-500 text-green-500' },
    react: { label: 'React', className: 'border-sky-500 text-sky-500' },
    postgre: { label: 'Postgre', className: 'border-blue-500 text-blue-300 bg-blue-900' },
    mysql: { label: 'MySQL', className: 'border-orange-500 text-orange-300 bg-orange-900' },
    vuforia: { label: 'Vuforia', className: 'border-lime-500 text-lime-300 bg-lime-900' },
    csharp: { label: 'C#', className: 'border-green-500 text-green-300 bg-green-900' },
};

type TechStackTagProps = {
    variant: TechVariant;
};

export function TechStackTag({ variant }: TechStackTagProps) {
    const base = 'text-xs rounded-full border-2 w-fit px-2.5 py-0.5 will-change-transform';
    const tag = tagMap[variant];

    if (!tag) return null;

    return (
        <div className={`${base} ${tag.className}`}>
            <span className='leading-none'>
                {tag.label}
            </span>
        </div>
    );
}
