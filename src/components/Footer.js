import React from 'react'
import { FaFacebookF,FaTwitter,FaInstagram,FaPinterestP } from 'react-icons/fa'
import FooterStyle from '../style/Footer.styles'
import FooterList from './FooterList'


export default function Footer() {
    return (
      
        <FooterStyle>
        <div className='container'>
            <div className='col_2'>
                <FooterList
                heading="Company"
                items={[
                    {
                        title:'About Pokait',
                        path:'/',
                        type:'Link',
                    },
                    {
                        title:'Need Help?',
                        path:'/about2',
                        type:'Link',
                    },
                    {
                        title:'Terms Of Use',
                        path:'/projects2',
                        type:'Link',
                    },
                    
                ]}
                
                />
            </div>
            <div className='col_3'>
                <FooterList 
                heading='Contact Us'
                items={[
                    {
                        title:'Kallyanpur,Dhaka,Bangladesh',
                        
                    },
                    {
                        title:'asifdhrubo.cse@gmail.com'
                    },
                    {
                        title:'+8801616882641'
                    }
                ]}
                />
            </div>
            <div className='col_4'>
                <h1 className='followtitle'>Follow Us</h1>
                 <a className='facebook' href="https://www.facebook.com/" target="_blank" rel="noreferrer" alt=''>
                <FaFacebookF />
                </a>
                <a className='twitter' href="https://twitter.com/" target="_blank" rel="noreferrer" alt=''>
                <FaTwitter />
                </a>
                <a className='instagram' href="https://www.instagram.com/" target="_blank" rel="noreferrer" alt=''>
                <FaInstagram /> 
                </a>
                <a className='pinterest' href="https://www.pinterest.com/" target="_blank" rel="noreferrer" alt=''>
                <FaPinterestP />
                </a>
            </div>

           </div>
        </FooterStyle>
)
}