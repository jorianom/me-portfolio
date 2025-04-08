import Image from "next/image"
import { FaRegCopy } from "react-icons/fa"

export const ProfileCard = () => {

    return (
        <div className="flex border rounded-md">
            <div className="flex-1 p-2 pl-5">
                <span className="italic">Developer</span>
                <h1 className="font-bold pt-6">
                    Card
                </h1>
                <p className="text-sm max-w-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem, amet accusantium voluptate necessitatibus quod tempore.
                </p>
                <div className="py-3"></div>
                <div className="flex items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-full font-bold py-2 px-4 cursor-pointer">
                        Conectemos
                    </button>
                    <div className="px-3"></div>
                    <div className="p-1 bg-gray-500 rounded-lg">
                        <span className="text-gray-900"> Copiar Email</span>
                        <button className="ml-2 cursor-pointer"><FaRegCopy color="white" /></button>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex align-center justify-end">
                    <Image
                        className="max-w-sm rounded-full"
                        src={'/profile.png'}
                        width={200}
                        height={200}
                        alt="Profile"
                        // fill
                    />
                </div>
            </div>
        </div>
    )
}