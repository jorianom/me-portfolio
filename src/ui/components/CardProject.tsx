import Image from "next/image"
import { basePath } from "../../../next.config"

type Project = {
    title: string,
    description: string,
}

type CardProjectProps = {
    index: number,
    total: number,
    item: Project,
    image?: string
}
export const CardProject = ({ index, total, item }: CardProjectProps) => {
    const isOdd = index % 2 != 0;
    const isFirst = index == 1;
    const isLast = index == total;

    const styleCardImage = `relative border-secondary border-2 border-l-0 border-b-0  aspect-square ${isFirst ? 'border-secondary border-y-0 rounded-tr-sm' : ''} ${isLast ? 'rounded-lr-sm' : ''}`
    const styleCardDiv = `relative border-secondary relative flex w-full items-end border-2 border-l-0 border-b-0 aspect-square ${isFirst ? 'border-secondary border-y-0 rounded-tl-sm' : ''} ${isLast ? 'rounded-bl-sm' : ''}`
    return (
        <>{
            isOdd ?
                <>
                    <div className={styleCardDiv}>
                        <h1 className="left-0 text-6xl text-bold">{index < 10 ? '0' + index : index}</h1>
                        <span className="px-2 font-bold">{item.title}</span>
                        <span className="absolute top-0 left-0 text-left p-2 max-h-2/3 text-md sm:text-md text-ellipsis overflow-hidden">{item.description}</span>
                    </div>
                    <div className={styleCardImage}>
                        <Image
                            className="w-full h-full"
                            src={basePath + '/project_' + index + '.webp'}
                            // width={200}
                            // height={200}
                            alt="Proyectos Portafolio"
                            fill
                        />
                    </div>
                </> :
                <>
                    <div className={styleCardImage}>
                        <Image
                            className="w-full h-full"
                            src={basePath + '/project_' + index + '.webp'}
                            // width={200}
                            // height={200}
                            alt="Proyectos Portafolio"
                            fill
                        />
                    </div>
                    <div className={styleCardDiv}>
                        <h1 className="left-0 text-6xl text-bold">{index < 10 ? '0' + index : index}</h1>
                        <span className="px-2 font-bold">{item.title}</span>
                        <span className="absolute top-0 left-0 text-left p-2 max-h-2/3 text-md sm:text-md text-ellipsis overflow-hidden">{item.description}</span>
                    </div>
                </>
        }
        </>
    )
}