import { FaReact, FaNode, FaDatabase, FaCloud } from "react-icons/fa6";
import type { IconType } from "react-icons";

type Category = {
    title: string;
    techs: string;
    icon: IconType;
    iconColor: string;
    accent: string;
};

const categories: Category[] = [
    {
        title: "Frontend & UX",
        techs: "HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS",
        icon: FaReact,
        iconColor: "text-cyan-400",
        accent: "from-cyan-400/80 to-cyan-400/10",
    },
    {
        title: "Backend & Logic",
        techs: "Node.js, Express, REST APIs",
        icon: FaNode,
        iconColor: "text-green-400",
        accent: "from-green-400/80 to-green-400/10",
    },
    {
        title: "Data & Databases",
        techs: "PostgreSQL, MongoDB",
        icon: FaDatabase,
        iconColor: "text-blue-400",
        accent: "from-blue-400/80 to-blue-400/10",
    },
    {
        title: "Cloud & DevOps",
        techs: "AWS, GitHub Actions, Vercel",
        icon: FaCloud,
        iconColor: "text-orange-400",
        accent: "from-orange-400/80 to-orange-400/10",
    },
];

export const TechStack = () => {
    return (
        <section className="py-8 border-b border-white/5">
            <h2 className="mb-8 text-3xl font-black text-white">
                Tech Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                        <div
                            key={cat.title}
                            className="group relative overflow-hidden rounded-xl border border-white/10 bg-surface p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                        >
                            {/* Gradient top border accent */}
                            <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${cat.accent}`} />

                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-xs uppercase tracking-widest text-primary font-bold">
                                        {cat.title}
                                    </h4>
                                    <p className="text-slate-300 text-sm font-mono leading-relaxed">
                                        {cat.techs}
                                    </p>
                                </div>
                                <Icon className={`h-8 w-8 shrink-0 ${cat.iconColor} opacity-60 group-hover:opacity-100 transition-opacity`} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
