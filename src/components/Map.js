import React from 'react'
import MapStyles from '../style/Map.styles'

export default function Map() {
    return (
        <MapStyles>
        <div className="container">
            <div className="map__card">
            <h3 className="map__card__heading">Hotel is here</h3>
            <p>Kallyanpur,Dhaka,Bangladesh</p>
            
            <a className="map__card__link"
                href="https://www.google.com/maps/place/Kallyanpur+Bus+Stop/@23.7778845,90.3588098,17z/data=!3m1!4b1!4m5!3m4!1s0x3755c13c78093063:0x9e9b2648d118dc05!8m2!3d23.7778796!4d90.3609985"
                target="_blank"
                rel="noreferrer"
                >
            Open in google map
          </a>
        </div>
      </div>
    </MapStyles>
    )
}
