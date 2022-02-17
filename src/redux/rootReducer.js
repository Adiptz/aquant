import { combineReducers } from 'redux';
import SearchBarReducer from './SearchBar/searchbar.reducer';
import ArticlesReducer from "./Articles/articles.reducer";
import CategoriesReducer from "./Categories/categories.reducer";

const rootReducer = combineReducers({
    searchbar: SearchBarReducer,
    articles: ArticlesReducer,
    categories: CategoriesReducer,
});

export default rootReducer;