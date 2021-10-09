import React from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import ServicesStyle from '../../style/Services.styles';
import ServicesItems from '../ServicesItems'
import Title from '../Title'


export default function Services() {
    return (
        <ServicesStyle>
            <Title title='Services' />
            <div className='services'>
            <ServicesItems
            icon = {<FaCocktail />}
            title='Free Cocktails'
            desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?'
            
            />
            <ServicesItems
            icon = {<FaHiking />}
            title="Endless Hiking"
            desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?'
            
            />
            <ServicesItems
            icon = {<FaShuttleVan />}
            title="Free Shuttle"
            desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?'
            
            />
            <ServicesItems
            icon = {<FaBeer />}
            title="Strongest Beer"
            desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?'
            
            />
            </div>

        </ServicesStyle>
    )
}
