import styled from 'styled-components'

const RoomsStyle =styled.div`

 img{
    /* min-height: calc(100vh - 66px); */
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 }
  

.roomsHero {
  /* background-image: url("./images/room-2.jpeg"); */
  min-height: 60vh;
}
.btn-primary {
  display: inline-block;
  text-decoration: none;
  letter-spacing: var(--mainSpacing);
  color: var(--mainBlack);
  background: var(--primaryColor);
  padding: 0.4rem 0.9rem;
  border: 3px solid var(--primaryColor);
  transition: var(--mainTransition);
  text-transform: uppercase;
  cursor: pointer;
}
.btn-primary:hover {
  background: transparent;
  color: var(--primaryColor);
}

`

export default RoomsStyle;