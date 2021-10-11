import styled from 'styled-components'

const FooterStyle= styled.div`
        margin-top: 10rem;
        /* background-color: #1E1E1E; */
        background-color: #e0030b;
        .container{
            display: flex;
            gap: 4rem;
        }
        .col_2,.col_3,.col_4{
            flex: 1;
            margin-left: 20px;
        }
        
        h1{
            text-transform: uppercase;
            font-size: 1.6rem;
        }
        p{
            color: #BCB4B4;
            font-size: 1.4rem;
            font-family: sans-serif;
            line-height: 2rem;
        }
        
        .followtitle{
            margin: 1.5rem 0 1.5rem .4rem;
            color: #ffffff;
            font-family: sans-serif;
        }
        .facebook{
            svg{
                    
                    fill: #fff;
                    background-color: #4267B2;
                    border-radius: 50%;
                    padding: 3px;
                }
            
        }
        .twitter{
            svg{
                fill: #fff;
                background-color: #1DA1F2;
                border-radius: 50%;
                padding: 3px;
            }
        }
        .instagram{
            svg{
                fill:#fff ;
                background-color:  #8a3ab9;
                border-radius: 50%;
                padding: 3px;
            }
            
        }
        .pinterest{
            svg{
                fill: #fff;
                background-color:  #c8232c;
                border-radius: 50%;
                padding: 3px;
                
            }
        }
        
        a{
            
            
            svg{
                
                width: 2rem;
                height: 2rem;
                margin-right: 1rem;
               
                
              
               
            }
        }
        @media only screen and (max-width:768px){
            .container{
                flex-direction: column;
                text-align: center;
                gap: 0;
                & >div{
                    margin-top: 4rem;
                }
            }
        }
`

export default FooterStyle;