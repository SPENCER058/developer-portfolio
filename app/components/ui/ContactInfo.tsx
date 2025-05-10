"use client"

import { IconType } from "react-icons";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";

interface ItemProps {
    icon: IconType;
    size?: number;
    title: string;
    content: string;
    link?: string;
}

export function Item({ icon, size = 20, title, content, link }: ItemProps) {
    const IconComponent = icon;

    return (
        <>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 bg-transparent px-6 py-4 rounded-xl transition ease-in-out duration-700 hover:bg-zinc-800 hover:translate-x-[15px] will-change-transform">
                <IconComponent size={size} />
                <div className="flex flex-col gap-1">
                    <h1 className="text-base --font-inter">{title}</h1>
                    <p className="text-gray-400 text-sm --font-inter">{content}</p>
                </div>
            </a>
        </>
    );
}

export function ContactInfo() {
    return (
        <>
            <div className="bg-zinc-900 px-8 py-6 rounded-2xl shadow-xl h-fit w-full border-2 border-[var(--border-color)]">
                <h2 className="text-xl font-semibold mb-6 --font-poppins">Contact Information</h2>
                <div className="flex flex-col gap-4">
                    <Item link="mailto:galihpanjidev@gmail.com" icon={FaEnvelope} title="Email" content="galihpanjidev@gmail.com" />
                    <Item link="https://wa.me/6283866621299" icon={FaWhatsapp} size={24} title="Whatsapp" content="(+62) 838-6662-1299" />
                    <Item link="tel:+6283866621299" icon={FaPhone} title="Phone" content="(+62) 838-6662-1299" />
                    <Item icon={FaMapMarkerAlt} title="Address" content="Boyolali, Central Java, 57323, Indonesia" />
                </div>
            </div>
        </>
    );
}