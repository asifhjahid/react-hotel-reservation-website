import styled from 'styled-components'

const NavStyle = styled.div`
        position:fixed;
        z-index: 1;
        top:0;
        left:0;
        width:100%;
        height: 13vh;
        /* padding: .2rem 0; */
        /* background-color:#0A0A0A; */
        background-color: #e0030b;
      
        .navList{
            display: flex;
            flex-direction: row;
        }
       .logoImage{
           width: 35%;
           height: 14vh;
           
       }
        img{
           width: 100%;
           height: 16vh;
           cursor: pointer;
           transition: all .3s ease-in-out;
           

        }
        img:hover{
            transform: rotate(-360deg);
            
        }
        h1{
            text-align: left;
            margin-left: 35px;
            position: relative;
            font-size:2.6rem;
            top: 5px;
            cursor: pointer;
            width: 200px;
            color: #ffffff;
        }
        
        
        ul{
            text-align:right;
            margin: auto;
            width: 100%;
            margin-right: 11px;
            
            li{ 
                position: relative;
                display: inline-block;
                /* border-radius:10px; */
                transition: all .2s ease-in-out;
                top: 5px;
                &:hover{
                    /* background-color:#215E21; */
                    transform: scale(1.1);
                   
                    
                    
                }
            }
            a{
                display: inline-block;
                font-family: 'RobotoMono Regular';
                padding: 1rem;
                font-size: 1.4rem;
                font-family: sans-serif;
                color: #ffffff;
                outline: none;
                text-decoration: none;
                transition: all .2s ease-in-out;
                &:hover{
                    transform: scale(1.2);
                    
                   
                }
            }
            .active{
                color: #1DA237;
            }
        }
        .NavMobileOpen{
            width: 100px;
            height: 50px;
            align-items: right;
            /* padding: 1rem 2rem; */
            color: #ffffff;
            display: none;
            outline: none;
           
        }
        .NavMobileClose{
            display: none;
        }
        @media only screen and (max-width: 768px){
            
            img{
                position: relative;
                top: -25%;
            }
            .NavMobileOpen{
                position: absolute;
                left: 20%;
                top: 47%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                svg{
                    fill: red;
                    font-size: 1.8rem;
                    background-color: #fff;
            }
               
               
            }
            
            .NavList{
                padding: 0 2rem;
                width: 80%;
                max-width: 250px;
                background-color:  #e0030b;
                border-radius: 14px;
                position: absolute;
                top: 45px;
                
                
                .NavMobileClose{
                display: block;
                width: 2.6rem;
                margin:0 0 0 auto;
                cursor: pointer;

                svg{
                    fill: red;
                    font-size: 1.8rem;
                    background-color: #fff;
                    
                }
    
                }
            li{
                display: block;
                text-align: left;
                
            }
            }
            .hideItem{
                display: none;
            }
        }
`

export default NavStyle;