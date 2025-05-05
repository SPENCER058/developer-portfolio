interface GlowCircleProps {
    size?: number;
    color?: string;
    opacity?: string;
    blur?: string;
    position?: string;
}

export function GlowCircle({
    size = 256,
    color = 'bg-purple-500',
    opacity = 'opacity-30',
    blur = 'blur-3xl',
    position = 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
}: GlowCircleProps) {
    return (
        <div
            className={`absolute rounded-full ${color} ${blur} ${opacity} ${position}`}
            style={{ width: size, height: size }}
        ></div>
    );
}
