import React from 'react';
import style from './NewsMembers.module.css';
import pic_4 from '../../Assets/frame_social/section_files/pic_4.png';
import pic_5 from '../../Assets/frame_social/section_files/pic_5.png';
import pic_6 from '../../Assets/frame_social/section_files/pic_6.png';
import pic_7 from '../../Assets/frame_social/section_files/pic_7.png';
import pic_8 from '../../Assets/frame_social/section_files/pic_8.png';
import pic_9 from '../../Assets/frame_social/section_files/pic_9.png';

const NewsMembers = () => {
  return (
    <div className={style.news_members}>
      <div className={style.block_news}>
        <div className={style.head_news}>
          <h2>Новости членов ассоциации</h2>
        </div>
        <div className={style.blocks}>
          <div className={style.block_simple}>
            <img src={pic_4} alt="pic" />
            <div className={style.text_block}>
              <p style={{ width: '297px', height: '51px' }}>
                Сотрудничество с Фондом капитального ремонта позволит вам
                получить необходимую помощь и ресурсы для успешного проведения
                капитального
              </p>
            </div>
            <div className={style.date}>
              <h6>14.02.2023</h6>
            </div>
          </div>
          <div className={style.block_simple}>
            <img src={pic_5} alt="pic" />
            <div className={style.text_block_3}>
              <p style={{ width: '297px', height: '74px' }}>
                Сотрудничество с Фондом капитального ремонта позволит вам
                получить необходимую помощь и ресурсы для успешного проведения
                капитального
              </p>
            </div>
            <div className={style.date}>
              <h6>14.02.2023</h6>
            </div>
          </div>
          <div className={style.block_simple}>
            <img src={pic_6} alt="pic" />
            <div className={style.text_block}>
              <p style={{ width: '297px', height: '51px' }}>
                Сотрудничество с Фондом капитального ремонта позволит вам
                получить необходимую помощь и ресурсы для успешного проведения
                капитального
              </p>
            </div>
            <div className={style.date}>
              <h6>14.02.2023</h6>
            </div>
          </div>
          <div className={style.block_simple}>
            <img src={pic_7} alt="pic" />
            <div className={style.text_block_3}>
              <p style={{ width: '297px', height: '74px' }}>
                Сотрудничество с Фондом капитального ремонта позволит вам
                получить необходимую помощь и ресурсы для успешного проведения
                капитального
              </p>
            </div>
            <div className={style.date}>
              <h6>14.02.2023</h6>
            </div>
          </div>
          <div className={style.block_simple}>
            <img src={pic_8} alt="pic" />
            <div className={style.text_block}>
              <p style={{ width: '297px', height: '51px' }}>
                Сотрудничество с Фондом капитального ремонта позволит вам
                получить необходимую помощь и ресурсы для успешного проведения
                капитального
              </p>
            </div>
            <div className={style.date}>
              <h6>14.02.2023</h6>
            </div>
          </div>
          <div className={style.block_simple}>
            <img src={pic_9} alt="pic" />
            <div
              className={style.text_block}
              style={{ width: '297px', height: '51px' }}
            >
              <p>
                Сотрудничество с Фондом капитального ремонта позволит вам
                получить необходимую помощь и ресурсы для успешного проведения
                капитального
              </p>
            </div>
            <div className={style.date}>
              <h6>14.02.2023</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsMembers;
