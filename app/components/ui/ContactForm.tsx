"use client"

import { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaWhatsapp } from "react-icons/fa6";

const sendWhatsapp = (name: string, message: string) => {
    const phoneNumber = "6283866621299"; // replace with your number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hello, my name is ${name}. ${message}`)}`;
    window.open(url, "_blank");
};


export function ContactForm() {
    const [method, setMethod] = useState('whatsapp');

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (method === 'whatsapp') {
            sendWhatsapp(form.name, form.message);
        } else {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (data.success) {
                alert("Email sent!");
            } else {
                alert("Failed to send email: " + data.error);
            }
        }
    };


    return (
        <>
            <div className="bg-zinc-900 px-8 py-6 rounded-2xl shadow-xl h-fit w-full border-2 border-[var(--border-color)]">
                <h2 className="text-xl font-semibold mb-6 --font-poppins">Get in Touch</h2>
                <div className="flex mb-4">
                    <button
                        onClick={() => setMethod('whatsapp')}
                        className={`flex-1 py-2 px-4 rounded-l-full ${method === 'whatsapp' ? 'bg-[#3B46E0] text-white' : 'bg-zinc-800 text-white'}`}
                    >
                        <div className="flex h-full justify-center items-center">
                            <FaWhatsapp size={20} className="hidden md:inline-block mr-2" /> WhatsApp
                        </div>
                    </button>
                    <button
                        onClick={() => setMethod('email')}
                        className={`flex-1 py-2 px-4 rounded-r-full ${method === 'email' ? 'bg-[#3B46E0] text-white' : 'bg-zinc-800 text-white'}`}
                    >
                        <div className="flex h-full justify-center items-center">
                            <FaEnvelope className="hidden md:inline-block mr-2" /> Email
                        </div>
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 items-center">
                    <div className="flex flex-col w-full p-2 gap-2">
                        <div className="flex flex-col w-full gap-2">
                            <h1 className="text-[var(--font-inter)] text-base">
                                Full Name
                            </h1>
                            <input
                                type="text"
                                placeholder="Your Full Name"
                                className="w-full px-4 py-2 bg-zinc-800 text-white rounded"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
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