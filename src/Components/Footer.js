import React from 'react';
import style from '../Components/Footer.module.css';
import FooterDesc from './FooterDesc';
import MenuFooter from './MenuFooter';

const Footer = () => {
  return (
    <div className={style.footer}>
      <MenuFooter />
    </div>
  );
};

export default Footer;
