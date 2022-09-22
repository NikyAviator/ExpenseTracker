import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  // För att se hur mycket av containern skall fyllas av text i förhållande till max height (10rem)
  // Style={{WANTS AN JS OBJECT!}}
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;
