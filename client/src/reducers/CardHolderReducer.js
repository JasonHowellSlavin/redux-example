import { SORT } from '../actions/CardHolderActions';
import { UPDATE_CARD_COLOR } from '../actions/CardColorSetterActions';
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
            console.log('sort cards ascending or descending');
            newState.sortType = action.sortType === sortDESC ? sortASC : sortDESC;
            newState.cards = newState.cards.reverse();

            console.log(newState);

            return {
                ...newState
            }
        case UPDATE_CARD_COLOR:
            console.log('add color to a card');
            // We need to slice the array to create a net new Array object
            let cards = newState.cards.slice();

            cards.forEach((card) => {
                if(card.id === parseInt(action.id)) {
                    card.color = action.color;
                }
            });

            // We have to return the cards after newState or else they will be overwritten by the spread
            return {
                ...newState,
                cards: cards
            }
        default:
            return state;
    }
};