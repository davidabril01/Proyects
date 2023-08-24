import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagen1 from './images/felipe-correia-Z3r7p3DqXeM-unsplash.jpg'
import imagen2 from './images/jason-leung-hsS6jTr-pns-unsplash.jpg'
import imagen3 from './images/soroush-karimi-crjPrExvShc-unsplash.jpg'
import imagen4 from './images/tamanna-rumee-FtJEat_S7Q4-unsplash.jpg'
import Slider from 'react-slick';
import './carousel.css';

function Carousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <div className='carousel'>
      <Slider {...settings}>
        <img className='imagenes' src={imagen1} />
        <img className='imagenes' src={imagen2} />
        <img className='imagenes' src={imagen3} />
        <img className='imagenes' src={imagen4} />
      </Slider>
    </div>
  );
}
export default Carousel;