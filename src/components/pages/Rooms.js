import React from 'react'
import RomeImage from '../../assets/images/room.jpg'
import RoomsStyle from '../../style/Rooms.styles'

export default function Rooms({children}) {
    return (
        <RoomsStyle>
            <img src={RomeImage} alt='RomeImage'/>;
           <div>
            {children}
            </div>
        </RoomsStyle>
    )
}
