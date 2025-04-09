import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6"

const listSocial = [
    { url: "url", icon: <FaLinkedinIn className="w-6 h-6" /> },
    { url: "url", icon: <FaGithub className="w-6 h-6" /> },
    { url: "url", icon: <FaFacebook className="w-6 h-6" /> },
    { url: "url", icon: <FaInstagram className="w-6 h-6" /> },
]
export const SocialList = () => {
    return (
        <ul className="flex w-full justify-center gap-4 p-2">
            {
                listSocial.map((item) => (
                    <li key={item.url}>
                        {item.icon}
                    </li>
                ))
            }
        </ul>
    )
}