import React, {useCallback} from "react";
import { connect } from "react-redux"
import debounce from 'lodash.debounce';

import {
    search
} from '../../redux/SearchBar/searchbar.actions'
import { getArticlesBySearch } from "../../api/api";

import style from './searchbar.css';

const SearchBar = (props) => {

    const debouncedChangeHandler = useCallback(
        debounce((value) => { getArticlesBySearch({ searchValue: value }) }, 250)
        ,[]);

    return (
        <div className='searchbar' style={style}>
            <input
                className='search-bar-input'
                key="search-bar"
                value={props.value}
                placeholder={"search for articles"}
                onChange={(e) => {
                    props.searchValue(e.target.value);
                    debouncedChangeHandler(e.target.value);
                }}
            />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        value: state.searchbar.searchValue,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchValue: (value) => dispatch(search(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);