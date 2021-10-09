import React from 'react'
// import loadingImage from '../assets/images/gif/loading-arrow.gif'
import loadingImage from '../assets/images/gif/loading.gif'
import LoadingStyle from '../style/Loading.styles'

export default function Loading() {
    return (
        <LoadingStyle>
            <h3>Rooms Data</h3>
            <img src={loadingImage} alt='' />
        </LoadingStyle>
    )
}
