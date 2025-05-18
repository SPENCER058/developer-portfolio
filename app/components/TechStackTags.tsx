"use client";

import React from 'react';

export type TechVariant = 'nextjs' | 'laravel' | 'typescript' | 'tailwind' | 'node' | 'react';

const tagMap: Record<TechVariant, { label: string; className: string }> = {
    nextjs: { label: 'Next.js', className: 'border-white text-white bg-gray-600' },
    laravel: { label: 'Laravel', className: 'border-red-500 text-red-500' },
    typescript: { label: 'TypeScript', className: 'border-blue-500 text-blue-300 bg-blue-900' },
    tailwind: { label: 'Tailwind', className: 'border-cyan-400 text-cyan-300 bg-cyan-900' },
    node: { label: 'Node.js', className: 'border-green-500 text-green-500' },
    react: { label: 'React', className: 'border-sky-500 text-sky-500' },
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
