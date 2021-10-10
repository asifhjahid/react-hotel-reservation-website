import styled from 'styled-components'


export const RoomSearchStyle=styled.div`

    text-align: center;
    text-transform: capitalize;
    margin: 2rem 0;
    padding: 1rem;
    letter-spacing: var(--mainSpacing);


`

export const RoomListStyle = styled.div`

        padding: 5rem 0;
        .rooms-list-center {
        width: 80vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 30px;
        }

        @media screen and (min-width: 776px) {
        .rooms-list-center {
            width: 90vw;
        }
        }
        @media screen and (min-width: 992px) {
        .rooms-list-center {
            width: 95vw;
            max-width: 1170px;
        }
    }

`