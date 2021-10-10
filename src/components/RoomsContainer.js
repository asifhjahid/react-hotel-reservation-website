import React from 'react'
import { RoomConsumer } from '../context/Context'
import Loading from './Loading'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'

export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {(value)=>{
                // console.log(value);
                const {rooms,loading,setRoom,sortedRooms} = value;
                if(loading){
                    return <Loading />
                }
                return(
                    <div>
                        <RoomsFilter rooms={rooms} />
                        <RoomsList rooms={sortedRooms} setRoom={setRoom} />
                        
                     </div>
                )
            }}
        </RoomConsumer>
    )
}
