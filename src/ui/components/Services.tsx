import { IoCodeSlash, IoGitNetworkOutline, IoFlashOutline, IoSearchOutline } from "react-icons/io5";
import type { IconType } from "react-icons";

type Service = {
    number: string;
    tag: string;
    title: string;
    claim: string;
    description: string;
    techs: string[];
    icon: IconType;
    topAccent: string;
    numColor: string;
};

const services: Service[] = [
    {
        number: "01",
        tag: "Desarrollo web",
        title: "De idea a producto funcional",
        claim: "Sin intermediarios. Sin features a medias.",
        description:
            "Tomo una idea y la convierto en una aplicación real: arquitectura, código, base de datos y despliegue. Responsabilidad completa de principio a fin.",
        techs: ["Next.js", "Node.js", "PostgreSQL", "Vercel"],
        icon: IoCodeSlash,
        topAccent: "from-primary/80 to-primary/10",
        numColor: "text-primary/10",
    },
    {
        number: "02",
        tag: "Integraciones",
        title: "Sistemas que se hablan entre sí",
        claim: "Datos consistentes, sin copiar y pegar.",
        description:
            "APIs REST y conectores que sincronizan ERPs, CRMs y plataformas externas. Experiencia real con NetSuite y entornos corporativos con múltiples fuentes de datos.",
        techs: ["REST APIs", "Node.js", ".NET", "Go", "NetSuite"],
        icon: IoGitNetworkOutline,
        topAccent: "from-blue-400/80 to-blue-400/10",
        numColor: "text-blue-400/10",
    },
    {
        number: "03",
        tag: "Automatización",
        title: "Procesos que corren solos",
        claim: "Un script bien hecho ahorra semanas de trabajo.",
        description:
            "Automatizo flujos repetitivos: sincronización de datos, reportes programados, pipelines de CI/CD y disparadores de negocio sobre plataformas existentes.",
        techs: ["JavaScript", "Python", "GitHub Actions", "AWS Lambda"],
        icon: IoFlashOutline,
        topAccent: "from-yellow-400/80 to-yellow-400/10",
        numColor: "text-yellow-400/10",
    },
    {
        number: "04",
        tag: "Consultoría",
        title: "Segunda opinión técnica",
        claim: "Antes de construir, asegúrate de construir lo correcto.",
        description:
            "Revisión de arquitectura, elección de stack, identificación de deuda técnica y plan de acción. Sin vender tecnología innecesaria.",
        techs: ["Arquitectura", "Revisión de código", "Bases de datos"],
        icon: IoSearchOutline,
        topAccent: "from-emerald-400/80 to-emerald-400/10",
        numColor: "text-emerald-400/10",
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-20 border-t border-white/5">
            <div className="flex flex-col gap-10">
                {/* Header */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-black text-white">Servicios</h2>
                    <p className="text-sm text-slate-400 max-w-lg">
                        Lo que construyo para proyectos que necesitan pasar de boceto a producto real.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {services.map((s) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.number}
                                className="group relative overflow-hidden rounded-xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:-translate-y-0.5"
                            >
                                {/* Colored top accent */}
                                <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${s.topAccent}`} />

                                {/* Watermark number */}
                                <span
                                    className={`pointer-events-none absolute right-4 bottom-3 select-none text-8xl font-black leading-none transition-opacity duration-300 ${s.numColor} group-hover:opacity-100`}
                                    aria-hidden
                                >
                                    {s.number}
                                </span>

                                {/* Tag line + icon */}
                                <div className="mb-5 flex items-center justify-between">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                                        {s.tag}
                                    </span>
                                    <Icon className="h-5 w-5 text-slate-600 transition-colors group-hover:text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="mb-2 text-xl font-bold leading-snug text-white">
                                    {s.title}
                                </h3>

                                {/* Claim */}
                                <p className="mb-4 text-sm font-medium italic text-primary/80">
                                    — {s.claim}
                                </p>

                                {/* Description */}
                                <p className="relative z-10 mb-6 text-sm leading-relaxed text-slate-400">
                                    {s.description}
                                </p>

                                {/* Tech tags */}
                                <div className="relative z-10 flex flex-wrap gap-2">
                                    {s.techs.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-slate-400"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
