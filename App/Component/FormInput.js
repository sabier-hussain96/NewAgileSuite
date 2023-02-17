import React from 'react';
import { Controller } from 'react-hook-form';
import { Text, TextInput, View,Dimensions } from 'react-native';

import { Styles } from '../Global/ApplicationCss'
import { onChangeByValueType } from '../Helpers/helper';


export const FormTextInput = props => {
    return (
        <React.Fragment>
            <View style={[Styles.View, { borderColor: props.formState.errors[props.inputName]?.message ? 'red' : "#F5F5F5" }]}>
                <Controller
                    name={props.inputName}
                    control={props.control}
                    defaultValue={props.defaultValue}
                    autoCompleteType='off'
                    rules={props.rules}
                    render={inputProps => {
                        return (
                            <TextInput
                                {...props}
                                value={inputProps.field.value}
                                onChangeText={value =>
                                    onChangeByValueType(inputProps, value, props)
                                }
                                style={[props.style, { color: "#3d3d3d" }]}
                                placeholderTextColor="#3d3d3d"
        
                                
                            />

                        )
                    }}
                />
                 {props.icon && props.icon}
            </View>
            {/* For getting error message */}
            <View style={{marginRight:'auto',marginLeft:Dimensions.get('screen').width-370}}>
                <Text style={[Styles.error]}>
                    {props.formState.errors[props.inputName]?.message}
                </Text>
            </View>
        </React.Fragment>
    );
};