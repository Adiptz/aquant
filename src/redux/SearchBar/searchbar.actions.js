import { SEARCH_TYPE } from './searchbar.types';

export const search = (payload) => {
    return {
        type: SEARCH_TYPE,
        payload,
    };
};