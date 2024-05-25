import { FC } from 'react';
import './styles.scss';
import SliderSlick from 'react-slick';
import { slides } from '@api/slides';

export const Slider: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true, 
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="Slider">
      <h2 className="Slider_title">Screenshots</h2>
      <SliderSlick {...settings}>
        {slides.map(({ src, alt }) => (
          <div className="Slider_slide">
            <img key={alt} className="Slider_image" src={src} alt={alt} />
          </div>
        ))}
      </SliderSlick>
    </section>
  );
};