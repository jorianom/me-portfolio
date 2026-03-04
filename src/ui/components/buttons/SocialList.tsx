import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6"

const listSocial = [
    { url: "https://www.linkedin.com/in/jorianom/", icon: <FaLinkedinIn className="w-6 h-6" /> },
    { url: "https://github.com/jorianom", icon: <FaGithub className="w-6 h-6" /> },
    { url: "https://www.facebook.com/share/1AEnrhibXg/", icon: <FaFacebook className="w-6 h-6" /> },
    { url: "https://www.instagram.com/jrianoma?utm_source=qr&igsh=MWNsMDh3c3I5Y2w1ag==", icon: <FaInstagram className="w-6 h-6" /> },
]
export const SocialList = () => {
    return (
        <div className="flex items-center gap-4">
            {
                listSocial.map((item) => (
                    <a key={item.url} href={item.url} target="_blank" className="text-white hover:text-primary transition-colors">
                        {item.icon}
                    </a>
                ))
            }
        </div>
    )
}