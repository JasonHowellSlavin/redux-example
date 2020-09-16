import { UPDATE, CHANGE_IMAGE } from '../actions/CardActions';

const cardState = {
    title: 'Title goes here!',
    description: 'Description goes here!',
    dogImageList: [{title: 'dog one', path: '../images/dog.jpg'}, {title: 'dog two', path: '../images/dog-two.jpeg'}],
    currentImage: '../images/dog.jpg',
};

export default function counterReducer(state = cardState, action) {
    let newState = {...state};

    switch(action.type) {
        case UPDATE:
            action.text !== '' ? newState[action.field] = action.text : newState[action.field] = newState[action.field];

            return {
                ...newState
            }
        case CHANGE_IMAGE:
            console.log('change image', newState);
            newState.currentImage = action.path;

            return {
                ...newState
            }
        default:
            return state;
    }
};