import React from 'react'
import ServicesItemStyle from '../style/ServicesItems.styles'

export default function ServicesItems({icon,title,desc}) {
    return (
        <ServicesItemStyle>
            <span>{icon}</span>
            <h2>{title}</h2>
            <p>{desc}</p>
        </ServicesItemStyle>
    )
}
