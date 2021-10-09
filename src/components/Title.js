import React from 'react'
import TitleStyle from '../style/Title.styles'

export default function Title({title}) {
    return (
        <TitleStyle>
            <h2>{title}</h2>
            <hr />
        </TitleStyle>
    )
}
