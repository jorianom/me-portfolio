'use client'
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { IoClose, IoMenu } from "react-icons/io5"

export const ButtonNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return (() => {
            document.addEventListener('mousedown', handleClickOutside)
        })
    }, [])

    return (
        <div ref={menuRef} className="flex border text-white rounded-lg py-2 uppercase">
            <div className="flex w-full justify-center">
                <ul className="flex-col text-right gap-1">
                    <li>
                        <Link onClick={() => setIsOpen(false)} className="" href="/">About</Link>
                    </li>
                    {
                        isOpen && (
                            <>
                                <li>
                                    <Link onClick={() => setIsOpen(false)} href="#projects">Projects</Link>
                                </li>
                                <li>
                                    <Link onClick={() => setIsOpen(false)} href='/'>Contacts</Link>
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
            <div className="flex justify-end">
                <button onClick={() => setIsOpen(!isOpen)} className="px-3 sm:p-0">
                    {
                        !isOpen ? <IoMenu className="h-6 w-6" /> : <IoClose className="h-6 w-6" />
                    }
                </button>
            </div>
        </div>
    )
}