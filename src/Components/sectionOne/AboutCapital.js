import React from 'react';
import style from './AboutCapital.module.css';
import pic_1 from '../../Assets/yana-marudova-3Kn2ReUicZw-unsplash_2.png';
import pic_2 from '../../Assets/image_9.png';
import pic_3 from '../../Assets/Rectangle_43.png';

const AboutCapital = () => {
  return (
    <div className={style.about_capital}>
      <div className={style.image_up}>
        <img src={pic_1} alt="pic_1" />
      </div>
      <div className={style.image_left}>
        <img src={pic_2} alt="pic_2" />
      </div>
      <div className={style.image_back}>
        <img src={pic_3} alt="pic_3" />
      </div>
      <div className={style.desc_about}>
        <div className={style.head_desc}>
          <h2>О капитальном ремонте</h2>
        </div>
        <div className={style.description}>
          <p>
            Мы – некоммерческая организация, основанная с целью помочь
            собственникам жилых помещений в проведении качественного и
            своевременного капитального ремонта. Наша миссия заключается в
            создании комфортных и безопасных условий проживания для всех
            граждан.
          </p>
          <br />
          <p>
            Фонд капитального ремонта предоставляет различные виды поддержки,
            включая финансовую помощь, консультации и сопровождение процесса
            ремонта.{' '}
          </p>
        </div>
        <div className={style.button}>
          <button>Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default AboutCapital;
