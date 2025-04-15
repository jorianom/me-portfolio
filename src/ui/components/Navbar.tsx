
import Link from "next/link";
import { ButtonNav } from "./ButtonNav";

export const Navbar = () => {
    return (
        <nav className="px-5">
            <div className="py-3">
                <div className="hidden sm:flex border text-white rounded-lg py-2 sm:justify-around uppercase">
                    <Link className="" href="/">About</Link>
                    <Link className="" href="#projects">Projects</Link>
                    <Link className="" href="/">Contact</Link>
                </div>
                <div className="sm:hidden">
                    <ButtonNav />
                </div>
            </div>
        </nav>
    )
}