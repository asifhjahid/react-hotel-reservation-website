import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../Banner'
import Hero from '../Hero'
import ErrorStyle from '../../style/Error.styles'

export default function Error() {
    return (
        <ErrorStyle>
            <Hero>
                <Banner 
                title='404'
                subtitle='page not found'
                >
                <Link to='/' className='btn-primary'>
                Return Home
                </Link>

                </Banner>
            </Hero>
        </ErrorStyle>
    )
}
