import Image from "next/image"
// import { FaRegCopy } from "react-icons/fa"
import { ButtonIcon } from "./buttons/ButtonIcon"
import { SocialList } from "./buttons/SocialList"
import { FaCircle, FaCode } from "react-icons/fa6"
import { basePath } from "../../../next.config"
import { RiUserFollowFill } from "react-icons/ri"

export const ProfileCard = () => {

    return (
        <div className="bg-back-inv border-secondary flex flex-col-reverse sm:flex-row border rounded-md text-white">
            <div className="flex-1 p-3 pl-5">
                <div className="flex flex-col items-center sm:items-start">
                    <div className="">
                        <span className="flex w-full justify-center sm:justify-start italic"><FaCode className="mx-2 w-6 h-6" /> Software Developer</span>
                        <h1 className="font-bold pt-3 uppercase">
                            John Jairo Riaño Martinez
                        </h1>
                        <p className="text-justify text-sm">Soy estudiante de Ingeniería de Sistemas en la Universidad Nacional de Colombia, con experiencia en desarrollo web back-end utilizando Node.js y bases de datos no relacionales como MongoDB. También manejo tecnologías front-end como React y Next.js.
                            Mi objetivo es seguir creciendo profesionalmente, enfrentando nuevos retos y fortaleciendo mis habilidades con un enfoque analítico y orientado a soluciones.
                        </p>
                        <SocialList />
                    </div>
                    <div className="py-2"></div>
                    <div className="flex w-full justify-center items-center">
                        <ButtonIcon icon={RiUserFollowFill} label="Conectemos" style="bg-accent hover:bg-secondary text-white" />
                        {/* <div className="px-3"></div>
                        <ButtonIcon label="Copiar Email" style="bg-gray-500 hover:bg-gray-700 text-white" icon={FaRegCopy} colorIcon="white" /> */}
                    </div>
                </div>
            </div>
            <div className="relative flex-1 p-3 pl-5">
                <div className="flex flex-col items-center justify-center">
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 m-2 rounded-full shadow-md overflow-hidden">
                        <Image
                            src={basePath + '/photo.webp'}
                            fill
                            priority 
                            className="object-cover"
                            alt="Foto de John Jairo Riaño, desarrollador back-end y full stack"
                        />
                    </div>
                    <div className="flex w-full justify-end ">
                        <div className="flex align-center items-center border rounded-full shadow-sm">
                            <span className="pl-2"><FaCircle className="w-4 h-4 text-green-500" /></span>
                            <span className="px-2">Disponibilidad inmediata</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}