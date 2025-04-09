import Image from "next/image"

export const Projects = () => {
    return (
        <section className="pt-2 text-white">
            <div className="flex flex-col sm:flex-row justify-center align-center">
                <div className="flex w-full sm:w-1/2 justify-center">
                    <h1>Algunos Proyectos</h1>
                </div>
                <div className="w-full sm:w-1/2 grid grid-cols-2">
                    <div className="flex items-end h-48 w-48 border rounded-sm">
                        <h1 className="p-2 text-6xl text-bold">01</h1>
                        <span className="px-2">Project Name</span>
                    </div>
                    <div className="border h-48 w-48">
                        <Image
                            className=""
                            src={'/project.jpg'}
                            width={200}
                            height={200}
                            alt="Profile"
                            objectFit="cover"
                        />
                    </div>
                    <div className="border h-48 w-48">
                        <Image
                            className=""
                            src={'/project.jpg'}
                            width={200}
                            height={200}
                            alt="Profile"
                            objectFit="cover"
                        />
                    </div>
                    <div className="flex items-end h-48 w-48 border">
                        <h1 className="p-2 text-6xl text-bold">02</h1>
                        <span className="px-2">Project Name</span>
                    </div>
                    <div className="flex items-end h-48 w-48 border">
                        <h1 className="p-2 text-6xl text-bold">02</h1>
                        <span className="px-2">Project Name</span>
                    </div>
                    <div className="border h-48 w-48">
                        <Image
                            className=""
                            src={'/project.jpg'}
                            width={200}
                            height={200}
                            alt="Profile"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}