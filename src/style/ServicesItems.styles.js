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
        li{
                text-align: start;
        }

        /* h2 {
        letter-spacing: var(--mainSpacing);
        
        }
        p {
        width: 80%;
        margin: 0 auto;
       } */
       /* @media screen and (min-width: 992px) {
       
            width: 95vw;
            max-width: 1170px;

       } */

       /* @media screen and (min-width: 1200px)  */
         /* p {
            width: 100%;
            }
        }    */
      
`

export default ServicesItemStyle;