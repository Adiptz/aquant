import React from "react";
import { connect } from "react-redux";

import Article from "../Article/Article";

import style from './articles-list.css'

import {getArticlesByCategory} from "../../redux/Articles/articles.actions";

const ArticlesList = (props) => {
    if (props.articles.length === 0) { // no articles yet
        getArticlesByCategory({ category: props.category });
    }

    return (
        <div
            style={style}
            className='articles-list'
        >
          {
            props.articles.map(article =>
                <Article
                    title={article.title}
                    publishedAt={article.publishedAt}
                    urlToImage={article.urlToImage}
                    description={article.description}
                />
            )
          }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        articles: state.articles.articles,
        category: state.articles.category,
    }
}

export default connect(mapStateToProps)(ArticlesList);