"use client"

import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { ContactSocialMedia } from "./ContactSocialMedia";

export function ContactCard() {

    return (
        <section id="contact" className="flex flex-col gap-6 text-white font-sans scroll-mt-25">
            <h1 className="text-center pb-2 text-2xl font-bold --font-poppins">LETS CONNECT</h1>
            <div className="flex flex-col md:flex-row w-full gap-6">
                <ContactForm />
                <ContactInfo />
            </div>
            <div className="w-full">
                <ContactSocialMedia />
            </div>
        </section>
    );
}