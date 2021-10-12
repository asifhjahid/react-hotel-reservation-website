import styled from "styled-components";

const FacilitiesStyle =styled.div`

        margin-top: 30px;
        width: 98%;
        margin: 0 auto;

       .services{
        display: flex;
        /* flex-direction: column; */
        background: var(--darkGrey);
        
       }
       @media only screen and (max-width:990px){
               .services{
                       display: block;
               }
       }
       
`

export default FacilitiesStyle;