'use client'

import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu, IoTerminal } from "react-icons/io5";
import { ContactModal } from "./ContactModal";

const navLinks = [
    { label: "Proyectos", href: "#projects" },
    { label: "Servicios", href: "#services" },
    { label: "Experiencia", href: "#experience" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showContact, setShowContact] = useState(false);

    return (
        <>
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-bg-dark/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo + Name */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                        <IoTerminal className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold leading-none tracking-tight text-white">
                            John Jairo Riaño Martinez
                        </h2>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                            Software Developer
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-white hover:text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button
                        onClick={() => setShowContact(true)}
                        className="rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-primary/90 transition-all cursor-pointer"
                    >
                        Contáctame
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-2"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <IoClose className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <nav className="md:hidden border-t border-white/5 bg-bg-dark/95 backdrop-blur-md px-6 pb-4">
                    <div className="flex flex-col gap-3 pt-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-medium text-white hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button
                            onClick={() => { setIsOpen(false); setShowContact(true); }}
                            className="mt-1 rounded-lg bg-primary px-5 py-2 text-center text-sm font-bold text-white hover:bg-primary/90 transition-all cursor-pointer"
                        >
                            Contáctame
                        </button>
                    </div>
                </nav>
            )}
        </header>

            <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
        </>
    );
};