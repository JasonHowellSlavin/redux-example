import { combineReducers } from 'redux';
import cardHolderReducer from './CardHolderReducer';
import cardColorSetterReducer from './CardColorSetterReducer'

export default combineReducers({
    cardHolderReducer,
    cardColorSetterReducer
});