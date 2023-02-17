import React from 'react'
import { Svg,Path } from 'react-native-svg'

const Cancel = (props) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    stroke={props.stroke}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-x"
    {...props}
  >
    <Path d="M18 6 6 18M6 6l12 12" />
  </Svg>
  )
}

export default Cancel