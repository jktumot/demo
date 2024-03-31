import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';
import './slider.css';
import pic_2 from '../../Assets/Mask_group(1).png';
import paz_2 from '../../Assets/second_paz.png';
import paz_2_2 from '../../Assets/second_paz_2.png';

const SliderTwo = () => {
  const [playSpeed, setPlaySpeed] = useState(4000);

  useEffect(() => {
    const timer = setInterval(() => {
      setPlaySpeed(8000);
    }, 4000);
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
    <div className="slide_two">
      <Slider {...settings}>
        <div>
          <img src={pic_2} alt="uno" />
        </div>
        <div>
          <img src={paz_2_2} alt="uno" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderTwo;
