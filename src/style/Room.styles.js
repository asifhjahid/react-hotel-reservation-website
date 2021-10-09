import styled from 'styled-components'

const RoomStyle = styled.div`

    .room {
        box-shadow: var(--lightShadow);
        transition: var(--mainTransition);
        }
    .room:hover {
    box-shadow: var(--darkShadow);
    }
    .img-container {
        position: relative;
    }
    .img-container img {
        width: 100%;
        display: block;
        transition: var(--mainTransition);
        z-index: 1;
    }
    .price-top {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        color: var(--mainWhite);
        padding: 0.3rem 0.6rem 0.5rem;
        border-bottom-right-radius: 1rem;
        font-size: 0.5rem;
        text-align: center;
        transition: var(--mainTransition);
        width: 100px;
        height: 40px;
    }
    .price-top h6 {
        z-index: 5000;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: var(--mainSpacing);
}
.room-link {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: scale(0);
  transition: all 0.3s linear;
  z-index: 5000;
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
.img-container:hover {
  background: rgba(0, 0, 0, 0.8);
}
.img-container:hover img {
  opacity: 0.3;
}
.img-container:hover .price-top {
  opacity: 0;
}
.img-container:hover .room-link {
  transform: translate(-50%, -50%) scale(1);
}
.room-info {
  background: var(--darkGrey);
  text-transform: capitalize;
  padding: 0.5rem 0;
  text-align: center;
  font-weight: 700;
  letter-spacing: var(--mainSpacing);
}


`

export default RoomStyle;