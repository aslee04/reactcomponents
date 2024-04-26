const Title = ({
    level = 1,
    className,
    children,
    ...props
}) => {
    const HTMLTag = "h" + level;

    return (
        <HTMLTag className={className} {...props}>
            {children}
        </HTMLTag>
    )
}

export const Paragraph = ({
    className, children, ...props
}) => {
    return <p className={className} {...props}> {children} </p>
}



export const Text = ({ className, children, ...props }) => {
    return <span className={className} {...props}> {children} </span>
}

export default Title;