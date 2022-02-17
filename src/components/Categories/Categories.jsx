import React from "react";
import { connect } from "react-redux";

import { setCategory } from '../../redux/Categories/categories.actions';

import style from './categories.css';
import {getArticlesByCategory} from "../../redux/Articles/articles.actions";

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