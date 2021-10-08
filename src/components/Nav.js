import React,{useState} from 'react'
import { NavLink} from 'react-router-dom'
import {MdMenu,MdClose} from 'react-icons/md'
import NavStyle from '../style/Nav,styles'
import logo2 from '../assets/images/logo3.png'



export default function Nav() {
    const [showNav,setShowNav]= useState(false)
    return (
        <NavStyle>
          <div className='navList'>
           <div className='logoImage' >
        
           <NavLink to='/'>
                <img src={logo2} alt='Hotel' />
            </NavLink>
            </div>
          
            <div className='NavMobileOpen'
             onClick={()=>setShowNav(!showNav)}
            >
                <MdMenu />
            </div>
            
            <ul className={!showNav ? 'NavList hideItem':' NavList'}>
                <div className='NavMobileClose'
                onClick={()=>setShowNav(!showNav)}
                
                >
                    <MdClose />
                </div>
                <li 
                onClick={()=>setShowNav(!showNav)}
                >
                    <NavLink to='/' exact>Home</NavLink>
                </li>
                <li  onClick={()=>setShowNav(!showNav)}>
                    <NavLink to='/rooms'>Rooms</NavLink>
                </li>
                <li onClick={()=>setShowNav(!showNav)}>
                        <NavLink to='/services'>Services</NavLink>
                    </li>
                    <li onClick={()=>setShowNav(!showNav)}>
                        <NavLink to='/about'>About</NavLink>
                    </li>
              
            </ul>
            </div>
        </NavStyle>
    )
}