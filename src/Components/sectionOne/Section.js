import React from 'react';
import AboutCapital from './AboutCapital';
import Activity from './Activity';
import Departments from './Departments';

import Members from './Members';
import News from './News';
import NewsMembers from './NewsMembers';
import style from './Section.module.css';

const Section = () => {
  return (
    <div className={style.section}>
      <News />
      <NewsMembers />
      <AboutCapital />
      <Activity />
      <Members />
      <Departments />
    </div>
  );
};

export default Section;
