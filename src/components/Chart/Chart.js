import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

// List of content dynamically
// we are defining dataPoint later and attaching a value.
const Chart = (props) => {
  // we transform a dataPoint object to just a number, the number stored in dataPoint.value
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // pull out array with ... and add them as stand-alone arguments
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
