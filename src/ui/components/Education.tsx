"use client";

import { useState } from "react";
import Image from "next/image";
import {
    IoSchoolOutline,
    IoDocumentTextOutline,
    IoCloseOutline,
    IoEyeOutline,
} from "react-icons/io5";

/* ── Types ─────────────────────────────────────────── */

type EducationItem = {
    title: string;
    institution: string;
    status?: string;
};

type DiplomaItem = {
    title: string;
    institution: string;
    hours: string;
    /**
     * Ruta al archivo del certificado dentro de /public/certificates/
     * Soporta imágenes (.webp, .png, .jpg) y PDFs (.pdf)
     * Ejemplo: "/certificates/ml-data-science.webp"
     */
    certificate?: string;
};

/* ── Data ──────────────────────────────────────────── */

const education: EducationItem[] = [
    {
        title: "Ingeniería de Sistemas y Computación",
        institution: "Universidad Nacional de Colombia",
        status: "En curso",
    },
];

const diplomas: DiplomaItem[] = [
    {
        title: "Machine Learning and Data Science",
        institution: "Universidad Nacional de Colombia",
        hours: "192 h",
        // Descomentar cuando el archivo exista en /public/certificates/
        certificate: "/certificates/analisis.pdf",
    },
    {
        title: "Arquitectura y Calidad de Software",
        institution: "Universidad Nacional de Colombia",
        hours: "192 h",
        certificate: "/certificates/software.pdf",
    },
];

/* ── Helpers ───────────────────────────────────────── */

function isPdf(path: string) {
    return path.toLowerCase().endsWith(".pdf");
}

/* ── Component ─────────────────────────────────────── */

export const Education = () => {
    const [viewer, setViewer] = useState<{
        title: string;
        src: string;
    } | null>(null);

    return (
        <>
            <section className="py-16 border-t border-white/5" id="education">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* ── Heading ─────────────────────────────── */}
                    <div className="lg:col-span-4">
                        <h2 className="text-3xl font-black text-white">Educación</h2>
                        <p className="text-sm text-slate-400 mt-4">
                            Formación académica y complementaria en ingeniería de software y
                            ciencia de datos.
                        </p>
                    </div>

                    {/* ── Content ─────────────────────────────── */}
                    <div className="lg:col-span-8 flex flex-col gap-10">
                        {/* Formal education — prominent card */}
                        {education.map((item) => (
                            <div
                                key={item.title}
                                className="group relative rounded-xl bg-surface/60 border border-white/5
                           hover:border-primary/20 transition-colors overflow-hidden"
                            >
                                {/* Left accent bar */}
                                <div className="absolute left-0 inset-y-0 w-1 bg-primary" />

                                <div className="flex items-start gap-4 p-6 pl-7">
                                    <div className="shrink-0 mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <IoSchoolOutline size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-slate-400 font-mono mt-1">
                                            {item.institution}
                                        </p>
                                        {item.status && (
                                            <span className="inline-flex items-center gap-1.5 mt-3 text-[10px] font-mono uppercase tracking-widest text-green-400 border border-green-400/30 rounded-full px-3 py-0.5">
                                                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                                                {item.status}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Section label */}
                        <p className="text-xs text-slate-500 font-mono uppercase tracking-widest border-b border-white/5 pb-2">
                            Diplomados &amp; Formación Complementaria
                        </p>

                        {/* Diploma cards — 2-col grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {diplomas.map((item) => (
                                <div
                                    key={item.title}
                                    className="group relative rounded-xl bg-surface/40 border border-white/5 p-5
                             hover:border-primary/20 hover:bg-surface/70 transition-all"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="shrink-0 mt-0.5 flex h-8 w-8 items-center justify-center rounded-md bg-white/5 text-primary/70 group-hover:text-primary transition-colors">
                                            <IoDocumentTextOutline size={18} />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-sm font-semibold text-white leading-snug">
                                                {item.title}
                                            </h3>
                                            <p className="text-[11px] text-slate-500 font-mono mt-1">
                                                {item.institution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Footer: hours + certificate link */}
                                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                                        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">
                                            {item.hours}
                                        </span>

                                        {item.certificate ? (
                                            <button
                                                onClick={() =>
                                                    setViewer({
                                                        title: item.title,
                                                        src: item.certificate!,
                                                    })
                                                }
                                                className="flex items-center gap-1.5 text-[11px] text-primary font-mono uppercase tracking-wider
                                   hover:text-white transition-colors cursor-pointer"
                                            >
                                                <IoEyeOutline size={14} />
                                                Ver certificado
                                            </button>
                                        ) : (
                                            //   <span className="text-[11px] text-slate-600 font-mono uppercase tracking-wider">
                                            //     Próximamente
                                            //   </span>
                                            null
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Certificate viewer modal ───────────────── */}
            {viewer && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setViewer(null)}
                >
                    <div
                        className="relative w-full max-w-3xl max-h-[90vh] rounded-2xl bg-surface border border-white/10 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                            <p className="text-sm font-semibold text-white truncate pr-4">
                                {viewer.title}
                            </p>
                            <button
                                onClick={() => setViewer(null)}
                                className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full
                           hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                            >
                                <IoCloseOutline size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-4 flex items-center justify-center overflow-auto max-h-[calc(90vh-56px)]">
                            {isPdf(viewer.src) ? (
                                <iframe
                                    src={viewer.src}
                                    className="w-full h-[75vh] rounded-lg"
                                    title={viewer.title}
                                />
                            ) : (
                                <Image
                                    src={viewer.src}
                                    alt={viewer.title}
                                    width={900}
                                    height={650}
                                    className="rounded-lg object-contain max-h-[75vh] w-auto"
                                    quality={90}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
