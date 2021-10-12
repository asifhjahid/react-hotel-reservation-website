import styled from 'styled-components'
import MapImg from '../assets/images/map.PNG'

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  /* width: 100%; */
  /* height: 100vh; */
  
  .container {
    position: relative;
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
  }
  .map__card {
    position: absolute;
    top: 50%;
    left: 40%;
    /* transform: translate(-50%,-50%); */
    padding: 1rem;
    background: #dfe6e9;
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
    margin: 0 auto;
  }
  .map__card__heading {
    font-size: 1.6rem;
    margin-bottom: .5rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 2rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 750px) {
    .map__card {
    position: absolute;
    top: 50%;
    left: 32%;
    padding: .8rem;
    
  }
  .map__card__heading {
    font-size: 1.6rem;
    margin-bottom: .5rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 2rem;
    text-decoration: underline;
  }
  }
  @media only screen and (max-width: 550px) {
    .map__card {
    position: absolute;
    top: 50%;
    left: 28%;
    padding: .8rem;
    }
    .map__card__heading {
    font-size: 1.5rem;
    margin-bottom: .5rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.4rem;
    margin-top: 2rem;
   
  }

  }
  @media only screen and (max-width: 480px) {
    .map__card {
    position: absolute;
    top: 50%;
    left: 20%;
    padding: .8rem;
    }
    .map__card__heading {
    font-size: 1.4rem;
    margin-bottom: .5rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.4rem;
    margin-top: 2rem;
    text-decoration: underline;
  }
  }
  @media only screen and (max-width: 400px){
    .map__card {
    position: absolute;
    top: 50%;
    left: 21%;
    padding: .6rem;
    max-width: 250px;
    }
    .map__card__heading {
    font-size: 1.4rem;
    margin-bottom: .5rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.4rem;
    margin-top: 2rem;
    text-decoration: underline;
  }
  }
  @media only screen and (max-width: 350px){
    .map__card {
    position: absolute;
    top: 50%;
    left: 15%;
    padding: .6rem;
    max-width: 250px;
    }
    .map__card__heading {
    font-size: 1.4rem;
    margin-bottom: .5rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.4rem;
    margin-top: 2rem;
    text-decoration: underline;
  }
}
`

export default MapStyles;