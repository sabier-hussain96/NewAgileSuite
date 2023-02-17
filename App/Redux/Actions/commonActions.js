import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { setClientToken } from '../../api/Api';
import { GET, POST, POSTREQUEST } from '../../api/ApiMethods';
import * as EndPoint from '../../api/Endpoints'


export const storeUserData = (userData) => {
    return {
        type: 'STORE_USER_DATA',
        payload: userData,
    };
};

export const storeEmplyoeeData = (emplyoeeData) => {
    return {
        type: 'STORE_EMPLYOEE_DATA',
        payload: emplyoeeData,
    };
};

export const login = (request,onResponse) => {
    return dispatch => {
        const endpoints = `${EndPoint.login_URL}?email=${request.email}&password=${request.password}`
        POSTREQUEST(endpoints,request, response => {
            if (response.status === 200) {
                setClientToken(response.data.access_token)
                dispatch(storeUserData(response.data.userdata));
                AsyncStorage.setItem('token', response.data.access_token);
                
               
            }
            onResponse(response);  
        });
    }

}

export const EmplyoeeData = (onResponse) => {
    return dispatch => {
        const endpoints = `${EndPoint.employee_details_URL}?id=${6}`
        
        GET(endpoints, response => {
            if(response.data.status === 'S'){
                dispatch(storeEmplyoeeData(response.data.employee_data));
            }
            onResponse(response);
        });
    }

}



