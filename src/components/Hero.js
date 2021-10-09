import React from 'react'
import HomeImage from '../assets/images/homeImage.jpg'
import HeroStyle from '../style/Hero.styles'

export default function Hero({children}) {
    return (
        <HeroStyle className='homeImage'>
            <img src={HomeImage} alt='HomeImage'/>
        
        <div>
            {children}
        </div>
        </HeroStyle>
    )
}
