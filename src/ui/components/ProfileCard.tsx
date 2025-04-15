import Image from "next/image"
import { FaRegCopy } from "react-icons/fa"
import { ButtonIcon } from "./buttons/ButtonIcon"
import { SocialList } from "./buttons/SocialList"
import { FaCircle, FaCode } from "react-icons/fa6"

export const ProfileCard = () => {

    return (
        <div className="flex flex-col-reverse sm:flex-row border rounded-md text-white mx-5">
            <div className="flex-1 p-3 pl-5">
                <div className="flex flex-col items-center sm:items-start">
                    <div className="">
                        <span className="flex w-full justify-center sm:justify-start italic"><FaCode className="mx-2 w-6 h-6" /> Software Developer</span>
                        <h1 className="font-bold pt-3 uppercase">
                            John Jairo Riaño Martinez
                        </h1>
                        <p className="text-justify sm:text-left text-sm max-w-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quidem, amet accusantium voluptate necessitatibus quod tempore.
                        </p>
                        <SocialList />
                    </div>
                    <div className="py-2"></div>
                    <div className="flex items-center">
                        <ButtonIcon label="Conectemos" style="bg-blue-500 hover:bg-blue-700 text-white" />
                        <div className="px-3"></div>
                        <ButtonIcon label="Copiar Email" style="bg-gray-500 hover:bg-gray-700 text-white" icon={FaRegCopy} colorIcon="white" />
                    </div>
                </div>
            </div>
            <div className="flex-1 p-3 pl-5">
                <div className="flex flex-col items-center justify-center">
                    <Image
                        className="m-2 max-w-sm rounded-full shadow-sm"
                        src={'/profile.jpg'}
                        width={200}
                        height={200}
                        alt="Profile"
                        objectFit="cover"
                    />
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