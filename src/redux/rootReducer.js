import { combineReducers } from 'redux';
import SearchBarReducer from './SearchBar/searchbar.reducer';
import ArticlesReducer from "./Articles/articles.reducer";

const rootReducer = combineReducers({
    searchbar: SearchBarReducer,
    articles: ArticlesReducer,
});

export default rootReducer;