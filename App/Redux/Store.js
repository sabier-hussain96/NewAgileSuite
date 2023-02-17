import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import commonReducer from './Reducers/commonReducers'

const store = createStore(commonReducer, applyMiddleware(thunk))

export default store;