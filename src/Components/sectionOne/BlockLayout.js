import React from 'react';
import style from './BlockLayout.module.css';

const BlockLayout = ({ head, date, desc, image }) => {
  return (
    <div className={style.block_layout}>
      <div className={style.block_image}>
        <img src={image} alt="pic" />
      </div>
      <div className={style.block_desc}>
        <h3>{head}</h3>
        <h6>{date}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default BlockLayout;
