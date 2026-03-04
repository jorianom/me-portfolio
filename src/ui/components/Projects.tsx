'use client'

import Image from "next/image"
import { basePath } from "../../../next.config"
import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"

type Project = {
    title: string
    description: string
    image: string
    url: string
}

const projects: Project[] = [
    {
        title: "Ecommerce Seed House",
        description: "Tienda virtual minimalista para productos agrícolas, desarrollada con Next.js. Optimizada para rendimiento, responsiva y fácil de escalar.",
        image: "/project_1.webp",
        url: "https://github.com/jorianom",
    },
    {
        title: "Uploader NetSuite",
        description: "Una extensión para Visual Studio Code diseñada para facilitar la carga y sincronización de scripts en NetSuite directamente desde el editor.",
        image: "/project_2.webp",
        url: "https://github.com/jorianom",
    },
    {
        title: "UNBiters",
        description: "Plataforma social diseñada para dinamizar el comercio informal universitario, promoviendo las ventas en las tradicionales 'chazas' del campus.",
        image: "/project_3.webp",
        url: "https://github.com/jorianom",
    },
    {
        title: "Secure-Vote",
        description: "Sistema simulado de votación electrónica que emplea el algoritmo DSA para asegurar integridad y autenticación de los votos.",
        image: "/project_4.webp",
        url: "https://github.com/jorianom",
    },
]

const AUTO_PLAY_MS = 7000

const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
}

export const Projects = () => {
    const [[current, direction], setCurrent] = useState([0, 1])

    const paginate = useCallback((dir: number) => {
        setCurrent(([prev]) => {
            const next = (prev + dir + projects.length) % projects.length
            return [next, dir]
        })
    }, [])

    // Auto-slide
    useEffect(() => {
        const timer = setInterval(() => paginate(1), AUTO_PLAY_MS)
        return () => clearInterval(timer)
    }, [paginate])

    const project = projects[current]

    return (
        <section id="projects" className="py-20 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                {/* Left: Info */}
                <div className="lg:col-span-4 flex flex-col justify-between gap-8">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl font-black text-white">
                            Mis Proyectos
                        </h2>

                        {/* Active project info */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col gap-3"
                            >
                                <span className="text-6xl font-black bg-gradient-to-r from-primary/40 to-white/5 bg-clip-text text-transparent leading-none">
                                    {String(current + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold text-white -mt-4 border-b border-primary/60 pb-2">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => paginate(-1)}
                                className="h-11 w-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                                aria-label="Proyecto anterior"
                            >
                                <IoChevronBack className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => paginate(1)}
                                className="h-11 w-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                                aria-label="Proyecto siguiente"
                            >
                                <IoChevronForward className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {projects.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent([i, i > current ? 1 : -1])}
                                    aria-label={`Ir al proyecto ${i + 1}`}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current
                                        ? "w-6 bg-primary"
                                        : "w-2 bg-white/20 hover:bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Carousel image */}
                <div className="lg:col-span-8">
                    <div className="relative overflow-hidden rounded-3xl aspect-[16/10] sm:aspect-[16/9] bg-surface border border-white/5">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.a
                                key={current}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                className="absolute inset-0 block group"
                            >
                                <Image
                                    src={basePath + project.image}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 66vw"
                                    alt={project.title}
                                    className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-transparent to-transparent" />

                                {/* Hover label */}
                                <div className="absolute bottom-6 right-6 rounded-full bg-primary/90 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Ver proyecto →
                                </div>
                            </motion.a>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}