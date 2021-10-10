import React, { Component } from 'react'
import { RoomContext } from '../../context/Context';
import ErrorRoom from '../ErrorRoom';
import Banner from '../Banner'
import Button from '../Button';
import {SingleRoomStyle,SingleRoomImageStyle,SingleRoomInfoStyle,SingleRoomExtraStyle } from '../../style/SingleRoom.styles';


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
        const{images,name,description,capacity,size,price,extras,breakfast,pets} = room;
        const [MainImage,...imageList] = images;
        return (
            <div>
                <SingleRoomStyle image={images[0]}>

                <Banner title={`${name} room`}>
                    <Button link='/rooms' text='Back to Rooms' />
                </Banner>
                </SingleRoomStyle>
                <SingleRoomImageStyle>
                    <div className='single-room-images'>
                        {imageList.map((imageItem,index)=>(
                            <img src={imageItem} alt={name} key={index} />
                        ))}
                    </div>
                </SingleRoomImageStyle>
                <SingleRoomInfoStyle>
                    <div className='desc'>
                        <h3>details</h3>
                        <p>{description}</p>
                    </div>
                    <div className='info'>
                        <h3>info</h3>
                        <p>price: ${price}</p>
                        <p>size: ${size} SQFT</p>
                        <h3>max capacity : {capacity >1 ? `${capacity} people`: `${capacity} person`}</h3>
                        <h3>{breakfast && "free breakfast included"}</h3>
                    </div>
                </SingleRoomInfoStyle>
                <SingleRoomExtraStyle>
                    <h3>Extras </h3>
                    <ul className='extras'>
                        {extras.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </SingleRoomExtraStyle>
            </div>
        )
    }
}
