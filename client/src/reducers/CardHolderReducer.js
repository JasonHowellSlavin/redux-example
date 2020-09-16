import { SORT } from '../actions/CardHolderActions';
import data from '../data';

const sortDESC = 'DESC';
const sortASC = 'ASC';

const cardState = {
    title: "Redux Tutorial",
    message: "Welcome to the React Turotial Lunch and Learn",
    cards: data,
    sortType: 'DESC'
};

export default function counterReducer(state = cardState, action) {
    let newState = {...state};

    switch(action.type) {
        case SORT: 
            console.log('fire', newState);
            newState.sortType = action.sortType === sortDESC ? sortASC : sortDESC;
            newState.cards = newState.cards.reverse();

            console.log(newState);

            return {
                ...newState
            }
        default:
            return state;
    }
};