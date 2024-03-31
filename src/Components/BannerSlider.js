import React from 'react';
import style from './BannerSlide.module.css';

// import pic_main from '../Assets/alexander-smagin-B_F3hj-Z_Sc-unsplash_1.png';
import SliderOne from './Sliders/SliderOne';
import SliderTwo from './Sliders/SliderTwo';
import SliderThree from './Sliders/SliderThree';

const BannerSlider = () => {
  return (
    <div className={style.banner_slider}>
      <SliderOne />
      <SliderTwo />
      <SliderThree />
    </div>
  );
};

export default BannerSlider;
