import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';
import './slider.css';
import pic_3 from '../../Assets/Mask_group(2).png';
import paz_3 from '../../Assets/third_paz.png';

const SliderThree = () => {
  const [playSpeed, setPlaySpeed] = useState(6000);

  useEffect(() => {
    const timer = setInterval(() => {
      setPlaySpeed(8000);
    }, 6000);
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
    <div className="slide_three">
      <Slider {...settings}>
        <div>
          <img src={pic_3} alt="uno" />
        </div>
        <div>
          <img src={paz_3} alt="uno" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderThree;
