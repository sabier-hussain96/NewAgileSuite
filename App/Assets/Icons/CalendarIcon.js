import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const CalendarIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={props.fill}
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-calendar"
      viewBox="0 0 24 24"
      {...props}
    >
      <Rect width="18" height="18" x="3" y="4" rx="2" ry="2"></Rect>
      <Path d="M16 2L16 6"></Path>
      <Path d="M8 2L8 6"></Path>
      <Path d="M3 10L21 10"></Path>
    </Svg>
  )
}

export default CalendarIcon