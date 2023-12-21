import React from 'react'
import { Carousel } from 'react-bootstrap';
import Carrusel1 from "/imagenes/Carrousel/carrousel-1.png"
import Carrusel2 from "/imagenes/Carrousel/carrousel-2.png"
import Carrusel3 from "/imagenes/Carrousel/carrousel-3.png"



export const Carrousel = () => {
  return (
   

<Carousel>
      <Carousel.Item>
        <img className="d-block custom-carousel-image w-100"
          src={Carrusel1}
          alt="imagen carrusel 1"
          style={{ maxHeight: '450px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block custom-carousel-image w-100"
          src={Carrusel2}
          alt="imagen carrusel 2"
          style={{ maxHeight: '450px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block custom-carousel-image w-100"
          src={Carrusel3}
          alt="imagen carrusel 3"
          style={{ maxHeight: '450px' }}
        />
      </Carousel.Item>
      </Carousel>


  
  )
}



