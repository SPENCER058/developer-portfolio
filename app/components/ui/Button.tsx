import Link from "next/link";
import { IconType } from "react-icons";

interface ActionButtonProps {
    href: string;
    label: string;
    bgColor: string;
    hoverBgColor?: string;
    borderColor: string;
    icon?: IconType;
    size?: number;
    additionalClass?: string;
    transitionDuration?: string;
    target?: string;
}

export function ActionButton({ href, label, bgColor, borderColor, hoverBgColor, icon, size, transitionDuration, additionalClass, target }: ActionButtonProps) {
    const IconComponent = icon;

    return (
        <>
            <Link className={`
                flex items-center gap-2.5 px-4 py-1.5 rounded-full border-2 
                ${bgColor} 
                ${borderColor}
                ${additionalClass}
                transition ${transitionDuration || "duration-700"} ease-in-out 
                ${hoverBgColor}
                `}
                href={href}
                target={target}
            >
                <p className="--font-poppins font-medium text-md whitespace-nowrap">{label}</p>
                {IconComponent && <IconComponent size={size || 20} />}
            </Link>
        </>
    );
}
