import React from 'react'
import { Svg,Path,Circle } from 'react-native-svg'

const EyeIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-eye"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></Path>
      <Circle cx="12" cy="12" r="3"></Circle>
    </Svg>
  )
}

export default EyeIcon