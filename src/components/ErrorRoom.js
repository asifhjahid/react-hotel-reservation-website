import React from 'react'
import { Link } from 'react-router-dom'
import ErrorRoomStyle from '../style/ErrorRoom.styles'

export default function ErrorRoom() {
    return (
        <ErrorRoomStyle >
            <h3>No Such room could be found</h3>
            <Link to='/rooms' className='btn-primary'>
                Back to Rooms
            </Link>
        </ErrorRoomStyle>
    )
}
