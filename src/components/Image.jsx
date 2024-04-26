import React from 'react'

// ({...props}) => {...code //}

const Image = ({
    title, src, srcSet, picture, className, href, ...props
}) => {
    const HTMLTag = href ? "a" : "div";

    return (
        <HTMLTag className={className} {...props}>
            <picture {...picture}>
                <source srcSet={srcSet} />
                <img src={src} alt={title} title={title} />
            </picture>
        </HTMLTag>
    )
}

export default Image