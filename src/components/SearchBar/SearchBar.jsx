import React from "react";
import { connect } from "react-redux"

import {
    search
} from '../../redux/SearchBar/searchbar.actions'

import style from './searchbar.css';

const SearchBar = (props) => {
    const setKeyword = (value) => {
        props.searchValue(value);
    }

    return (
        <div className='searchbar' style={style}>
            <input
                className='search-bar-input'
                key="search-bar"
                value={props.value}
                placeholder={"search country"}
                onChange={(e) => setKeyword(e.target.value)}
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