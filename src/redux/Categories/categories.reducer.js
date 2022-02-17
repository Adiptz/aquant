import { SET_CATEGORY } from './categories.types';

import { DEFAULT_CATEGORY_TO_DISPLAY } from "../../config";

const INITIAL_STATE = {
    category: DEFAULT_CATEGORY_TO_DISPLAY,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state, category: action.payload,
            };

        default: return state;
    }
};

export default reducer;