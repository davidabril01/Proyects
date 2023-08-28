import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagen1 from './images/carrousel1.png'
import imagen2 from './images/carrousel2.png'
import imagen3 from './images/carrousel3.png'
import imagen4 from './images/carrousel4.png'
import Slider from 'react-slick';
import './carousel.css';
import { Container } from "react-bootstrap";

function Carrusel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  return (
    <Container className='carousel'>
      <Slider {...settings}>
        <img className='imagenes' src={imagen1} />
        <img className='imagenes' src={imagen2} />
        <img className='imagenes' src={imagen3} />
        <img className='imagenes' src={imagen4} />
        <img className='imagenes' src={imagen1} />
        <img className='imagenes' src={imagen2} />
        <img className='imagenes' src={imagen3} />
        <img className='imagenes' src={imagen4} />
      </Slider>
    </Container>
  );
}
export default Carrusel;