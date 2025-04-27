
import Link from "next/link";
import { ButtonNav } from "./ButtonNav";

export const Navbar = () => {
    return (
        <nav className="">
            <div className="py-3 ">
                <div className="hidden sm:flex border border-secondary text-white rounded-lg py-2 sm:justify-around uppercase bg-back">
                    <Link className="hover:text-accent" href="/">Sobre Mí</Link>
                    <Link className="hover:text-accent" href="#projects">Proyectos</Link>
                    <Link className="hover:text-accent" href="/">Contáctame</Link>
                </div>
                <div className="sm:hidden">
                    <ButtonNav />
                </div>
            </div>
        </nav>
    )
}