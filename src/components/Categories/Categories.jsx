import React from "react";
import { connect } from "react-redux";

import { setCategory } from '../../redux/Categories/categories.actions';
import { getArticlesByCategory } from "../../api/api";

import style from './categories.css';

const Categories = (props) => {
    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

    const handleCategorySelection = (category) => {
            props.setSelectedCategory(category);
            getArticlesByCategory(category);
    }

    const isCurrentCategory = (category) => props.currentCategory === category;

    return (
        <div
            className='categories'
            style={style}
        >
            {
                categories.map(category =>
                    <button
                        key={category}
                        className={ isCurrentCategory(category) ? 'current-category-button': 'category-button'}
                        onClick={() => handleCategorySelection(category)}
                    >
                        {category}
                    </button>
                )
            }
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setSelectedCategory: (selectedCategory) => dispatch(setCategory(selectedCategory)),
    }
}

const mapStateToProps = state => {
    return {
        currentCategory: state.categories.category,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);