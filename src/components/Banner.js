import React from 'react'
import BannerStyle from '../style/Banner.styles'

export default function Banner({children,title,subtitle}) {
    return (
        <BannerStyle>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {children}
        </BannerStyle>
    )
}
