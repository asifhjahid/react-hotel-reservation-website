import styled from 'styled-components'

export const SingleRoomStyle =styled.div`

        background: url(${props=> props.image});
        background-position: center;
        background-repeat: no-repeat;
        margin: 0 auto;
        min-height: 80vh;



`
export const SingleRoomImageStyle =styled.div`

       
          padding: 5rem 0 0 0;
       
        .single-room-images {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center
                }
        .single-room-images img {
        width: 36%;
        margin-left: 15px;
        display: block
        }
        .single-room-info {
        width: 80vw;
        display: grid;
        grid-template-columns: 1fr;
        margin: 2rem auto;
        }



`

export const SingleRoomInfoStyle=styled.div`

        width: 80vw;
        display: grid;
        grid-template-columns: 1fr;
        margin: 2rem auto;
        .desc,
        .info {
        margin: 1rem 0;
        }
        .desc h3 {
        text-transform: capitalize;
        letter-spacing: var(--mainSpacing);
        }
        .desc p {
        line-height: 1.5;
        }
        .info h3,
        .info h6 {
        text-transform: capitalize;
        letter-spacing: var(--mainSpacing);
        }

        .info h6 {
        font-weight: 300;
        }


`

export const SingleRoomExtraStyle = styled.div`

         
        width: 80vw;
        margin: 0 auto 3rem auto;
        
        h3 {
        text-transform: capitalize;
        letter-spacing: var(--mainSpacing);
        }
        .extras {
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
        grid-column-gap: 2rem;
        grid-row-gap: 1rem;
        }
`