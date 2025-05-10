"use client"

import { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaWhatsapp } from "react-icons/fa6";

export function ContactForm() {
    const [method, setMethod] = useState('whatsapp');

    return (
        <>
            <div className="bg-zinc-900 px-8 py-6 rounded-2xl shadow-xl h-fit w-full border-2 border-[var(--border-color)]">
                <h2 className="text-xl font-semibold mb-6 --font-poppins">Get in Touch</h2>
                <div className="flex mb-4">
                    <button
                        onClick={() => setMethod('whatsapp')}
                        className={`flex-1 py-2 px-4 rounded-l-full ${method === 'whatsapp' ? 'bg-[#3B46E0] text-white' : 'bg-zinc-800 text-white'}`}
                    >
                        <FaWhatsapp size={20} className="inline-block mr-2" /> WhatsApp
                    </button>
                    <button
                        onClick={() => setMethod('email')}
                        className={`flex-1 py-2 px-4 rounded-r-full ${method === 'email' ? 'bg-[#3B46E0] text-white' : 'bg-zinc-800 text-white'}`}
                    >
                        <FaEnvelope className="inline-block mr-2" /> Email
                    </button>
                </div>
                <form className="flex flex-col gap-8 items-center">
                    <div className="flex flex-col w-full p-2 gap-2">
                        <div className="flex flex-col w-full gap-2">
                            <h1 className="text-[var(--font-inter)] text-base">
                                Full Name
                            </h1>
                            <input
                                type="text"
                                placeholder="Your Full Name"
                                className="w-full px-4 py-2 bg-zinc-800 text-white rounded"
                            />
                        </div>
                        {method === 'email' && (
                            <div className="flex flex-col w-full gap-2">
                                <h1 className="text-[var(--font-inter)] text-base">
                                    Email
                                </h1>
                                <input
                                    type="email"
                                    placeholder="youremail@gmail.com"
                                    className="w-full px-4 py-2 bg-zinc-800 text-white rounded"
                                />
                            </div>
                        )}
                        <div className="flex flex-col w-full gap-2">
                            <h1 className="text-[var(--font-inter)] text-base">
                                Message
                            </h1>
                            <textarea
                                placeholder="Your message..."
                                rows={4}
                                className="w-full px-4 py-2 bg-zinc-800 text-white rounded"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-[#3B46E0] text-white rounded-full flex items-center justify-center gap-2 transition duration-500"
                    >
                        {method === 'whatsapp' ? <FaWhatsapp /> : <FaPaperPlane />}
                        {method === 'whatsapp' ? 'Send via WhatsApp' : 'Send Email'}
                    </button>
                </form>
            </div>
        </>
    );

}