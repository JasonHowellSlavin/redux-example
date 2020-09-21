export const UPDATE_CARD_COLOR = 'UPDATE_CARD_COLOR';
export const SET_CARD_ID = 'SET_CARD_ID';
export const SET_CARD_COLOR = 'SET_CARD_COLOR';

export const updateCardColor = (id, color) => ({ type: UPDATE_CARD_COLOR, id: id, color: color});
export const setCardId = (id) => ({type: SET_CARD_ID, id: id});
export const setCardColor = (color) => ({type: SET_CARD_COLOR, color: color});