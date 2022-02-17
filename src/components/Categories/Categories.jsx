import React from "react";
import { connect } from "react-redux";

import style from './categories.css'

const Categories = (props) => {
    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

    return (
        <div
            className='categories'
            style={style}
        >
            {
                categories.map(category =>
                    <div className='category'>
                        <b>{category}</b>
                    </div>
                )
            }
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        // setSelectedCategory: (value) => dispatch(setSelectedCategory(value)), TODO - implement
    }
}

export default connect(mapDispatchToProps)(Categories);
