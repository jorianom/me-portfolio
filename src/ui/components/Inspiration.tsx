// Inspiration.tsx
import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws, FaCss3, FaGitAlt, FaHtml5, FaNode, FaReact, FaSquareGithub } from "react-icons/fa6";
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const skills = [
    // --- FRONTEND ---
    { label: "HTML", icon: <FaHtml5 className="h-5 w-5 text-orange-500" /> },
    { label: "CSS", icon: <FaCss3 className="h-5 w-5 text-blue-400" /> },
    { label: "JavaScript", icon: <RiJavascriptFill className="h-5 w-5 text-yellow-400" /> },
    { label: "React", icon: <FaReact className="h-5 w-5 text-cyan-300" /> },
    { label: "Next.js", icon: <RiNextjsFill className="h-5 w-5 text-neutral-800 dark:text-white" /> },

    // --- ESTILOS ---
    { label: "Tailwind CSS", icon: <RiTailwindCssFill className="h-5 w-5 text-sky-300" /> },

    // --- BACKEND ---
    { label: "Node.js", icon: <FaNode className="h-5 w-5 text-green-400" /> },

    // --- VERSIONAMIENTO ---
    { label: "Git", icon: <FaGitAlt className="h-5 w-5 text-orange-500" /> },
    { label: "GitHub", icon: <FaSquareGithub className="h-5 w-5 text-zinc-700 dark:text-white" /> },

    // --- CLOUD Y DB ---
    { label: "AWS", icon: <FaAws className="h-5 w-5 text-orange-500" /> },
    { label: "PostgreSQL", icon: <BiLogoPostgresql className="h-5 w-5 text-blue-500" /> },
];




export const Inspiration = () => {
    return (
        <div className="relative w-full h-screen overflow-visible">
            <svg
                className="absolute w-full h-full left-0 -translate-x-1/2"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
            >
                <circle cx="50" cy="50" r="20" stroke="#ccc" strokeWidth="0.5" fill="black" />
                <circle cx="50" cy="50" r="30" stroke="#ccc" strokeWidth="0.5" fill="black" />
                <circle cx="50" cy="50" r="38" stroke="#ccc" strokeWidth="0.5" fill="none" />
                <circle cx="50" cy="50" r="60" stroke="#ccc" strokeWidth="0.5" fill="none" />
            </svg>
            <h2 className="flex h-full text-lg max-w-[30%] px-2 absolute items-center text-white">Herramientas y tecnologías</h2>
            <div className="relative w-full h-full">
                {/* <svg className="absolute top-0 left-0 w-full h-full">...</svg> */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[140px] text-black">
                    <ul className="p-2">
                        {
                            skills.map((item) => (
                                <li key={item.label} className="flex justify-end items-center">
                                    <span className="px-2">{item.label}</span>{item.icon}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};
