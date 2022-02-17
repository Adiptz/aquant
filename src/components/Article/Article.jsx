import React from "react";
import style from './article.css';

const Article = ({ title, publishedAt, urlToImage, description}) => {
    const descriptionLength = 80; // can set as a configuration settings

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
            <p>{description?.substr(0, descriptionLength)}</p>
        </div>
    );
}

export default Article;