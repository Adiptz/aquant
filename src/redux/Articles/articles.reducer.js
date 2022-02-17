import { GET_ARTICLES_BY_CATEGORY_SUCCESS } from './articles.types';

const INITIAL_STATE = {
    articles: [],
    searchedArticles: [], // articles that were searched by the user via the searchbar
    category: 'business'
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case GET_ARTICLES_BY_CATEGORY_SUCCESS:
            console.log('here');
            return {
                ...state, articles: action.payload,
            };

        default: return state;
    }
};

export default reducer;