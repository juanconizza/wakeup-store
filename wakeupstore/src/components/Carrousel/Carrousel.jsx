import React from 'react'
import { Carousel } from 'react-bootstrap';


export const Carrousel = () => {
  return (
   

<Carousel>
      <Carousel.Item>
        <img
          className="d-block custom-carousel-image w-100"
          src="./imagenes/Carrousel/Rise and Connect.png"
          alt="Imagen del mundo conectado"
          style={{ maxHeight: '450px' }}
        />
        <Carousel.Caption>
          <h3>Sumate a la Revolución</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, tempora. Rem, voluptatibus vitae fugit mollitia animi optio, delectus dignissimos ab nam earum cum dolor! Ab nobis blanditiis assumenda molestias doloribus.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>


  
  )
}



