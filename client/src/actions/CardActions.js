export const UPDATE = 'UPDATE_TITLE_OR_DESCRIPTION';
export const CHANGE_IMAGE = 'CHANGE_IMAGE_ON_CARD';

export const update = (field, text) => ({ type: UPDATE, field: field, text: text});
export const changeImage = (path) => ({type: CHANGE_IMAGE, path: path});