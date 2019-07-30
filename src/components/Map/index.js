import React, { Component } from 'react'

export default class Map extends Component {
  render() {
    return (
      <section className="map-layout py-0">
        <div className="map-embed">
          <iframe title="mapAddress" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.522283577039!2d106.66865865803973!3d10.807898632707131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752923e5387385%3A0xea9e4fbcb97d1543!2zODYvNTYgUGjhu5UgUXVhbmcsIFBoxrDhu51uZyAyLCBUw6JuIELDrG5oLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1548650434291" width="100%" height={500} frameBorder={0} style={{border: 0}} allowFullScreen />
        </div>
      </section>
    )
  }
}
