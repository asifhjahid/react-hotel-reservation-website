import React from 'react'
import { Link } from 'react-router-dom'
import ButtonStyle from '../style/Button.styles'

export default function Button({link,text}) {
    return (
        <ButtonStyle>
             <Link to={link} className='btn-primary'>{text}</Link>
            
        </ButtonStyle>
    )
}
