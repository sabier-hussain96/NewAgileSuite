import {Url_constants } from "../api/Endpoints";

export const onChangeByValueType = (inputProps, value, props) => {
    switch (props.inputName) {
        default:
            inputProps.field.onChange(value);
            break;
    }
};


//Login function 

// export const handleLogin = async (request) => {
//     try {
//         // URL for login
//         const response = await
//         return response
//     } catch (error) {
//         return error.response
//     }

// }