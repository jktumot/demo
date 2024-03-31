import React from 'react';
import style from '../Components/MenuFooter.module.css';
import logo from '../Assets/bc_logo_1.png';
import search from '../Assets/frame_social/search.png';
import telegram from '../Assets/frame_social/telegram.png';
import vk from '../Assets/frame_social/VK.com-logo_1.png';
import line from '../Assets/frame_social/LineFooter.png';
import vertical_line from '../Assets/frame_social/ver_line.png';
import FooterDesc from './FooterDesc';

const MenuFooter = () => {
  return (
    <div className={style.box_header}>
      {/* <div className={style.ver_line_one}>
        <img src={vertical_line} alt="line" />
      </div> */}
      <div className={style.line_one}>
        <img src={line} alt="line" style={{ width: '1040px' }} />
      </div>
      <div className={style.menu_head}>
        <div className={style.menu_left}>
          <div className={style.menu_font}>
            <a href="/">Главная</a>
          </div>
          <div className={style.menu_font}>
            <a href="/">Об ассоциации</a>
          </div>
          <div className={style.menu_font}>
            <select>
              <option>
                <a href="/">Деятельность</a>
              </option>
              <option>
                <a href="/">Деятельность</a>
              </option>
              <option>
                <a href="/">Деятельность</a>
              </option>
              <option>
                <a href="/">Деятельность</a>
              </option>
            </select>
          </div>
          <div className={style.menu_font}>
            <a href="/">Члены АРОКР</a>
          </div>
          <div className={style.menu_font}>
            <a href="/">Новости</a>
          </div>
        </div>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.menu_right}>
          <div className={style.menu_font}>
            <a href="/">О капитальном ремонте</a>
          </div>
          <div className={style.menu_font}>
            <a href="/">Документы</a>
          </div>
          <div className={style.menu_font}>
            <a href="/">Контакты</a>
          </div>
        </div>
        <dov className={style.search_social}>
          <div className={style.social}>
            <a href="/">
              <img src={search} alt="search" />
            </a>
          </div>
          <div className={style.social}>
            <a href="/">
              <img src={telegram} alt="tg" />
            </a>
          </div>
          <div className={style.social}>
            <a href="/">
              <img src={vk} alt="vk" />
            </a>
          </div>
        </dov>
      </div>
      {/* <div className={style.ver_line_two}>
        <img src={vertical_line} alt="line" />
      </div> */}
      {/* <div className={style.line_two}>
        <img src={line} alt="line" />
      </div> */}
      <FooterDesc />
    </div>
  );
};

export default MenuFooter;
