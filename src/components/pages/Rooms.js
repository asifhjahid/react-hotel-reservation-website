import React from 'react'
import { Link } from 'react-router-dom'
import RomeImage from '../../assets/images/room.jpg'
import RoomsStyle from '../../style/Rooms.styles'
import Banner from '../Banner'
import Button from '../Button'
import Footer from '../Footer'
import Hero from '../Hero'
import RoomsContainer from '../RoomsContainer'

export default function Rooms() {
    return (
        <RoomsStyle>
            <img src={RomeImage} alt='RomeImage'/>
           
            <Banner title='Our Rooms'>
                <Button link='/' text='Return Home' />
             
            </Banner>
            <RoomsContainer />
            <Footer />
        </RoomsStyle>
    )
}
