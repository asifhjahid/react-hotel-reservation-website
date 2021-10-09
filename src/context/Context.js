import React, { Component } from 'react'
import roomItems from '../assets/data/data'
const RoomContext = React.createContext();

class RoomProvider extends Component{
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    };

//get Data
componentDidMount(){
    let rooms = this.formatData(roomItems);
    // console.log(rooms);
    let featuredRooms = rooms.filter(room=> room.featured===true);
    this.setState({
        rooms,
        sortedRooms:rooms,
        featuredRooms,
        loading:false
    })
}

formatData(roomItems){
    let tempItems = roomItems.map(item=>{
        let id = item.sys.id
        let images = item.fields.images.map(image=>
            image.fields.file.url
        )
        let room ={...item.fields,images,id};
        return room;
    });
    return tempItems;
}

    render(){
        return(

            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export{RoomContext,RoomProvider,RoomConsumer}