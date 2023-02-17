import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export const ProfileIcon = props => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill={props.fill}
            stroke={props.stroke}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-user"
            {...props}
        >
            <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <Circle cx={12} cy={7} r={4} />
        </Svg>
    );
};
