import React from 'react';
import BannerSlider from './BannerSlider';
import Menu from './Menu';
import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.header}>
      <Menu />
      <BannerSlider />
    </div>
  );
};

export default Header;
