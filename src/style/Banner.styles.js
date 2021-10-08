import styled from 'styled-components'

const BannerStyle =styled.div`

  display: inline-block;
  background: rgba(0, 0, 0, 0.5);
  color: var(--mainWhite);
  padding: 2rem 1rem;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);


h1 {
  font-size: 2.5rem;
}
 p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
@media screen and (min-width: 576px) {

    padding: 2rem 3rem;
  
  h1 {
    font-size: 3rem;
  }
}
@media screen and (min-width: 992px) {
   
    padding: 2rem 6rem;
  
   h1 {
    font-size: 4rem;
  }
}



`

export default BannerStyle;