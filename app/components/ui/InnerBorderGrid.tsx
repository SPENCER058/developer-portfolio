"use client"

import React, { ReactNode } from 'react';

interface InnerBorderGridProps {
    children?: ReactNode;
    cols?: number;
    borderColor?: string;
}

export default function InnerBorderGrid({ children, cols = 3, borderColor = "border-gray-500", }: InnerBorderGridProps) {
    const items = React.Children.toArray(children);
    const totalRows = Math.ceil(items.length / cols);

    return (
        <div
            className="grid" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }} >
            {items.map((item, index) => {
                const currentRow = Math.floor(index / cols);
                const isLastRow = currentRow === totalRows - 1;
                const isLastCol = (index + 1) % cols === 0;

                return (
                    <div
                        key={index}
                        className={`

                            ${borderColor}
                            ${!isLastCol ? 'border-r-2' : ''}
                            ${!isLastRow ? 'border-b-2' : ''}
                        `}
                    >
                        {item}
                    </div>
                );
            })}
        </div>
    );
}
