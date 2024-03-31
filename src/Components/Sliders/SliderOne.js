import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';
import './slider.css';
import pic_1 from '../../Assets/Mask_group.png';
import paz_1 from '../../Assets/first_paz.png';

const SliderOne = () => {
  const [playSpeed, setPlaySpeed] = useState(2000);

  useEffect(() => {
    const timer = setInterval(() => {
      setPlaySpeed(8000);
    }, 2000);
    return () => clearInterval(timer);
  });

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: playSpeed,
  };
  return (
    <div className="slide_one">
      <Slider {...settings}>
        <div>
          <img src={pic_1} alt="uno" />
        </div>
        <div>
          <img src={paz_1} alt="uno" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderOne;
