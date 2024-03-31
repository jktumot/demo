import React from 'react';
import BlockLayout from './BlockLayout';
import style from './News.module.css';
import pic_1 from '../../Assets/frame_social/section_files/pic_1.png';
import pic_2 from '../../Assets/frame_social/section_files/pic_2.png';
import pic_3 from '../../Assets/frame_social/section_files/pic_3.png';

const News = () => {
  return (
    <div className={style.news}>
      <div className={style.block_news}>
        <div className={style.head_news}>
          <h2>Новости</h2>
        </div>
        <div className={style.blocks}>
          <BlockLayout
            image={pic_1}
            date="14.02.2023"
            head="Заголовок"
            desc="Сотрудничество с Фондом капитального ремонта позволит вам получить необходимую помощь и ресурсы для успешного проведения капитального"
          />
          <BlockLayout
            image={pic_2}
            date="14.02.2023"
            head="Заголовок"
            desc="Сотрудничество с Фондом капитального ремонта позволит вам получить необходимую помощь и ресурсы для успешного проведения капитального"
          />
          <BlockLayout
            image={pic_3}
            date="14.02.2023"
            head="Заголовок"
            desc="Сотрудничество с Фондом капитального ремонта позволит вам получить необходимую помощь и ресурсы для успешного проведения капитального"
          />
        </div>
        <div className={style.button}>
          <button>Смотреть все новости</button>
        </div>
      </div>
    </div>
  );
};

export default News;
