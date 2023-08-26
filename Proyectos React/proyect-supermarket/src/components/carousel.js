import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagen1 from './carrousel1.png'
import imagen2 from './carrousel2.png'
import imagen3 from './carrousel3.png'
import imagen4 from './carrousel4.png'
import Slider from 'react-slick';
import './carousel.css';
import { Container } from "react-bootstrap";

function Carrusel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Container className='carousel'>
      <Slider {...settings}>
        <div className="imagenes-c"><img className='imagenes' src={imagen1} /><span className="c-names">VEGETABLES</span></div>
        <div className="imagenes-c"><img className='imagenes' src={imagen2} /><span className="c-names">DRINK FRUITS</span></div>
        <div className="imagenes-c"><img className='imagenes' src={imagen3} /><span className="c-names">FRESH MEAT</span></div>
        <div className="imagenes-c"><img className='imagenes' src={imagen4} /><span className="c-names">FRESH FRUIT</span></div>
        <div className="imagenes-c"><img className='imagenes' src={imagen1} /><span className="c-names">VEGETABLES</span></div>
        <div className="imagenes-c"><img className='imagenes' src={imagen2} /><span className="c-names">DRINK FRUITS</span></div>
        <div className="imagenes-c"><img className='imagenes' src={imagen3} /><span className="c-names">FRESH MEAT</span></div>
        <div className="imagenes-c"><img className='imagenes' src={imagen4} /><span className="c-names">FRESH FRUIT</span></div>
      </Slider>
    </Container>
  );
}
export default Carrusel;