import { SEARCH_TYPE } from './searchbar.types';

const INITIAL_STATE = {
    searchValue: '',
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SEARCH_TYPE:
            console.log(action)
            return {
                ...state, searchValue: action.payload,
            };

        default: return state;
    }
};

export default reducer;