import Image from "next/image"
import { SocialList } from "./buttons/SocialList"
import { AvailabilityBadge } from "./AvailabilityBadge"
import { basePath } from "../../../next.config"
import Link from "next/link"

export const ProfileCard = () => {
    return (
        <section className="relative py-10 sm:py-16 lg:py-20 bg-surface rounded-3xl border border-white/5 shadow-2xl my-6 overflow-hidden">
            <div className="flex flex-col-reverse sm:grid sm:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center px-6 sm:px-8 lg:px-12">
                {/* Left: Text content */}
                <div className="sm:col-span-7 flex flex-col items-center sm:items-start gap-5 sm:gap-6">
                    {/* Availability badge */}
                    <AvailabilityBadge />

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-tight text-white text-center sm:text-left">
                        Construyo productos digitales <br className="hidden sm:block" />
                        <span className="text-primary">de principio a fin.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-slate-300 max-w-2xl text-sm lg:text-base leading-relaxed font-medium text-center sm:text-left">
                        Diseño y desarrollo aplicaciones web completas — desde la arquitectura
                        hasta el despliegue. Trabajo con Node.js, React, Next.js, MongoDB y PostgreSQL
                        para convertir ideas en productos funcionales, escalables y listos para producción.
                    </p>

                    {/* Social icons */}
                    <SocialList />

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                        <Link
                            href="#projects"
                            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3 font-bold text-white transition-transform hover:scale-105 shadow-lg shadow-primary/20"
                        >
                            Ver Proyectos
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/jorianom/"
                            target="_blank"
                            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-3 font-bold text-white transition-all hover:bg-white/5"
                        >
                            Conectemos
                        </Link>
                    </div>
                </div>

                {/* Right: Photo */}
                <div className="sm:col-span-5 flex flex-col items-center sm:justify-center lg:justify-end">
                    <div className="relative">
                        <div className="relative h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80 overflow-hidden rounded-full border-4 border-white/10 shadow-2xl bg-slate-800">
                            <Image
                                src={basePath + "/photo_.webp"}
                                fill
                                sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
                                priority
                                className="object-cover"
                                alt="Foto de John Jairo Riaño, desarrollador full stack"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}