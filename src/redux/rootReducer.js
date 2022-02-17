import { combineReducers } from 'redux';
import SearchBarReducer from './SearchBar/searchbar.reducer';

const rootReducer = combineReducers({
    searchbar: SearchBarReducer,
});

export default rootReducer;