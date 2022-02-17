import axios from 'axios';
import store from "../store";

import {API_KEY} from "../../config";
import { GET_ARTICLES_BY_CATEGORY_SUCCESS } from './articles.types';

export const getArticlesByCategory = async (payload) => { // take out to api file!
    const {category} = payload;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&category=${category}`;
    const res = await axios.get(url);
    console.log(res);

    store.dispatch(getArticlesByCategorySuccess(res.data.articles));
}

export const getArticlesByCategorySuccess = (payload) => (
    {
        type: GET_ARTICLES_BY_CATEGORY_SUCCESS,
        payload
    }
);