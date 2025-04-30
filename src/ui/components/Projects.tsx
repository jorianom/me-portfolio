import { BiLogoPostgresql } from "react-icons/bi";
import { CardProject } from "./CardProject"
import { FaAws, FaCss3, FaGitAlt, FaHtml5, FaNode, FaReact, FaSquareGithub } from "react-icons/fa6";
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
// import { Inspiration } from "./Inspiration";

const skills = [
    // --- FRONTEND ---
    { label: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { label: "CSS", icon: <FaCss3 className="text-blue-400" /> },
    { label: "JavaScript", icon: <RiJavascriptFill className="text-yellow-400" /> },
    { label: "React", icon: <FaReact className="text-cyan-300" /> },
    { label: "Next.js", icon: <RiNextjsFill className="text-white-600 dark:text-white" /> },

    // --- ESTILOS ---
    { label: "Tailwind CSS", icon: <RiTailwindCssFill className="text-sky-300" /> },

    // --- BACKEND ---
    { label: "Node.js", icon: <FaNode className="text-green-400" /> },

    // --- VERSIONAMIENTO ---
    { label: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { label: "GitHub", icon: <FaSquareGithub className="text-white-600 dark:text-white" /> },

    // --- CLOUD Y DB ---
    { label: "AWS", icon: <FaAws className="text-orange-500" /> },
    { label: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-500" /> },
];

const project = [
    { title: "Ecommerce Seed House", description: "Tienda virtual minimalista para productos agrícolas, desarrollada con Next.js. Optimizada para rendimiento, responsiva y fácil de escalar." },
    { title: "Uploader-netsuite", description: "Una extensión para Visual Studio Code diseñada para facilitar la carga y sincronización de scripts en NetSuite directamente desde el editor." },
    { title: "UNBiters", description: "Plataforma social diseñada para dinamizar el comercio informal universitario, promoviendo las ventas en las tradicionales 'chazas' del campus." },
    { title: "Secure-Vote", description: "Sistema simulado de votación electrónica que emplea el algoritmo DSA para asegurar integridad y autenticación de los votos." },
]

export const Projects = () => {
    const number = 6;
    return (
        <section id="projects" className="pt-2 text-white">
            <div>
                <ul className="flex flex-wrap justify-center gap-6 my-4">
                    {
                        skills.map(item => (
                            <li key={item.label} className="text-4xl md:text-6xl">{item.icon}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 items-center">
                    {/* <Inspiration /> */}
                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="text-2xl font-bold">Mis Proyectos Destacados</h1>
                        <p className="text-justify p-4">Mi portafolio reúne proyectos que combinan creatividad, adaptabilidad y el uso de diversas tecnologías como React.js, Next.js, Node.js, MongoDB y PostgreSQL.
                            La mayoría de ellos han sido desplegados en plataformas como Vercel y GitHub Pages, integrando flujos de trabajo automatizados con GitHub Actions.
                            Cada proyecto refleja mi compromiso con la excelencia, la colaboración y la búsqueda constante de soluciones innovadoras a desafíos reales.
                            Te invito a descubrir más en mi <a className="underline text-secondary" target="_blank" href="https://github.com/jorianom">GitHub</a>.</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 grid grid-cols-2 max-h-screen overflow-auto border border-secondary rounded-sm scrollbar-thin">
                    {project.map((item, index) => {
                        const uniqueKey = `project-${index}`;
                        return <CardProject item={item} key={uniqueKey} index={index + 1} total={number} image="project" />;
                    })}
                </div>
            </div>
            {/* <div className="h-48"></div> */}
        </section>
    )
}