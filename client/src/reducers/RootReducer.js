import { combineReducers } from 'redux';
import counterReducer from './CounterReducer';
import cardReducer from './CardReducer';

export default combineReducers({
    counterReducer,
    cardReducer,
});