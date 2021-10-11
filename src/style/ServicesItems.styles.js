import styled from "styled-components";

const ServicesItemStyle =styled.div`
        
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 10rem;
        .imgList{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                flex-basis: 40%;
                margin-left: 3rem;
               
        }
        img{
                width: 100%;
                height: 100%;
                margin-bottom: 2rem;
        }
        .itemList{
                display: flex;
                flex-direction: column;
                flex-basis: 60%;
                justify-content: flex-start;
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