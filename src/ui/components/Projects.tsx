import Image from "next/image"
import { CardProject } from "./CardProject"

export const Projects = () => {
    const number = 8;
    return (
        <section className="pt-2 text-white">
            <div className="flex flex-col sm:flex-row justify-center align-center">
                <div className="flex w-full sm:w-1/2 justify-center">
                    <h1>Algunos Proyectos</h1>
                </div>
                <div className="w-full sm:w-1/2 grid grid-cols-2">
                    {Array.from({ length: number }).map((_, index) => {
                        const uniqueKey = `project-${index}`;
                        return <CardProject key={uniqueKey} index={index + 1} total={number} />;
                    })}
                </div>
            </div>
            {/* <div className="h-48"></div> */}
        </section>
    )
}