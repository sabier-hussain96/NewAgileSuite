const initialState = {
    userData: [],
    emplyoeeData: []

};

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_USER_DATA':
            return { ...state, userData: action.payload };
        case 'STORE_EMPLYOEE_DATA':
            return { ...state, emplyoeeData: action.payload };
        default: return state
    }
};

export default commonReducer