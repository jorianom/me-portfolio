import Image from "next/image"

type CardProjectProps = {
    index: number,
    total: number,
    image?: string
}
export const CardProject = ({ index, total, image }: CardProjectProps) => {
    let isOdd = index % 2 != 0;
    let isFirst = index == 1;
    let isLast = index == total;

    const styleCardImage = `border p-1 aspect-square ${isFirst ? 'rounded-tr-lg' : ''} ${isLast ? 'rounded-br-lg' : ''}`
    const styleCardDiv = `flex w-full items-end border aspect-square ${isFirst ? 'rounded-tl-lg' : ''} ${isLast ? 'rounded-bl-lg' : ''}`
    return (
        <>{
            isOdd ?
                <><div className={styleCardDiv}>
                    <h1 className="p-2 text-6xl text-bold">{index < 10 ? '0' + index : index}</h1>
                    <span className="px-2">Project Name</span>
                </div>
                    <div className={styleCardImage}>
                        <Image
                            className="rounded w-full h-full"
                            src={'/project.jpg'}
                            width={200}
                            height={200}
                            alt="Profile"
                            objectFit="cover"
                        />
                    </div></> :
                <>
                    <div className={styleCardImage}>
                        <Image
                            className="rounded w-full h-full"
                            src={'/project.jpg'}
                            width={200}
                            height={200}
                            alt="Profile"
                            objectFit="cover"
                        />
                    </div>
                    <div className={styleCardDiv}>
                        <h1 className="p-2 text-6xl text-bold">{index < 10 ? '0' + index : index}</h1>
                        <span className="px-2">Project Name</span>
                    </div>
                </>
        }
        </>
    )
}