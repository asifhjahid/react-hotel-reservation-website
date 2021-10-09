import React from 'react'
import { Link } from 'react-router-dom'
import HomeStyle from '../../style/Home.styles'
import Banner from '../Banner'
import Hero from '../Hero'
import Services from './Services'

export default function Home() {
    return (
        <HomeStyle>
            <Hero>
                <Banner 
                    title='luxurious rooms'
                    subtitle='deluxe rooms starting at $299'
                    >
                    <Link to='/rooms' className='btn-primary'>
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
        </HomeStyle>
    )
}
