import React, { Component } from 'react'
import { RoomContext } from '../../context/Context';
import ErrorRoom from '../ErrorRoom';
import Banner from '../Banner'
import Button from '../Button';
import SingleRoomStyle from '../../style/SingleRoom.styles';


export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state={
            slug:this.props.match.params.slug,
        }
    }
    static contextType = RoomContext;
    
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return <div>
                <ErrorRoom />
            </div>
           
        }
        const{name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        return (
            <SingleRoomStyle img={images[0]}>

                <Banner title={`${name} room`}>
                    <Button link='/rooms' text='Back to Rooms' />
                </Banner>
            </SingleRoomStyle>
        )
    }
}
