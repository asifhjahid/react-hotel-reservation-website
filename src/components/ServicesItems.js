import { logDOM } from '@testing-library/react'
import React from 'react'
import ServicesItemStyle from '../style/ServicesItems.styles'

export default function ServicesItems({title,image,subTitle,servicesList}) {
    // console.log(servicesList);
    return (
        <ServicesItemStyle>
            <div className='imgList'>
            <h1>{title}</h1>
            <img src={image} alt='' />
            </div>
           <div className='itemList'>
               <h3>{subTitle}</h3>
                <ul>
                  {servicesList.map((item,index)=>(
                      <li key={index}>{item}</li>
                  ))}
                </ul>
            </div>
        </ServicesItemStyle>
    )
}
