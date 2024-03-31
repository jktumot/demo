import React from 'react';
import style from './Departments.module.css';
import pic_1 from '../../Assets/departments/pravitelstvo_1.png';
import pic_2 from '../../Assets/departments/minstroy.png';
import pic_3 from '../../Assets/departments/npr-urban-environment.png';
import pic_4 from '../../Assets/departments/stroycomplex.png';
import pic_5 from '../../Assets/departments/mintrans.png';

const Departments = () => {
  return (
    <div className={style.departments}>
      <div className={style.head_departments}>
        <h2>Ведомства и организации</h2>
      </div>
      <div className={style.dep_list}>
        <div className={style.block_1}>
          <div
            className={style.icon_dep}
            style={{ width: '441px', height: '98px' }}
          >
            <img
              src={pic_1}
              alt="pravitelstvo"
              style={{ width: '120px', height: '98px' }}
            />
            <p> Правительство Российской Федерации</p>
          </div>
          <div
            className={style.icon_dep}
            style={{ width: '291px', height: '105px' }}
          >
            <img
              src={pic_2}
              alt="minstroy"
              style={{ width: '100px', height: '105px' }}
            />
            <p>Минстрой России </p>
          </div>
          <div
            className={style.icon_dep}
            style={{ width: '364px', height: '85px' }}
          >
            <img
              src={pic_3}
              alt="npr"
              style={{ width: '120px', height: '85px' }}
            />
            <p> Национальный проект "Жильё и городская среда"</p>
          </div>
          <div
            className={style.icon_dep}
            style={{ width: '425px', height: '85px' }}
          >
            <img
              src={pic_3}
              alt="npr"
              style={{ width: '120px', height: '85px' }}
            />
            <p>
              {' '}
              Национальный проект "Магистральный план. Транспортная часть."
            </p>
          </div>
        </div>
        <div className={style.block_2}>
          <div
            className={style.icon_dep}
            style={{ width: '335px', height: '98px' }}
          >
            <img
              src={pic_4}
              alt="stroycomplex"
              style={{ width: '120px', height: '98px' }}
            />
            <p>Стройкомплекс России </p>
          </div>
          <div
            className={style.icon_dep}
            style={{ width: '291px', height: '114px' }}
          >
            <img
              src={pic_5}
              alt="mintrans"
              style={{ width: '100px', height: '113px' }}
            />
            <p>Минтрнас России </p>
          </div>
          <div
            className={style.icon_dep}
            style={{ width: '440px', height: '85px' }}
          >
            <img
              src={pic_3}
              alt="minstroy"
              style={{ width: '120px', height: '85px' }}
            />
            <p>Национальный проект "Безопасные качественные дороги" </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
