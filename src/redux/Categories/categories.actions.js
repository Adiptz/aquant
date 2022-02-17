import {SET_CATEGORY} from './categories.types';

export const setCategory = (payload) => (
    {
        type: SET_CATEGORY,
        payload
    }
);