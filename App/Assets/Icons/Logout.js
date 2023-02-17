import Svg, { Path } from 'react-native-svg'
import React from 'react'

const logout = (props) => {
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
    className="feather feather-log-out"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></Path>
    <Path d="M16 17L21 12 16 7"></Path>
    <Path d="M21 12L9 12"></Path>
  </Svg>
  )
}

export default logout