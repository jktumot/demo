import React from 'react';
import style from './FooterDesc.module.css';
import phone from '../Assets/frame_social/ph_phone-fill.png';
import location from '../Assets/frame_social/location_on.png';
import mail from '../Assets/frame_social/ic_baseline-email.png';

const FooterDesc = () => {
  return (
    <div className={style.footer_desc}>
      <div className={style.block_1}>
        <div className={style.main_desc}>
          <h3>АРОКР</h3>
          <p>
            Фонд капитального ремонта предоставляет различные виды поддержки,
            включая финансовую помощь, консультациии сопровождение процесса
            ремонта.{' '}
          </p>
        </div>
        <div className={style.confidenc}>
          <a href="/">Политика конфиденциальности</a>
        </div>
      </div>
      <div className={style.contacts}>
        <h3>Контакты</h3>
        <div className={style.contact__}>
          <img src={phone} alt="phone" />
          <p>+7 (906) 042-87-30</p>
        </div>
        <div className={style.contact__}>
          <img src={location} alt="location" />
          <p>
            119435, г. Москва, ул. Малая Пироговская, д.13, строение 1, БЦ
            "П13", 4 этаж, оф. 410
          </p>
        </div>
        <div className={style.contact__}>
          <img src={mail} alt="mail" />
          <p>arokr.mkd@yandex.ru</p>
        </div>
      </div>
      <div className={style.copyright}>
        <p>Copyright 2024</p>
      </div>
    </div>
  );
};

export default FooterDesc;
