import styled from 'styled-components'

const ButtonStyle =styled.div`

.btn-primary {
  display: inline-block;
  text-decoration: none;
  letter-spacing: var(--mainSpacing);
  color: var(--mainBlack);
  /* color: #fff; */
  background: var(--primaryColor);
  padding: 0.4rem 0.9rem;
  border: 3px solid var(--primaryColor);
  transition: var(--mainTransition);
  /* text-transform: uppercase; */
  cursor: pointer;
  font-size: 1.2rem;
}

.btn-primary:hover {
  background: transparent;
  color: var(--primaryColor);
}

@media only screen and (max-width:510px){
  
.btn-primary {
  padding: 0.4rem 0.9rem;
  font-size: 1rem;
 
}
}
@media only screen and (max-width:430px){
  
  .btn-primary {
    padding: 0.3rem 0.6rem;
    font-size: .8rem;
   
  }
  }
  @media only screen and (max-width:430px){
  
  .btn-primary {
    padding: 0.2rem 0.3rem;
    font-size: .6rem;
   
  }
  }
`

export default ButtonStyle;