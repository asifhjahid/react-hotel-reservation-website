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
  text-transform: uppercase;
  cursor: pointer;
}
.btn-primary:hover {
  background: transparent;
  color: var(--primaryColor);
}


`

export default ButtonStyle;