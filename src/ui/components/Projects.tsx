import { CardProject } from "./CardProject"
import { Inspiration } from "./Inspiration";

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
            <div className="flex flex-col sm:flex-row">
                <div className="flex w-full sm:w-1/2 items-center">
                    <Inspiration />
                </div>
                <div className="w-full sm:w-1/2 grid grid-cols-2 h-screen overflow-auto border rounded-sm scrollbar-thin">
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