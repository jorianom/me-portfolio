type ButtonIconProps = {
    label: string;
    style: string;
    icon?: React.ElementType;
    colorIcon?: string;
}

export const ButtonIcon = ({ label, icon: Icon, style, colorIcon }: ButtonIconProps) => {
    const styles = `flex items-center rounded-full font-bold py-2 px-4 cursor-pointer ${style}`
    return (
        <button className={styles}>
            <span className="text-sm lg:text-base">{label}</span>
            {
                Icon && <span className="pl-1"> <Icon color={colorIcon} /></span>
            }
        </button>
    )
}