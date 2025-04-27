import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6"

const listSocial = [
    { url: "https://www.linkedin.com/in/jorianom/", icon: <FaLinkedinIn className="w-6 h-6" /> },
    { url: "https://github.com/jorianom", icon: <FaGithub className="w-6 h-6" /> },
    { url: "https://www.facebook.com/share/1AEnrhibXg/", icon: <FaFacebook className="w-6 h-6" /> },
    { url: "https://www.instagram.com/jrianoma?utm_source=qr&igsh=MWNsMDh3c3I5Y2w1ag==", icon: <FaInstagram className="w-6 h-6" /> },
]
export const SocialList = () => {
    return (
        <ul className="flex w-full justify-center gap-4 p-2">
            {
                listSocial.map((item) => (
                    <li key={item.url}>
                        <a href={item.url} target="_blank" className="hover:text-secondary">
                            {item.icon}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}