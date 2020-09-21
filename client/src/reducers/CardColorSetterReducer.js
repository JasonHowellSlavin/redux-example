import { SET_CARD_COLOR, SET_CARD_ID } from '../actions/CardColorSetterActions';

const cardColorSetterState = {
    cardColor: '',
    cardId: ''
};

export default function counterReducer(state = cardColorSetterState, action) {
    let newState = {...state};

    switch(action.type) {
        case SET_CARD_COLOR:
            newState.cardColor = action.color;

            return {
                ...newState
            }
        case SET_CARD_ID:
            newState.cardId = action.id

            return {
                ...newState
            }
        default:
            return state;
    }
};