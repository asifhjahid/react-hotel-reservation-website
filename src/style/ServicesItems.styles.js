import styled from "styled-components";

const ServicesItemStyle =styled.div`
        
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        /* gap: 10rem; */
        .imgList{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                flex-basis: 40%;
                margin-left: 3rem;
               
        }
        h1{
                font-size: 1.5rem;
                margin-top: 2rem;
        }
        img{
                width: 100%;
                height: 40vh;
                
                /* margin-bottom: 2rem; */
        }
        .itemList{
                display: flex;
                flex-direction: column;
                flex-basis: 40%;
                justify-content: center;
                align-items: flex-start;
                margin-top: 51px;
                
        }
        h3{
                font-size: 1.3rem;
        }
        li{
                text-align: start;
                font-size: 1rem;
        }

        @media only screen and (max-width:550px){
                .imgList{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                flex-basis: 40%;
                margin-left: 3rem;
               
        }
        h1{
                font-size: 1.3rem;
                margin-top: 2rem;
        }
        img{
                width: 100%;
                height: 40vh;
                /* margin-bottom: 2rem; */
        }
        .itemList{
                display: flex;
                flex-direction: column;
                flex-basis: 40%;
                justify-content: center;
                align-items: flex-start;
                margin-top: 51px;
                
        }
        li{
                font-size: 1rem;
        }    
        }

        @media only screen and (max-width:510px){
                /* display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center; */
                display: block;

                .imgList{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-basis: 100%;
                /* margin-left: 3rem; */
               
        }
        h1{
                font-size: 1.6rem;
                margin: 2rem 0 1rem 0;
        }
        .imgDiv{
               width:89% ;
        }
        img{
                width: 89%;
                height: 40vh;
               
        }
        .itemList{
                display: flex;
                flex-direction: column;
                flex-basis: 100%;
                justify-content: start;
                align-items: flex-start;
                margin: 11px 0 0 88px;
                
                
        }
        li{
                font-size: .9rem;
        }
        h3{
                font-size: 1.2rem;
        }    
        }
      
`

export default ServicesItemStyle;