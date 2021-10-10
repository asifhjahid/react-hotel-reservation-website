import React from 'react'
import Room from './Room'
import {RoomSearchStyle,RoomListStyle} from '../style/RoomsList.styles'

export default function RoomsList({rooms}) {
    if(rooms.length === 0){
        return(
            <RoomSearchStyle>
                <h3>Unfortunately no rooms matched your search parameters</h3>
            </RoomSearchStyle>
        )
    }
    return (
        <RoomListStyle>
            <div className='rooms-list-center'>
                {rooms.map((item)=>{
                    return(
                        <Room room={item} key={item.id} />
                    )
                })}
            </div>
            
        </RoomListStyle>
    )
}
