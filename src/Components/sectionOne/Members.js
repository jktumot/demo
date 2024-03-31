import React from 'react';
import style from './Members.module.css';
import map from '../../Assets/Vektornaya_karta_Rossii_na_4_oktyabrya_2022_goda1.png';
import tooltip from '../../Assets/Tooltip.png';

const Members = () => {
  return (
    <div className={style.members}>
      <div className={style.head_members}>
        <h2>Члены АРОКР</h2>
      </div>
      <div className={style.map}>
        <img src={map} alt="map" />
        <img className={style.tooltip} src={tooltip} alt="map" />
      </div>
    </div>
  );
};

export default Members;
