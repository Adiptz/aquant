import React from "react";
import { connect } from "react-redux";

import Article from "../Article/Article";
import { getArticlesByCategory } from "../../redux/Articles/articles.actions";

import style from './articles-list.css'

const ArticlesList = (props) => {
    if (props.articles.length === 0) { // no articles yet
        getArticlesByCategory({ category: props.category.toLowerCase() });
    }

    return (
        <div
            style={style}
            className='articles-list'
        >
          {
            props.articles.map(article =>
                <Article
                    key={article.title}
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
        category: state.categories.category,
    }
}

export default connect(mapStateToProps)(ArticlesList);