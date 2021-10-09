import styled from "styled-components";

const ServicesStyle =styled.div`

        margin-top: 30px;

       .services{
        padding: 5rem 0;
        background: var(--darkGrey);
        text-align: center;
        width: 90vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 50px;

       }
`

export default ServicesStyle;