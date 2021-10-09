import React, { Component } from 'react'
import { RoomContext } from '../context/Context'
import FeaturedRoomStyle from '../style/FeaturedRoom.styles';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeaturedRoom extends Component {
    static contextType = RoomContext;
    render() {
        let {loading,featuredRooms:rooms} = this.context;
        console.log(loading);
        // console.log(rooms);
        // console.log(value);
        rooms = rooms.map(room=>{
            return <Room key={room.id} room={room} />
        })
        return (
            <FeaturedRoomStyle className='featured-rooms'>
                <Title title='featured rooms' />
                <div className='featured-rooms-center'>
                    {loading ? <Loading /> : rooms}
                </div>
                
            </FeaturedRoomStyle>
        )
    }
}
