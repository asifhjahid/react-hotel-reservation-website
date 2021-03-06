import React from 'react'
// import { Link } from 'react-router-dom'
import HomeStyle from '../../style/Home.styles'
import Banner from '../Banner'
import Button from '../Button'
import FeaturedRoom from '../FeaturedRoom'
import Hero from '../Hero'
import Map from '../Map'
import Contact from './Contact'
import Facilities from './Facilities'


export default function Home() {
    return (
        <HomeStyle>
            <Hero>
                <Banner 
                    title='luxurious rooms'
                    subtitle='deluxe rooms starting at $399'
                    >
                    <Button link='/rooms' text='Our Rooms' />
                   
                </Banner>
             </Hero>
            <FeaturedRoom />
            
           <Facilities />

        </HomeStyle>
    )
}
