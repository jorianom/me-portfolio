import { CiMail } from "react-icons/ci"
import { PiFacebookLogoLight, PiGithubLogoLight, PiWhatsappLogoLight } from "react-icons/pi"

export const Footer = () => {

    return (
        <div className="flex flex-col p-5 items-center justify-center text-white">
            <hr className="px-1 w-full pt-3" />
            <div className="flex space-x-4">
                <a
                    target="_blank"
                    href="https://github.com/jorianom"
                    aria-label="link"
                    className="hover:text-accent"
                >
                    <PiWhatsappLogoLight className="h-7 w-7" />
                </a>
                <a
                    href="https://github.com/jorianom"
                    aria-label="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                >
                    <PiFacebookLogoLight className="h-7 w-7" />
                </a>
                <a
                    href="https://github.com/jorianom"
                    aria-label="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                >
                    <PiGithubLogoLight className="h-7 w-7" />
                </a>
                <a
                    href="https://github.com/jorianom"
                    aria-label="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                >
                    <CiMail className="h-7 w-7" />
                </a>
            </div>
            <div className="text-center">
                <p>&copy; 2025 John Riaño</p>
                <p>All Rights Reserved</p>
                <a target="_blank" href="https://github.com/jorianom"
                >made by <span className="text-white">Jorianom</span></a>
            </div>
        </div>
    )
}