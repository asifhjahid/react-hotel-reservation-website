import React,{useContext} from 'react'
import { RoomContext } from '../context/Context'
import Title from './Title'


const getUniqueValue = (items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    // console.log(context);
    const{
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        handleChange,
    } = context;


    let types = getUniqueValue(rooms,'type');
    types=['all',...types]
    types=types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    let person= getUniqueValue (rooms,'capacity');
    person=person.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <div className='filter-container'>
            <Title title='Search Rooms' />
            <form className='filter-form'>
                <div className='form-group'>
                    <label htmlFor='type'>Room Type</label>
                    <select 
                    name='type'
                    id='type'
                    value={type}
                    onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='capacity'>Guests</label>
                    <select 
                    name='capacity'
                    id='capacity'
                    value={capacity}
                    onChange={handleChange}
                    >
                        {person}
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='price'>Room price ${price}</label>
                 
                    <input 
                    className='form-control'
                    name='price'
                    type='range'
                    id='price'
                    value={price}
                    min={minPrice}
                    max={maxPrice}
                    onChange={handleChange}

                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='price'>Room size</label>
                    <div className='size-inputs'>
                    <input 
                    className='size-input'
                    name='minSize'
                    id='size'
                    value={minSize}
                    onChange={handleChange}
                    />
                    <input 
                    className='size-input'
                    name='maxSize'
                    id='size'
                    value={maxSize}
                    onChange={handleChange}
                    />
                    </div>
                 
                    
                </div>
                <div className='form-group'>
                    <div className='single-extra'>
                        <input
                        name='breakfast'
                        type='checkbox'
                        id='breakfast'
                        checked={breakfast}
                        onChange={handleChange}
                        />

                    <label htmlFor='breakfast'>Breakfast</label>
                    </div>
                </div>
            </form>
        </div>
    )
}
