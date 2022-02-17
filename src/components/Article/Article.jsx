import React from "react";

import { DEFAULT_DESCRIPTION_LENGTH } from "../../config";

import style from './article.css';

const Article = ({ title, publishedAt, urlToImage, description}) => {
    return (
        <div className='article' style={style}>
            <h4 className='title'>{title}</h4>
            <h5 className='published-date'>{publishedAt}</h5>
            <img
                className='image'
                src={urlToImage}
                alt='article-img'
            >
            </img>
            <p>{description?.substr(0, DEFAULT_DESCRIPTION_LENGTH)}</p>
        </div>
    );
}

export default Article;