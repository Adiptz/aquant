import { GET_ARTICLES_BY_CATEGORY_SUCCESS } from './articles.types';

export const getArticlesByCategorySuccess = (payload) => (
    {
        type: GET_ARTICLES_BY_CATEGORY_SUCCESS,
        payload
    }
);