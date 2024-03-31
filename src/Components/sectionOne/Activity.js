import React from 'react';
import style from './Activity.module.css';
import pic_1 from '../../Assets/activity_pic_1.png';
import pic_2 from '../../Assets/activity_pic_2.png';
import pic_3 from '../../Assets/activity_pic_3.png';
import pic_4 from '../../Assets/activity_pic_4.png';
import pic_back from '../../Assets/activity_pic_back.png';
import pic_bottom from '../../Assets/activity_pic_bottom.png';
import btn from '../../Assets/activity_btn.png';

const Activity = () => {
  return (
    <div className={style.activity}>
      <div className={style.head_activity}>
        <h2>Деятельность</h2>
      </div>
      <div className={style.card_activity}>
        <div className={style.card}>
          <img src={pic_1} alt="pic_1" />
          <img className={style.img_bottom} src={pic_bottom} alt="pic_bottom" />
          <img className={style.img_back} src={pic_back} alt="pic_back" />
          <div className={style.card_desc}>
            <h4>Съезд региональных операторов</h4>
            <p>
              Фонд капитального ремонта предоставляет различные виды поддержки,
              включая финансовую помощь, консультациии сопровождение процесса
              ремонта.{' '}
            </p>
            <div>
              <a href="/" className={style.btn}>
                Подробнее
                <img
                  src={btn}
                  alt="btn"
                  style={{ width: '59px', height: '59px' }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <img src={pic_2} alt="pic_2" />
          <img className={style.img_bottom} src={pic_bottom} alt="pic_bottom" />
          <img className={style.img_back} src={pic_back} alt="pic_back" />
          <div className={style.card_desc}>
            <h4>Экспертный совет организации</h4>
            <p>
              Фонд капитального ремонта предоставляет различные виды поддержки,
              включая финансовую помощь, консультациии сопровождение процесса
              ремонта.{' '}
            </p>
            <div>
              <a href="/" className={style.btn}>
                Подробнее
                <img
                  src={btn}
                  alt="btn"
                  style={{ width: '59px', height: '59px' }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <img src={pic_3} alt="pic_3" />
          <img className={style.img_bottom} src={pic_bottom} alt="pic_bottom" />
          <img className={style.img_back} src={pic_back} alt="pic_back" />
          <div className={style.card_desc}>
            <h4>Подкомитет</h4>
            <p>
              Фонд капитального ремонта предоставляет различные виды поддержки,
              включая финансовую помощь, консультациии сопровождение процесса
              ремонта.{' '}
            </p>
            <div>
              <a href="/" className={style.btn}>
                Подробнее
                <img
                  src={btn}
                  alt="btn"
                  style={{ width: '59px', height: '59px' }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <img src={pic_4} alt="pic_4" />
          <img className={style.img_bottom} src={pic_bottom} alt="pic_bottom" />
          <img className={style.img_back} src={pic_back} alt="pic_back" />
          <div className={style.card_desc}>
            <h4>Комиссия по квалификации</h4>
            <p>
              Фонд капитального ремонта предоставляет различные виды поддержки,
              включая финансовую помощь, консультациии сопровождение процесса
              ремонта.{' '}
            </p>
            <div>
              <a href="/" className={style.btn}>
                Подробнее
                <img
                  src={btn}
                  alt="btn"
                  style={{ width: '59px', height: '59px' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={style.button}>
        <button>Подробнее</button>
      </div>
    </div>
  );
};

export default Activity;
